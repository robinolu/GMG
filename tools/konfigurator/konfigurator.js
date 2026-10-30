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
import SPECS from '../../data/greifer-specs.json';

const root = document.querySelector('[data-konfigurator]');
const BASE = root.dataset.base || '';
const $ = (s) => root.querySelector(s);
const MAX_BYTES = 10 * 1024 * 1024;
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
let turns = { x: 0, y: 0 };  // Vierteldrehungen
let part = null, partBVH = null, box = new THREE.Box3();
const partMat = new THREE.MeshStandardMaterial({ color: 0xd9a441, metalness: 0.2, roughness: 0.55 });

function unitFactor() {
  const u = $('#kfg-einheit').value;
  if (u !== 'auto') return { f: { mm: 1, cm: 10, m: 1000 }[u], auto: false };
  if (fileKind !== 'stl') return { f: 1, auto: true, label: 'mm' };
  // STL hat keine Einheit: Größe plausibel schätzen (Greifteile liegen meist zwischen 5 mm und 2 m)
  const s = new THREE.Vector3(); baseGeo.boundingBox.getSize(s);
  const d = Math.max(s.x, s.y, s.z);
  if (d < 2) return { f: 1000, auto: true, label: 'm' };
  return { f: 1, auto: true, label: 'mm' };
}

function placePart(autoOrient) {
  if (!baseGeo) return;
  const { f, auto, label } = unitFactor();
  $('#kfg-einheit-info').textContent = auto ? (fileKind === 'step' ? 'aus der STEP-Datei übernommen (mm)' : `erkannt: ${label}`) : '';
  const geo = baseGeo.clone();
  geo.scale(f, f, f);
  geo.computeBoundingBox();
  if (autoOrient) {   // schmalere waagerechte Seite in Greifrichtung (Z)
    const s = new THREE.Vector3(); geo.boundingBox.getSize(s);
    turns = { x: 0, y: s.z > s.x ? 1 : 0 };
  }
  geo.applyMatrix4(new THREE.Matrix4().makeRotationX(turns.x * Math.PI / 2));
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
  fitScene();
  updateFacts();
  suggest();
  update();
}

function fitScene() {
  const s = new THREE.Vector3(); box.getSize(s);
  const w = Math.max(s.z, 1);
  gripper.scale.setScalar((w * 1.35) / MODEL_GAP);   // Platzhalter-Greifer an die Teilgröße angepasst
  const gLen = MODEL_LEN * gripper.scale.x;
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
  facts = { s, vol, mass, grip: s.z, soft: $('#kfg-material').selectedOptions[0].dataset.weich === '1' };
  $('#kfg-masse').textContent = `${fmt(s.x)} × ${fmt(s.y)} × ${fmt(s.z)} mm (L × H × Greifbreite)`;
  $('#kfg-gewicht').textContent = mass < 1 ? `ca. ${fmt(mass * 1000)} g` : `ca. ${fmt(mass, 1)} kg`;
}

// ---------- Vorschlag ----------
function suggest() {
  if (!facts) return;
  const need = facts.mass * 9.81 * 2 / (2 * 0.1);   // Reibschluss: μ 0,1, Sicherheit 2, zwei Backen
  const w = facts.grip;
  const rows = [];
  for (const g of SPECS.greifer) {
    if (!!g.weich !== facts.soft) continue;
    let score = 50, why = [];
    if (g.familie === 'Einzelfinger') score -= 15;   // Baustein für Eigenkonstruktionen, kein Komplettgreifer
    if (g.kraft != null) {
      if (g.kraft < need) continue;
      score -= Math.min(20, Math.log10(g.kraft / Math.max(need, 1)) * 6);
      why.push(`Greifkraft bis ${fmt(g.kraft)} N (benötigt ca. ${fmt(Math.max(need, 1))} N)`);
    }
    if (g.weite) {
      const [a, b] = g.weite;
      if (w >= a && w <= b) { score += 40 - Math.abs(w - (a + b) / 2) / (b - a) * 30; why.unshift(`Greifweite ${a}–${b} mm passt zu ${fmt(w)} mm`); }
      else if (w < a && w >= a * 0.4) { score += 5; why.unshift(`mit angepassten Fingern (Standard ${a}–${b} mm)`); }
      else continue;
    } else {
      why.unshift('Greifweite über Fingerlänge anpassbar');
    }
    rows.push({ g, score, why });
  }
  rows.sort((p, q) => q.score - p.score);
  const list = $('#kfg-vorschlag');
  if (!rows.length) {
    list.innerHTML = '<p class="kfg__empty">Für dieses Teil passt keiner der Standardgreifer direkt. Häufig ist das ein Fall für eine kundenspezifische Lösung – fragen Sie uns gern an.</p>';
  } else {
    list.innerHTML = rows.slice(0, 4).map((r, i) => `
      <a class="kfg__card${i === 0 ? ' is-best' : ''}" href="${BASE}${r.g.url}">
        <span class="kfg__rank">${i === 0 ? 'Beste Wahl' : 'Alternative'}</span>
        <strong>${r.g.code}</strong> <span class="kfg__fam">${r.g.familie}</span>
        <span class="kfg__why">${r.why.join(' · ')}</span>
        <span class="kfg__note">${r.g.hinweis}</span>
      </a>`).join('');
  }
  const top = rows.slice(0, 3).map((r) => r.g.code).join(', ') || 'keiner';
  const body = [
    'Guten Tag,', '', 'über den Greifer-Konfigurator möchte ich folgendes Teil anfragen:',
    `Abmessungen: ${fmt(facts.s.x)} × ${fmt(facts.s.y)} × ${fmt(facts.s.z)} mm (L × H × Greifbreite)`,
    `Werkstoff: ${$('#kfg-material').selectedOptions[0].textContent}`, `Gewicht (geschätzt): ${fmt(facts.mass, 2)} kg`,
    `Vorschlag des Konfigurators: ${top}`, '', '(Bitte die STEP-Datei an diese E-Mail anhängen.)'].join('\n');
  $('#kfg-anfrage').href = 'mailto:info@gmg-system.com?subject=' + encodeURIComponent('Greiferanfrage über den Konfigurator') + '&body=' + encodeURIComponent(body);
}

