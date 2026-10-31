// Greifer-Simulator: Ein fest montierter Industrieroboter setzt das Teil mit dem Greifer aus dem Konfigurator
// von einem Förderband auf ein zweites um, auf Wunsch gedreht. Keine Physik und keine Bewertung, ob der
// Greifer das Teil hält: der Simulator zeigt den Ablauf.
// Einheit: Millimeter, Y nach oben. Produkte fließen in +X: Zuführband links, Abführband rechts, Roboter dahinter.
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
import { RoomEnvironment } from 'three/examples/jsm/environments/RoomEnvironment.js';
import { mergeGeometries, toCreasedNormals } from 'three/examples/jsm/utils/BufferGeometryUtils.js';
import { EffectComposer } from 'three/examples/jsm/postprocessing/EffectComposer.js';
import { RenderPass } from 'three/examples/jsm/postprocessing/RenderPass.js';
import { GTAOPass } from 'three/examples/jsm/postprocessing/GTAOPass.js';
import { OutputPass } from 'three/examples/jsm/postprocessing/OutputPass.js';
import { kennzahlen } from './sim-regeln.js';

const fmt = (v, d = 0) => v.toLocaleString('de-DE', { maximumFractionDigits: d, minimumFractionDigits: d });
const clamp = THREE.MathUtils.clamp;
const ease = (x) => x * x * (3 - 2 * x);
const seg = (p, a, b) => ease(clamp((p - a) / (b - a), 0, 1));
const rnd = (i) => { const x = Math.sin(i * 127.1 + 311.7) * 43758.5453; return x - Math.floor(x); };   // fester Zufall je Teil

// ---------------------------------------------------------------- Materialien
const M = {
  stahl: new THREE.MeshPhysicalMaterial({ color: 0xc4c9cf, metalness: 1, roughness: 0.28, anisotropy: 0.6 }),
  alu: new THREE.MeshStandardMaterial({ color: 0xd3d8de, metalness: 0.6, roughness: 0.4 }),
  dunkel: new THREE.MeshPhysicalMaterial({ color: 0x2a2f35, metalness: 0.3, roughness: 0.55, clearcoat: 0.2 }),
  gurt: new THREE.MeshStandardMaterial({ color: 0x353b42, roughness: 0.85 }),
  modul: new THREE.MeshStandardMaterial({ color: 0xf2f4f6, roughness: 0.6 }),
  rolle: new THREE.MeshStandardMaterial({ color: 0xc9d0d8, metalness: 0.9, roughness: 0.25 }),
  holz: new THREE.MeshStandardMaterial({ color: 0xc8a36e, roughness: 0.85 }),
  klt: new THREE.MeshStandardMaterial({ color: 0x4f6f8f, roughness: 0.6 }),
  presse: new THREE.MeshStandardMaterial({ color: 0x4a6b8a, metalness: 0.3, roughness: 0.55 }),
  roboter: new THREE.MeshPhysicalMaterial({ color: 0xf3f4f5, roughness: 0.38, clearcoat: 0.8, clearcoatRoughness: 0.18 }),
  gelenk: new THREE.MeshStandardMaterial({ color: 0x0061aa, metalness: 0.3, roughness: 0.45 }),
  abbFuss: new THREE.MeshPhysicalMaterial({ color: 0xe4e6e9, roughness: 0.42, clearcoat: 0.6, clearcoatRoughness: 0.25 }),
  papier: new THREE.MeshStandardMaterial({ color: 0xe9dcc3, roughness: 0.9 }),
  schale: new THREE.MeshStandardMaterial({ color: 0x3a4148, roughness: 0.5 }),
  rahmen: new THREE.MeshPhysicalMaterial({ color: 0x8c939b, metalness: 0.9, roughness: 0.45, anisotropy: 0.8, anisotropyRotation: 0 }),
  lack: new THREE.MeshPhysicalMaterial({ color: 0x5f6b78, metalness: 0.2, roughness: 0.42, clearcoat: 0.5, clearcoatRoughness: 0.3 }),
  sockel: new THREE.MeshPhysicalMaterial({ color: 0x3b4450, metalness: 0.25, roughness: 0.5, clearcoat: 0.4 }),
  band: new THREE.MeshStandardMaterial({ color: 0xc9ccd0, roughness: 0.7 }),
  sensor: new THREE.MeshStandardMaterial({ color: 0x1f2830, roughness: 0.4 }),
  led: new THREE.MeshStandardMaterial({ color: 0xff7a1a, emissive: 0xff5a00, emissiveIntensity: 0.6 }),
};
const box = (w, h, d, mat, x = 0, y = 0, z = 0) => {
  const m = new THREE.Mesh(new THREE.BoxGeometry(w, h, d), mat);
  m.position.set(x, y, z); m.castShadow = m.receiveShadow = true; return m;
};
const cyl = (r, h, mat, seg = 24) => { const m = new THREE.Mesh(new THREE.CylinderGeometry(r, r, h, seg), mat); m.castShadow = m.receiveShadow = true; return m; };
// Stab von a nach b
function rod(r, mat) { const m = cyl(r, 1, mat, 12); m.userData.rod = true; return m; }
const UP = new THREE.Vector3(0, 1, 0);
function placeRod(m, a, b) {
  const d = new THREE.Vector3().subVectors(b, a);
  m.position.copy(a).addScaledVector(d, 0.5);
  m.scale.set(1, d.length(), 1);
  m.quaternion.setFromUnitVectors(UP, d.normalize());
}

// Streifen-Textur für Bänder (läuft mit)
function stripes(c1, c2, n) {
  const cv = document.createElement('canvas'); cv.width = 64; cv.height = 64;
  const x = cv.getContext('2d'); x.fillStyle = c1; x.fillRect(0, 0, 64, 64); x.fillStyle = c2;
  for (let i = 0; i < n; i++) x.fillRect(i * 64 / n, 0, 64 / n * 0.18, 64);
  const t = new THREE.CanvasTexture(cv); t.wrapS = t.wrapT = THREE.RepeatWrapping; t.colorSpace = THREE.SRGBColorSpace; return t;
}

// ---------------------------------------------------------------- Produkte
// Größe in mm (x = Länge in Förderrichtung, y = Höhe, z = Greifbreite)
const PRODUKTE = {
  eigen: { name: 'Ihr Teil aus dem Konfigurator', branche: '' },
  reifen: { name: 'Pkw-Reifen', branche: 'Automobil', size: [632, 205, 632], innen: 406, info: 'Gummi, formstabil' },
  blech: { name: 'Blechteil', branche: 'Automobil', size: [600, 40, 400], info: 'glatt, evtl. ölig' },
  broetchen: { name: 'Brötchen / Backware', branche: 'Lebensmittel', size: [100, 55, 70], info: 'weich, empfindlich' },
  karton: { name: 'Karton / Verpackung', branche: 'beide', size: [400, 250, 300], info: 'glatt, formstabil' },
  schale: { name: 'Schale / Becher', branche: 'Lebensmittel', size: [180, 50, 130], innen: 124, info: 'Kunststoff, leicht' },
};
function productGeometry(typ, K) {
  if (typ === 'reifen') {
    const ro = 316, ri = 203, w = 205, pts = [];
    const prof = [[ri, -w * 0.38], [ri + 30, -w * 0.48], [ro - 40, -w * 0.5], [ro - 8, -w * 0.42], [ro, -w * 0.2], [ro, w * 0.2], [ro - 8, w * 0.42], [ro - 40, w * 0.5], [ri + 30, w * 0.48], [ri, w * 0.38]];
    for (const [r, y] of prof) pts.push(new THREE.Vector2(r, y + w / 2));
    pts.push(pts[0].clone());
    return { geo: new THREE.LatheGeometry(pts, 64), mat: new THREE.MeshStandardMaterial({ color: 0x1d1f22, roughness: 0.85 }) };
  }
  if (typ === 'blech') {
    const s = new THREE.Shape([[-300, 0], [-300, 40], [-220, 40], [-180, 3], [180, 3], [220, 40], [300, 40], [300, 0], [220, 37], [180, 0]].map(([x, y]) => new THREE.Vector2(x, y)));
    const g = new THREE.ExtrudeGeometry(s, { depth: 400, bevelEnabled: false }); g.translate(0, 0, -200);
    return { geo: g, mat: new THREE.MeshStandardMaterial({ color: 0xaab3bc, metalness: 0.85, roughness: 0.3 }) };
  }
  if (typ === 'broetchen') {
    const g = new THREE.SphereGeometry(1, 28, 16); g.scale(50, 30, 35); g.translate(0, 18, 0);
    const p = g.attributes.position; for (let i = 0; i < p.count; i++) if (p.getY(i) < 4) p.setY(i, 4 + (p.getY(i) - 4) * 0.2);
    g.translate(0, -3, 0); g.computeVertexNormals();
    return { geo: g, mat: new THREE.MeshStandardMaterial({ color: 0xc98a3c, roughness: 0.8 }) };
  }
  if (typ === 'karton') {
    const g = mergeGeometries([new THREE.BoxGeometry(400, 250, 300).translate(0, 125, 0), new THREE.BoxGeometry(400, 2, 60).translate(0, 251, 0)].map((x) => x.toNonIndexed()), true);
    return { geo: g, mats: [new THREE.MeshStandardMaterial({ color: 0xb98a55, roughness: 0.9 }), new THREE.MeshStandardMaterial({ color: 0xd9c08f, roughness: 0.6 })] };
  }
  if (typ === 'schale') {
    const t = 3, L = 180, H = 50, B = 130;
    const g = mergeGeometries([[L, t, B, 0, t / 2, 0], [L, H, t, 0, H / 2, B / 2 - t / 2], [L, H, t, 0, H / 2, -B / 2 + t / 2], [t, H, B, L / 2 - t / 2, H / 2, 0], [t, H, B, -L / 2 + t / 2, H / 2, 0]]
      .map(([w, h, d, x, y, z]) => new THREE.BoxGeometry(w, h, d).translate(x, y, z)));
    return { geo: g, mat: new THREE.MeshStandardMaterial({ color: 0xf2f5f7, roughness: 0.3, transparent: true, opacity: 0.88 }) };
  }
  // eigenes Teil aus dem Konfigurator (liegt dort schon mittig mit Unterkante auf 0)
  const pt = K.part();
  return { geo: pt.geo, mat: new THREE.MeshStandardMaterial({ color: 0xd9a441, metalness: 0.2, roughness: 0.55 }) };
}

