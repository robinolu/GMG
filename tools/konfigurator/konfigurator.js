// Greifer-Konfigurator: Teil als STEP/STL laden (bleibt im Browser), passende GMG-Greifer
// vorschlagen und das Greifen mit einem 3D-Greifer interaktiv testen.
// Einheit im Konfigurator: Millimeter. Welt: Y nach oben, der Greifer schließt entlang Z.
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
import { STLLoader } from 'three/examples/jsm/loaders/STLLoader.js';
import { RoomEnvironment } from 'three/examples/jsm/environments/RoomEnvironment.js';
import { mergeGeometries, toCreasedNormals } from 'three/examples/jsm/utils/BufferGeometryUtils.js';
import { MeshBVH } from 'three-mesh-bvh';
import GRIPPER from '../../data/3d/greifer-platzhalter.json';
import { Quaternion as Q } from 'three';
// Greifer mit 3D-Modell. Weitere GMG-Greifer kommen hinzu, sobald ihre STEP-Dateien vorliegen
// (Kennwerte aller Baureihen liegen schon in data/greifer-specs.json).

const root = document.querySelector('[data-konfigurator]');
const BASE = root.dataset.base || '';
const $ = (s) => root.querySelector(s);
const MAX_BYTES = 100 * 1024 * 1024;   // darüber wird es im Browser zäh (Speicher, Rechenzeit)
const SLOW_BYTES = 25 * 1024 * 1024;
const fmt = (v, d = 0) => v.toLocaleString('de-DE', { maximumFractionDigits: d, minimumFractionDigits: d });

// ---------- Szene ----------
const viewport = $('.kfg__view');
const canvas = viewport.querySelector('canvas');
const renderer = new THREE.WebGLRenderer({ canvas, antialias: true, alpha: true });
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
renderer.toneMapping = THREE.ACESFilmicToneMapping;
renderer.shadowMap.enabled = true;
renderer.shadowMap.type = THREE.PCFSoftShadowMap;
const scene = new THREE.Scene();
scene.environment = new THREE.PMREMGenerator(renderer).fromScene(new RoomEnvironment(renderer), 0.04).texture;
const camera = new THREE.PerspectiveCamera(35, 1, 1, 100000);
const controls = new OrbitControls(camera, canvas);
controls.enableDamping = true;
const sun = new THREE.DirectionalLight(0xffffff, 1.3);
sun.castShadow = true;
sun.shadow.mapSize.set(2048, 2048);
sun.shadow.bias = -0.0004;
scene.add(sun, sun.target, new THREE.HemisphereLight(0xffffff, 0xc4ccd4, 0.55));
const floor = new THREE.Mesh(new THREE.PlaneGeometry(1, 1), new THREE.ShadowMaterial({ opacity: 0.16 }));
floor.rotation.x = -Math.PI / 2;
floor.receiveShadow = true;
const grid = new THREE.GridHelper(1, 20, 0xc3cbd4, 0xdfe4ea);
scene.add(floor, grid);

// ---------- Greifer (Platzhaltermodell, Getriebe wie auf der Startseite) ----------
const P = GRIPPER.pivots;
const PHI_MAX = THREE.MathUtils.degToRad(57);
const MODEL_GAP = 11.15;       // Backenabstand innen bei ganz offenem Modell (Modelleinheiten)
const MODEL_JAW_LEN = 14.8;    // Länge der Backen
const MODEL_LEN = 32;         // Gesamtlänge des Greifers mit Kolbenstange
const SCALE = 10;             // Modelleinheit → mm: Capit ist rund 320 mm lang
const MAT = {
  gehaeuse: new THREE.MeshStandardMaterial({ color: 0x2b3038, metalness: 0.65, roughness: 0.4 }),
  backe: new THREE.MeshStandardMaterial({ color: 0x8e98a4, metalness: 0.9, roughness: 0.34 }),
  kurbel: new THREE.MeshStandardMaterial({ color: 0x0061aa, metalness: 0.55, roughness: 0.32 }),
  lenker: new THREE.MeshStandardMaterial({ color: 0xa9b3bf, metalness: 0.95, roughness: 0.25 }),
  koppel: new THREE.MeshStandardMaterial({ color: 0xa9b3bf, metalness: 0.95, roughness: 0.25 }),
  schieber: new THREE.MeshStandardMaterial({ color: 0xb7bec7, metalness: 1.0, roughness: 0.18 }),
};
const jawContact = new THREE.MeshStandardMaterial({ color: 0x2e9d5b, metalness: 0.6, roughness: 0.35 });
const jawCollide = new THREE.MeshStandardMaterial({ color: 0xc8372d, metalness: 0.5, roughness: 0.4 });

const gripper = new THREE.Group();          // Weltlage: Höhe + Maßstab
const model = new THREE.Group();            // Modell: Backenspitzen im Ursprung, Backen zeigen nach unten
model.rotation.z = -Math.PI / 2;            // Modell-X (Richtung Backen) → Welt −Y
const inner = new THREE.Group();
inner.position.set(-62.6, -24.75, -49.425);
model.add(inner);
gripper.add(model);
scene.add(gripper);
const parts = {};
for (const [name, g] of Object.entries(GRIPPER.groups)) {
  let geo = new THREE.BufferGeometry();
  geo.setAttribute('position', new THREE.Float32BufferAttribute(g.v, 3));
  geo.setIndex(g.i);
  geo = toCreasedNormals(geo, THREE.MathUtils.degToRad(35));
  geo.boundsTree = new MeshBVH(geo);
  const mesh = new THREE.Mesh(geo, MAT[name.split('_')[0]]);
  mesh.castShadow = mesh.receiveShadow = true;
  mesh.matrixAutoUpdate = false;
  parts[name] = mesh;
  inner.add(mesh);
}