// ---------- Greiftest ----------
const tmp = new THREE.Matrix4();
const touches = (name) => partBVH.intersectsGeometry(parts[name].geometry, tmp.copy(parts[name].matrixWorld));
const jawsTouch = () => touches('backe_a') || touches('backe_b');
const anyTouch = () => Object.keys(parts).some(touches);

function update() {
  if (!part) return;
  const s = new THREE.Vector3(); box.getSize(s);
  const jaw = MODEL_JAW_LEN * gripper.scale.x;
  const h = $('#kfg-hoehe').value / 100;
  const top = s.y + jaw * 0.25, low = Math.max(s.y * 0.04, s.y - jaw * 0.9);
  gripper.position.y = top + (low - top) * h;
  const target = PHI_MAX * ($('#kfg-zu').value / 100);
  pose(0);
  let state, phi = target;
  if (anyTouch()) {
    state = 'kollision';
    phi = 0;
  } else {
    pose(target);
    if (jawsTouch()) {
      let lo = 0, hi = target;
      for (let i = 0; i < 14; i++) { const mid = (lo + hi) / 2; pose(mid); if (jawsTouch()) hi = mid; else lo = mid; }
      phi = lo;
      state = 'gegriffen';
    } else state = target >= PHI_MAX * 0.99 ? 'leer' : 'offen';
  }
  pose(phi);
  const depth = s.y - gripper.position.y;   // wie weit die Backenspitzen unter der Oberkante sind
  for (const n of ['backe_a', 'backe_b']) parts[n].material = state === 'gegriffen' ? jawContact : state === 'kollision' ? jawCollide : MAT.backe;
  const msg = {
    kollision: ['bad', 'Kollision: Der Greifer stößt beim Absenken auf das Teil. Weiter öffnen oder höher fahren.'],
    gegriffen: depth >= Math.min(jaw * 0.35, s.y * 0.5) ? ['ok', `Gegriffen: Beide Backen liegen am Teil an (Greifbreite ${fmt(facts.grip)} mm).`]
      : ['warn', 'Gegriffen, aber nur an der Kante. Für sicheren Halt den Greifer tiefer fahren.'],
    leer: ['warn', depth <= 0 ? 'Der Greifer ist über dem Teil und greift ins Leere. Mit „Höhe“ absenken.' : 'Greifer geschlossen, ohne das Teil zu berühren.'],
    offen: ['info', 'Mit „Greifer schließen“ zufahren und prüfen, wie das Teil gegriffen wird.'],
  }[state];
  const el = $('#kfg-status');
  el.className = 'kfg__status is-' + msg[0];
  el.textContent = msg[1];
}

