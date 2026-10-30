// Startseite: Roboter (ABB IRB 120) mit Testgreifer Tentra T3 setzt ein Kugellager (Kurvenrolle) von einem
// Tisch auf den anderen. Der Ablauf folgt dem Scrollen: runter = greifen, heben, umsetzen, loslassen;
// hoch = alles rückwärts. Tische und Roboter in Weiß/Grau vor dem Seitenhintergrund, damit der Blick auf Greifer und Teil fällt.
// Roboter-Koordinaten wie im STEP (mm, Y oben, Arm zeigt in −X), siehe tools/roboter/export.py.
import * as THREE from 'three';
import { RoomEnvironment } from 'three/examples/jsm/environments/RoomEnvironment.js';
import { toCreasedNormals } from 'three/examples/jsm/utils/BufferGeometryUtils.js';

const Q = THREE.Quaternion;
const box = document.querySelector('[data-roboter3d]');
if (!box) throw new Error('kein 3D-Bereich');
const BASE = box.dataset.base || '';
const canvas = box.querySelector('canvas');
const renderer = new THREE.WebGLRenderer({ canvas, antialias: true, alpha: true });
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
renderer.toneMapping = THREE.ACESFilmicToneMapping;
renderer.toneMappingExposure = 1.0;
renderer.shadowMap.enabled = true;
renderer.shadowMap.type = THREE.PCFSoftShadowMap;

const scene = new THREE.Scene();      // durchsichtig: die Szene steht direkt vor dem Gitter-Hintergrund
scene.environment = new THREE.PMREMGenerator(renderer).fromScene(new RoomEnvironment(renderer), 0.04).texture;
scene.environmentIntensity = 0.8;
const camera = new THREE.PerspectiveCamera(30, 1, 10, 10000);

const sun = new THREE.DirectionalLight(0xffffff, 1.6);
sun.position.set(-900, 2400, -500);
sun.castShadow = true;
sun.shadow.mapSize.set(2048, 2048);
Object.assign(sun.shadow.camera, { left: -900, right: 900, top: 900, bottom: -900, near: 100, far: 3500 });
sun.shadow.bias = -0.0004;
sun.shadow.normalBias = 1.5;
scene.add(sun, new THREE.HemisphereLight(0xffffff, 0xcfd3d8, 0.55));

// --- Raum und Tische (mm) ---
const MAT = {
  tisch: new THREE.MeshStandardMaterial({ color: 0xf1f2f4, roughness: 0.7 }),
  bein: new THREE.MeshStandardMaterial({ color: 0xc9cdd3, metalness: 0.3, roughness: 0.5 }),
  roboter: new THREE.MeshStandardMaterial({ color: 0xf3f4f5, metalness: 0.05, roughness: 0.42 }),
  robGrau: new THREE.MeshStandardMaterial({ color: 0x9aa1a9, metalness: 0.5, roughness: 0.4 }),
  stahl: new THREE.MeshStandardMaterial({ color: 0xd5dae0, metalness: 1.0, roughness: 0.12 }),
  stahlMatt: new THREE.MeshStandardMaterial({ color: 0xbfc5cc, metalness: 1.0, roughness: 0.3 }),
  dichtung: new THREE.MeshStandardMaterial({ color: 0x1d2024, metalness: 0.0, roughness: 0.55 }),
};
// nur der Schatten auf dem Boden, kein Raum
const floor = new THREE.Mesh(new THREE.PlaneGeometry(8000, 8000), new THREE.ShadowMaterial({ opacity: 0.12 }));
floor.rotation.x = -Math.PI / 2;
floor.receiveShadow = true;
scene.add(floor);

const PED = 420;              // Sockel unter dem Roboter
const TABLE_H = PED + 300;    // Tischhöhe
const TOP = 30;               // Plattenstärke
function table(x, z) {
  const g = new THREE.Group();
  const top = new THREE.Mesh(new THREE.BoxGeometry(280, TOP, 300), MAT.tisch);
  top.position.y = TABLE_H - TOP / 2;
  g.add(top);
  for (const sx of [-1, 1]) for (const sz of [-1, 1]) {
    const leg = new THREE.Mesh(new THREE.BoxGeometry(24, TABLE_H - TOP, 24), MAT.bein);
    leg.position.set(sx * 126, (TABLE_H - TOP) / 2, sz * 136);
    g.add(leg);
  }
  g.traverse((m) => { m.castShadow = m.receiveShadow = true; });
  g.position.set(x, 0, z);
  scene.add(g);
}
// Aufnahme- und Ablageplatz (Lagermitte auf der Tischplatte), links und rechts vor dem Roboter
// Tische gerade vor dem Roboter: links aufnehmen, rechts ablegen (+Z = rechts im Bild)
const PICK = new THREE.Vector3(-320, TABLE_H, -285);
const PLACE = new THREE.Vector3(-320, TABLE_H, 285);
table(-330, -320);
table(-330, 320);