const rot2 = (p, c, a) => {
  const x = p[0] - c[0], z = p[1] - c[1];
  return [c[0] + x * Math.cos(a) - z * Math.sin(a), c[1] + x * Math.sin(a) + z * Math.cos(a)];
};
function rotAbout(c, ang, t = [0, 0]) {
  const cs = Math.cos(ang), sn = Math.sin(ang);
  return new THREE.Matrix4().set(cs, 0, -sn, c[0] - (cs * c[0] - sn * c[1]) + t[0], 0, 1, 0, 0,
    sn, 0, cs, c[1] - (sn * c[0] + cs * c[1]) + t[1], 0, 0, 0, 1);
}
function rigid(a0, b0, a1, b1) {
  const ang = Math.atan2(b1[1] - a1[1], b1[0] - a1[0]) - Math.atan2(b0[1] - a0[1], b0[0] - a0[0]);
  return rotAbout(a0, ang, [a1[0] - a0[0], a1[1] - a0[1]]);
}
function pose(phi) {
  let slide = 0;
  for (const side of ['a', 'b']) {
    const a = (side === 'a' ? 1 : -1) * phi;
    const P1 = P['P1' + side], P2 = P['P2' + side], C0 = P['C' + side], J1o = P['J1' + side], J2o = P['J2' + side], S0 = P['S' + side];
    const J1 = rot2(J1o, P1, a), C = rot2(C0, P1, a);
    parts['kurbel_' + side].matrix.copy(rotAbout(P1, a));
    const d = [J1[0] - J1o[0], J1[1] - J1o[1]];
    parts['backe_' + side].matrix.makeTranslation(d[0], 0, d[1]);
    parts['lenker_' + side].matrix.copy(rigid(P2, J2o, P2, [J2o[0] + d[0], J2o[1] + d[1]]));
    const L = Math.hypot(C0[0] - S0[0], C0[1] - S0[1]);
    const S = [C[0] - Math.sqrt(Math.max(0, L * L - (C[1] - S0[1]) ** 2)), S0[1]];
    parts['koppel_' + side].matrix.copy(rigid(S0, C0, S, C));
    slide = S[0] - S0[0];
  }
  parts.schieber.matrix.makeTranslation(slide, 0, 0);
  parts.gehaeuse.matrix.identity();
  gripper.updateMatrixWorld(true);
}

// ---------- Teil ----------
let baseGeo = null;          // Teil in Rohmaßen der Datei
let fileKind = null;         // 'step' | 'stl' | 'muster'
let turns = { x: 0, y: 0, z: 0 };  // Vierteldrehungen
let part = null, partBVH = null, box = new THREE.Box3();
const partMat = new THREE.MeshStandardMaterial({ color: 0xd9a441, metalness: 0.2, roughness: 0.55 });

function unitFactor() {
  const u = $('#kfg-einheit').value;
  if (u !== 'auto') return { f: { mm: 1, cm: 10, m: 1000 }[u], auto: false };
  if (fileKind !== 'stl') return { f: 1, auto: true, label: 'mm' };   // STEP: Einheit aus der Datei; Grundform: mm
  // STL hat keine Einheit: Größe plausibel schätzen (Greifteile liegen meist zwischen 5 mm und 2 m)
  const s = new THREE.Vector3(); baseGeo.boundingBox.getSize(s);
  const d = Math.max(s.x, s.y, s.z);
  if (d < 2) return { f: 1000, auto: true, label: 'm' };
  return { f: 1, auto: true, label: 'mm' };
}

function placePart(autoOrient) {
  if (!baseGeo) return;
  const { f, auto, label } = unitFactor();
  $('#kfg-einheit-info').textContent = !auto ? '' : fileKind === 'step' ? 'aus der STEP-Datei übernommen (mm)' : fileKind === 'form' ? 'Grundform in mm' : `erkannt: ${label}`;
  const geo = baseGeo.clone();
  geo.scale(f, f, f);
  geo.computeBoundingBox();
  if (autoOrient) {   // schmalere waagerechte Seite in Greifrichtung (Z)
    const s = new THREE.Vector3(); geo.boundingBox.getSize(s);
    turns = { x: 0, y: s.z > s.x ? 1 : 0, z: 0 };
  }
  geo.applyMatrix4(new THREE.Matrix4().makeRotationX(turns.x * Math.PI / 2));
  geo.applyMatrix4(new THREE.Matrix4().makeRotationZ(turns.z * Math.PI / 2));
  geo.applyMatrix4(new THREE.Matrix4().makeRotationY(turns.y * Math.PI / 2));
  geo.computeBoundingBox();
  const c = new THREE.Vector3(); geo.boundingBox.getCenter(c);
  geo.translate(-c.x, -geo.boundingBox.min.y, -c.z);
  geo.computeBoundingBox();
  geo.computeVertexNormals();
  if (part) { scene.remove(part); part.geometry.dispose(); }
  part = new THREE.Mesh(geo, partMat);
  part.castShadow = part.receiveShadow = true;
  scene.add(part);
  partBVH = new MeshBVH(geo);
  box.copy(geo.boundingBox);
  innerWidth = measureInner();
  if (mode === 'innen' && !innerWidth) setMode('aussen');
  $('#kfg-griff-innen').disabled = !innerWidth || !A.range.innen;
  fitScene();
  updateFacts();
  suggest();
  update();
}