// ---------------------------------------------------------------- Module
// Zuführ- und Abführband: Aufnahme- bzw. Ablagepunkt liegt im lokalen Ursprung, Förderrichtung +X.
const FLOW = ['foerderband'];
const QUELLEN = { foerderband: { name: 'Förderband', info: 'Teile kommen auf dem Gurt an' } };
const ZIELE = { foerderband: { name: 'Förderband', info: 'Abtransport auf dem Gurt' } };
const GERAETE_UI = { roboter6: { name: 'Industrieroboter', info: 'fest montiert neben den Bändern' } };
// ältere Links: alle früheren Stationen und Geräte → Förderband bzw. fest montierter Roboter
const ALT = { gurtband: 'foerderband', modulband: 'foerderband', rollenbahn: 'foerderband', palette: 'foerderband', klt: 'foerderband',
  presse: 'foerderband', schalenband: 'foerderband', karton: 'foerderband', linear: 'roboter6', cobot: 'roboter6', delta: 'roboter6', portal: 'roboter6' };

// Gurtförderband nach der Konstruktion (Belt1-3.STEP): der Gurt ist das Original-Modell (Achsabstand 1370 mm,
// Breite 495 mm, Trommeln Ø 95 mm, tools/foerderband/export.py). Gestell nach den Konstruktionsbildern:
// Seitenwangen mit Langlöchern, Flanschlager an den Trommeln, vier Vierkantbeine mit unterem Rahmen und
// Stellfüßen, Schneckengetriebemotor an der Antriebstrommel, Schaltkasten an der Seitenwange.
let BELT = null;
// PVC-Gurt: hellgrau mit feiner Gewebestruktur und Stoßnaht, als Textur gezeichnet (läuft mit dem Band)
function beltTexture() {
  const c = document.createElement('canvas'); c.width = 256; c.height = 256;
  const x = c.getContext('2d');
  x.fillStyle = '#c9ccd0'; x.fillRect(0, 0, 256, 256);
  const img = x.getImageData(0, 0, 256, 256), d = img.data;
  for (let i = 0; i < d.length; i += 4) {
    const px = (i / 4) % 256, py = Math.floor(i / 1024);
    const n = (Math.sin(px * 1.7) * Math.sin(py * 1.7)) * 4 + (rnd(i) - 0.5) * 10;
    d[i] += n; d[i + 1] += n; d[i + 2] += n;
  }
  x.putImageData(img, 0, 0);
  x.fillStyle = 'rgba(80,86,94,.35)'; x.fillRect(0, 0, 2, 256);          // Gurtnaht
  const t = new THREE.CanvasTexture(c); t.wrapS = t.wrapT = THREE.RepeatWrapping; t.colorSpace = THREE.SRGBColorSpace; t.anisotropy = 8;
  return t;
}
async function loadBelt(base) {
  if (BELT) return BELT;
  const d = await (await fetch(base + 'data/3d/foerderband.json')).json();
  const geo = new THREE.BufferGeometry();
  geo.setAttribute('position', new THREE.Float32BufferAttribute(d.v, 3));
  geo.setIndex(d.i);
  // Textur läuft in Förderrichtung: u = x, v = z (eine Kachel = 300 mm)
  const uv = [];
  for (let i = 0; i < d.v.length; i += 3) uv.push(d.v[i] / 300, d.v[i + 2] / d.breite + 0.5);
  geo.setAttribute('uv', new THREE.Float32BufferAttribute(uv, 2));
  BELT = { geo: toCreasedNormals(geo, THREE.MathUtils.degToRad(35)), A: d.achsabstand, R: d.radius, W: d.breite };
  return BELT;
}
const BAND_TOP = 860;          // Oberkante Gurt über Boden
function conveyor(width, dir) {
  // dir = −1: Zuführband, endet am Ursprung; +1: Abführband, beginnt dort
  const g = new THREE.Group();
  const { A, R } = BELT;
  const sz = Math.max(1, width / BELT.W);            // breitere Teile: Band wird breiter, nie länger
  const W = BELT.W * sz, cx = dir < 0 ? -A / 2 + 60 : A / 2 - 60;
  const x0 = cx - A / 2, x1 = cx + A / 2, yA = BAND_TOP - R;
  const tex = beltTexture();
  const mat = new THREE.MeshPhysicalMaterial({ map: tex, roughnessMap: tex, roughness: 0.75, sheen: 0.3, sheenRoughness: 0.8, sheenColor: 0xffffff });
  const belt = new THREE.Mesh(BELT.geo, mat);
  belt.position.set(cx, yA, 0); belt.scale.set(1, 1, sz); belt.castShadow = belt.receiveShadow = true; belt.userData.keepGeo = true;
  g.add(belt);
  for (const x of [x0, x1]) { const d = cyl(R - 3, W - 4, M.stahl, 32); d.rotation.x = Math.PI / 2; d.position.set(x, yA, 0); g.add(d); }
  // Seitenwangen (C-Profil) mit zwei Langlöchern, Lagerflansche außen
  const zs = W / 2 + 12, PL = A + 150, ph = 120;
  for (const s of [-1, 1]) {
    const shape = new THREE.Shape();
    shape.moveTo(-PL / 2, -ph / 2); shape.lineTo(PL / 2, -ph / 2); shape.lineTo(PL / 2, ph / 2); shape.lineTo(-PL / 2, ph / 2); shape.closePath();
    for (const hx of [-PL * 0.22, PL * 0.22]) {
      const hole = new THREE.Path(), hw = PL * 0.13, hr = 26;
      hole.moveTo(hx - hw, -hr); hole.lineTo(hx + hw, -hr); hole.absarc(hx + hw, 0, hr, -Math.PI / 2, Math.PI / 2); hole.lineTo(hx - hw, hr); hole.absarc(hx - hw, 0, hr, Math.PI / 2, Math.PI * 1.5);
      shape.holes.push(hole);
    }
    const plate = new THREE.Mesh(new THREE.ExtrudeGeometry(shape, { depth: 5, bevelEnabled: false }), M.rahmen);
    plate.position.set(cx, yA - 8, s * zs - 2.5); plate.castShadow = plate.receiveShadow = true; g.add(plate);
    for (const yy of [yA - 8 + ph / 2, yA - 8 - ph / 2]) g.add(box(PL, 5, 28, M.rahmen, cx, yy, s * (zs - 12)));   // Abkantung oben/unten
    for (const x of [x0, x1]) {
      g.add(box(86, 86, 18, M.dunkel, x, yA, s * (zs + 11)));
      const hub = cyl(20, 14, M.stahl, 20); hub.rotation.x = Math.PI / 2; hub.position.set(x, yA, s * (zs + 26)); g.add(hub);
    }
  }
  // Schaltkasten an der vorderen Wange nahe der Antriebsseite
  const xd = dir < 0 ? x1 : x0;     // Antrieb an der Seite des Roboters
  g.add(box(36, 60, 24, M.dunkel, xd - Math.sign(xd - cx) * 150, yA - 8, zs + 14));
  // Beine (Vierkant 40 mm) knapp innerhalb der Wangen, unterer Rahmen auf 170 mm, Stellfüße
  const legX = [x0 + 190, x1 - 190], lz = zs - 25, legTop = yA - 8 - ph / 2;
  for (const x of legX) for (const s of [-1, 1]) {
    g.add(box(40, legTop - 70, 40, M.rahmen, x, 70 + (legTop - 70) / 2, s * lz));
    const rod = cyl(8, 50, M.stahl, 12); rod.position.set(x, 45, s * lz); g.add(rod);
    const foot = cyl(32, 16, M.dunkel, 20); foot.position.set(x, 8, s * lz); g.add(foot);
  }
  for (const s of [-1, 1]) g.add(box(legX[1] - legX[0], 30, 30, M.rahmen, cx, 170, s * lz));
  for (const x of legX) g.add(box(30, 30, 2 * lz, M.rahmen, x, 170, 0));
  // Schneckengetriebemotor auf der Rückseite an der Antriebstrommel, Motor schräg nach unten
  const gz = -(zs + 70);
  g.add(box(120, 140, 110, M.lack, xd, yA - 20, gz));
  const motor = new THREE.Group(); motor.position.set(xd, yA - 70, gz - 30); motor.rotation.x = -0.35;
  const body = cyl(58, 170, M.lack, 32); body.position.y = -85; motor.add(body);
  for (let k = 0; k < 6; k++) { const fin = cyl(64, 6, M.lack, 32); fin.position.y = -40 - k * 22; motor.add(fin); }
  const fan = cyl(56, 40, M.dunkel, 24); fan.position.y = -185; motor.add(fan);
  motor.add(box(60, 50, 50, M.lack, 0, -60, -70));            // Klemmenkasten
  motor.traverse((o) => { if (o.isMesh) o.castShadow = true; });
  g.add(motor);
  return { group: g, top: BAND_TOP, tex, half: 120, flow: true, len: A, dir, x0, x1, W };
}