// --- Geometrie laden ---
function mesh(v, i, mat, crease = 35) {
  let geo = new THREE.BufferGeometry();
  geo.setAttribute('position', new THREE.Float32BufferAttribute(v, 3));
  geo.setIndex(i);
  geo = toCreasedNormals(geo, THREE.MathUtils.degToRad(crease));
  const m = new THREE.Mesh(geo, mat);
  m.castShadow = m.receiveShadow = true;
  return m;
}
const tentraMat = (() => {
  const T = {
    dunkel: new THREE.MeshStandardMaterial({ color: 0x1f2830, metalness: 0.5, roughness: 0.45 }),
    platte: new THREE.MeshStandardMaterial({ color: 0x8e98a2, metalness: 0.7, roughness: 0.35 }),
    finger: new THREE.MeshStandardMaterial({ color: 0xc8501a, metalness: 0.15, roughness: 0.5 }),
    polster: new THREE.MeshStandardMaterial({ color: 0x0f7a78, metalness: 0.1, roughness: 0.7 }),
    gelb: new THREE.MeshStandardMaterial({ color: 0xd9a03a, metalness: 0.6, roughness: 0.35 }),
  };
  return (n) => /Vertebra/.test(n) ? T.finger : /Contact_pad/.test(n) ? T.polster : /Upper_plate/.test(n) ? T.platte
    : /screw|nut|standoff/i.test(n) ? MAT.stahlMatt : /spool|actuator/i.test(n) ? T.gelb : T.dunkel;
})();

// Achsen des IRB 120 (Drehpunkte im STEP-Koordinatensystem)
const A2 = new THREE.Vector2(0, 290), L2 = 270;          // Unterarm
const W0 = new THREE.Vector2(-302, 70);                    // Handgelenk (Achse 5) relativ zu Achse 3
const FLANGE = 72;                                         // Achse 5 → Flansch
const links = {};

function buildRobot(data) {
  const robot = new THREE.Group();
  const order = ['basis', 'glied1', 'glied2', 'glied3', 'glied4', 'glied5'];
  // Jedes Glied hängt am vorigen; Drehung jeweils um seinen Gelenkpunkt
  const joints = {
    glied1: { at: [0, 0, 0], axis: 'y' }, glied2: { at: [0, 290, 0], axis: 'z' }, glied3: { at: [0, 560, 0], axis: 'z' },
    glied4: { at: [0, 630, 0], axis: 'x' }, glied5: { at: [-302, 630, 0], axis: 'z' },
  };
  let parent = robot;
  for (const k of order) {
    const g = data[k];
    const joint = new THREE.Group();
    const at = joints[k] ? joints[k].at : [0, 0, 0];
    const prevAt = parent.userData.at || [0, 0, 0];
    joint.position.set(at[0] - prevAt[0], at[1] - prevAt[1], at[2] - prevAt[2]);
    joint.userData = { at, axis: joints[k] && joints[k].axis };
    const m = mesh(g.v, g.i, MAT.roboter, 40);
    m.position.set(-at[0], -at[1], -at[2]);
    joint.add(m);
    parent.add(joint);
    links[k] = joint;
    parent = joint;
  }
  return robot;
}