let mode = 'aussen';          // 'aussen' = Backen schließen um das Teil, 'innen' = Backen spreizen im Hohlraum
let innerWidth = null;
function measureInner() {
  // Hohlraum, der von oben zugänglich ist: von der Mitte nach oben frei, nach ±Z eine Wand
  const s = new THREE.Vector3(); box.getSize(s);
  const ray = new THREE.Ray();
  for (const f of [0.6, 0.45, 0.75, 0.3]) {
    const o = new THREE.Vector3(0, s.y * f, 0);
    ray.set(o, new THREE.Vector3(0, 1, 0));
    if (partBVH.raycastFirst(ray, THREE.DoubleSide)) continue;
    ray.set(o, new THREE.Vector3(0, 0, 1)); const a = partBVH.raycastFirst(ray, THREE.DoubleSide);
    ray.set(o, new THREE.Vector3(0, 0, -1)); const b = partBVH.raycastFirst(ray, THREE.DoubleSide);
    if (a && b) return a.distance + b.distance;
  }
  return null;
}

// Greifbereich des Greifers in mm, aus den Backen gemessen (offen / geschlossen)
const RANGE = (() => {
  gripper.scale.setScalar(SCALE);
  const m = (phi) => {
    pose(phi);
    const a = new THREE.Box3().setFromObject(parts.backe_a), b = new THREE.Box3().setFromObject(parts.backe_b);
    return { gap: b.min.z - a.max.z, outer: b.max.z - a.min.z };
  };
  const open = m(0), shut = m(PHI_MAX);
  pose(0);
  return { aussen: [Math.max(0, shut.gap), open.gap], innen: [shut.outer, open.outer] };
})();
// ---------- Greifer-Auswahl ----------
// Jeder Greifer: root (Gruppe, Backen-/Fingerspitzen im Ursprung), meshes, contact, set(t) mit 0 = offen, 1 = geschlossen,
// range (mm) für außen/innen, reach (Länge der Finger), length (Gesamthöhe), paint(state)
const GRIPPERS = {
  capit: {
    id: 'capit', code: 'Capit', name: 'Gelenk-Parallelgreifer', note: 'Testmodell in Originalgröße (ca. 320 mm lang)',
    root: gripper, meshes: Object.values(parts), contact: [parts.backe_a, parts.backe_b], ready: true,
    set: (t) => pose(PHI_MAX * t), range: RANGE, reach: MODEL_JAW_LEN * SCALE, length: MODEL_LEN * SCALE, word: 'Beide Backen liegen',
    paint: (st) => { for (const m of [parts.backe_a, parts.backe_b]) m.material = st === 'gegriffen' ? jawContact : st === 'kollision' ? jawCollide : MAT.backe; },
  },
  tentra: {
    id: 'tentra', code: 'Tentra T3', name: 'Tentakelgreifer, 3 Finger', note: 'Testmodell in Originalgröße (Ø 104 mm, 166 mm hoch)',
    ready: false, range: { aussen: [16, 78], innen: null }, reach: 100, length: 166, word: 'Die Finger liegen',
  },
};
let A = GRIPPERS.capit;   // aktiver Greifer

const TMAT = {
  dunkel: new THREE.MeshStandardMaterial({ color: 0x1f2830, metalness: 0.5, roughness: 0.45 }),
  platte: new THREE.MeshStandardMaterial({ color: 0x8e98a2, metalness: 0.7, roughness: 0.35 }),
  finger: new THREE.MeshStandardMaterial({ color: 0xc8501a, metalness: 0.15, roughness: 0.5 }),
  polster: new THREE.MeshStandardMaterial({ color: 0x0f7a78, metalness: 0.1, roughness: 0.7 }),
  stahl: new THREE.MeshStandardMaterial({ color: 0xb7bec7, metalness: 1.0, roughness: 0.22 }),
  gelb: new THREE.MeshStandardMaterial({ color: 0xd9a03a, metalness: 0.6, roughness: 0.35 }),
};
const padContact = new THREE.MeshStandardMaterial({ color: 0x2e9d5b, metalness: 0.1, roughness: 0.6 });
const padCollide = new THREE.MeshStandardMaterial({ color: 0xc8372d, metalness: 0.1, roughness: 0.6 });
const tentraMat = (n) => /Vertebra/.test(n) ? TMAT.finger : /Contact_pad/.test(n) ? TMAT.polster : /Upper_plate/.test(n) ? TMAT.platte
  : /screw|nut|standoff/i.test(n) ? TMAT.stahl : /spool|actuator/i.test(n) ? TMAT.gelb : TMAT.dunkel;

