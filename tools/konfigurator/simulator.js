// Greifer-Simulator: Der Kunde baut aus drei Stationen eine kleine Anlage (Ankunft, Hebevorgang,
// Weitertransport) und sieht seinen Greifer aus dem Konfigurator mit seinem Produkt im Kreislauf.
// Keine Physik und keine Bewertung, ob der Greifer das Teil hält: der Simulator zeigt den Ablauf.
// Einheit: Millimeter, Y nach oben. Produkte fließen in +X: Quelle links, Ziel rechts, Gerät dahinter.
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
import { RoomEnvironment } from 'three/examples/jsm/environments/RoomEnvironment.js';
import { mergeGeometries } from 'three/examples/jsm/utils/BufferGeometryUtils.js';
import { kennzahlen } from './sim-regeln.js';

const fmt = (v, d = 0) => v.toLocaleString('de-DE', { maximumFractionDigits: d, minimumFractionDigits: d });
const clamp = THREE.MathUtils.clamp;
const ease = (x) => x * x * (3 - 2 * x);
const seg = (p, a, b) => ease(clamp((p - a) / (b - a), 0, 1));
const rnd = (i) => { const x = Math.sin(i * 127.1 + 311.7) * 43758.5453; return x - Math.floor(x); };   // fester Zufall je Teil

