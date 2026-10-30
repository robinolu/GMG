// Startseite: 3D-Gelenkgreifer, geschlossen beim Laden, öffnet sich beim Herunterscrollen.
// Platzhalter-Modell (GrabCAD „Linkage driven mechanical gripper“), wird durch den GMG B02 ersetzt.
// Getriebe in der X/Z-Ebene, alle Drehachsen parallel zu Y:
//   Kurbel (grün im Original) dreht um P1 am Gehäuse, trägt die Backe an J1.
//   Lenker dreht um P2 am Gehäuse, führt die Backe an J2 (näherungsweise Parallelogramm).
//   Koppel verbindet Kurbelpunkt C mit dem Schieber S an der Kolbenstange.
import * as THREE from 'three';
import { RoomEnvironment } from 'three/examples/jsm/environments/RoomEnvironment.js';
import { toCreasedNormals } from 'three/examples/jsm/utils/BufferGeometryUtils.js';

import DATA from '../../data/3d/greifer-platzhalter.json';
const P = DATA.pivots;
const MID_Z = 49.425;          // Symmetrieebene
const PHI_CLOSED = THREE.MathUtils.degToRad(57);

const box = document.querySelector('[data-greifer3d]');
if (!box) throw new Error('kein 3D-Bereich');
const canvas = box.querySelector('canvas');
const renderer = new THREE.WebGLRenderer({ canvas, antialias: true, alpha: true });
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
renderer.toneMapping = THREE.ACESFilmicToneMapping;
renderer.toneMappingExposure = 1.0;
renderer.shadowMap.enabled = true;
renderer.shadowMap.type = THREE.PCFSoftShadowMap;

const scene = new THREE.Scene();
scene.environment = new THREE.PMREMGenerator(renderer).fromScene(new RoomEnvironment(renderer), 0.04).texture;
const camera = new THREE.PerspectiveCamera(28, 1, 0.1, 500);

const sun = new THREE.DirectionalLight(0xffffff, 1.4);
sun.position.set(-20, 40, 15);
sun.castShadow = true;
sun.shadow.mapSize.set(2048, 2048);
Object.assign(sun.shadow.camera, { left: -25, right: 25, top: 25, bottom: -25, near: 1, far: 120 });
sun.shadow.bias = -0.0005;
scene.add(sun, new THREE.HemisphereLight(0xffffff, 0xc4ccd4, 0.5));

const MAT = {
  gehaeuse: new THREE.MeshStandardMaterial({ color: 0x2b3038, metalness: 0.65, roughness: 0.4 }),
  backe: new THREE.MeshStandardMaterial({ color: 0x8e98a4, metalness: 0.9, roughness: 0.34 }),
  kurbel: new THREE.MeshStandardMaterial({ color: 0x0061aa, metalness: 0.55, roughness: 0.32 }),
  lenker: new THREE.MeshStandardMaterial({ color: 0xa9b3bf, metalness: 0.95, roughness: 0.25 }),
  koppel: new THREE.MeshStandardMaterial({ color: 0xa9b3bf, metalness: 0.95, roughness: 0.25 }),
  schieber: new THREE.MeshStandardMaterial({ color: 0xb7bec7, metalness: 1.0, roughness: 0.18 }),
};

const model = new THREE.Group();
const parts = {};
for (const [name, g] of Object.entries(DATA.groups)) {
  let geo = new THREE.BufferGeometry();
  geo.setAttribute('position', new THREE.Float32BufferAttribute(g.v, 3));
  geo.setIndex(g.i);
  geo = toCreasedNormals(geo, THREE.MathUtils.degToRad(35));
  const mesh = new THREE.Mesh(geo, MAT[name.split('_')[0]]);
  mesh.castShadow = mesh.receiveShadow = true;
  mesh.matrixAutoUpdate = false;       // Lage kommt aus der Getriebe-Rechnung
  parts[name] = mesh;
  model.add(mesh);
}
model.position.set(-46.6, -24.75, -MID_Z);   // Greifer in den Ursprung
const pivotRoot = new THREE.Group();
pivotRoot.add(model);
scene.add(pivotRoot);

// Boden für den weichen Schatten
const ground = new THREE.Mesh(new THREE.PlaneGeometry(200, 200), new THREE.ShadowMaterial({ opacity: 0.14 }));
ground.rotation.x = -Math.PI / 2;
ground.position.y = -2.7;
ground.receiveShadow = true;
scene.add(ground);