async function loadTentra() {
  // Bewegung je Teil aus den STEP-Stellungen OPEN → GRASP (tools/tentra/bewegung.py)
  const data = await (await fetch(BASE + 'data/3d/tentra-t3.json')).json();
  const g = GRIPPERS.tentra, root = new THREE.Group(), inner = new THREE.Group();
  inner.position.y = 117.8;   // Fingerspitzen (offen) auf Höhe 0
  root.add(inner);
  const meshes = [], pads = [], moving = [];
  const byIndex = [];
  for (const pt of data.parts) {
    let geo = new THREE.BufferGeometry();
    geo.setAttribute('position', new THREE.Float32BufferAttribute(pt.p, 3));
    geo.setIndex(pt.i);
    geo = toCreasedNormals(geo, THREE.MathUtils.degToRad(35));
    geo.boundsTree = new MeshBVH(geo);
    const mesh = new THREE.Mesh(geo, tentraMat(pt.name));
    mesh.castShadow = mesh.receiveShadow = true;
    mesh.matrixAutoUpdate = false;
    inner.add(mesh);
    meshes.push(mesh);
    byIndex.push(mesh);
    if (/Contact_pad/.test(pt.name)) pads.push(mesh);
    if (pt.bewegung) {
      const b = pt.bewegung;
      moving.push({ mesh, parent: b.parent, pivot: new THREE.Vector3(...b.pivot), q: new Q(...b.q), rest: new THREE.Vector3(...b.rest) });
    }
  }
  // Kette: jedes Glied dreht relativ zu seinem Vorgänger um sein Gelenk (Eltern stehen in der Liste vorn)
  const qi = new Q(), m1 = new THREE.Matrix4(), m2 = new THREE.Matrix4(), local = new THREE.Matrix4();
  g.set = (t) => {
    for (const mv of moving) {
      qi.identity().slerp(mv.q, t);
      local.makeTranslation(mv.pivot.x + mv.rest.x * t, mv.pivot.y + mv.rest.y * t, mv.pivot.z + mv.rest.z * t)
        .multiply(m1.makeRotationFromQuaternion(qi)).multiply(m2.makeTranslation(-mv.pivot.x, -mv.pivot.y, -mv.pivot.z));
      if (mv.parent >= 0) mv.mesh.matrix.multiplyMatrices(byIndex[mv.parent].matrix, local);
      else mv.mesh.matrix.copy(local);
    }
    root.updateMatrixWorld(true);
  };
  g.paint = (st) => { for (const m of pads) m.material = st === 'gegriffen' ? padContact : st === 'kollision' ? padCollide : TMAT.polster; };
  g.root = root; g.meshes = meshes; g.contact = moving.map((mv) => mv.mesh);
  // Greifbereich aus den Polstern: kleinster Abstand zur Achse offen / geschlossen
  const radial = (t) => { g.set(t); let r = Infinity; const v = new THREE.Vector3();
    for (const m of pads) { const pos = m.geometry.attributes.position;
      for (let i = 0; i < pos.count; i++) { v.fromBufferAttribute(pos, i).applyMatrix4(m.matrixWorld); r = Math.min(r, Math.hypot(v.x, v.z)); } }
    return r; };
  g.range = { aussen: [2 * radial(1), 2 * radial(0)], innen: null };
  g.set(0);
  g.ready = true;
}

async function selectGripper(id) {
  const g = GRIPPERS[id];
  if (!g.ready) {
    $('#kfg-status').className = 'kfg__status is-info';
    $('#kfg-status').textContent = `${g.code} wird geladen …`;
    try { await loadTentra(); } catch (e) { $('#kfg-status').textContent = `${g.code} konnte nicht geladen werden.`; return; }
  }
  if (A.root) scene.remove(A.root);
  A = g;
  scene.add(A.root);
  A.root.visible = true;
  $('#kfg-badge').textContent = `Greifer ${A.code} (Testmodell) in Originalgröße`;
  const innenOk = !!A.range.innen;
  if (!innenOk && mode === 'innen') { mode = 'aussen'; }
  setMode(mode);
}


function fitScene() {
  const s = new THREE.Vector3(); box.getSize(s);
  const gLen = A.length;   // Greifer in echter Größe – das Teil wird nicht an den Greifer angepasst
  const r = Math.max(s.x, s.z, s.y + gLen * 0.75);
  floor.scale.set(r * 8, r * 8, 1);
  grid.scale.setScalar(r * 4);
  sun.position.set(-r * 1.5, r * 3, r * 1.2);
  Object.assign(sun.shadow.camera, { left: -r * 2, right: r * 2, top: r * 2, bottom: -r * 2, near: r * 0.1, far: r * 10 });
  sun.shadow.camera.updateProjectionMatrix();
  controls.target.set(0, s.y * 0.5 + gLen * 0.3, 0);
  camera.position.set(r * 1.15, r * 0.8, r * 1.45);
  camera.near = r / 200; camera.far = r * 100; camera.updateProjectionMatrix();
  controls.update();
}

function meshVolume(geo) {
  const p = geo.attributes.position, idx = geo.index;
  const a = new THREE.Vector3(), b = new THREE.Vector3(), c = new THREE.Vector3();
  let v = 0;
  const n = idx ? idx.count : p.count;
  for (let i = 0; i < n; i += 3) {
    const i0 = idx ? idx.getX(i) : i, i1 = idx ? idx.getX(i + 1) : i + 1, i2 = idx ? idx.getX(i + 2) : i + 2;
    a.fromBufferAttribute(p, i0); b.fromBufferAttribute(p, i1); c.fromBufferAttribute(p, i2);
    v += a.dot(b.cross(c)) / 6;
  }
  return Math.abs(v);
}