// ---------- Laden ----------
async function loadStep(buf) {
  if (!window.occtimportjs) {
    await new Promise((res, rej) => {
      const sc = document.createElement('script');
      sc.src = BASE + 'assets/vendor/occt/occt-import-js.js';
      sc.onload = res; sc.onerror = () => rej(new Error('STEP-Leser konnte nicht geladen werden.'));
      document.head.appendChild(sc);
    });
  }
  const occt = await window.occtimportjs({ locateFile: (f) => BASE + 'assets/vendor/occt/' + f });
  const r = occt.ReadStepFile(new Uint8Array(buf), { linearUnit: 'millimeter', linearDeflectionType: 'bounding_box_ratio', linearDeflection: 0.002, angularDeflection: 0.4 });
  if (!r.success || !r.meshes.length) throw new Error('Die STEP-Datei enthält keine lesbaren Körper.');
  return mergeGeometries(r.meshes.map((m) => {
    const g = new THREE.BufferGeometry();
    g.setAttribute('position', new THREE.Float32BufferAttribute(m.attributes.position.array, 3));
    if (m.index) g.setIndex(Array.from(m.index.array));
    return g.index ? g.toNonIndexed() : g;
  }));
}

async function loadFile(file) {
  const ext = file.name.split('.').pop().toLowerCase();
  const info = $('#kfg-datei');
  if (!['step', 'stp', 'stl'].includes(ext)) { info.textContent = 'Bitte eine STEP- (.step, .stp) oder STL-Datei wählen.'; return; }
  if (file.size > MAX_BYTES) { info.textContent = `Die Datei ist ${fmt(file.size / 1048576, 1)} MB groß – erlaubt sind bis 10 MB.`; return; }
  info.textContent = `${file.name} wird gelesen …`;
  root.classList.add('is-loading');
  try {
    const buf = await file.arrayBuffer();
    fileKind = ext === 'stl' ? 'stl' : 'step';
    baseGeo = fileKind === 'stl' ? new STLLoader().parse(buf) : await loadStep(buf);
    if (baseGeo.index) baseGeo = baseGeo.toNonIndexed();
    baseGeo.deleteAttribute('normal');
    baseGeo.computeBoundingBox();
    info.textContent = `${file.name} (${fmt(file.size / 1048576, 1)} MB) – wird nur in Ihrem Browser verarbeitet.`;
    placePart(true);
  } catch (e) {
    info.textContent = 'Die Datei konnte nicht gelesen werden: ' + e.message;
  } finally {
    root.classList.remove('is-loading');
  }
}

function sample(kind) {
  fileKind = 'muster';
  $('#kfg-einheit').value = 'auto';
  const geo = {
    welle: () => new THREE.CylinderGeometry(40, 40, 260, 64).rotateZ(Math.PI / 2),
    karton: () => new THREE.BoxGeometry(300, 160, 200),
    flansch: () => new THREE.CylinderGeometry(90, 90, 40, 96),
  }[kind]();
  baseGeo = geo.toNonIndexed();
  baseGeo.computeBoundingBox();
  $('#kfg-material').value = { welle: '7850', karton: '150', flansch: '2700' }[kind];
  $('#kfg-datei').textContent = 'Beispielteil: ' + { welle: 'Welle Ø 80 × 260 mm, Stahl', karton: 'Karton 300 × 200 × 160 mm', flansch: 'Scheibe Ø 180 × 40 mm, Aluminium' }[kind];
  placePart(true);
}

// ---------- Bedienung ----------
const input = $('#kfg-file');
input.addEventListener('change', () => input.files[0] && loadFile(input.files[0]));
const drop = $('.kfg__drop');
['dragenter', 'dragover'].forEach((t) => drop.addEventListener(t, (e) => { e.preventDefault(); drop.classList.add('is-over'); }));
['dragleave', 'drop'].forEach((t) => drop.addEventListener(t, (e) => { e.preventDefault(); drop.classList.remove('is-over'); }));
drop.addEventListener('drop', (e) => e.dataTransfer.files[0] && loadFile(e.dataTransfer.files[0]));
root.querySelectorAll('[data-muster]').forEach((b) => b.addEventListener('click', () => sample(b.dataset.muster)));
$('#kfg-einheit').addEventListener('change', () => placePart(false));
$('#kfg-material').addEventListener('change', () => { updateFacts(); suggest(); });
$('#kfg-hoehe').addEventListener('input', update);
$('#kfg-zu').addEventListener('input', update);
$('#kfg-dreh-y').addEventListener('click', () => { turns.y = (turns.y + 1) % 4; placePart(false); });
$('#kfg-dreh-x').addEventListener('click', () => { turns.x = (turns.x + 1) % 4; placePart(false); });

function resize() {
  const w = viewport.clientWidth, h = viewport.clientHeight;
  renderer.setSize(w, h, false);
  camera.aspect = w / h;
  camera.updateProjectionMatrix();
}
window.addEventListener('resize', resize);
resize();
pose(0);
sample('welle');
root.classList.add('is-ready');
(function loop() { requestAnimationFrame(loop); controls.update(); renderer.render(scene, camera); })();
window.__kfg = { sample, update, set: (h, z) => { $('#kfg-hoehe').value = h; $('#kfg-zu').value = z; update(); }, status: () => $('#kfg-status').textContent };