function buildSource(id, P) {
  return conveyor(Math.max(BELT.W, P.size[2] + 160), -1);
}

function buildTarget(id, P, p3, dreh = 0) {
  // bei 90° gedrehter Ablage liegt die Länge quer auf dem Band
  const size = Number(dreh) % 180 === 90 ? [P.size[2], P.size[1], P.size[0]] : P.size;
  return conveyor(Math.max(BELT.W, size[2] + 160), 1);
}

// ---------------------------------------------------------------- Geräte
// Jedes Gerät: group, reach(flange: Vector3) stellt die Gelenke so, dass der Flansch dort liegt (Werkzeug senkrecht nach unten)
// 6-Achs-Roboter: echtes Modell ABB IRB 120 (STEP von ABB, aufbereitet mit tools/roboter/export.py),
// für die Anlage auf ca. 3,3-fache Größe gebracht. Kinematik wie auf der Startseite (tools/roboter/roboter3d.js):
// Achse 2 bei y = 290, Unterarm 270, Handgelenk (Achse 5) 302 vor und 70 über Achse 3, Flansch 72 vor Achse 5.
const ABB_S = 2.4;
let ABB = null;          // Geometrien je Glied, einmal geladen
export async function loadABB(base) {
  await loadBelt(base);
  if (ABB) return ABB;
  const data = (await (await fetch(base + 'data/3d/roboter-szene.json')).json()).roboter;
  ABB = {};
  for (const [k, g] of Object.entries(data)) {
    let geo = new THREE.BufferGeometry();
    geo.setAttribute('position', new THREE.Float32BufferAttribute(g.v, 3));
    geo.setIndex(g.i);
    ABB[k] = toCreasedNormals(geo, THREE.MathUtils.degToRad(40));
  }
  return ABB;
}
const ABB_JOINTS = { glied1: [0, 0, 0], glied2: [0, 290, 0], glied3: [0, 560, 0], glied4: [0, 630, 0], glied5: [-302, 630, 0] };
const A2 = new THREE.Vector2(0, 290), L2 = 270, W0 = new THREE.Vector2(-302, 70), FL = 72;
const B0 = Math.atan2(W0.y, W0.x), LB = W0.length();
function buildArm(ped = 0) {
  const g = new THREE.Group();
  if (ped) { g.add(box(620, ped, 620, M.sockel, 0, ped / 2, 0), box(720, 20, 720, M.sockel, 0, 10, 0)); }
  const robot = new THREE.Group(); robot.position.y = ped; robot.scale.setScalar(ABB_S); g.add(robot);
  const L = {};
  let parent = robot, prev = [0, 0, 0];
  for (const k of ['basis', 'glied1', 'glied2', 'glied3', 'glied4', 'glied5']) {
    const at = ABB_JOINTS[k] || [0, 0, 0];
    const j = new THREE.Group(); j.position.set(at[0] - prev[0], at[1] - prev[1], at[2] - prev[2]);
    const m = new THREE.Mesh(ABB[k], k === 'basis' ? M.abbFuss : M.roboter);
    m.position.set(-at[0], -at[1], -at[2]); m.castShadow = m.receiveShadow = true; m.userData.keepGeo = true;
    j.add(m); parent.add(j); L[k] = j; parent = j; prev = at;
  }
  const tip = new THREE.Object3D(); tip.position.set(-FL, 0, 0); L.glied5.add(tip);   // Flanschmitte
  const lp = new THREE.Vector3(), d = new THREE.Vector2(), v1 = new THREE.Vector2();
  return {
    group: g,
    tip: (v) => tip.getWorldPosition(v),
    reach(F) {
      // Ziel in Roboterkoordinaten (Modellmaß), Werkzeug senkrecht nach unten, Achsen 4 und 6 bleiben auf 0
      g.updateMatrixWorld(true);
      robot.worldToLocal(lp.copy(F));
      const q1 = Math.atan2(lp.z, -lp.x), r = Math.hypot(lp.x, lp.z);
      d.set(-r, lp.y + FL).sub(A2);
      const len = Math.min(d.length(), L2 + LB - 1);
      const a1 = Math.atan2(d.y, d.x) - Math.acos(clamp((L2 * L2 + len * len - LB * LB) / (2 * L2 * len), -1, 1));
      v1.set(Math.cos(a1), Math.sin(a1)).multiplyScalar(L2);
      const a2 = Math.atan2(d.y - v1.y, d.x - v1.x), q2 = a1 - Math.PI / 2, phi = a2 - B0;
      L.glied1.rotation.y = q1;
      L.glied2.rotation.z = q2;
      L.glied3.rotation.z = phi - q2;
      L.glied5.rotation.z = THREE.MathUtils.euclideanModulo(-1.5 * Math.PI - phi + Math.PI, 2 * Math.PI) - Math.PI;
    },
  };
}

// ---------------------------------------------------------------- Parameter
const BAND = { k: 'band', label: 'Bandgeschwindigkeit', opts: [['langsam', 'langsam'], ['mittel', 'mittel'], ['schnell', 'schnell']], def: 'mittel' };
const P1 = [
  { k: 'lage', label: 'Lage des Produkts', opts: [['ausgerichtet', 'ausgerichtet'], ['chaotisch', 'chaotisch (mit Kamera)']], def: 'ausgerichtet' },
];
const P2 = [
  { k: 'hub', label: 'Hubhöhe', range: [0.1, 1, 0.05], unit: 'm', def: 0.3, dec: 2 },
  { k: 'dreh', label: 'Drehung des Produkts', opts: [['0', 'keine'], ['90', '90°'], ['180', '180°']], def: '0' },
];
const P3 = [BAND];
const defaults = (list) => Object.fromEntries(list.map((p) => [p.k, p.def]));

// Ausgangsanlage: Ihr Teil kommt auf dem Förderband, der fest montierte Roboter dreht es um 90°
// und legt es auf das Abführband
const VORLAGE = { produkt: 'eigen', s1: { modul: 'foerderband' }, s2: { modul: 'roboter6', speed: 70, dreh: '90' }, s3: { modul: 'foerderband' } };