async function buildTentra() {
  const data = await (await fetch(BASE + 'data/3d/tentra-t3.json')).json();
  const root = new THREE.Group(), byIndex = [], moving = [], pads = [];
  for (const pt of data.parts) {
    const m = mesh(pt.p, pt.i, tentraMat(pt.name));
    m.matrixAutoUpdate = false;
    root.add(m);
    byIndex.push(m);
    if (/Contact_pad_0[56]/.test(pt.name)) pads.push(m);
    if (pt.bewegung) {
      const b = pt.bewegung;
      moving.push({ mesh: m, parent: b.parent, pivot: new THREE.Vector3(...b.pivot), q: new Q(...b.q), rest: new THREE.Vector3(...b.rest) });
    }
  }
  const qi = new Q(), m1 = new THREE.Matrix4(), m2 = new THREE.Matrix4(), local = new THREE.Matrix4();
  const set = (t) => {
    for (const mv of moving) {
      qi.identity().slerp(mv.q, t);
      local.makeTranslation(mv.pivot.x + mv.rest.x * t, mv.pivot.y + mv.rest.y * t, mv.pivot.z + mv.rest.z * t)
        .multiply(m1.makeRotationFromQuaternion(qi)).multiply(m2.makeTranslation(-mv.pivot.x, -mv.pivot.y, -mv.pivot.z));
      if (mv.parent >= 0) mv.mesh.matrix.multiplyMatrices(byIndex[mv.parent].matrix, local);
      else mv.mesh.matrix.copy(local);
    }
  };
  // Schließgrad, bei dem die Polster der Fingerspitzen den Außenring (Ø52) berühren, und ihre Höhe dabei
  const tip = (t) => { set(t); let r = Infinity, y = 0; const v = new THREE.Vector3();
    for (const m of pads) { const pos = m.geometry.attributes.position;
      for (let i = 0; i < pos.count; i++) { v.fromBufferAttribute(pos, i).applyMatrix4(m.matrix);
        const d = Math.hypot(v.x, v.z); if (d < r) { r = d; y = v.y; } } }
    return { r, y }; };
  let lo = 0, hi = 1;
  for (let k = 0; k < 24; k++) { const mid = (lo + hi) / 2; if (tip(mid).r > 26.3) lo = mid; else hi = mid; }
  const grip = lo, contactY = tip(grip).y;
  set(0);
  return { root, set, grip, contactY };
}

function buildBearing(data) {
  const g = new THREE.Group();
  const mats = { aussenring: MAT.stahl, innenring: MAT.stahlMatt, dichtung: MAT.dichtung, kaefig: MAT.stahlMatt };
  for (const [k, part] of Object.entries(data)) g.add(mesh(part.v, part.i, mats[k], 30));
  return g;   // Mitte im Ursprung, Achse senkrecht, 14 mm hoch
}

// --- Bewegung ---
// Inverse Kinematik: Werkzeug zeigt senkrecht nach unten, Achse 4 und 6 bleiben auf 0.
let TOOL = 0;                    // Flansch → Greifpunkt (mm), gesetzt nach dem Laden
const d = new THREE.Vector2(), v1 = new THREE.Vector2();
const B0 = Math.atan2(W0.y, W0.x), LB = W0.length();
function ik(p) {
  const q1 = Math.atan2(p.z, -p.x);
  const r = Math.hypot(p.x, p.z);
  d.set(-r, p.y - PED + FLANGE + TOOL).sub(A2);                  // Handgelenk relativ zu Achse 2 (Ebene des Arms)
  const len = Math.min(d.length(), L2 + LB - 1);
  const cosA = THREE.MathUtils.clamp((L2 * L2 + len * len - LB * LB) / (2 * L2 * len), -1, 1);
  const angD = Math.atan2(d.y, d.x);
  const a1 = angD - Math.acos(cosA);                         // Ellbogen oben
  v1.set(Math.cos(a1), Math.sin(a1)).multiplyScalar(L2);
  const a2 = Math.atan2(d.y - v1.y, d.x - v1.x);
  const q2 = a1 - Math.PI / 2;
  const phi = a2 - B0;
  const q3 = phi - q2;
  const q5 = -Math.PI / 2 - Math.PI - phi;                   // Werkzeugrichtung: π + φ + q5 = −π/2
  return [q1, q2, q3, 0, q5];
}
function pose(q) {
  links.glied1.rotation.y = q[0];
  links.glied2.rotation.z = q[1];
  links.glied3.rotation.z = q[2];
  links.glied4.rotation.x = q[3];
  links.glied5.rotation.z = THREE.MathUtils.euclideanModulo(q[4] + Math.PI, 2 * Math.PI) - Math.PI;
}

const ease = (x) => x * x * (3 - 2 * x);
const seg = (s, a, b) => ease(THREE.MathUtils.clamp((s - a) / (b - a), 0, 1));
const LIFT = 110;
const tcp = new THREE.Vector3(), tmp = new THREE.Vector3();
// Lage auf dem Bogen um den Roboter: Winkel und Abstand interpolieren, damit der Arm sauber herumschwenkt
function arc(a, b, k, y) {
  const ra = Math.hypot(a.x, a.z), rb = Math.hypot(b.x, b.z);
  const wa = Math.atan2(a.z, -a.x), wb = Math.atan2(b.z, -b.x);
  const w = wa + (wb - wa) * k, r = ra + (rb - ra) * k;
  return tcp.set(-r * Math.cos(w), y, r * Math.sin(w));
}
// s = 0 … 1 (Scrollfortschritt) → Greiferlage, Schließgrad, Teil gegriffen?
function timeline(s, G) {
  const yLow = TABLE_H + 7, yHigh = yLow + LIFT;
  const down1 = seg(s, 0.0, 0.14), close = seg(s, 0.14, 0.24), up1 = seg(s, 0.26, 0.38);
  const swing = seg(s, 0.38, 0.64), down2 = seg(s, 0.64, 0.76), open = seg(s, 0.78, 0.88), up2 = seg(s, 0.9, 1.0);
  let y = yHigh - LIFT * down1 + LIFT * up1 - LIFT * down2 + LIFT * up2;
  arc(PICK, PLACE, swing, y);
  const t = G.grip * close * (1 - open);
  const held = s < 0.24 ? 0 : s < 0.8 ? 1 : 2;     // 0 = auf Tisch A, 1 = im Greifer, 2 = auf Tisch B
  return { p: tcp, t, held };
}