let facts = null;
function updateFacts() {
  const s = new THREE.Vector3(); box.getSize(s);
  const bbox = s.x * s.y * s.z;
  let vol = meshVolume(part.geometry);
  if (!(vol > 0 && vol <= bbox * 1.01)) vol = bbox * 0.5;   // offenes Netz: grob schätzen
  const dens = Number($('#kfg-material').value);
  const mass = vol * 1e-9 * dens;                           // mm³ → m³ · kg/m³
  facts = { s, vol, mass, grip: mode === 'innen' && innerWidth ? innerWidth : s.z, soft: $('#kfg-material').selectedOptions[0].dataset.weich === '1' };
  $('#kfg-masse').textContent = `${fmt(s.x)} × ${fmt(s.y)} × ${fmt(s.z)} mm (L × H × Greifbreite)` + (innerWidth ? ` · Innenmaß ${fmt(innerWidth)} mm` : '');
  $('#kfg-gewicht').textContent = mass < 1 ? `ca. ${fmt(mass * 1000)} g` : `ca. ${fmt(mass, 1)} kg`;
}

// ---------- Vorschlag ----------
function suggest() {
  if (!facts) return;
  const rangeText = (g) => `außen ${fmt(g.range.aussen[0])}–${fmt(g.range.aussen[1])} mm` + (g.range.innen ? ` · innen ${fmt(g.range.innen[0])}–${fmt(g.range.innen[1])} mm` : ' · kein Innengreifen');
  // Karten nur neu aufbauen, wenn sich die Auswahl ändert – sonst ginge ein Klick verloren,
  // der gleichzeitig ein Maßfeld verlässt (dessen change-Ereignis ruft suggest auf).
  const sig = A.id + Object.values(GRIPPERS).map((g) => g.ready).join();
  if ($('#kfg-vorschlag').dataset.sig !== sig) {
  $('#kfg-vorschlag').dataset.sig = sig;
  $('#kfg-vorschlag').innerHTML = Object.values(GRIPPERS).map((g) => {
    return `<button type="button" class="kfg__card${g === A ? ' is-active' : ''}" data-greifer="${g.id}" aria-pressed="${g === A}">
      <span class="kfg__rank">${g === A ? 'Im Test' : 'Zum Testen anklicken'}</span>
      <strong>${g.code}</strong> <span class="kfg__fam">${g.name}</span>
      <span class="kfg__why">Greifweite ${rangeText(g)}</span>
      <span class="kfg__note">${g.note}</span>
    </button>`; }).join('');
  $('#kfg-vorschlag').querySelectorAll('[data-greifer]').forEach((b) => b.addEventListener('click', () => b.dataset.greifer !== A.id && selectGripper(b.dataset.greifer)));
  }
  const body = [
    'Guten Tag,', '', 'über den Greifer-Konfigurator möchte ich folgendes Teil anfragen:',
    `Teil: ${$('#kfg-datei').textContent}`,
    `Abmessungen: ${fmt(facts.s.x)} × ${fmt(facts.s.y)} × ${fmt(facts.s.z)} mm (L × H × Greifbreite)`,
    `Werkstoff: ${$('#kfg-material').selectedOptions[0].textContent}`, `Gewicht (geschätzt): ${fmt(facts.mass, 2)} kg`,
    '', '(Falls vorhanden, bitte die STEP-Datei an diese E-Mail anhängen.)'].join('\n');
  $('#kfg-anfrage').href = 'mailto:info@gmg-system.com?subject=' + encodeURIComponent('Greiferanfrage über den Konfigurator') + '&body=' + encodeURIComponent(body);
}

// ---------- Greiftest ----------
const tmp = new THREE.Matrix4();
const touches = (mesh) => partBVH.intersectsGeometry(mesh.geometry, tmp.copy(mesh.matrixWorld));
const jawsTouch = () => A.contact.some(touches);
const anyTouch = () => A.meshes.some(touches);