// ---------------------------------------------------------------- Simulator
export function initSimulator(K) {
  const sec = document.querySelector('[data-simulator]');
  if (!sec) return;
  const $ = (s) => sec.querySelector(s);
  const ui = $('.sim');
  const view = $('.sim__view');
  let started = false;

  // Zustand
  const S = { produkt: { typ: 'eigen', groesse: 100 }, s1: null, s2: null, s3: null };
  let aktiv = 'produkt';
  function applyTemplate() {
    const t = VORLAGE;
    S.tph = null;
    S.produkt = { typ: t.produkt, groesse: 100 };
    S.s1 = { ...defaults(P1), ...t.s1 }; S.s2 = { ...defaults(P2), ...t.s2 }; S.s3 = { ...defaults(P3), ...t.s3 };
    aktiv = 'slot1';
  }

  // Produktdaten (Größe skaliert, eigenes Teil aus dem Konfigurator)
  function produkt() {
    const typ = S.produkt.typ, f = (S.produkt.groesse || 100) / 100;
    if (typ === 'eigen') {
      const pt = K.part();
      const sz = pt ? [pt.size.x, pt.size.y, pt.size.z] : [100, 100, 100];
      return { typ, name: pt ? pt.label.replace(/^Grundform: /, '') : 'Ihr Teil', size: sz.map((v) => v * f),
        griff: (pt ? pt.grip : 100) * f, innen: pt && pt.inside ? pt.grip * f : null, f };
    }
    const d = PRODUKTE[typ];
    return { typ, name: d.name, size: d.size.map((v) => v * f), griff: d.size[2] * f, innen: d.innen ? d.innen * f : null, f };
  }

  // ---------- 3D ----------
  const canvas = view.querySelector('canvas');
  let renderer, scene, camera, controls, world, composer;
  // Betonboden der Halle: gezeichnete Textur mit Körnung, leichten Flecken und Fugen alle 3 m
  function concrete() {
    const c = document.createElement('canvas'); c.width = c.height = 1024;
    const x = c.getContext('2d');
    x.fillStyle = '#a3a7ab'; x.fillRect(0, 0, 1024, 1024);
    for (let k = 0; k < 60; k++) {
      const gx = rnd(k) * 1024, gy = rnd(k + 99) * 1024, r = 80 + rnd(k + 7) * 220;
      const gr = x.createRadialGradient(gx, gy, 0, gx, gy, r);
      const a = (rnd(k + 3) - 0.5) * 0.08;
      gr.addColorStop(0, a > 0 ? `rgba(255,255,255,${a})` : `rgba(60,60,60,${-a})`); gr.addColorStop(1, 'rgba(0,0,0,0)');
      x.fillStyle = gr; x.fillRect(0, 0, 1024, 1024);
    }
    const img = x.getImageData(0, 0, 1024, 1024), d = img.data;
    for (let i = 0; i < d.length; i += 4) { const n = (rnd(i * 0.37) - 0.5) * 16; d[i] += n; d[i + 1] += n; d[i + 2] += n; }
    x.putImageData(img, 0, 0);
    x.strokeStyle = 'rgba(70,72,75,.55)'; x.lineWidth = 3; x.strokeRect(0, 0, 1024, 1024);
    const t = new THREE.CanvasTexture(c); t.wrapS = t.wrapT = THREE.RepeatWrapping; t.colorSpace = THREE.SRGBColorSpace;
    t.anisotropy = renderer.capabilities.getMaxAnisotropy(); t.repeat.set(40000 / 3000, 40000 / 3000);
    return t;
  }
  function init3d() {
    renderer = new THREE.WebGLRenderer({ canvas, antialias: true, powerPreference: 'high-performance' });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.75));
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 0.92;
    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = THREE.PCFSoftShadowMap;
    scene = new THREE.Scene();
    scene.background = new THREE.Color(0xd9dde2);
    scene.fog = new THREE.Fog(0xd9dde2, 12000, 30000);
    // Bildbasiertes Licht aus einer Studio-Umgebung: weiche Reflexionen auf Lack und Stahl
    scene.environment = new THREE.PMREMGenerator(renderer).fromScene(new RoomEnvironment(renderer), 0.03).texture;
    scene.environmentIntensity = 0.45;
    camera = new THREE.PerspectiveCamera(32, 1, 50, 60000);
    controls = new OrbitControls(camera, canvas);
    controls.enableDamping = true;
    controls.maxPolarAngle = Math.PI * 0.48;
    // Hallenlicht: Hauptlicht von schräg oben mit weichen Schatten, Aufhellung von der Seite
    const sun = new THREE.DirectionalLight(0xfff6ec, 3.4);
    sun.position.set(-2600, 5200, 3800);
    sun.castShadow = true;
    sun.shadow.mapSize.set(4096, 4096);
    Object.assign(sun.shadow.camera, { left: -3200, right: 3200, top: 3200, bottom: -3200, near: 500, far: 12000 });
    sun.shadow.bias = -0.0002; sun.shadow.normalBias = 3; sun.shadow.radius = 4;
    const fill = new THREE.DirectionalLight(0xe8f0ff, 0.5); fill.position.set(3000, 2500, -2000);
    scene.add(sun, sun.target, fill, new THREE.HemisphereLight(0xffffff, 0x9aa0a8, 0.25));
    const floor = new THREE.Mesh(new THREE.PlaneGeometry(40000, 40000), new THREE.MeshPhysicalMaterial({ map: concrete(), roughness: 0.7, clearcoat: 0.2, clearcoatRoughness: 0.5, envMapIntensity: 0.5 }));
    floor.rotation.x = -Math.PI / 2; floor.receiveShadow = true;
    scene.add(floor);
    // gelb-schwarze Sicherheitsmarkierung um die Anlage und Hallenwand im Hintergrund
    const tape = new THREE.MeshStandardMaterial({ color: 0xf2c200, roughness: 0.55 });
    for (const [w, d, x, z] of [[6200, 70, 0, -900], [6200, 70, 0, 2600], [70, 3570, -3100, 850], [70, 3570, 3100, 850]]) {
      const m = new THREE.Mesh(new THREE.PlaneGeometry(w, d), tape); m.rotation.x = -Math.PI / 2; m.position.set(x, 1.5, z); m.receiveShadow = true; scene.add(m);
    }
    const wallMat = new THREE.MeshStandardMaterial({ color: 0xe6e8eb, roughness: 0.9 });
    const wall = new THREE.Mesh(new THREE.PlaneGeometry(40000, 9000), wallMat); wall.position.set(0, 4500, -5200); wall.receiveShadow = true; scene.add(wall);
    const sockel = new THREE.Mesh(new THREE.PlaneGeometry(40000, 1200), new THREE.MeshStandardMaterial({ color: 0x8e979f, roughness: 0.8 })); sockel.position.set(0, 600, -5195); scene.add(sockel);
    for (let x = -18000; x <= 18000; x += 6000) scene.add(box(400, 9000, 400, new THREE.MeshStandardMaterial({ color: 0x9aa3ad, roughness: 0.7 }), x, 4500, -5000));
    camera.position.set(-1800, 3200, 5600);
    controls.target.set(0, 900, 300);
    // Nachbearbeitung: Umgebungsverdeckung (GTAO) für Kontaktschatten, Kantenglättung per MSAA
    // ?einfach: ohne Nachbearbeitung (schwache Grafik, Fehlersuche)
    if (/[?&]einfach/.test(location.search)) { composer = { render: () => renderer.render(scene, camera), setSize() {}, setPixelRatio() {} }; return finish(); }
    const rt = new THREE.WebGLRenderTarget(1, 1, { type: THREE.HalfFloatType, samples: 4 });
    composer = new EffectComposer(renderer, rt);
    composer.addPass(new RenderPass(scene, camera));
    try {
      const ao = new GTAOPass(scene, camera, 1, 1);
      ao.updateGtaoMaterial({ radius: 220, distanceExponent: 1.4, thickness: 6, scale: 1.1, samples: 12 });
      ao.blendIntensity = 0.85;
      composer.addPass(ao);
    } catch (e) { /* ältere Grafik: ohne Umgebungsverdeckung */ }
    composer.addPass(new OutputPass());
    finish();
  }
  function finish() {
    new ResizeObserver(resize).observe(view);
    resize();
    canvas.addEventListener('pointerdown', (e) => { down = [e.clientX, e.clientY]; });
    canvas.addEventListener('pointerup', (e) => { if (down && Math.hypot(e.clientX - down[0], e.clientY - down[1]) < 5) pick(e); });
  }
  let down = null;
  function resize() {
    const w = view.clientWidth, h = view.clientHeight;
    renderer.setSize(w, h, false); camera.aspect = w / h; camera.updateProjectionMatrix();
    if (composer) { composer.setPixelRatio(renderer.getPixelRatio()); composer.setSize(w, h); }
  }
  // Klick auf eine Station öffnet ihren Slot
  const ray = new THREE.Raycaster();
  function pick(e) {
    const r = canvas.getBoundingClientRect();
    ray.setFromCamera(new THREE.Vector2((e.clientX - r.left) / r.width * 2 - 1, -(e.clientY - r.top) / r.height * 2 + 1), camera);
    const hit = ray.intersectObjects(world ? world.children : [], true)[0];
    let o = hit && hit.object;
    while (o && !o.userData.slot) o = o.parent;
    if (o) { aktiv = o.userData.slot; renderPanels(); }
  }

  // ---------- Greifer aus dem Konfigurator (eigene Kopie, Stellungen vorab berechnet) ----------
  let G = null;
  function gripperCopy() {
    const g = K.active();
    if (G && G.id === g.id) return G;
    const steps = 20, snaps = [];
    const objs = []; g.root.traverse((o) => objs.push(o));
    for (let i = 0; i <= steps; i++) { g.set(i / steps); g.root.updateMatrixWorld(true); snaps.push(objs.map((o) => o.matrix.clone())); }
    g.set(0);
    g.paint('');                              // Kontaktfarben des Greiftests nicht mitnehmen
    const clone = g.root.clone(true);
    const cobjs = []; clone.traverse((o) => cobjs.push(o));
    cobjs.forEach((o, i) => { if (i > 0) o.matrixAutoUpdate = false; o.castShadow = true; });
    clone.position.set(0, 0, 0); clone.rotation.set(0, 0, 0); clone.visible = true;
    K.restore();
    const holder = new THREE.Group(); holder.add(clone);
    G = { id: g.id, code: g.code, range: g.range, reach: g.reach, length: g.length, holder,
      set(t) { const s = snaps[Math.round(clamp(t, 0, 1) * steps)]; cobjs.forEach((o, i) => { if (i > 0) { o.matrix.copy(s[i]); o.matrixWorldNeedsUpdate = true; } }); } };
    G.set(0);
    return G;
  }

  // ---------- Szene aus dem Zustand aufbauen ----------
  let A = null;     // aktuelle Anlage
  function build() {
    if (!renderer) return;
    if (world) {
      if (G) world.remove(G.holder);            // Greifer-Geometrie gehört dem Konfigurator
      scene.remove(world); world.traverse((o) => { if (o.geometry && !o.userData.keepGeo) o.geometry.dispose(); });
    }
    world = new THREE.Group(); scene.add(world);
    A = null;
    const P = produkt();
    const filled = S.s1 && S.s2 && S.s3;
    $('#sim-empty').hidden = !!filled;
    const g = gripperCopy();
    // Abstände: Gerät in der Mitte, Quelle links, Ziel rechts
    const gap = 420, zLine = 850;          // Roboter steht hinter der Bandlinie, mittig zwischen den Bändern
    const src = S.s1 ? buildSource(S.s1.modul, P, S.s1) : null;
    const tgt = S.s3 ? buildTarget(S.s3.modul, P, S.s3, S.s2 ? S.s2.dreh : 0) : null;
    const pickX = -(gap + (src ? src.half : 300)), placeX = gap + (tgt ? tgt.half : 300);
    let layer = 0;
    // Schild vor der Zone: Nummer, Zone und gewähltes Modul, gut lesbar auf dem Boden
    const sign = (x, z, w, num, color, title, sub, slot) => {
      const cv = document.createElement('canvas'); cv.width = 1024; cv.height = 220;
      const c = cv.getContext('2d');
      c.fillStyle = '#ffffff'; c.beginPath(); c.roundRect(4, 4, 1016, 212, 36); c.fill();
      c.lineWidth = 6; c.strokeStyle = color; c.stroke();
      c.fillStyle = color; c.beginPath(); c.arc(112, 110, 70, 0, Math.PI * 2); c.fill();
      c.fillStyle = '#ffffff'; c.font = '700 86px system-ui, sans-serif'; c.textAlign = 'center'; c.fillText(num, 112, 140);
      c.textAlign = 'left'; c.fillStyle = '#13171d'; c.font = '700 70px system-ui, sans-serif'; c.fillText(title, 214, 98);
      c.fillStyle = '#3a424d'; c.font = '600 54px system-ui, sans-serif'; c.fillText(sub, 216, 174);
      const t = new THREE.CanvasTexture(cv); t.colorSpace = THREE.SRGBColorSpace; t.anisotropy = 8;
      const h = w * 220 / 1024;
      const lab = new THREE.Mesh(new THREE.PlaneGeometry(w, h), new THREE.MeshBasicMaterial({ map: t, transparent: true, toneMapped: false, depthWrite: false, polygonOffset: true, polygonOffsetFactor: -10, polygonOffsetUnits: -10 }));
      lab.rotation.x = -Math.PI / 2; lab.position.set(x, 12, z + h / 2); lab.renderOrder = 10; lab.userData.slot = slot; world.add(lab);
    };
    // Bereiche der beiden Bänder (für die Lage der Schilder)
    const srcW = src ? src.x1 - src.x0 + 300 : 1400, tgtW = tgt ? tgt.x1 - tgt.x0 + 300 : 1400;
    const sC = pickX + (src ? (src.x0 + src.x1) / 2 : 0), tC = placeX + (tgt ? (tgt.x0 + tgt.x1) / 2 : 0);
    let sL = sC - srcW / 2, sR = sC + srcW / 2, tL = tC - tgtW / 2, tR = tC + tgtW / 2;
    if (sR > tL) { const mid = (pickX + placeX) / 2; sR = Math.min(sR, mid); tL = Math.max(tL, mid); }
    const D = 1500, front = zLine + D / 2 + 120;
    // drei Schilder in einer Reihe vor den Zonen, mit Mindestabstand, damit sie sich nicht überdecken
    const sw = 1300, gapS = sw + 120, mid = (sR + tL) / 2;
    const xs = [Math.min((sL + sR) / 2, mid - gapS), mid, Math.max((tL + tR) / 2, mid + gapS)];
    sign(xs[0], front, sw, '1', '#2f7fc1', 'Zuführband', 'Teile kommen an', 'slot1');
    sign(xs[1], front, sw, '2', '#e07b1f', 'Roboter', 'fest montiert', 'slot2');
    sign(xs[2], front, sw, '3', '#2e9d5b', 'Abführband', 'Teile fahren weg', 'slot3');
    if (src) { src.group.position.set(pickX, 0, zLine); src.group.userData.slot = 'slot1'; world.add(src.group); }
    if (tgt) { tgt.group.position.set(placeX, 0, zLine); tgt.group.userData.slot = 'slot3'; world.add(tgt.group); }
    // Erkennung an der Quelle
    if (src && S.s1) {
      const e = S.s1.lage === 'chaotisch' ? 'kamera3d' : 'lichtschranke';
      if (e === 'lichtschranke') for (const s of [-1, 1]) {
        const z = zLine + s * (src.W / 2 + 34);
        world.add(box(24, 90, 40, M.stahl, pickX - 160, src.top - 20, z));
        const p = box(34, 46, 30, M.sensor, pickX - 160, src.top + 40, z); p.userData.slot = 'slot1'; world.add(p);
        world.add(box(6, 10, 10, M.led, pickX - 160 + 18, src.top + 52, z));
      }
      else {
        const hgt = src.top + P.size[1] * 3 + 900;
        world.add(box(60, hgt, 60, M.alu, pickX - 450, hgt / 2, zLine - 700), box(60, 60, 760, M.alu, pickX - 450, hgt, zLine - 340));
        const cam = box(180, 120, 140, M.sensor, pickX - 450, hgt - 80, zLine); cam.userData.slot = 'slot1'; world.add(cam);
        const led = box(120, 12, 100, M.led, pickX - 450, hgt - 146, zLine); world.add(led);
        if (e === 'kamera3d') world.add(box(70, 70, 70, M.led, pickX - 450, hgt - 60, zLine + 110));
      }
    }
    // Gerät
    let device = null;
    if (S.s2) {
      device = buildArm(300);                 // fest montiert auf einem Sockel
      device.group.userData.slot = 'slot2';
      world.add(device.group);
    }
    world.add(g.holder);
    g.holder.visible = !!device;
    // Produkte
    const pg = productGeometry(P.typ, K);
    const pmat = pg.mats || pg.mat;
    const make = () => { const m = new THREE.Mesh(pg.geo, pmat); m.scale.setScalar(P.f); m.castShadow = m.receiveShadow = true; m.userData.keepGeo = P.typ === 'eigen'; m.userData.slot = 'produkt'; world.add(m); return m; };
    const pool = []; const take = (i) => { while (pool.length <= i) pool.push(make()); return pool[i]; };
    // höchste Kante, über die das Teil hinweg muss: die Teile auf den Bändern
    A = { P, src, tgt, device, g, pickX, placeX, zLine, take, pool, clear: BAND_TOP + P.size[1] };
    // Kamera nur nachführen, wenn sich die Anlage selbst ändert (nicht bei jedem Regler)
    const layout = [S.produkt.typ, S.s1 && S.s1.modul, S.s2 && S.s2.modul, S.s3 && S.s3.modul].join();
    if (layout !== lastLayout) { lastLayout = layout; fitCamera(); }
    frameState(cyc);
    evaluate();
  }
  let lastLayout = '';
  function fitCamera() {
    const bb = new THREE.Box3();
    world.children.forEach((o) => { if (o.isMesh && o.geometry.type === 'PlaneGeometry' && o.renderOrder < 10) return; bb.expandByObject(o); });
    if (bb.isEmpty()) return;
    const c = bb.getCenter(new THREE.Vector3()), sz = bb.getSize(new THREE.Vector3());
    const r = Math.max(sz.x, sz.z * 1.3, sz.y * 1.6) * 0.52 / Math.tan(THREE.MathUtils.degToRad(camera.fov / 2)) / Math.max(1, camera.aspect * 0.75);
    controls.target.set(c.x, Math.min(c.y, 900), c.z);
    camera.position.set(c.x - r * 0.28, Math.min(c.y, 900) + r * 0.55, c.z + r * 0.85);
    controls.update();
  }

  // ---------- Ablauf ----------
  let running = false, cyc = 0, lastNow = 0;   // cyc: Fortschritt in Greifzyklen
  const tcp = new THREE.Vector3(), flange = new THREE.Vector3(), tmp = new THREE.Vector3();
  const off0 = new THREE.Vector3(), pP = new THREE.Vector3(), pQ = new THREE.Vector3(), pN = new THREE.Vector3();
  const cycleLen = () => clamp(lastEval ? lastEval.takt : 3, 0.9, 30);
  // Lage des n-ten Produkts an der Quelle (Unterkante Mitte) und seine Drehung
  function sourcePos(n, k, a) {
    const { src, P, pickX, zLine } = A;
    const chaos = S.s1.lage === 'chaotisch';
    const yaw = chaos ? (rnd(n + k) - 0.5) * 1.2 : 0, off = chaos ? (rnd(n + k + 7) - 0.5) * 0.3 * P.size[2] : 0;
    const D = Math.max(P.size[0], P.size[2]) + 200;
    if (k * D - D * a > src.len - P.size[0] / 2 - 150) return null;   // nur so viele, wie aufs Band passen
    return { p: new THREE.Vector3(pickX - k * D + D * a, src.top, zLine + off), yaw };
  }
    // Ablageplatz des n-ten Produkts
  function targetPos(n) {
    const { tgt, placeX, zLine } = A;
    return { p: new THREE.Vector3(placeX, tgt.top, zLine), i: 0, total: 1 };
  }
    // Band um eine Strecke (mm) weiterbewegen: Gurt-Textur (eine Kachel = 300 mm) bzw. Rollen (r = 28 mm)
  function beltMove(c, dist) {
    if (c.tex) c.tex.offset.x = -(dist / 300) % 1;
  }
  const speedOf = (v) => ({ langsam: 0.6, mittel: 1, schnell: 1.6 }[v] || 1);

  function frameState(c) {
    if (!A) return;
    const { src, tgt, device, g, P } = A;
    if (!src || !tgt || !device) {
      // unvollständige Anlage: Teile ruhen an der Quelle, Greifer schwebt
      A.pool.forEach((m) => { m.visible = false; });
      if (src) { const s = sourcePos(0, 0, 0); if (s) { const m = A.take(0); m.visible = true; m.position.copy(s.p); } }
      return;
    }
    const T = cycleLen();
    const n = Math.floor(c), p = c - n, time = c * T;
    const hub = Number(S.s2.hub) * 1000;
    const r = g.range;
    let inside = !(r.aussen && P.griff >= r.aussen[0] && P.griff <= r.aussen[1]) && r.innen && P.innen && P.innen >= r.innen[0] && P.innen <= r.innen[1];
    const w = inside ? P.innen : P.griff, rr = inside ? r.innen : r.aussen;
    let tGrip = clamp((rr[1] - w) / Math.max(1, rr[1] - rr[0]), 0, 1);
    const depth = Math.min(P.size[1] * 0.6, g.reach * 0.8);
    // Greifpunkt relativ zum Teil (Mitte Unterkante). Eigenes Teil: genau die Greifposition aus dem
    // Konfigurator (Höhe, links/rechts, vorne/hinten, innen/außen, Schließgrad)
    off0.set(0, P.size[1] - depth, 0);
    const pose = P.typ === 'eigen' && K.part() ? K.part().pose : null;
    if (pose) {
      off0.set(pose.x, pose.y, pose.z).multiplyScalar(P.f);
      inside = pose.inside;
      if (pose.state === 'gegriffen' && pose.gripper === g.id) tGrip = pose.t;
      else if (inside && r.innen) tGrip = clamp((r.innen[1] - P.griff) / Math.max(1, r.innen[1] - r.innen[0]), 0, 1);
    }
    const off = (yaw, v) => v.copy(off0).applyAxisAngle(UP, yaw);
    // Phasen eines Zyklus
    const down1 = seg(p, 0, 0.14), close = seg(p, 0.14, 0.24), up1 = seg(p, 0.24, 0.38), move = seg(p, 0.38, 0.62);
    const down2 = seg(p, 0.62, 0.75), open = seg(p, 0.76, 0.84), up2 = seg(p, 0.84, 0.9), back = seg(p, 0.9, 1);
    const sp = sourcePos(n, 0, 0) || { p: new THREE.Vector3(A.pickX, src.top, A.zLine), yaw: 0 };
    const tp = targetPos(n);
    const dreh = THREE.MathUtils.degToRad(Number(S.s2.dreh) || 0);
    const PP = off(sp.yaw, pP).add(sp.p), QQ = off(dreh, pQ).add(tp.p);   // Greifpunkt an Aufnahme und Ablage
    // immer dieselbe Fahrhöhe: Teilunterkante mit Abstand über der höchsten Kante, dazu die Hubhöhe
    const safe = Math.max(PP.y, QQ.y, A.clear + off0.y + 40) + hub;
    let x, y, z, yaw;
    if (p < 0.38) { x = PP.x; z = PP.z; y = safe + (PP.y - safe) * down1 + (safe - PP.y) * up1; yaw = sp.yaw; }
    else if (p < 0.62) { x = THREE.MathUtils.lerp(PP.x, QQ.x, move); z = THREE.MathUtils.lerp(PP.z, QQ.z, move); y = safe; yaw = THREE.MathUtils.lerp(sp.yaw, dreh, move); }
    else if (p < 0.9) { x = QQ.x; z = QQ.z; y = safe + (QQ.y - safe) * down2 + (safe - QQ.y) * up2; yaw = dreh; }
    else {
      const nx = sourcePos(n + 1, 0, 0) || sp;
      const NN = off(nx.yaw, pN).add(nx.p);
      x = THREE.MathUtils.lerp(QQ.x, NN.x, back); z = THREE.MathUtils.lerp(QQ.z, NN.z, back);
      y = safe; yaw = THREE.MathUtils.lerp(dreh, nx.yaw, back);
    }
    g.set(inside ? 1 - (1 - tGrip) * close * (1 - open) : tGrip * close * (1 - open));
    flange.set(x, y + g.length, z);
    device.reach(flange);
    // Greifer hängt fest am Flansch, so wie das Gerät tatsächlich steht (auch am Rand der Reichweite)
    device.tip(tcp); tcp.y -= g.length;
    x = tcp.x; y = tcp.y; z = tcp.z;
    g.holder.position.copy(tcp); g.holder.rotation.y = yaw;
    // Teile an der Quelle
    let used = 0;
    const held = p >= 0.24 && p < 0.8;
    const placed = p >= 0.8;
    const arrive = seg(p, 0.3, 1);
    for (let k = (p >= 0.24 ? 1 : 0); k < 6; k++) {
      const s = sourcePos(n, k, arrive);
      if (!s) break;
      const m = A.take(used++); m.visible = true; m.position.copy(s.p); m.rotation.set(0, s.yaw, 0);
    }
    // gegriffenes Teil
    if (held) {
      const m = A.take(used++); m.visible = true;
      m.position.copy(tcp).sub(off(yaw, pN)); m.rotation.set(0, yaw, 0);
    }
    // abgelegte Teile fahren auf dem Abführband weg
    const vT = speedOf(S.s3.band) * 260;   // mm/s auf dem Band
    for (let k = placed ? 0 : 1; k < 8; k++) {
      const age = (placed ? (p - 0.8) * T : (p + 0.2) * T) + (k - (placed ? 0 : 1)) * T;
      const xx = A.placeX + age * vT;
      if (xx > A.placeX + tgt.x1 - 100) break;
      const m = A.take(used++); m.visible = true; m.position.set(xx, tgt.top, A.zLine); m.rotation.set(0, dreh, 0);
    }
    for (let i = used; i < A.pool.length; i++) A.pool[i].visible = false;
    // Bänder laufen genau so weit wie die Teile darauf – und stehen, wenn die Teile stehen
    beltMove(src, (n + arrive) * (Math.max(P.size[0], P.size[2]) + 200));
    beltMove(tgt, time * vT);
  }

  // ---------- Kennzahlen ----------
  let lastEval = null;
  // Tempo: Regler 0…100 (logarithmisch) ↔ 120…6000 Teile pro Stunde; ohne eigene Wahl der Richtwert des Geräts
  const TPH_MIN = 120, TPH_MAX = 6000;
  const toTph = (v) => TPH_MIN * Math.pow(TPH_MAX / TPH_MIN, v / 100);
  const fromTph = (t) => 100 * Math.log(clamp(t, TPH_MIN, TPH_MAX) / TPH_MIN) / Math.log(TPH_MAX / TPH_MIN);
  const tempo = $('#sim-tempo');
  tempo.addEventListener('input', () => { S.tph = toTph(Number(tempo.value)); evaluate(); });
  function evaluate() {
    const ready = S.s1 && S.s2 && S.s3;
    $('#sim-run').disabled = !ready; tempo.disabled = !ready;
    if (!ready) { lastEval = null; $('#sim-takt').textContent = $('#sim-stunde').textContent = '–'; return; }
    const tph = S.tph || kennzahlen(S.s2).stunde;
    const e = lastEval = { takt: 3600 / tph, stunde: tph };
    if (document.activeElement !== tempo) tempo.value = fromTph(tph);
    $('#sim-takt').textContent = `${fmt(e.takt, e.takt < 10 ? 1 : 0)} s`;
    $('#sim-stunde').textContent = fmt(tph >= 1000 ? Math.round(tph / 10) * 10 : Math.round(tph));
    mail(produkt(), e);
  }
  function mail(P, e) {
    const L = (o, list, lib) => o ? `${lib[o.modul].name} (` + list.filter((p) => !p.when || p.when(o.modul, o)).map((p) => `${p.label}: ${label(p, o[p.k])}`).join(', ') + ')' : '–';
    const body = ['Guten Tag,', '', 'über den Greifer-Simulator habe ich folgende Anlage zusammengestellt:', '',
      `Greifer: ${K.active().code}`, `Produkt: ${P.name}, ca. ${fmt(P.size[0])} × ${fmt(P.size[1])} × ${fmt(P.size[2])} mm`,
      `1 Zuführband: ${L(S.s1, P1, QUELLEN)}`, `2 Roboter: ${L(S.s2, P2, GERAETE_UI)}`, `3 Abführband: ${L(S.s3, P3, ZIELE)}`, '',
      `Simulation: Taktzeit ca. ${fmt(e.takt, 1)} s, ca. ${fmt(e.stunde)} Teile pro Stunde.`, '',
      `Link zur Anlage: ${shareUrl()}`, '', 'Bitte senden Sie mir ein Angebot.'].join('\n');
    $('#sim-anfrage').href = `mailto:${sec.dataset.mail}?subject=${encodeURIComponent('Anfrage über den Greifer-Simulator')}&body=${encodeURIComponent(body)}`;
  }
  const label = (p, v) => p.opts ? (p.opts.find((o) => o[0] === String(v)) || ['', v])[1] : `${fmt(Number(v), p.dec || 0)}${p.unit ? ' ' + p.unit : ''}`;
  function shareUrl() {
    const data = { g: K.active().id, ...S };
    return location.href.split('#')[0] + '#sim=' + btoa(unescape(encodeURIComponent(JSON.stringify(data))));
  }

  // ---------- Bedienoberfläche ----------
  $('#sim-reset').addEventListener('click', () => { applyTemplate(); lastLayout = ''; build(); renderPanels(); });

  function renderPanels() {
    const P = produkt();
    const card = (slot, num, title, val, info) => `<button type="button" class="sim__card${aktiv === slot ? ' is-active' : ''}${val ? '' : ' is-empty'}" data-slot="${slot}">
      <span class="sim__num">${num}</span><span><span class="sim__ct">${title}</span><strong>${val || 'Modul wählen'}</strong><small>${info || ''}</small></span></button>`;
    $('#sim-slots').innerHTML =
      card('produkt', '◆', 'Produkt', P.name, `${fmt(P.size[0])} × ${fmt(P.size[1])} × ${fmt(P.size[2])} mm` +
        (P.typ === 'eigen' ? (K.part() && K.part().pose ? ' · Greifpunkt aus dem Konfigurator' : ' · Greifpunkt: mittig von oben') : '')) +
      card('slot1', '1', 'Zuführband', S.s1 && QUELLEN[S.s1.modul].name, S.s1 && QUELLEN[S.s1.modul].info) +
      card('slot2', '2', 'Roboter', S.s2 && GERAETE_UI[S.s2.modul].name, S.s2 && `${K.active().code} am Roboter, fest montiert`) +
      card('slot3', '3', 'Abführband', S.s3 && ZIELE[S.s3.modul].name, S.s3 && ZIELE[S.s3.modul].info);
    $('#sim-slots').querySelectorAll('[data-slot]').forEach((b) => b.addEventListener('click', () => { aktiv = b.dataset.slot; renderPanels(); }));
    $('#sim-greifer').textContent = `${K.active().code} (aus dem Konfigurator)`;
    // Schrittanzeige
    const step = running ? 2 : (S.s1 && S.s2 && S.s3) ? 1 : 0;
    $('#sim-steps').querySelectorAll('li').forEach((li, i) => { li.className = i < step ? 'is-done' : i === step ? 'is-current' : ''; });
    // Parameter des aktiven Slots
    const box = $('#sim-params');
    if (aktiv === 'produkt') {
      box.innerHTML = `<h3>Produkt</h3>
        <div class="field"><label for="sim-p-typ">Produktart</label><select id="sim-p-typ">${Object.entries(PRODUKTE).map(([k, v]) => `<option value="${k}"${k === S.produkt.typ ? ' selected' : ''}>${v.name}${v.branche ? ' · ' + v.branche : ''}</option>`).join('')}</select></div>
        <div class="field"><label for="sim-p-gr">Größe <output>${S.produkt.groesse} %</output></label><input id="sim-p-gr" type="range" min="50" max="200" step="5" value="${S.produkt.groesse}"></div>
        <p class="muted sim__small">${P.typ === 'eigen' ? (K.part() && K.part().pose ? 'Maße und Greifpunkt kommen aus dem Konfigurator oben.'
          : 'Die Maße kommen aus dem Konfigurator oben. Greifpunkt noch nicht festgelegt: der Greifer fasst mittig von oben. <a href="#greifpunkt">Greifpunkt festlegen</a>') : PRODUKTE[P.typ].info}</p>`;
      box.querySelector('#sim-p-typ').addEventListener('change', (e) => { S.produkt = { typ: e.target.value, groesse: 100 }; build(); renderPanels(); });
      const gr = box.querySelector('#sim-p-gr');
      gr.addEventListener('input', () => { gr.previousElementSibling.querySelector('output').textContent = gr.value + ' %'; });
      gr.addEventListener('change', () => { S.produkt.groesse = Number(gr.value); build(); renderPanels(); });
      return;
    }
    const lib = aktiv === 'slot1' ? QUELLEN : aktiv === 'slot2' ? GERAETE_UI : ZIELE;
    const plist = aktiv === 'slot1' ? P1 : aktiv === 'slot2' ? P2 : P3;
    const key = aktiv === 'slot1' ? 's1' : aktiv === 'slot2' ? 's2' : 's3';
    const cur = S[key];
    const title = { slot1: '1 · Zuführband', slot2: '2 · Roboter', slot3: '3 · Abführband' }[aktiv];
    const many = Object.keys(lib).length > 1;
    box.innerHTML = `<h3>${title}</h3>` + (many ? `<div class="sim__tiles">${Object.entries(lib).map(([k, v]) =>
      `<button type="button" class="sim__tile${cur && cur.modul === k ? ' is-active' : ''}" data-modul="${k}"><img alt="" data-thumb="${aktiv}:${k}"><strong>${v.name}</strong><small>${v.info}</small></button>`).join('')}</div>`
      : `<p class="muted sim__small">${cur ? lib[cur.modul].name + ': ' + lib[cur.modul].info : ''}</p>`) +
      (cur ? `<div class="sim__fields">${plist.filter((p) => !p.when || p.when(cur.modul, cur)).map((p) => p.opts
        ? `<div class="field"><label for="sim-f-${p.k}">${p.label}</label><select id="sim-f-${p.k}" data-k="${p.k}">${p.opts.map(([v, l]) => `<option value="${v}"${String(cur[p.k]) === v ? ' selected' : ''}>${l}</option>`).join('')}</select></div>`
        : `<div class="field"><label for="sim-f-${p.k}">${p.label} <output>${label(p, cur[p.k])}</output></label><input id="sim-f-${p.k}" data-k="${p.k}" type="range" min="${p.range[0]}" max="${p.range[1]}" step="${p.range[2]}" value="${cur[p.k]}"></div>`).join('')}</div>` : '');
    box.querySelectorAll('[data-modul]').forEach((b) => b.addEventListener('click', () => {
      const m = b.dataset.modul;
      S[key] = { ...defaults(plist), ...(S[key] || {}), modul: m };
      if (key === 's2') S.tph = null;
      build(); renderPanels();   // Lauf/Halt bleibt, wie es war
    }));
    box.querySelectorAll('[data-k]').forEach((el) => {
      const p = plist.find((x) => x.k === el.dataset.k);
      el.addEventListener('input', () => { if (p.range) el.previousElementSibling.querySelector('output').textContent = label(p, el.value); });
      el.addEventListener('change', () => { cur[p.k] = p.range ? Number(el.value) : el.value; build(); renderPanels(); });
    });
    thumbs(box);
  }

  // kleine 3D-Vorschaubilder der Module (einmal gerendert, dann zwischengespeichert)
  const thumbCache = new Map();
  let thumbR = null;
  function thumbs(boxEl) {
    boxEl.querySelectorAll('[data-thumb]').forEach((img) => {
      const k = img.dataset.thumb;
      if (!thumbCache.has(k)) {
        try { thumbCache.set(k, renderThumb(k)); } catch (e) { thumbCache.set(k, ''); }
      }
      if (thumbCache.get(k)) img.src = thumbCache.get(k);
    });
  }
  function renderThumb(k) {
    const [slot, m] = k.split(':');
    if (!thumbR) { thumbR = new THREE.WebGLRenderer({ antialias: true, preserveDrawingBuffer: true }); thumbR.setSize(200, 130); thumbR.toneMapping = THREE.ACESFilmicToneMapping; }
    const sc = new THREE.Scene(); sc.background = new THREE.Color(0xeef1f4);
    sc.add(new THREE.HemisphereLight(0xffffff, 0xbfc6cd, 1.2)); const l = new THREE.DirectionalLight(0xffffff, 1.4); l.position.set(-2, 4, 3); sc.add(l);
    const P = { size: [300, 200, 300] };
    let grp;
    if (slot === 'slot1') grp = buildSource(m, P).group;
    else if (slot === 'slot3') grp = buildTarget(m, P, defaults(P3)).group;
    else { const a = buildArm(300); a.reach(new THREE.Vector3(900, 900, 0)); grp = a.group; }
    sc.add(grp);
    const bb = new THREE.Box3().setFromObject(grp), c = bb.getCenter(new THREE.Vector3()), s = bb.getSize(new THREE.Vector3()).length();
    const cam = new THREE.PerspectiveCamera(30, 200 / 130, 10, 100000);
    cam.position.set(c.x - s * 0.9, c.y + s * 0.55, c.z + s * 1.25); cam.lookAt(c);
    thumbR.render(sc, cam);
    const url = thumbR.domElement.toDataURL('image/png');
    sc.traverse((o) => { if (o.geometry) o.geometry.dispose(); });
    return url;
  }

  // ---------- Start / Stop ----------
  const runBtn = $('#sim-run');
  runBtn.addEventListener('click', () => {
    running = !running;
    runBtn.textContent = running ? 'Simulation anhalten' : 'Simulation fortsetzen';
    renderPanels();
  });
  $('#sim-teilen').addEventListener('click', async () => {
    const url = shareUrl();
    try { await navigator.clipboard.writeText(url); $('#sim-teilen').textContent = 'Link kopiert'; }
    catch (e) { window.prompt('Link zur Anlage:', url); }
    history.replaceState(null, '', url);
    setTimeout(() => { $('#sim-teilen').textContent = 'Anlage teilen'; }, 2500);
  });

  let visible = false;
  new IntersectionObserver((e) => { visible = e[0].isIntersecting; }).observe(view);
  function loop() {
    requestAnimationFrame(loop);
    if (!visible || ui.hidden) return;
    if (G && G.id !== K.active().id && K.active().ready) { G = null; build(); renderPanels(); }
    const now = performance.now(), dt = Math.min(0.1, (now - (lastNow || now)) / 1000); lastNow = now;
    if (running) cyc += dt / cycleLen();
    frameState(cyc);
    controls.update();
    composer.render();
  }

  async function open(state) {
    if (!started) { started = true; await loadABB(K.base || ''); init3d(); loop(); }
    if (state) {
      if (state.g && state.g !== K.active().id) await K.select(state.g);
      for (const k of ['produkt', 's1', 's2', 's3', 'tph']) if (k in state) S[k] = state[k];
      for (const k of ['s1', 's2', 's3']) if (S[k] && ALT[S[k].modul]) S[k].modul = ALT[S[k].modul];
    } else applyTemplate();
    G = null; build(); renderPanels();
    running = true; runBtn.textContent = 'Simulation anhalten'; cyc = 0;
  }
  // Neues oder geändertes Teil im Konfigurator: der Simulator arbeitet damit weiter
  K.onPart(() => { if (!started) return; if (S.produkt.typ !== 'eigen') S.produkt = { typ: 'eigen', groesse: 100 }; build(); renderPanels(); });
  // Simulator ist immer offen; die 3D-Szene startet, sobald der Abschnitt in die Nähe kommt
  let shared = null;
  if (location.hash.startsWith('#sim=')) {
    try { shared = JSON.parse(decodeURIComponent(escape(atob(location.hash.slice(5))))); } catch (e) { /* ungültiger Link: normal starten */ }
  }
  if (shared) open(shared).then(() => sec.scrollIntoView());
  else {
    const io = new IntersectionObserver((e) => { if (e[0].isIntersecting) { io.disconnect(); open(); } }, { rootMargin: '600px 0px' });
    io.observe(sec);
  }
  window.__sim = { dbg: () => ({ renderer, scene, composer }), open, S, belts: () => ({ src: A.src.tex ? A.src.tex.offset.x : A.src.rollers && A.src.rollers[0] ? A.src.rollers[0].rotation.y : null, tgt: A.tgt.tex ? A.tgt.tex.offset.x : null }), frame: (t) => { cyc = t / cycleLen(); running = false; }, eval: () => lastEval, A: () => A, gap: () => { const v = new THREE.Vector3(); A.device.tip(v); const bb = new THREE.Box3().setFromObject(A.g.holder); return { top: bb.max.y - v.y, dx: Math.hypot((bb.min.x + bb.max.x) / 2 - v.x, (bb.min.z + bb.max.z) / 2 - v.z), want: v.toArray().map(Math.round) }; }, build: () => { build(); renderPanels(); } };
}