// ---------------------------------------------------------------- Materialien
const M = {
  stahl: new THREE.MeshStandardMaterial({ color: 0xb9c1ca, metalness: 0.8, roughness: 0.35 }),
  alu: new THREE.MeshStandardMaterial({ color: 0xd3d8de, metalness: 0.6, roughness: 0.4 }),
  dunkel: new THREE.MeshStandardMaterial({ color: 0x2c3238, metalness: 0.2, roughness: 0.7 }),
  gurt: new THREE.MeshStandardMaterial({ color: 0x353b42, roughness: 0.85 }),
  modul: new THREE.MeshStandardMaterial({ color: 0xf2f4f6, roughness: 0.6 }),
  rolle: new THREE.MeshStandardMaterial({ color: 0xc9d0d8, metalness: 0.9, roughness: 0.25 }),
  holz: new THREE.MeshStandardMaterial({ color: 0xc8a36e, roughness: 0.85 }),
  klt: new THREE.MeshStandardMaterial({ color: 0x4f6f8f, roughness: 0.6 }),
  presse: new THREE.MeshStandardMaterial({ color: 0x4a6b8a, metalness: 0.3, roughness: 0.55 }),
  roboter: new THREE.MeshStandardMaterial({ color: 0xf1f2f4, roughness: 0.45 }),
  gelenk: new THREE.MeshStandardMaterial({ color: 0x0061aa, metalness: 0.3, roughness: 0.45 }),
  zaun: new THREE.MeshStandardMaterial({ color: 0xf2b230, roughness: 0.5 }),
  gitter: new THREE.MeshStandardMaterial({ color: 0x8a939c, transparent: true, opacity: 0.18, side: THREE.DoubleSide, depthWrite: false }),
  papier: new THREE.MeshStandardMaterial({ color: 0xe9dcc3, roughness: 0.9 }),
  schale: new THREE.MeshStandardMaterial({ color: 0x3a4148, roughness: 0.5 }),
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
// Quelle/Ziel: Aufnahme- bzw. Ablagepunkt liegt im lokalen Ursprung, Förderrichtung +X.
// Jedes Modul: group, top (Höhe der Auflage), half (halbe Länge in X für den Abstand zum Gerät), flow (Band ja/nein)
const FLOW = ['gurtband', 'modulband', 'rollenbahn'];
const QUELLEN = {
  gurtband: { name: 'Gurtförderband', info: 'Allround, Kartons, Teile' },
  modulband: { name: 'Modulband (weiß)', info: 'Lebensmittel, hygienisch' },
  rollenbahn: { name: 'Rollenbahn', info: 'Reifen, KLT, Kisten' },
  palette: { name: 'Palette (Depalettieren)', info: 'Gestapelte Ware, Reifen' },
  klt: { name: 'Kiste / KLT', info: 'Griff in die Kiste' },
  presse: { name: 'Maschine: Presse', info: 'Blechteile, Automobil' },
};
const ZIELE = {
  gurtband: { name: 'Gurtförderband', info: 'Abtransport' },
  modulband: { name: 'Modulband (weiß)', info: 'Lebensmittel, hygienisch' },
  rollenbahn: { name: 'Rollenbahn', info: 'Reifen, KLT, Kisten' },
  palette: { name: 'Palettierung mit Lagenbild', info: 'Reifen, Kartons' },
  schalenband: { name: 'Band mit Schalen', info: 'Lebensmittel' },
  karton: { name: 'Karton / Verpackung', info: 'Endverpackung' },
  klt: { name: 'KLT auf Rollenbahn', info: 'Kleinteile, Blechteile' },
};
const GERAETE_UI = {
  roboter6: { name: '6-Achs-Industrieroboter', info: 'Schwere Teile, Palettieren' },
  linear: { name: 'Roboter auf Linearachse', info: '7. Achse für lange Wege' },
  delta: { name: 'Delta-Roboter', info: 'Sehr schnell, leichte Teile' },
  portal: { name: 'Linearportal', info: 'Maschinenentnahme, große Wege' },
};

function conveyor(kind, len, width, dir, opts = {}) {
  // Band von x = 0 bis x = len·dir (dir = −1: Quelle, endet am Ursprung; +1: Ziel, beginnt dort)
  const g = new THREE.Group();
  const top = kind === 'rollenbahn' ? 700 : kind === 'modulband' ? 820 : 800;
  const x0 = dir < 0 ? -len + 150 : -150, x1 = dir < 0 ? 150 : len - 150, L = x1 - x0, cx = (x0 + x1) / 2;
  const w = width;
  let tex = null;
  if (kind === 'rollenbahn') {
    for (let x = x0 + 40; x < x1; x += 90) { const r = cyl(28, w, M.rolle, 16); r.rotation.x = Math.PI / 2; r.position.set(x, top - 28, 0); g.add(r); }
  } else {
    tex = kind === 'modulband' ? stripes('#f4f6f8', '#d9dee3', 6) : stripes('#3a4047', '#2c3137', 3);
    tex.repeat.set(L / 300, 1);
    const belt = box(L, 12, w, new THREE.MeshStandardMaterial({ map: tex, roughness: kind === 'modulband' ? 0.6 : 0.85 }), cx, top - 6, 0);
    g.add(belt);
    g.add(box(L, 60, w - 20, M.dunkel, cx, top - 45, 0));
  }
  for (const s of [-1, 1]) g.add(box(L, 70, 30, M.alu, cx, top - 25, s * (w / 2 + 15)));
  for (let x = x0 + 100; x < x1; x += Math.max(600, L / 3)) for (const s of [-1, 1]) g.add(box(40, top - 60, 40, M.alu, x, (top - 60) / 2, s * (w / 2 + 10)));
  g.add(box(40, top - 60, 40, M.alu, x1 - 60, (top - 60) / 2, w / 2 + 10), box(40, top - 60, 40, M.alu, x1 - 60, (top - 60) / 2, -w / 2 - 10));
  return { group: g, top, tex, half: 150, flow: true, len: L, dir, x0, x1 };
}

function pallet() {
  const g = new THREE.Group();
  for (const z of [-350, 0, 350]) g.add(box(1200, 22, 100, M.holz, 0, 133, z));
  for (const x of [-550, 0, 550]) for (const z of [-350, 0, 350]) g.add(box(145, 78, 100, M.holz, x, 83, z));
  for (const x of [-550, 0, 550]) g.add(box(100, 22, 800, M.holz, x, 33, 0));
  for (const x of [-500, -250, 0, 250, 500]) g.add(box(100, 22, 800, M.holz, x, 11, 0));
  return g;
}

// Lagenbild: cols × rows Positionen um den Ursprung, Abstand aus der Produktgröße
function pattern(spec, size) {
  const [c, r] = (spec || '1x1').split('x').map(Number);
  const dx = size[0] + 30, dz = size[2] + 30, pts = [];
  for (let i = 0; i < c; i++) for (let j = 0; j < r; j++) pts.push([(i - (c - 1) / 2) * dx, (j - (r - 1) / 2) * dz]);
  return { pts, w: c * dx, d: r * dz };
}

function buildSource(id, P, p1) {
  const size = P.size;
  if (FLOW.includes(id)) return conveyor(id, 2400, Math.max(420, size[2] + 160), -1);
  if (id === 'palette') {
    const g = pallet();
    const pat = pattern(size[0] > 500 ? '2x1' : size[0] > 300 ? '2x2' : '3x2', size);
    return { group: g, top: 144, half: 650, flow: false, stack: { pat, lagen: 3, zwischen: p1.lage === 'lagen' } };
  }
  if (id === 'klt') {
    const g = new THREE.Group();
    const W = Math.max(600, size[0] * 2 + 80), D = Math.max(400, size[2] * 2 + 80), H = 280;
    g.add(box(W + 120, 600, D + 120, M.alu, 0, 300, 0));
    for (const [w, d, x, z] of [[W, 8, 0, D / 2], [W, 8, 0, -D / 2], [8, D, W / 2, 0], [8, D, -W / 2, 0]]) g.add(box(w, H, d, M.klt, x, 600 + H / 2, z));
    g.add(box(W, 8, D, M.klt, 0, 604, 0));
    return { group: g, top: 608, half: W / 2 + 60, flow: false, bin: { W, D } };
  }
  // Presse links daneben; das fertige Teil wird auf einen Ablagetisch im Ursprung ausgegeben,
  // dort greift das Gerät – so fährt nichts in die Maschine hinein
  const g = new THREE.Group();
  const W = Math.max(1100, size[0] + 500), D = Math.max(800, size[2] + 300);
  const TW = Math.max(500, size[0] + 160), TD = Math.max(500, size[2] + 160);
  const px = -(TW / 2 + 120 + (W + 300) / 2);
  g.add(box(W + 300, 900, D, M.presse, px, 450, 0));
  for (const s of [-1, 1]) g.add(box(260, 1500, D, M.presse, px + s * (W / 2 + 20), 1650, 0));
  g.add(box(W + 300, 500, D, M.presse, px, 2600, 0));
  const ram = box(W - 60, 300, D - 80, M.stahl, px, 1900, 0);
  g.add(ram, box(W - 100, 60, D - 120, M.dunkel, px, 930, 0));
  g.add(box(TW, 60, TD, M.stahl, 0, 930, 0), box(TW - 60, 900, TD - 60, M.alu, 0, 450, 0));
  return { group: g, top: 960, half: TW / 2 + 60, flow: false, ram };
}

function buildTarget(id, P, p3, dreh = 0) {
  // bei 90° gedrehter Ablage liegen Länge und Breite vertauscht im Behälter
  const size = Number(dreh) % 180 === 90 ? [P.size[2], P.size[1], P.size[0]] : P.size;
  if (FLOW.includes(id)) return conveyor(id, 2400, Math.max(420, size[2] + 160), 1);
  const pat = pattern(p3.lagenbild, size);
  pat.d += 20; pat.w += 20;   // etwas Luft zur Behälterwand
  if (id === 'palette') {
    return { group: pallet(), top: 144, half: Math.max(650, pat.w / 2 + 50), flow: false, stack: { pat, lagen: Number(p3.lagen) || 1, zwischen: p3.zwischen === 'ja' } };
  }
  if (id === 'schalenband') {
    const c = conveyor('modulband', 2400, Math.max(420, pat.d + 120), 1);
    c.trays = { pat, w: pat.w + 40, d: pat.d + 40 };
    return c;
  }
  if (id === 'karton') {
    const g = new THREE.Group();
    const W = pat.w + 40, D = pat.d + 40, H = Math.max(120, size[1] * (Number(p3.lagen) || 1) + 40);
    g.add(box(W + 300, 700, D + 300, M.alu, 0, 350, 0));
    const cm = new THREE.MeshStandardMaterial({ color: 0xb98a55, roughness: 0.9 });
    for (const [w, d, x, z] of [[W, 6, 0, D / 2], [W, 6, 0, -D / 2], [6, D, W / 2, 0], [6, D, -W / 2, 0]]) g.add(box(w, H, d, cm, x, 700 + H / 2, z));
    g.add(box(W, 6, D, cm, 0, 703, 0));
    for (const s of [-1, 1]) { const flap = box(W, 4, D * 0.45, cm, 0, 700 + H, s * (D / 2 + D * 0.2)); flap.rotation.x = s * 0.5; g.add(flap); }
    return { group: g, top: 706, half: W / 2 + 200, flow: false, stack: { pat, lagen: Number(p3.lagen) || 1, zwischen: p3.zwischen === 'ja' } };
  }
  // KLT auf kurzer Rollenbahn
  const g = new THREE.Group();
  const W = pat.w + 60, D = pat.d + 60, H = Math.max(200, size[1] * (Number(p3.lagen) || 1) + 60);
  for (let x = -W / 2 - 150; x < W / 2 + 150; x += 90) { const r = cyl(28, D + 120, M.rolle, 16); r.rotation.x = Math.PI / 2; r.position.set(x, 572, 0); g.add(r); }
  for (const s of [-1, 1]) g.add(box(W + 300, 70, 30, M.alu, 0, 575, s * (D / 2 + 75)), box(40, 540, 40, M.alu, -W / 2 - 100, 270, s * (D / 2 + 75)), box(40, 540, 40, M.alu, W / 2 + 100, 270, s * (D / 2 + 75)));
  for (const [w, d, x, z] of [[W, 8, 0, D / 2], [W, 8, 0, -D / 2], [8, D, W / 2, 0], [8, D, -W / 2, 0]]) g.add(box(w, H, d, M.klt, x, 600 + H / 2, z));
  g.add(box(W, 8, D, M.klt, 0, 604, 0));
  return { group: g, top: 608, half: W / 2 + 200, flow: false, stack: { pat, lagen: Number(p3.lagen) || 1, zwischen: p3.zwischen === 'ja' } };
}

// ---------------------------------------------------------------- Geräte
// Jedes Gerät: group, reach(flange: Vector3) stellt die Gelenke so, dass der Flansch dort liegt (Werkzeug senkrecht nach unten)
function buildArm(ped = 0) {
  const c = { ped, base: 300, hs: 520, L2: 1000, L3: 1050, f: 180, r: 120, mat: M.roboter, joint: M.dunkel };
  const g = new THREE.Group();
  if (c.ped) g.add(box(420, c.ped, 420, M.alu, 0, c.ped / 2, 0));
  const y0 = c.ped;
  const base = cyl(c.r * 1.6, c.base, c.mat, 32); base.position.y = y0 + c.base / 2; g.add(base);
  const j1 = new THREE.Group(); j1.position.y = y0 + c.base; g.add(j1);
  const turret = cyl(c.r * 1.3, c.hs - 40, c.mat, 32); turret.position.y = (c.hs - 40) / 2; j1.add(turret);
  const j2 = new THREE.Group(); j2.position.y = c.hs; j1.add(j2);
  const shoulder = cyl(c.r * 1.05, c.r * 2.4, c.joint, 28); shoulder.rotation.x = Math.PI / 2; j2.add(shoulder);
  const upper = box(c.r * 1.3, c.L2, c.r * 1.1, c.mat, 0, c.L2 / 2, 0); j2.add(upper);
  const j3 = new THREE.Group(); j3.position.y = c.L2; j2.add(j3);
  const elbow = cyl(c.r * 0.9, c.r * 2.1, c.joint, 28); elbow.rotation.x = Math.PI / 2; j3.add(elbow);
  const fore = cyl(c.r * 0.62, c.L3, c.mat, 24); fore.position.y = c.L3 / 2; j3.add(fore);
  const j4 = new THREE.Group(); j4.position.y = c.L3; j3.add(j4);
  const wrist = cyl(c.r * 0.55, c.r * 1.4, c.joint, 24); wrist.rotation.x = Math.PI / 2; j4.add(wrist);
  const tool = cyl(c.r * 0.45, c.f, c.mat, 24); tool.position.y = c.f / 2; j4.add(tool);
  const flange = cyl(c.r * 0.5, 12, M.stahl, 24); flange.position.y = c.f; j4.add(flange);
  const sh = new THREE.Vector3(), d2 = new THREE.Vector2();
  return {
    group: g, cfg: c,
    tip: (v) => flange.getWorldPosition(v),   // Flansch, wie die Gelenke tatsächlich stehen
    reach(F) {
      // Handgelenk senkrecht über dem Flansch; Ebene des Arms durch Fuß und Ziel
      const W = new THREE.Vector3(F.x, F.y + c.f, F.z);
      const gp = g.position;
      const hx = W.x - gp.x, hz = W.z - gp.z;
      const q1 = Math.atan2(-hz, hx);
      sh.set(0, y0 + c.base + c.hs, 0);
      d2.set(Math.hypot(hx, hz), W.y - gp.y - sh.y);
      const len = Math.min(d2.length(), c.L2 + c.L3 - 1);
      const a1 = Math.atan2(d2.y, d2.x) + Math.acos(clamp((c.L2 * c.L2 + len * len - c.L3 * c.L3) / (2 * c.L2 * len), -1, 1));
      const ex = c.L2 * Math.cos(a1), ey = c.L2 * Math.sin(a1);
      const a2 = Math.atan2(d2.y - ey, d2.x - ex);
      j1.rotation.y = q1;
      j2.rotation.z = a1 - Math.PI / 2;
      j3.rotation.z = a2 - a1;
      j4.rotation.z = -Math.PI / 2 - a2;   // Werkzeug zeigt senkrecht nach unten
    },
  };
}

// Roboter auf Linearachse (7. Achse): fährt auf einer Schiene parallel zur Anlage mit
function buildLinear(x0, x1) {
  const g = new THREE.Group();
  const L = x1 - x0 + 1200, cx = (x0 + x1) / 2;
  g.add(box(L, 160, 500, M.alu, cx, 80, 0));
  for (const s of [-1, 1]) g.add(box(L, 40, 60, M.stahl, cx, 180, s * 180));
  for (let x = x0 - 500; x <= x1 + 500; x += 900) g.add(box(120, 30, 560, M.dunkel, x, 15, 0));
  const arm = buildArm(260);
  const sled = box(620, 60, 620, M.gelenk, 0, 230, 0);
  arm.group.add(sled);
  arm.group.children[0].material = M.presse;           // Sockel als Schlitten
  g.add(arm.group);
  return {
    group: g,
    reach(F) {
      arm.group.position.x = clamp(F.x, x0, x1);         // Schlitten fährt mit, der Arm greift nach vorn
      arm.reach(F);
    },
    tip: arm.tip,
  };
}

function buildDelta(cx, cz, pickX, placeX) {
  const g = new THREE.Group();
  const H = 2100, span = Math.max(1600, placeX - pickX + 1000);
  // Gestell
  for (const sx of [-1, 1]) for (const sz of [-1, 1]) g.add(box(70, H + 80, 70, M.alu, cx + sx * span / 2, (H + 80) / 2, cz + sz * 700));
  for (const sz of [-1, 1]) g.add(box(span + 70, 70, 70, M.alu, cx, H + 80, cz + sz * 700));
  for (const sx of [-1, 1]) g.add(box(70, 70, 1400, M.alu, cx + sx * span / 2, H + 80, cz));
  g.add(box(span, 40, 260, M.alu, cx, H + 80, cz));
  const plate = cyl(260, 140, M.roboter, 36); plate.position.set(cx, H, cz); g.add(plate);
  const rb = 210, L = 420, l = 950, rp = 70;
  const arms = [0, 1, 2].map((i) => {
    const phi = Math.PI / 2 + i * 2 * Math.PI / 3, u = new THREE.Vector3(Math.cos(phi), 0, Math.sin(phi));
    const motor = cyl(70, 160, M.gelenk, 20); motor.rotation.z = Math.PI / 2; motor.rotation.y = -phi; motor.position.set(cx + u.x * rb, H - 40, cz + u.z * rb); g.add(motor);
    const up = rod(32, M.roboter), lo1 = rod(10, M.stahl), lo2 = rod(10, M.stahl); g.add(up, lo1, lo2);
    return { u, v: new THREE.Vector3(-u.z, 0, u.x), up, lo1, lo2, B: new THREE.Vector3(cx + u.x * rb, H - 40, cz + u.z * rb) };
  });
  const platform = cyl(95, 40, M.stahl, 24); g.add(platform);
  const E = new THREE.Vector3(), Pj = new THREE.Vector3(), D = new THREE.Vector3(), a = new THREE.Vector3(), b = new THREE.Vector3();
  return {
    group: g,
    tip: (v) => v.set(platform.position.x, platform.position.y - 20, platform.position.z),
    reach(F) {
      platform.position.set(F.x, F.y + 20, F.z);
      for (const A of arms) {
        Pj.set(F.x, F.y + 40, F.z).addScaledVector(A.u, rp);
        D.subVectors(Pj, A.B);
        const du = D.dot(A.u), dy = D.y, Kc = (L * L + D.lengthSq() - l * l) / (2 * L), R = Math.hypot(du, dy);
        const beta = Math.atan2(dy, du), ac = Math.acos(clamp(Kc / R, -1, 1));
        let best = null;
        for (const th of [-beta + ac, -beta - ac]) {
          const e = A.B.clone().addScaledVector(A.u, L * Math.cos(th)).add(new THREE.Vector3(0, -L * Math.sin(th), 0));
          if (!best || e.dot(A.u) > best.dot(A.u)) best = e;
        }
        E.copy(best);
        placeRod(A.up, A.B, E);
        for (const [m, s] of [[A.lo1, 1], [A.lo2, -1]]) placeRod(m, a.copy(E).addScaledVector(A.v, s * 40), b.copy(Pj).addScaledVector(A.v, s * 40));
      }
    },
  };
}

function buildPortal(cx, cz, pickX, placeX, H) {
  const g = new THREE.Group();
  const span = placeX - pickX + 1400, W = 900;
  for (const sx of [-1, 1]) for (const sz of [-1, 1]) g.add(box(140, H, 140, M.presse, cx + sx * span / 2, H / 2, cz + sz * W));
  for (const sz of [-1, 1]) g.add(box(span + 140, 160, 180, M.alu, cx, H + 80, cz + sz * W));
  const beam = box(220, 200, W * 2 + 200, M.gelenk, 0, H + 240, cz); g.add(beam);
  const carriage = box(320, 280, 320, M.alu, 0, H + 240, 0); g.add(carriage);
  const column = box(160, 2400, 160, M.stahl, 0, 0, 0); g.add(column);
  return {
    group: g,
    tip: (v) => v.set(column.position.x, column.position.y - 1200, column.position.z),
    reach(F) {
      beam.position.x = F.x; carriage.position.set(F.x, H + 240, F.z);
      column.position.set(F.x, F.y + 1200, F.z);
    },
  };
}

function fence(group, w, d, cx, cz) {
  const H = 1800;
  const panel = (len, x, z, rot) => {
    const p = new THREE.Group();
    p.add(box(len, 40, 40, M.zaun, 0, H, 0), box(len, 40, 40, M.zaun, 0, 120, 0));
    const net = new THREE.Mesh(new THREE.PlaneGeometry(len, H - 120), M.gitter); net.position.y = (H + 120) / 2; p.add(net);
    p.position.set(x, 0, z); p.rotation.y = rot; group.add(p);
  };
  for (let x = -w / 2; x <= w / 2 + 1; x += w / Math.ceil(w / 1500)) group.add(box(50, H, 50, M.zaun, cx + x, H / 2, cz - d));
  panel(w, cx, cz - d, 0);
  panel(d * 1.2, cx - w / 2, cz - d * 0.4, Math.PI / 2);
  panel(d * 1.2, cx + w / 2, cz - d * 0.4, Math.PI / 2);
}

// ---------------------------------------------------------------- Parameter
const BAND = { k: 'band', label: 'Bandgeschwindigkeit', opts: [['langsam', 'langsam'], ['mittel', 'mittel'], ['schnell', 'schnell']], def: 'mittel' };
const P1 = [
  { k: 'lage', label: 'Lage des Produkts', opts: [['ausgerichtet', 'ausgerichtet'], ['chaotisch', 'chaotisch (mit Kamera)']], def: 'ausgerichtet' },
  { ...BAND, when: (m) => FLOW.includes(m) },
];
const P2 = [
  { k: 'speed', label: 'Geschwindigkeit', range: [10, 100, 5], unit: '%', def: 70 },
  { k: 'hub', label: 'Hubhöhe', range: [0.1, 1, 0.05], unit: 'm', def: 0.3, dec: 2 },
  { k: 'dreh', label: 'Drehung des Produkts', opts: [['0', 'keine'], ['90', '90°'], ['180', '180°']], def: '0' },
  { k: 'zaun', label: 'Schutzzaun', opts: [['ja', 'ein'], ['nein', 'aus']], def: 'ja', when: (m) => m !== 'delta' },
];
const P3 = [
  { k: 'lagenbild', label: 'Lagenbild', opts: [['1x1', '1 × 1'], ['2x1', '2 × 1'], ['2x2', '2 × 2'], ['3x2', '3 × 2']], def: '2x2', when: (m) => !FLOW.includes(m) },
  { k: 'lagen', label: 'Anzahl Lagen', range: [1, 5, 1], unit: '', def: 2, when: (m) => m === 'palette' || m === 'karton' || m === 'klt' },
  { k: 'zwischen', label: 'Zwischenlage', opts: [['ja', 'ja'], ['nein', 'nein']], def: 'nein', when: (m) => m === 'palette' || m === 'karton' || m === 'klt' },
  { ...BAND, when: (m) => FLOW.includes(m) || m === 'schalenband' },
];
const defaults = (list) => Object.fromEntries(list.map((p) => [p.k, p.def]));

const VORLAGEN = {
  eigen: { name: 'Ihr Teil: Förderband → Roboter → KLT', produkt: 'eigen', s1: { modul: 'gurtband' }, s2: { modul: 'roboter6', speed: 70 }, s3: { modul: 'klt', lagenbild: '2x1', lagen: 2 } },
  reifenPal: { name: 'Automobil: Reifen palettieren', produkt: 'reifen', s1: { modul: 'rollenbahn' }, s2: { modul: 'roboter6', speed: 70 }, s3: { modul: 'palette', lagenbild: '2x1', lagen: 3 } },
  presse: { name: 'Automobil: Presse entnehmen', produkt: 'blech', s1: { modul: 'presse' }, s2: { modul: 'portal', speed: 80 }, s3: { modul: 'klt', lagenbild: '1x1', lagen: 4, zwischen: 'ja' } },
  reifenDepal: { name: 'Automobil: Reifen depalettieren', produkt: 'reifen', s1: { modul: 'palette' }, s2: { modul: 'roboter6', speed: 70 }, s3: { modul: 'rollenbahn' } },
  backwaren: { name: 'Lebensmittel: Backwaren in Schalen', produkt: 'broetchen', s1: { modul: 'modulband', lage: 'chaotisch' }, s2: { modul: 'delta', speed: 90, zaun: 'nein' }, s3: { modul: 'schalenband', lagenbild: '2x2' } },
  kartons: { name: 'Lebensmittel: Kartons palettieren', produkt: 'karton', s1: { modul: 'gurtband' }, s2: { modul: 'linear', speed: 60, dreh: '90' }, s3: { modul: 'palette', lagenbild: '2x2', lagen: 3 } },
};

// ---------------------------------------------------------------- Simulator
export function initSimulator(K) {
  const sec = document.querySelector('[data-simulator]');
  if (!sec) return;
  const $ = (s) => sec.querySelector(s);
  const ui = $('.sim');
  const view = $('.sim__view');
  let started = false;

  // Zustand
  const S = { vorlage: 'reifenPal', produkt: { typ: 'reifen', groesse: 100 }, s1: null, s2: null, s3: null };
  let aktiv = 'produkt';
  function applyTemplate(key) {
    S.vorlage = key;
    if (key === 'leer') {
      S.produkt = { typ: 'eigen', groesse: 100 }; S.s1 = S.s2 = S.s3 = null; aktiv = 'produkt';
    } else {
      const t = VORLAGEN[key];
      S.produkt = { typ: t.produkt, groesse: 100 };
      S.s1 = { ...defaults(P1), ...t.s1 }; S.s2 = { ...defaults(P2), ...t.s2 }; S.s3 = { ...defaults(P3), ...t.s3 };
      aktiv = 'slot1';
    }
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
  let renderer, scene, camera, controls, world;
  function init3d() {
    renderer = new THREE.WebGLRenderer({ canvas, antialias: true });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = THREE.PCFSoftShadowMap;
    scene = new THREE.Scene();
    scene.background = new THREE.Color(0xe7eaee);
    scene.fog = new THREE.Fog(0xe7eaee, 9000, 20000);
    scene.environment = new THREE.PMREMGenerator(renderer).fromScene(new RoomEnvironment(renderer), 0.04).texture;
    scene.environmentIntensity = 0.7;
    camera = new THREE.PerspectiveCamera(35, 1, 50, 60000);
    controls = new OrbitControls(camera, canvas);
    controls.enableDamping = true;
    controls.maxPolarAngle = Math.PI * 0.49;
    const sun = new THREE.DirectionalLight(0xffffff, 1.5);
    sun.position.set(-2500, 6000, 3500);
    sun.castShadow = true;
    sun.shadow.mapSize.set(2048, 2048);
    Object.assign(sun.shadow.camera, { left: -5000, right: 5000, top: 5000, bottom: -5000, near: 500, far: 15000 });
    sun.shadow.bias = -0.0003; sun.shadow.normalBias = 8;
    scene.add(sun, new THREE.HemisphereLight(0xffffff, 0xcfd4da, 0.6));
    const floor = new THREE.Mesh(new THREE.PlaneGeometry(40000, 40000), new THREE.MeshStandardMaterial({ color: 0xdfe3e8, roughness: 0.95 }));
    floor.rotation.x = -Math.PI / 2; floor.receiveShadow = true;
    const grid = new THREE.GridHelper(40000, 80, 0xc6cdd5, 0xd3d9df); grid.position.y = 1;
    scene.add(floor, grid);
    camera.position.set(-1800, 3600, 6400);
    controls.target.set(0, 700, 300);
    new ResizeObserver(resize).observe(view);
    resize();
    canvas.addEventListener('pointerdown', (e) => { down = [e.clientX, e.clientY]; });
    canvas.addEventListener('pointerup', (e) => { if (down && Math.hypot(e.clientX - down[0], e.clientY - down[1]) < 5) pick(e); });
  }
  let down = null;
  function resize() {
    const w = view.clientWidth, h = view.clientHeight;
    renderer.setSize(w, h, false); camera.aspect = w / h; camera.updateProjectionMatrix();
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
    const dev = S.s2 ? S.s2.modul : 'roboter6';
    const gap = { roboter6: 650, linear: 1500, delta: 120, portal: 500 }[dev];
    const zLine = dev === 'roboter6' || dev === 'linear' ? 1100 : 0;
    const src = S.s1 ? buildSource(S.s1.modul, P, S.s1) : null;
    const tgt = S.s3 ? buildTarget(S.s3.modul, P, S.s3, S.s2 ? S.s2.dreh : 0) : null;
    const pickX = -(gap + (src ? src.half : 300)), placeX = gap + (tgt ? tgt.half : 300);
    const zone = (x, w, d, color, slot, label) => {
      const m = new THREE.Mesh(new THREE.PlaneGeometry(w, d), new THREE.MeshStandardMaterial({ color, transparent: true, opacity: 0.55, roughness: 1 }));
      m.rotation.x = -Math.PI / 2; m.position.set(x, 3, zLine); m.receiveShadow = true; m.userData.slot = slot; world.add(m);
      if (!label) return;
      const cv = document.createElement('canvas'); cv.width = 512; cv.height = 96;
      const c = cv.getContext('2d'); c.fillStyle = '#ffffff'; c.font = '600 44px system-ui, sans-serif'; c.fillText(label, 24, 64);
      const t = new THREE.CanvasTexture(cv); t.colorSpace = THREE.SRGBColorSpace;
      const lab = new THREE.Mesh(new THREE.PlaneGeometry(1000, 190), new THREE.MeshBasicMaterial({ map: t, transparent: true }));
      lab.rotation.x = -Math.PI / 2; lab.position.set(x - w / 2 + 520, 5, zLine + d / 2 - 120); lab.userData.slot = slot; world.add(lab);
    };
    const srcW = src && src.flow ? 2700 : (src ? src.half * 2 + 200 : 1400);
    const tgtW = tgt && tgt.flow ? 2700 : (tgt ? tgt.half * 2 + 200 : 1400);
    zone(pickX - (src && src.flow ? 1050 : 0), srcW, 1900, 0x2f7fc1, 'slot1', '1  Ankunft');
    zone(placeX + (tgt && tgt.flow ? 1050 : 0), tgtW, 1900, 0x2e9d5b, 'slot3', '3  Weitertransport');
    zone(0, Math.max(1200, gap * 2 + 400), dev === 'roboter6' ? 2400 : 1900, 0xe07b1f, 'slot2', '');
    if (src) { src.group.position.set(pickX, 0, zLine); src.group.userData.slot = 'slot1'; world.add(src.group); }
    if (tgt) { tgt.group.position.set(placeX, 0, zLine); tgt.group.userData.slot = 'slot3'; world.add(tgt.group); }
    // Erkennung an der Quelle
    if (src && S.s1) {
      const e = S.s1.lage === 'chaotisch' ? 'kamera3d' : 'lichtschranke';
      if (e === 'lichtschranke') for (const s of [-1, 1]) { const p = box(40, 160, 40, M.sensor, pickX - 260, src.top + 80, zLine + s * (P.size[2] / 2 + 150)); p.userData.slot = 'slot1'; world.add(p); }
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
      const m = S.s2.modul;
      if (m === 'roboter6') device = buildArm();
      else if (m === 'linear') device = buildLinear(pickX + 400, placeX - 400);
      else if (m === 'delta') device = buildDelta(0, zLine, pickX, placeX);
      else device = buildPortal(0, zLine, pickX, placeX, 2400);
      device.group.userData.slot = 'slot2';
      world.add(device.group);
      if (S.s2.zaun === 'ja' && m !== 'delta') fence(world, placeX - pickX + (m === 'portal' ? 2000 : 1400), m === 'portal' ? 1200 : 900, 0, m === 'portal' ? zLine : 0);
    }
    world.add(g.holder);
    g.holder.visible = !!device;
    // Produkte
    const pg = productGeometry(P.typ, K);
    const pmat = pg.mats || pg.mat;
    const make = () => { const m = new THREE.Mesh(pg.geo, pmat); m.scale.setScalar(P.f); m.castShadow = m.receiveShadow = true; m.userData.keepGeo = P.typ === 'eigen'; m.userData.slot = 'produkt'; world.add(m); return m; };
    const pool = []; const take = (i) => { while (pool.length <= i) pool.push(make()); return pool[i]; };
    // Schalen und Zwischenlagen (einmal angelegt, im Ablauf nur verschoben bzw. ein-/ausgeblendet)
    const trays = tgt && tgt.trays ? [0, 1].map(() => { const m = trayMesh(placeX, tgt.top, zLine, tgt.trays); world.add(m); return m; }) : [];
    const sheets = tgt && tgt.stack && tgt.stack.zwischen ? Array.from({ length: tgt.stack.lagen - 1 }, (_, l) => {
      const m = box(tgt.stack.pat.w, 4, tgt.stack.pat.d, M.papier, placeX, tgt.top + (l + 1) * (P.size[1] + 6) - 3, zLine); world.add(m); return m; }) : [];
    A = { P, src, tgt, device, g, pickX, placeX, zLine, take, pool, trays, sheets };
    // Weg des Produkts als gestrichelte Linie
    if (src && tgt && device) {
      const yP = src.top + P.size[1] + 60, yT = tgt.top + P.size[1] + 60, hub = Number(S.s2.hub) * 1000;
      const pts = [new THREE.Vector3(pickX - (src.flow ? 1800 : 0), yP, zLine), new THREE.Vector3(pickX, yP, zLine), new THREE.Vector3(pickX, yP + hub, zLine),
        new THREE.Vector3(placeX, yT + hub, zLine), new THREE.Vector3(placeX, yT, zLine), new THREE.Vector3(placeX + (tgt.flow || tgt.trays ? 1800 : 0), yT, zLine)];
      const line = new THREE.Line(new THREE.BufferGeometry().setFromPoints(pts), new THREE.LineDashedMaterial({ color: 0x0061aa, dashSize: 60, gapSize: 50 }));
      line.computeLineDistances(); world.add(line);
    }
    // Kamera nur nachführen, wenn sich die Anlage selbst ändert (nicht bei jedem Regler)
    const layout = [S.produkt.typ, S.s1 && S.s1.modul, S.s2 && S.s2.modul, S.s3 && S.s3.modul].join();
    if (layout !== lastLayout) { lastLayout = layout; fitCamera(); }
    t0 = performance.now(); frameState(0);
    evaluate();
  }
  let lastLayout = '';
  function fitCamera() {
    const bb = new THREE.Box3();
    world.children.forEach((o) => { if (o.isMesh && o.geometry.type === 'PlaneGeometry') return; bb.expandByObject(o); });
    if (bb.isEmpty()) return;
    const c = bb.getCenter(new THREE.Vector3()), sz = bb.getSize(new THREE.Vector3());
    const r = Math.max(sz.x, sz.z * 1.3, sz.y * 1.6) * 0.52 / Math.tan(THREE.MathUtils.degToRad(camera.fov / 2)) / Math.max(1, camera.aspect * 0.75);
    controls.target.set(c.x, Math.min(c.y, 900), c.z);
    camera.position.set(c.x - r * 0.28, Math.min(c.y, 900) + r * 0.55, c.z + r * 0.85);
    controls.update();
  }

  // ---------- Ablauf ----------
  let running = false, t0 = 0, simTime = 0;
  const tcp = new THREE.Vector3(), flange = new THREE.Vector3(), tmp = new THREE.Vector3();
  const off0 = new THREE.Vector3(), pP = new THREE.Vector3(), pQ = new THREE.Vector3(), pN = new THREE.Vector3();
  const cycleLen = () => clamp(lastEval ? lastEval.takt : 3, 2.2, 7);
  // Lage des n-ten Produkts an der Quelle (Unterkante Mitte) und seine Drehung
  function sourcePos(n, k, a) {
    const { src, P, pickX, zLine } = A;
    const chaos = S.s1.lage === 'chaotisch';
    const yaw = chaos ? (rnd(n + k) - 0.5) * 1.2 : 0, off = chaos ? (rnd(n + k + 7) - 0.5) * 0.3 * P.size[2] : 0;
    if (src.flow) {
      const D = Math.max(P.size[0], P.size[2]) + 200;
      if (k * D - D * a > src.len - P.size[0] / 2 - 150) return null;   // nur so viele, wie aufs Band passen
      return { p: new THREE.Vector3(pickX - k * D + D * a, src.top, zLine + off), yaw };
    }
    if (src.stack) {   // Depalettieren: von oben abtragen
      const per = src.stack.pat.pts.length, total = per * src.stack.lagen, i = (total - 1 - ((n % total) + k)) ;
      if (i < 0) return null;
      const layer = Math.floor(i / per), [x, z] = src.stack.pat.pts[i % per];
      return { p: new THREE.Vector3(pickX + x, src.top + layer * (P.size[1] + (src.stack.zwischen ? 4 : 0)), zLine + z), yaw: 0 };
    }
    if (src.bin) {     // Kiste: Teile durcheinander, das oberste wird gegriffen
      const N = 6, i = N - 1 - (((n % N) + k));
      if (i < 0) return null;
      const x = (rnd(i * 3 + 1) - 0.5) * (src.bin.W - A.P.size[0] - 40), z = (rnd(i * 5 + 2) - 0.5) * (src.bin.D - A.P.size[2] - 40);
      return { p: new THREE.Vector3(pickX + (k === 0 ? 0 : x), src.top + i * A.P.size[1] * 0.35, zLine + (k === 0 ? 0 : z)), yaw: (rnd(i) - 0.5) * 1.5 };
    }
    // Presse: ein Teil liegt auf dem Werkzeug
    return k === 0 ? { p: new THREE.Vector3(pickX, src.top, zLine), yaw: 0 } : null;
  }
  // Ablageplatz des n-ten Produkts
  function targetPos(n) {
    const { tgt, P, placeX, zLine } = A;
    if (tgt.stack) {
      const per = tgt.stack.pat.pts.length, total = per * tgt.stack.lagen, i = n % total;
      const layer = Math.floor(i / per), [x, z] = tgt.stack.pat.pts[i % per];
      return { p: new THREE.Vector3(placeX + x, tgt.top + layer * (P.size[1] + (tgt.stack.zwischen ? 6 : 0)) + (tgt.stack.zwischen && layer > 0 ? 0 : 0), zLine + z), i, total, layer };
    }
    if (tgt.trays) {
      const per = tgt.trays.pat.pts.length, i = n % per, [x, z] = tgt.trays.pat.pts[i];
      return { p: new THREE.Vector3(placeX + x, tgt.top + 8, zLine + z), i, total: per };
    }
    return { p: new THREE.Vector3(placeX, tgt.top, zLine), i: 0, total: 1 };
  }
  const speedOf = (v) => ({ langsam: 0.6, mittel: 1, schnell: 1.6 }[v] || 1);

  function frameState(time) {
    if (!A) return;
    const { src, tgt, device, g, P } = A;
    if (!src || !tgt || !device) {
      // unvollständige Anlage: Teile ruhen an der Quelle, Greifer schwebt
      A.pool.forEach((m) => { m.visible = false; });
      if (src) { const s = sourcePos(0, 0, 0); if (s) { const m = A.take(0); m.visible = true; m.position.copy(s.p); } }
      return;
    }
    const T = cycleLen();
    const n = Math.floor(time / T), p = time / T - n;
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
    const safe = Math.max(PP.y, QQ.y) + hub;
    let x, y, z, yaw;
    if (p < 0.38) { x = PP.x; z = PP.z; y = THREE.MathUtils.lerp(PP.y + hub, PP.y, down1) + (safe - PP.y) * up1; yaw = sp.yaw; }
    else if (p < 0.62) { x = THREE.MathUtils.lerp(PP.x, QQ.x, move); z = THREE.MathUtils.lerp(PP.z, QQ.z, move); y = safe + Math.sin(move * Math.PI) * 80; yaw = THREE.MathUtils.lerp(sp.yaw, dreh, move); }
    else if (p < 0.9) { x = QQ.x; z = QQ.z; y = THREE.MathUtils.lerp(safe, QQ.y, down2) + hub * up2; yaw = dreh; }
    else {
      const nx = sourcePos(n + 1, 0, 0) || sp;
      const NN = off(nx.yaw, pN).add(nx.p);
      x = THREE.MathUtils.lerp(QQ.x, NN.x, back); z = THREE.MathUtils.lerp(QQ.z, NN.z, back);
      y = THREE.MathUtils.lerp(QQ.y + hub, NN.y + hub, back) + Math.sin(back * Math.PI) * 80; yaw = THREE.MathUtils.lerp(dreh, nx.yaw, back);
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
    const arrive = S.s1.bewegung === 'stopgo' ? seg(p, 0.4, 0.75) : seg(p, 0.3, 1);
    for (let k = (p >= 0.24 ? 1 : 0); k < 6; k++) {
      const s = sourcePos(n, k, src.flow ? arrive : 0);
      if (!s) break;
      const m = A.take(used++); m.visible = true; m.position.copy(s.p); m.rotation.set(0, s.yaw, 0);
    }
    // gegriffenes Teil
    if (held) {
      const m = A.take(used++); m.visible = true;
      m.position.copy(tcp).sub(off(yaw, pN)); m.rotation.set(0, yaw, 0);
    }
    // abgelegte Teile am Ziel
    const vT = speedOf(S.s3.band) * 260;   // mm/s auf dem Band
    if (tgt.flow) {
      for (let k = placed ? 0 : 1; k < 8; k++) {
        const age = (placed ? (p - 0.8) * T : (p + 0.2) * T) + (k - (placed ? 0 : 1)) * T;
        const xx = A.placeX + age * vT;
        if (xx > A.placeX + tgt.len - 200) break;
        const m = A.take(used++); m.visible = true; m.position.set(xx, tgt.top, A.zLine); m.rotation.set(0, dreh, 0);
      }
    } else {
      // Stapel: alle bisher abgelegten Teile seit dem letzten Leeren
      const cur = targetPos(n), upto = placed ? cur.i : cur.i - 1;
      for (let i = 0; i <= upto; i++) {
        const q = targetPos(n - cur.i + i);
        const m = A.take(used++); m.visible = true; m.position.copy(q.p); m.rotation.set(0, dreh, 0);
      }
      // volle Schale fährt nach dem letzten Teil weg (im Folgezyklus sichtbar)
      if (tgt.trays && cur.i === 0 && n > 0) {
        const per = tgt.trays.pat.pts.length, away = (p + 0.2) * T * vT;
        for (let i = 0; i < per; i++) { const q = targetPos(n - per + i); const m = A.take(used++); m.visible = true; m.position.copy(q.p); m.position.x += away; m.rotation.set(0, dreh, 0); }
      }
    }
    for (let i = used; i < A.pool.length; i++) A.pool[i].visible = false;
    // Schalen, Zwischenlagen, Presse, Bänder
    if (A.trays.length) {
      const cur = targetPos(n), away = cur.i === 0 && n > 0 ? (p + 0.2) * T * vT : null;
      A.trays[1].visible = away != null;
      if (away != null) A.trays[1].position.x = A.placeX + away;
    }
    if (A.sheets.length) {
      const cur = targetPos(n), layers = Math.floor((placed ? cur.i + 1 : cur.i) / tgt.stack.pat.pts.length);
      A.sheets.forEach((m, l) => { m.visible = l + 1 <= layers; });
    }
    if (src.ram) src.ram.position.y = 1900 - seg(p, 0.45, 0.6) * (1900 - 960 - P.size[1] - 160) + seg(p, 0.62, 0.8) * (1900 - 960 - P.size[1] - 160);
    if (src.tex) src.tex.offset.x = -(time * speedOf(S.s1.band) * 0.5) % 1;
    if (tgt.tex) tgt.tex.offset.x = -(time * speedOf(S.s3.band) * 0.5) % 1;
  }
  const trayGeo = new Map();
  function trayMesh(x, y, z, tr) {
    const key = tr.w + 'x' + tr.d;
    if (!trayGeo.has(key)) {
      const t = 3, H = 40, L = tr.w, B = tr.d;
      trayGeo.set(key, mergeGeometries([[L, t, B, 0, t / 2, 0], [L, H, t, 0, H / 2, B / 2], [L, H, t, 0, H / 2, -B / 2], [t, H, B, L / 2, H / 2, 0], [t, H, B, -L / 2, H / 2, 0]]
        .map(([w, h, d, a, b, c]) => new THREE.BoxGeometry(w, h, d).translate(a, b, c))));
    }
    const m = new THREE.Mesh(trayGeo.get(key), M.schale); m.position.set(x, y, z); m.castShadow = m.receiveShadow = true; m.userData.keepGeo = true; return m;
  }

  // ---------- Kennzahlen ----------
  let lastEval = null;
  function evaluate() {
    const ready = S.s1 && S.s2 && S.s3;
    $('#sim-run').disabled = !ready;
    if (!ready) { lastEval = null; $('#sim-takt').textContent = $('#sim-stunde').textContent = '–'; return; }
    const e = lastEval = kennzahlen(S.s2);
    $('#sim-takt').textContent = `${fmt(e.takt, 1)} s`;
    $('#sim-stunde').textContent = fmt(Math.round(e.stunde / 10) * 10);
    mail(produkt(), e);
  }
  function mail(P, e) {
    const L = (o, list, lib) => o ? `${lib[o.modul].name} (` + list.filter((p) => !p.when || p.when(o.modul, o)).map((p) => `${p.label}: ${label(p, o[p.k])}`).join(', ') + ')' : '–';
    const body = ['Guten Tag,', '', 'über den Greifer-Simulator habe ich folgende Anlage zusammengestellt:', '',
      `Greifer: ${K.active().code}`, `Produkt: ${P.name}, ca. ${fmt(P.size[0])} × ${fmt(P.size[1])} × ${fmt(P.size[2])} mm`,
      `1 Ankunft: ${L(S.s1, P1, QUELLEN)}`, `2 Hebevorgang: ${L(S.s2, P2, GERAETE_UI)}`, `3 Weitertransport: ${L(S.s3, P3, ZIELE)}`, '',
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
  const tpl = $('#sim-vorlage');
  tpl.innerHTML = Object.entries(VORLAGEN).map(([k, v]) => `<option value="${k}">${v.name}</option>`).join('') + '<option value="leer">Leer starten</option>';
  tpl.addEventListener('change', () => { applyTemplate(tpl.value); stop(); build(); renderPanels(); });

  function renderPanels() {
    const P = produkt();
    const card = (slot, num, title, val, info) => `<button type="button" class="sim__card${aktiv === slot ? ' is-active' : ''}${val ? '' : ' is-empty'}" data-slot="${slot}">
      <span class="sim__num">${num}</span><span><span class="sim__ct">${title}</span><strong>${val || 'Modul wählen'}</strong><small>${info || ''}</small></span></button>`;
    $('#sim-slots').innerHTML =
      card('produkt', '◆', 'Produkt', P.name, `${fmt(P.size[0])} × ${fmt(P.size[1])} × ${fmt(P.size[2])} mm` +
        (P.typ === 'eigen' ? (K.part() && K.part().pose ? ' · Greifpunkt aus dem Konfigurator' : ' · Greifpunkt: mittig von oben') : '')) +
      card('slot1', '1', 'Ankunft', S.s1 && QUELLEN[S.s1.modul].name, S.s1 && QUELLEN[S.s1.modul].info) +
      card('slot2', '2', 'Hebevorgang', S.s2 && GERAETE_UI[S.s2.modul].name, S.s2 && `${K.active().code} am ${GERAETE_UI[S.s2.modul].name}`) +
      card('slot3', '3', 'Weitertransport', S.s3 && ZIELE[S.s3.modul].name, S.s3 && ZIELE[S.s3.modul].info);
    $('#sim-slots').querySelectorAll('[data-slot]').forEach((b) => b.addEventListener('click', () => { aktiv = b.dataset.slot; renderPanels(); }));
    $('#sim-greifer').textContent = `${K.active().code} (aus dem Konfigurator)`;
    // Schrittanzeige
    const step = !S.vorlage ? 0 : running ? 3 : (S.s1 && S.s2 && S.s3) ? 2 : 1;
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
    const title = { slot1: '1 · Ankunft', slot2: '2 · Hebevorgang', slot3: '3 · Weitertransport' }[aktiv];
    box.innerHTML = `<h3>${title}</h3><div class="sim__tiles">${Object.entries(lib).map(([k, v]) =>
      `<button type="button" class="sim__tile${cur && cur.modul === k ? ' is-active' : ''}" data-modul="${k}"><img alt="" data-thumb="${aktiv}:${k}"><strong>${v.name}</strong><small>${v.info}</small></button>`).join('')}</div>` +
      (cur ? `<div class="sim__fields">${plist.filter((p) => !p.when || p.when(cur.modul, cur)).map((p) => p.opts
        ? `<div class="field"><label for="sim-f-${p.k}">${p.label}</label><select id="sim-f-${p.k}" data-k="${p.k}">${p.opts.map(([v, l]) => `<option value="${v}"${String(cur[p.k]) === v ? ' selected' : ''}>${l}</option>`).join('')}</select></div>`
        : `<div class="field"><label for="sim-f-${p.k}">${p.label} <output>${label(p, cur[p.k])}</output></label><input id="sim-f-${p.k}" data-k="${p.k}" type="range" min="${p.range[0]}" max="${p.range[1]}" step="${p.range[2]}" value="${cur[p.k]}"></div>`).join('')}</div>` : '');
    box.querySelectorAll('[data-modul]').forEach((b) => b.addEventListener('click', () => {
      const m = b.dataset.modul;
      S[key] = { ...defaults(plist), ...(S[key] || {}), modul: m };
      if (key === 's2') S.s2.zaun = m === 'delta' ? 'nein' : 'ja';
      stop(); build(); renderPanels();
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
    if (slot === 'slot1') grp = buildSource(m, P, defaults(P1)).group;
    else if (slot === 'slot3') grp = buildTarget(m, P, defaults(P3)).group;
    else grp = m === 'roboter6' ? (() => { const a = buildArm(); a.reach(new THREE.Vector3(900, 900, 0)); return a.group; })()
      : m === 'linear' ? (() => { const a = buildLinear(-900, 900); a.reach(new THREE.Vector3(300, 900, 1000)); return a.group; })()
      : m === 'delta' ? (() => { const d = buildDelta(0, 0, -400, 400); d.reach(new THREE.Vector3(0, 1200, 0)); return d.group; })()
        : (() => { const d = buildPortal(0, 0, -600, 600, 2000); d.reach(new THREE.Vector3(200, 900, 0)); return d.group; })();
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
  function stop() { running = false; runBtn.textContent = 'Simulation starten'; }
  runBtn.addEventListener('click', () => {
    running = !running;
    runBtn.textContent = running ? 'Simulation anhalten' : 'Simulation fortsetzen';
    if (running) t0 = performance.now() - simTime * 1000;
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
    if (running) simTime = (performance.now() - t0) / 1000;
    frameState(simTime);
    controls.update();
    renderer.render(scene, camera);
  }

  async function open(state) {
    if (!started) { started = true; init3d(); loop(); }
    if (state) {
      if (state.g && state.g !== K.active().id) await K.select(state.g);
      for (const k of ['vorlage', 'produkt', 's1', 's2', 's3']) if (k in state) S[k] = state[k];
      if (S.s2 && !GERAETE_UI[S.s2.modul]) S.s2.modul = 'linear';   // ältere Links (Cobot)
      tpl.value = S.vorlage;
    } else applyTemplate(tpl.value);
    G = null; build(); renderPanels();
    running = true; runBtn.textContent = 'Simulation anhalten'; t0 = performance.now(); simTime = 0;
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
  window.__sim = { open, S, frame: (t) => { simTime = t; running = false; }, eval: () => lastEval, A: () => A, gap: () => { const v = new THREE.Vector3(); A.device.tip(v); const bb = new THREE.Box3().setFromObject(A.g.holder); return { top: bb.max.y - v.y, dx: Math.hypot((bb.min.x + bb.max.x) / 2 - v.x, (bb.min.z + bb.max.z) / 2 - v.z), want: v.toArray().map(Math.round) }; }, build: () => { build(); renderPanels(); } };
}