function update() {
  if (!part) return;
  const s = new THREE.Vector3(); box.getSize(s);
  const inside = mode === 'innen';
  const jaw = A.reach;
  const h = $('#kfg-hoehe').value / 100;
  const top = s.y + jaw * 0.25, low = Math.max(s.y * 0.04, s.y - jaw * 0.9);
  A.root.position.y = top + (low - top) * h;
  // Verfahren in der Ebene: bis eine Fingerlänge über den Teilrand hinaus
  const reachX = s.x / 2 + jaw, reachZ = s.z / 2 + jaw;
  A.root.position.x = ($('#kfg-x').value / 100) * reachX;
  A.root.position.z = ($('#kfg-z').value / 100) * reachZ;
  A.root.updateMatrixWorld(true);
  // Außen: Regler schließt (0 = offen). Innen: Regler öffnet (0 = geschlossen, Backen spreizen nach außen).
  const v = $('#kfg-zu').value / 100;
  const start = inside ? 1 : 0;
  const target = inside ? 1 - v : v;
  A.set(start);
  let state, phi = target;
  if (anyTouch()) {
    state = 'kollision';
    phi = start;
  } else {
    A.set(target);
    if (jawsTouch()) {
      let free = start, hit = target;
      for (let i = 0; i < 14; i++) { const mid = (free + hit) / 2; A.set(mid); if (jawsTouch()) hit = mid; else free = mid; }
      phi = free;
      state = 'gegriffen';
    } else state = v >= 0.99 ? 'leer' : 'offen';
  }
  A.set(phi);
  const depth = s.y - A.root.position.y;   // wie weit die Backen-/Fingerspitzen unter der Oberkante sind
  A.paint(state);
  const what = inside ? `an den Innenwänden (Innenmaß ${fmt(facts.grip)} mm)` : `am Teil (Greifbreite ${fmt(facts.grip)} mm)`;
  const msg = {
    kollision: ['bad', inside ? 'Kollision: Der geschlossene Greifer passt so nicht in den Hohlraum. Höher fahren.'
      : 'Kollision: Der Greifer stößt beim Absenken auf das Teil. Weiter öffnen oder höher fahren.'],
    gegriffen: depth >= Math.min(jaw * 0.35, s.y * 0.5) ? ['ok', `${inside ? 'Innen gegriffen' : 'Gegriffen'}: ${A.word} ${what} an.`]
      : ['warn', 'Gegriffen, aber nur an der Kante. Für sicheren Halt den Greifer tiefer fahren.'],
    leer: ['warn', depth <= 0 ? 'Der Greifer ist über dem Teil und greift ins Leere. Mit „Höhe“ absenken.'
      : inside ? 'Greifer ganz geöffnet, ohne die Innenwände zu berühren.' : 'Greifer geschlossen, ohne das Teil zu berühren.'],
    offen: ['info', inside ? 'Greifer in den Hohlraum absenken und mit „Greifer öffnen“ spreizen.' : 'Mit „Greifer schließen“ zufahren und prüfen, wie das Teil gegriffen wird.'],
  }[state];
  const el = $('#kfg-status');
  el.className = 'kfg__status is-' + msg[0];
  el.textContent = msg[1];
}

function setMode(m) {
  mode = m;
  root.querySelectorAll('[data-griff]').forEach((b) => b.setAttribute('aria-pressed', b.dataset.griff === m ? 'true' : 'false'));
  $('#kfg-zu-label').textContent = m === 'innen' ? 'Greifer öffnen (innen spreizen)' : 'Greifer schließen';
  $('#kfg-zu').value = 0;
  $('#kfg-griff-innen').disabled = !innerWidth || !A.range.innen;
  if (!part) return;
  fitScene(); updateFacts(); suggest(); update();
}

// ---------- Laden ----------
// ---------- Ladeanzeige ----------
const ring = $('.kfg__progress');
function progress(pct, label) {
  ring.hidden = false;
  const p = Math.max(0, Math.min(100, pct));
  ring.querySelector('.kfg__ring-bar').style.strokeDashoffset = String(100 - p);
  ring.querySelector('.kfg__ring-pct').textContent = Math.round(p) + ' %';
  if (label) ring.querySelector('.kfg__ring-label').textContent = label;
}
const nextFrame = () => new Promise((r) => requestAnimationFrame(() => setTimeout(r, 0)));

function readFile(file, onPct) {
  return new Promise((resolve, reject) => {
    const fr = new FileReader();
    fr.onprogress = (e) => e.lengthComputable && onPct(e.loaded / e.total);
    fr.onload = () => resolve(fr.result);
    fr.onerror = () => reject(new Error('Datei konnte nicht gelesen werden.'));
    fr.readAsArrayBuffer(file);
  });
}

function geometryFrom(meshes) {
  return mergeGeometries(meshes.map((m) => {
    const g = new THREE.BufferGeometry();
    g.setAttribute('position', new THREE.Float32BufferAttribute(m.attributes.position.array, 3));
    if (m.index) g.setIndex(Array.from(m.index.array));
    return g.index ? g.toNonIndexed() : g;
  }));
}

function loadStep(buf, onPct) {
  // Im Hintergrund lesen, damit die Seite auch bei großen Dateien bedienbar bleibt.
  // OpenCascade meldet keinen Fortschritt: geschätzt aus der Dateigröße, läuft gegen 95 %.
  return new Promise((resolve, reject) => {
    const w = new Worker(BASE + 'assets/vendor/occt/gmg-step-worker.js');
    const expect = 2500 + buf.byteLength / 1048576 * 900, t0 = performance.now();
    const tick = setInterval(() => onPct(1 - Math.exp(-(performance.now() - t0) / expect)), 120);
    const done = () => { clearInterval(tick); w.terminate(); };
    w.onerror = () => { done(); reject(new Error('STEP-Leser konnte nicht gestartet werden.')); };
    w.onmessage = (ev) => {
      done();
      const r = ev.data;
      if (!r || !r.success || !r.meshes.length) { reject(new Error('Die STEP-Datei enthält keine lesbaren Körper.')); return; }
      onPct(1);
      resolve(geometryFrom(r.meshes));
    };
    w.postMessage({ buffer: new Uint8Array(buf), params: { linearUnit: 'millimeter', linearDeflectionType: 'bounding_box_ratio', linearDeflection: 0.002, angularDeflection: 0.4 } });
  });
}

function loadStl(buf, onPct) {
  // STL im Hintergrund zerlegen, mit echtem Fortschritt
  return new Promise((resolve, reject) => {
    const w = new Worker(BASE + 'assets/vendor/gmg-stl-worker.js');
    w.onerror = () => { w.terminate(); reject(new Error('STL-Leser konnte nicht gestartet werden.')); };
    w.onmessage = (ev) => {
      if (ev.data.progress != null) { onPct(ev.data.progress); return; }
      w.terminate();
      if (ev.data.error) { reject(new Error(ev.data.error)); return; }
      const g = new THREE.BufferGeometry();
      g.setAttribute('position', new THREE.BufferAttribute(ev.data.positions, 3));
      resolve(g);
    };
    w.postMessage(buf, [buf]);
  });
}