// --- 2D-Hilfen in der X/Z-Ebene ---
const rot = (p, c, a) => {
  const x = p[0] - c[0], z = p[1] - c[1];
  return [c[0] + x * Math.cos(a) - z * Math.sin(a), c[1] + x * Math.sin(a) + z * Math.cos(a)];
};
// Starrkörper, der Punkt a0→a1 und Richtung (a0→b0)→(a1→b1) abbildet
function rigid(a0, b0, a1, b1) {
  const ang = Math.atan2(b1[1] - a1[1], b1[0] - a1[0]) - Math.atan2(b0[1] - a0[1], b0[0] - a0[0]);
  return rotAbout(a0, ang, [a1[0] - a0[0], a1[1] - a0[1]]);
}
// Matrix: Drehung um c (in X/Z) um ang, danach Verschiebung t
function rotAbout(c, ang, t = [0, 0]) {
  const cs = Math.cos(ang), sn = Math.sin(ang);
  const tx = c[0] - (cs * c[0] - sn * c[1]) + t[0];
  const tz = c[1] - (sn * c[0] + cs * c[1]) + t[1];
  return new THREE.Matrix4().set(cs, 0, -sn, tx, 0, 1, 0, 0, sn, 0, cs, tz, 0, 0, 0, 1);
}
const shift = (dx) => new THREE.Matrix4().makeTranslation(dx, 0, 0);

function pose(phi) {
  let slider = 0;
  for (const side of ['a', 'b']) {
    const s = side === 'a' ? 1 : -1;             // Seite b gespiegelt: Drehsinn umgekehrt
    const a = s * phi;
    const P1 = P['P1' + side], P2 = P['P2' + side], C0 = P['C' + side], J1o = P['J1' + side], J2o = P['J2' + side], S0 = P['S' + side];
    const J1 = rot(J1o, P1, a);
    const C = rot(C0, P1, a);
    parts['kurbel_' + side].matrix.copy(rotAbout(P1, a));
    // Backe: Parallelführung – verschiebt sich mit J1, Lenker dreht um P2 mit
    const dJ = [J1[0] - J1o[0], J1[1] - J1o[1]];
    parts['backe_' + side].matrix.copy(new THREE.Matrix4().makeTranslation(dJ[0], 0, dJ[1]));
    const J2 = [J2o[0] + dJ[0], J2o[1] + dJ[1]];
    parts['lenker_' + side].matrix.copy(rigid(P2, J2o, P2, J2));
    // Schieber: liegt auf z = S0.z, Abstand zur Kurbel = Koppellänge
    const L = Math.hypot(C0[0] - S0[0], C0[1] - S0[1]);
    const S = [C[0] - Math.sqrt(Math.max(0, L * L - (C[1] - S0[1]) ** 2)), S0[1]];
    parts['koppel_' + side].matrix.copy(rigid(S0, C0, S, C));
    slider = S[0] - S0[0];
  }
  parts.schieber.matrix.copy(shift(slider));
  parts.gehaeuse.matrix.identity();
  for (const m of Object.values(parts)) m.matrixWorldNeedsUpdate = true;
}

function resize() {
  const w = box.clientWidth, h = box.clientHeight;
  renderer.setSize(w, h, false);
  camera.aspect = w / h;
  const d = w / h < 1.4 ? 80 : 72;
  camera.position.set(-d * 0.42, d * 0.62, d * 0.66);
  camera.lookAt(0, -1.5, 0);
  camera.updateProjectionMatrix();
}
window.addEventListener('resize', resize);
resize();

// Öffnung folgt dem Scrollen: ganz oben geschlossen, nach ca. 60 % Bildschirmhöhe offen
let target = 0, current = 0;
const fromScroll = () => Math.min(1, Math.max(0, window.scrollY / (window.innerHeight * 0.6)));
window.addEventListener('scroll', () => { target = fromScroll(); }, { passive: true });

const still = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
const clock = new THREE.Clock();
let visible = true;
new IntersectionObserver((e) => { visible = e[0].isIntersecting; }).observe(box);
function frame() {
  requestAnimationFrame(frame);
  if (!visible) return;
  current += (target - current) * (still ? 1 : 0.14);
  const open = current * current * (3 - 2 * current);          // 0 = geschlossen, 1 = offen
  pose(PHI_CLOSED * (1 - open));
  pivotRoot.rotation.y = still ? 0 : Math.sin(clock.getElapsedTime() * 0.25) * 0.08;
  renderer.render(scene, camera);
}
target = current = fromScroll();
box.classList.add('is-3d');               // Ersatzbild ausblenden, sobald 3D läuft
frame();
window.__open = (t) => { target = current = t; };   // für Bildschirmfotos