// --- Aufbau ---
let dirty = true;
function resize() {
  dirty = true;
  progress = fromScroll();
  const w = box.clientWidth, h = box.clientHeight;
  renderer.setSize(w, h, false);
  camera.aspect = w / h;
  const dist = w / h < 1.2 ? 2350 : 1800;
  camera.position.set(-dist, TABLE_H + dist * 0.22, 0);
  camera.lookAt(-150, TABLE_H + 40, 0);
  camera.updateProjectionMatrix();
}

let progress = 0, current = 0;
// Ablauf läuft, solange die Szene im Bild ist: Start, sobald sie ganz sichtbar ist (bzw. ganz oben),
// Ende, wenn ihre obere Hälfte unter dem Seitenkopf verschwunden ist.
const fromScroll = () => {
  const r = box.getBoundingClientRect(), top = r.top + window.scrollY, h = r.height;
  const start = Math.max(0, top + h - window.innerHeight);
  const end = Math.max(start + 250, top - 72 + h * 0.5);
  return THREE.MathUtils.clamp((window.scrollY - start) / (end - start), 0, 1);
};

(async () => {
  box.classList.add('is-loading');
  const [data, G] = await Promise.all([(await fetch(BASE + 'data/3d/roboter-szene.json')).json(), buildTentra()]);
  const robot = buildRobot(data.roboter);
  robot.position.y = PED;
  const ped = new THREE.Mesh(new THREE.BoxGeometry(300, PED, 300), MAT.tisch);
  ped.position.set(10, PED / 2, 0);
  ped.castShadow = ped.receiveShadow = true;
  scene.add(robot, ped);
  // Greifer am Flansch: Adapter (y = 48) an den Flansch, Finger zeigen in −X des Glieds 5
  const mount = new THREE.Group();
  mount.rotation.z = -Math.PI / 2;
  mount.position.set(-374 + 302 - 48, 0, 0);
  mount.add(G.root);
  links.glied5.add(mount);
  TOOL = 48 - G.contactY;                       // Flansch → Höhe der Polster beim Greifen
  const bearing = buildBearing(data.lager);
  scene.add(bearing);
  // weitere Lager als Vorrat auf Tisch A
  for (const [dx, dz] of [[-85, -95], [85, -95], [-85, 60]]) {
    const b = bearing.clone();
    b.position.set(PICK.x + dx, TABLE_H + 7, PICK.z + dz);
    scene.add(b);
  }
  resize();
  window.addEventListener('resize', resize);
  window.addEventListener('scroll', () => { progress = fromScroll(); }, { passive: true });

  const still = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  let visible = true;
  new IntersectionObserver((e) => { visible = e[0].isIntersecting; }).observe(box);
  const update = (s) => {
    const st = timeline(s, G);
    pose(ik(st.p));
    G.set(st.t);
    if (st.held === 1) {
      robot.updateMatrixWorld(true);
      // Lager mittig zwischen den Fingern, auf Höhe der Polster
      G.root.localToWorld(tmp.set(0, G.contactY, 0));
      bearing.position.copy(tmp);
    } else bearing.position.copy(st.held === 2 ? PLACE : PICK).setY(TABLE_H + 7);
  };
  function frame() {
    requestAnimationFrame(frame);
    if (!visible) return;
    if (Math.abs(progress - current) < 1e-4 && !dirty) return;
    current += (progress - current) * (still ? 1 : 0.12);
    update(current);
    renderer.render(scene, camera);
    dirty = false;
  }
  progress = current = fromScroll();
  box.classList.remove('is-loading');
  box.classList.add('is-3d');
  frame();
  window.__robo = { set: (s) => { progress = current = s; update(s); renderer.render(scene, camera); }, G, ik, links, camera, render: () => renderer.render(scene, camera) };
})().catch((e) => { box.classList.remove('is-loading'); console.error(e); });