async function loadFile(file) {
  const ext = file.name.split('.').pop().toLowerCase();
  const info = $('#kfg-datei');
  if (!['step', 'stp', 'stl'].includes(ext)) { info.textContent = 'Bitte eine STEP- (.step, .stp) oder STL-Datei wählen.'; return; }
  if (file.size > MAX_BYTES) { info.textContent = `Die Datei ist ${fmt(file.size / 1048576, 1)} MB groß – erlaubt sind bis 100 MB.`; return; }
  info.textContent = `${file.name} wird gelesen …` + (file.size > SLOW_BYTES ? ' Große Datei, das kann bis zu einer Minute dauern.' : '');
  root.classList.add('is-loading');
  progress(0, 'Datei wird gelesen');
  try {
    const buf = await readFile(file, (f) => progress(f * 25));
    fileKind = ext === 'stl' ? 'stl' : 'step';
    $('#kfg-einheit').disabled = false;
    progress(25, 'Geometrie wird berechnet');
    baseGeo = fileKind === 'stl' ? await loadStl(buf, (f) => progress(25 + f * 65)) : await loadStep(buf, (f) => progress(25 + f * 65));
    if (baseGeo.index) baseGeo = baseGeo.toNonIndexed();
    if (baseGeo.attributes.normal) baseGeo.deleteAttribute('normal');
    baseGeo.computeBoundingBox();
    progress(92, 'Darstellung wird aufgebaut');
    await nextFrame();
    info.textContent = `${file.name} (${fmt(file.size / 1048576, 1)} MB) – wird nur in Ihrem Browser verarbeitet.`;
    placePart(true);
    progress(100, 'Fertig');
    await new Promise((r) => setTimeout(r, 450));
  } catch (e) {
    info.textContent = 'Die Datei konnte nicht gelesen werden: ' + e.message;
  } finally {
    root.classList.remove('is-loading');
    ring.hidden = true;
  }
}

// Grundformen mit eigenen Maßen (mm), falls keine Datei vorliegt
const FORMS = {
  zylinder: { name: 'Zylinder', fields: [['d', 'Durchmesser', 80], ['l', 'Länge', 260]],
    geo: (v) => new THREE.CylinderGeometry(v.d / 2, v.d / 2, v.l, 96).rotateZ(Math.PI / 2),
    label: (v) => `Zylinder Ø ${fmt(v.d)} × ${fmt(v.l)} mm` },
  quader: { name: 'Quader', fields: [['l', 'Länge', 200], ['b', 'Breite', 90], ['h', 'Höhe', 120]],
    geo: (v) => new THREE.BoxGeometry(v.l, v.h, v.b),
    label: (v) => `Quader ${fmt(v.l)} × ${fmt(v.b)} × ${fmt(v.h)} mm` },
  rohr: { name: 'Rohr / Ring', fields: [['d', 'Außen-Ø', 100], ['i', 'Innen-Ø', 60], ['l', 'Länge', 50]],
    geo: (v) => {
      const sh = new THREE.Shape(); sh.absarc(0, 0, v.d / 2, 0, Math.PI * 2, false);
      const hole = new THREE.Path(); hole.absarc(0, 0, Math.min(v.i, v.d - 1) / 2, 0, Math.PI * 2, true); sh.holes.push(hole);
      return new THREE.ExtrudeGeometry(sh, { depth: v.l, curveSegments: 96, bevelEnabled: false }).rotateX(Math.PI / 2);
    },
    label: (v) => `Rohr Ø ${fmt(v.d)} / ${fmt(v.i)} × ${fmt(v.l)} mm` },
  kasten: { name: 'Kasten offen', fields: [['l', 'Länge', 300], ['b', 'Breite', 200], ['h', 'Höhe', 150], ['t', 'Wandstärke', 10]],
    geo: (v) => {   // Boden + vier Wände, ohne Überschneidung (Volumen stimmt)
      const t = Math.min(v.t, v.l / 2 - 1, v.b / 2 - 1, v.h - 1), wh = v.h - t;
      const at = (g, x, y, z) => g.translate(x, y, z);
      return mergeGeometries([
        at(new THREE.BoxGeometry(v.l, t, v.b), 0, t / 2, 0),
        at(new THREE.BoxGeometry(v.l, wh, t), 0, t + wh / 2, v.b / 2 - t / 2),
        at(new THREE.BoxGeometry(v.l, wh, t), 0, t + wh / 2, -v.b / 2 + t / 2),
        at(new THREE.BoxGeometry(t, wh, v.b - 2 * t), v.l / 2 - t / 2, t + wh / 2, 0),
        at(new THREE.BoxGeometry(t, wh, v.b - 2 * t), -v.l / 2 + t / 2, t + wh / 2, 0),
      ]);
    },
    label: (v) => `Kasten offen ${fmt(v.l)} × ${fmt(v.b)} × ${fmt(v.h)} mm, Wand ${fmt(v.t)} mm` },
};
let form = 'zylinder';
function renderFormFields() {
  const f = FORMS[form];
  $('#kfg-form-felder').innerHTML = f.fields.map(([k, label, def]) => `
    <div class="field"><label for="kfg-f-${k}">${label} (mm)</label>
    <input id="kfg-f-${k}" data-k="${k}" type="number" min="1" max="10000" step="1" value="${def}" inputmode="decimal"></div>`).join('');
  root.querySelectorAll('[data-form]').forEach((b) => b.setAttribute('aria-pressed', b.dataset.form === form ? 'true' : 'false'));
  $('#kfg-form-felder').querySelectorAll('input').forEach((i) => {
    i.addEventListener('input', () => buildForm(false, false));   // beim Tippen nur rechnen, Feld nicht überschreiben
    i.addEventListener('change', () => buildForm(false, true));   // beim Verlassen korrigierten Wert eintragen
  });
}
// Unmögliche Maße sperren: Innen-Ø < Außen-Ø, Wandstärke passt in Länge, Breite und Höhe (mind. 1 mm Wand/Öffnung)
function limits(v) {
  const notes = [];
  if (form === 'rohr' && v.i > v.d - 2) {
    v.i = Math.max(1, v.d - 2);
    notes.push(`Innen-Ø muss kleiner als Außen-Ø sein – auf ${fmt(v.i)} mm begrenzt.`);
  }
  if (form === 'kasten') {
    const max = Math.max(1, Math.min((v.l - 2) / 2, (v.b - 2) / 2, v.h - 1));
    if (v.t > max) { v.t = Math.floor(max); notes.push(`Wandstärke passt nicht in Länge, Breite und Höhe – auf ${fmt(v.t)} mm begrenzt.`); }
  }
  return notes;
}
function readForm(writeBack) {
  const inputs = [...$('#kfg-form-felder').querySelectorAll('input')];
  const v = {};
  for (const i of inputs) v[i.dataset.k] = Math.min(10000, Math.max(1, Number(i.value) || 1));
  const notes = limits(v);
  if (form === 'rohr') $('#kfg-f-i').max = Math.max(1, v.d - 2);
  if (form === 'kasten') $('#kfg-f-t').max = v.t;
  if (writeBack) for (const i of inputs) if (Number(i.value) !== v[i.dataset.k]) i.value = v[i.dataset.k];
  $('#kfg-form-hinweis').textContent = notes.join(' ');
  return v;
}
function buildForm(autoOrient, writeBack = true) {
  const v = readForm(writeBack);
  fileKind = 'form';
  $('#kfg-einheit').value = 'auto';
  $('#kfg-einheit').disabled = true;
  const g = FORMS[form].geo(v);
  baseGeo = g.index ? g.toNonIndexed() : g;
  baseGeo.computeBoundingBox();
  $('#kfg-datei').textContent = 'Grundform: ' + FORMS[form].label(v);
  placePart(autoOrient);
}
function sample(kind) {
  form = kind;
  mode = kind === 'kasten' ? 'innen' : 'aussen';   // offener Kasten: zum Innengreifen gedacht
  renderFormFields();
  buildForm(true);
  setMode(innerWidth ? mode : 'aussen');
}

// ---------- Bedienung ----------
const input = $('#kfg-file');
input.addEventListener('change', () => input.files[0] && loadFile(input.files[0]));
const drop = $('.kfg__drop');
['dragenter', 'dragover'].forEach((t) => drop.addEventListener(t, (e) => { e.preventDefault(); drop.classList.add('is-over'); }));
['dragleave', 'drop'].forEach((t) => drop.addEventListener(t, (e) => { e.preventDefault(); drop.classList.remove('is-over'); }));
drop.addEventListener('drop', (e) => e.dataTransfer.files[0] && loadFile(e.dataTransfer.files[0]));
root.querySelectorAll('[data-form]').forEach((b) => b.addEventListener('click', () => sample(b.dataset.form)));
$('#kfg-einheit').addEventListener('change', () => placePart(false));
$('#kfg-material').addEventListener('change', () => { updateFacts(); suggest(); });
$('#kfg-hoehe').addEventListener('input', update);
$('#kfg-zu').addEventListener('input', update);
$('#kfg-x').addEventListener('input', update);
$('#kfg-z').addEventListener('input', update);
root.querySelectorAll('[data-griff]').forEach((b) => b.addEventListener('click', () => setMode(b.dataset.griff)));
$('#kfg-dreh-y').addEventListener('click', () => { turns.y = (turns.y + 1) % 4; placePart(false); });
$('#kfg-dreh-x').addEventListener('click', () => { turns.x = (turns.x + 1) % 4; placePart(false); });
$('#kfg-dreh-z').addEventListener('click', () => { turns.z = (turns.z + 1) % 4; placePart(false); });

function resize() {
  const w = viewport.clientWidth, h = viewport.clientHeight;
  renderer.setSize(w, h, false);
  camera.aspect = w / h;
  camera.updateProjectionMatrix();
}
window.addEventListener('resize', resize);
resize();
pose(0);
sample('zylinder');
root.classList.add('is-ready');
(function loop() { requestAnimationFrame(loop); controls.update(); renderer.render(scene, camera); })();
window.__kfg = { sample, update, setMode, selectGripper, gripper: () => A.id, move: (x, z) => { $('#kfg-x').value = x; $('#kfg-z').value = z; update(); }, set: (h, z) => { $('#kfg-hoehe').value = h; $('#kfg-zu').value = z; update(); }, status: () => $('#kfg-status').textContent };
