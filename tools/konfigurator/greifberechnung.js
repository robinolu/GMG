// Profi-Modus des Konfigurators: Greifberechnung nach dem Konzept „Greifberechnung: Konzept für den Konfigurator“
// (Stand 1. November 2026). Alle Werte und Regeln stehen in data/greifberechnung.json (erzeugt von
// tools/greifberechnung/daten.py), nicht im Programmcode. Info-Texte: data/info_texte.json, Skizzen: assets/img/info/.
// Einheiten: Längen in mm, Masse in kg, Kräfte in N, Druck in kPa.
import * as THREE from 'three';
import { STLExporter } from 'three/examples/jsm/exporters/STLExporter.js';
import D from '../../data/greifberechnung.json';

const G = 9.81;
const UP = new THREE.Vector3(0, 1, 0);
const F = D.festlegungen;
const W = D.werkstoffe;
const fmt = (v, d = 0) => v.toLocaleString('de-DE', { maximumFractionDigits: d, minimumFractionDigits: d });
const kraft = (x) => !isFinite(x) ? 'unbegrenzt' : x >= 1000 ? `${fmt(x / 1000, 2)} kN` : `${fmt(x, x < 10 ? 1 : 0)} N`;
const zahl = (s) => { const v = Number(String(s ?? '').replace(',', '.')); return isFinite(v) ? v : 0; };

// ---------------------------------------------------------------- Reibwerte
function paar(a, b) { return D.reibwerte.find((r) => (r.a === a && r.b === b) || (r.a === b && r.b === a)); }
const gruppe = (m) => (W[m] || {}).gruppe;
// Paarungsklasse für den Zustandsfaktor
function klasse(belag, prod) {
  const gb = gruppe(belag), gp = gruppe(prod);
  if (gb === 'gummi' || gp === 'gummi') return (gb === 'gummi' ? W[prod] : W[belag]).glatt ? 'gummi_glatt' : 'gummi_rau';
  if (gb === 'metall' && gp === 'metall') return 'metall_metall';
  if ((gb === 'metall' && gp === 'glas') || (gb === 'glas' && gp === 'metall')) return 'metall_glas';
  if ((gb === 'leder' && gp === 'metall') || (gb === 'metall' && gp === 'leder')) return 'leder_metall';
  if ((gb === 'hart' && gp === 'metall') || (gb === 'metall' && gp === 'hart')) return 'hart_stahl';
  if ((gb === 'holz' && gp === 'metall') || (gb === 'metall' && gp === 'holz')) return 'holz_metall';
  return 'sonst';
}
// μ für die Rechnung: Tabellenwert × 0,7 × Zustandsfaktor. Fehlt die Paarung: kleinster bekannter Wert der Werkstoffgruppe, Gelb.
export function reibwert(belag, prod, zustand) {
  let r = paar(belag, prod), ersatz = null;
  if (!r) {
    const gb = gruppe(belag), gp = gruppe(prod);
    const kand = D.reibwerte.filter((x) => (gruppe(x.a) === gb && x.b === prod) || (gruppe(x.b) === gb && x.a === prod)
      || (x.a === belag && gruppe(x.b) === gp) || (x.b === belag && gruppe(x.a) === gp));
    const weiter = kand.length ? kand : D.reibwerte.filter((x) => (gruppe(x.a) === gb && gruppe(x.b) === gp) || (gruppe(x.b) === gb && gruppe(x.a) === gp));
    const min = weiter.length ? weiter.reduce((m, x) => (x.mu < m.mu ? x : m)) : null;
    ersatz = min ? { mu: min.mu, von: `${min.a} auf ${min.b}` } : { mu: 0.1, von: null };
  }
  const tab = r ? r.mu : ersatz.mu;
  const k = klasse(belag, prod), Z = D.zustand[k];
  let mu = tab * F.abschlag_mu, faktor = 1, annahme = false;
  if (zustand !== 'trocken') {
    if (Z[zustand + '_fest'] != null) { mu = Z[zustand + '_fest']; faktor = null; }
    else { faktor = Z[zustand] ?? 1; mu *= faktor; }
    annahme = (Z.annahme || []).includes(zustand);
  }
  return { mu, tab, faktor, klasse: Z.name, annahme, quelle: r ? r.quelle : null, sperre: r && r.sperre, ersatz };
}

// ---------------------------------------------------------------- Lastfälle
// c: m, mu, n, S, az, ax, aN, form ('flach'|'prisma'|'kontur'|'konus'), alpha, U (%), gamma, quer (Last quer zur Teileachse),
//    e (mm), rk (mm), fmaxN (N, je Backe)
export function lastfaelle(c) {
  const { m, mu, n, S, az, ax, aN } = c;
  const L = [];
  const lasten = [['Heben/Absenken', G + az], ['seitliche Beschleunigung', Math.sqrt((G + az) ** 2 + ax * ax)], ['Not-Halt', Math.sqrt(G * G + aN * aN)]];
  const form = (c.form === 'prisma' || c.form === 'kontur') && !c.quer ? 'flach' : c.form;   // Formschluss nur quer zur Teileachse
  for (const [name, acc] of lasten) {
    if (form === 'prisma') L.push({ nr: 4, name: `Prismenbacken α ${c.alpha}°, ${name}`, F: m * acc * Math.sin(THREE.MathUtils.degToRad(c.alpha / 2)) * S / (2 * mu) });
    else if (form === 'kontur') { const phi = THREE.MathUtils.degToRad(Math.min(c.U, F.umschliessung_max) / 100 * 90); L.push({ nr: 4, name: `Konturbacke ${Math.round(c.U)} % Umschließung, ${name}`, F: m * acc * Math.cos(phi) * S / (2 * mu) }); }
    else if (form === 'konus') L.push({ nr: 4, name: `Kegelbacke γ ${c.gamma}°, ${name}`, F: m * acc * S / (2 * (mu + Math.tan(THREE.MathUtils.degToRad(c.gamma)))) });
    else L.push({ nr: name === 'Heben/Absenken' ? 1 : 2, name: `Klemmen, ${name}`, F: m * acc * S / (mu * n) });
  }
  L.push({ nr: 3, name: 'Beschleunigung in Schließrichtung', F: m * Math.max(ax, aN) * S });
  if (c.e > 0.5 && c.rk > 0) L.push({ nr: 6, name: `Kippen (Hebelarm ${Math.round(c.e)} mm)`, F: m * (G + az) * c.e / 1000 * S / (mu * n * c.rk / 1000) });
  let fmin = 0, mass = null;
  for (const l of L) if (l.F > fmin) { fmin = l.F; mass = l; }
  if (mass) mass.mass = true;
  const fmax = c.fmaxN > 0 ? c.fmaxN : Infinity;
  return { L, fmin, fmax, reserve: fmax - fmin, form };
}
// höchste Beschleunigung, bei der F_min gerade F_max erreicht (Halbierung)
function aMax(c) {
  if (!isFinite(c.fmaxN)) return null;
  let lo = 0, hi = 200;
  const f = (a) => lastfaelle({ ...c, az: a, ax: a, aN: Math.max(c.aN, a) }).fmin;
  if (f(0) > c.fmaxN) return 0;
  if (f(hi) <= c.fmaxN) return hi;
  for (let i = 0; i < 30; i++) { const mid = (lo + hi) / 2; if (f(mid) <= c.fmaxN) lo = mid; else hi = mid; }
  return lo;
}

// ---------------------------------------------------------------- Temperatur
// Grenzen eines Werkstoffs; p = Flächenpressung × S in MPa (für Kunststoffe, die nur eine HDT haben)
function grenzen(name, pS) {
  const w = W[name]; if (!w) return null;
  if (w.gruppe === 'metall') return { unten: null, dauer: null, kurz: null };
  let hdt = null, rot = false;
  if (w.hdt045 != null) {
    if (pS <= 0.45) hdt = w.hdt045;
    else if (pS <= 1.8) hdt = w.hdt18 ?? w.hdt045 - F.hdt18_ersatz_abzug;
    else rot = true;
  }
  const dauer = w.dauer ?? (hdt != null ? hdt - F.hdt_ohne_dauer_abzug : null);
  const kurz = w.kurz ?? (hdt != null ? hdt : dauer);
  return { unten: w.unten, dauer, kurz, hdt, rot };
}
export function temperatur(rolle, name, tUmg, tProd, pS, hochTakt) {
  const g = grenzen(name, pS); const out = [];
  if (!g) return out;
  const gelb = F.temperatur_gelb_abstand;
  if (g.rot) { out.push(['rot', `${rolle} ${name}: Flächenpressung × S über 1,8 MPa, keine Freigabe für diesen Kunststoff.`]); return out; }
  const pr = (t, grenze, art) => {
    if (grenze == null) return;
    if (t > grenze) out.push(['rot', `${rolle} ${name}: ${art} ${t} °C liegt über der Grenze von ${grenze} °C.`]);
    else if (t > grenze - gelb) out.push(['gelb', `${rolle} ${name}: ${art} ${t} °C liegt weniger als ${gelb} °C unter der Grenze von ${grenze} °C.`]);
  };
  pr(tUmg, g.dauer, 'Umgebungstemperatur');
  pr(tProd, hochTakt ? g.dauer : g.kurz, 'Produkttemperatur');
  for (const [t, art] of [[tUmg, 'Umgebungstemperatur'], [tProd, 'Produkttemperatur']]) {
    if (g.unten == null) continue;
    if (t < g.unten) out.push(['rot', `${rolle} ${name}: ${art} ${t} °C liegt unter der Untergrenze von ${g.unten} °C.`]);
    else if (t < g.unten + gelb) out.push(['gelb', `${rolle} ${name}: ${art} ${t} °C liegt nahe der Untergrenze von ${g.unten} °C.`]);
  }
  if ((g.dauer == null && g.kurz == null) && W[name].gruppe !== 'metall' && (tUmg > 40 || tProd > 40)) out.push(['gelb', `${rolle} ${name}: keine Temperaturgrenze bekannt, Versuch empfohlen.`]);
  return out;
}

// ---------------------------------------------------------------- Sperrregeln
export function sperren(E) {
  const out = [];
  for (const r of D.sperrregeln) {
    if (r.belag_gruppe && gruppe(E.belag) !== r.belag_gruppe) continue;
    if (r.belag && !r.belag.includes(E.belag)) continue;
    if (r.produkt && !r.produkt.includes(E.prod)) continue;
    if (r.belastbarkeit && !r.belastbarkeit.includes(E.stufe)) continue;
    if (r.nur_reibschluss && E.form !== 'flach') continue;
    if (r.glatt && !(W[E.prod] || {}).glatt) continue;
    if (r.zustand && !r.zustand.includes(E.zustand)) continue;
    if (r.fehlender_wert && !E.rw.ersatz) continue;
    out.push(r);
  }
  return out;
}

// ---------------------------------------------------------------- Geometrie
export function schwerpunkt(geo) {
  const p = geo.attributes.position, idx = geo.index;
  const a = new THREE.Vector3(), b = new THREE.Vector3(), c = new THREE.Vector3(), x = new THREE.Vector3();
  let V = 0; const C = new THREE.Vector3();
  const n = idx ? idx.count : p.count;
  for (let i = 0; i < n; i += 3) {
    a.fromBufferAttribute(p, idx ? idx.getX(i) : i); b.fromBufferAttribute(p, idx ? idx.getX(i + 1) : i + 1); c.fromBufferAttribute(p, idx ? idx.getX(i + 2) : i + 2);
    const v = a.dot(x.copy(b).cross(c)) / 6;
    V += v; C.addScaledVector(x.copy(a).add(b).add(c), v / 4);
  }
  if (Math.abs(V) < 1e-9) { geo.computeBoundingBox(); return geo.boundingBox.getCenter(new THREE.Vector3()); }
  return C.divideScalar(V);
}
const ray = new THREE.Ray();
function hit(bvh, o, d) {
  ray.origin.copy(o); ray.direction.copy(d);
  const h = bvh.raycastFirst(ray, THREE.DoubleSide);
  return h ? { p: h.point.clone(), n: h.face.normal.clone(), dist: h.distance } : null;
}
// Eine Position prüfen: Greifachse durch P0 in Richtung d, Belag w (quer, entlang u) × h (senkrecht)
function pruefen(ctx, P0, d) {
  const { bvh, R, belag, zonen, cog } = ctx;
  const u = new THREE.Vector3().crossVectors(UP, d).normalize();
  const nd = d.clone().negate();
  const A = hit(bvh, P0.clone().addScaledVector(d, R), nd);
  const B = hit(bvh, P0.clone().addScaledVector(d, -R), d);
  if (!A || !B) return null;
  if (Math.abs(A.n.dot(d)) < 0.82 || Math.abs(B.n.dot(nd)) < 0.82) return null;   // Flächen müssen sich gegenüberliegen (±35°)
  const side = (H, dirIn, from) => {
    let inPlane = 0, total = 0, spread = 0, sag = 0, sagV = 0;
    const pts = [];
    for (let i = -2; i <= 2; i++) for (let j = -2; j <= 2; j++) {
      const off = new THREE.Vector3().addScaledVector(u, i / 4 * belag.w).addScaledVector(UP, j / 4 * belag.h);
      const s = hit(bvh, from.clone().add(off), dirIn);
      total++;
      if (!s) { spread = 99; continue; }
      const dz = s.dist - H.dist;
      spread = Math.max(spread, Math.abs(dz));
      if (j === 0 && Math.abs(i) === 2) sag = Math.max(sag, dz);
      if (i === 0 && Math.abs(j) === 2) sagV = Math.max(sagV, dz);
      if (Math.abs(dz) < 1.0) { inPlane++; pts.push(s.p); } else pts.push(H.p.clone().add(off));
    }
    return { anteil: inPlane / total, spread, pts, sag, sagV };
  };
  const sA = side(A, nd, P0.clone().addScaledVector(d, R));
  const sB = side(B, d, P0.clone().addScaledVector(d, -R));
  const pts = sA.pts.concat(sB.pts);
  let stufe = null;
  for (const z of zonen) {
    if (!pts.some((q) => q.distanceTo(z.p) < z.r)) continue;
    if (z.art === 'sperre') return null;
    stufe = stufe ? (kpa(z) < kpa(stufe) ? z : stufe) : z;              // strengste Belastbarkeit gilt
  }
  const hub = A.p.distanceTo(B.p);
  const anteil = Math.min(sA.anteil, sB.anteil);
  const sagU = Math.max(sA.sag, sB.sag), sagV = Math.max(sA.sagV, sB.sagV);
  const rund = Math.max(sagU, sagV) > 0.3 && Math.max(sA.spread, sB.spread) < Math.max(belag.w, belag.h);   // gewölbt, aber geschlossen
  if (anteil < 0.2 && !rund) return null;
  const flaeche = Math.max(anteil, rund ? 0.15 : 0) * belag.w * belag.h;
  // Radius bei runder Kontur aus der Pfeilhöhe über die halbe Belagbreite
  const quer = sagV > sagU, s = Math.max(quer ? sagV : sagU, 0.05), h2 = (quer ? belag.h : belag.w) / 2;
  // Radius: beim Greifen über die Mitte ist der halbe Hub genau; die Pfeilhöhe dient nur als Gegenprobe
  const radius = rund ? (Math.abs(hub / 2 - (h2 * h2 + s * s) / (2 * s)) < hub / 2 ? hub / 2 : (h2 * h2 + s * s) / (2 * s)) : null;
  const e = Math.abs(new THREE.Vector3().subVectors(cog, A.p).cross(UP).dot(d));
  const abstand = new THREE.Vector3().subVectors(cog, A.p).cross(d).length();          // räumlicher Abstand zur Greifachse
  return { A: A.p, B: B.p, d: d.clone(), u, hub, flaeche, rund, radius, e, abstand, zone: stufe, P0: P0.clone() };
}
const kpa = (z) => z.kpa == null ? Infinity : z.kpa;

// zone: { art: 'auto'|'waagerecht'|'senkrecht', lage, dicke, winkel }
export function abtasten(ctx, zone, schritt = 5) {
  const { box, cog } = ctx;
  const s = new THREE.Vector3(); box.getSize(s);
  const c = box.getCenter(new THREE.Vector3());
  const kand = []; let geprueft = 0;
  const range = (a, b, st) => { const out = []; const n = Math.max(1, Math.round((b - a) / st)); for (let i = 0; i <= n; i++) out.push(a + (b - a) * i / n); return out; };
  if (zone.art === 'senkrecht') {
    for (const dw of [0, -5, 5, -10, 10]) {                                // zusätzlich in Winkelschritten um die Hochachse
      const phi = THREE.MathUtils.degToRad(zone.winkel + dw);
      const n = new THREE.Vector3(Math.cos(phi), 0, -Math.sin(phi)), d = new THREE.Vector3(-n.z, 0, n.x);
      const half = Math.max(0, (zone.dicke - ctx.belag.w) / 2);
      for (const q of range(zone.lage - half, zone.lage + half, schritt))
        for (const y of range(box.min.y + ctx.belag.h / 2 + 1, box.max.y - ctx.belag.h / 2 - 1, Math.max(schritt, s.y / 24))) {
          geprueft++;
          const k = pruefen(ctx, new THREE.Vector3(c.x, y, c.z).addScaledVector(n, q), d);
          if (k) kand.push({ ...k, lage: q, hoehe: y - box.min.y, winkel: zone.winkel + dw, quer: true });
        }
    }
  } else {
    const auto = zone.art === 'auto';
    const half = Math.max(0, (zone.dicke - ctx.belag.h) / 2);
    const y0 = auto ? box.min.y + ctx.belag.h / 2 + 1 : zone.lage - half, y1 = auto ? box.max.y - ctx.belag.h / 2 - 1 : zone.lage + half;
    const ext = Math.max(s.x, s.z);
    const offs = [0]; for (let k = 1; k <= 4; k++) offs.push(k * ext / 10, -k * ext / 10);
    for (const y of range(y0, y1, auto ? Math.max(schritt, s.y / 24) : schritt))
      for (let w = 0; w < 180; w += 15) {
        geprueft++;
        const a = THREE.MathUtils.degToRad(w), d = new THREE.Vector3(Math.cos(a), 0, Math.sin(a));
        const u = new THREE.Vector3().crossVectors(UP, d).normalize();
        for (const o of offs) {
          const k = pruefen(ctx, new THREE.Vector3(cog.x, y, cog.z).addScaledVector(u, o), d);
          if (k) { kand.push({ ...k, hoehe: y - box.min.y, winkel: w, quer: false }); break; }
        }
      }
  }
  kand.geprueft = geprueft;
  return kand;
}
// Rangfolge: größte Reserve, dann kleinerer Abstand zum Schwerpunkt, dann größere Kontaktfläche
export function bewerten(kand, rechne) {
  const g = kand.map((k) => ({ ...k, r: rechne(k) }));
  const gueltig = g.filter((k) => k.r.fmin <= k.r.fmax && !k.r.zuweit);
  gueltig.sort((a, b) => {
    const ra = a.r.reserve, rb = b.r.reserve;
    if ((isFinite(ra) || isFinite(rb)) && Math.abs(ra - rb) > 1e-6) return rb - ra;
    if (Math.abs(a.abstand - b.abstand) > 1) return a.abstand - b.abstand;
    if (Math.abs(a.flaeche - b.flaeche) > 1) return b.flaeche - a.flaeche;
    return a.r.fmin - b.r.fmin;
  });
  const best = [];
  for (const k of gueltig) {
    if (best.every((b) => Math.abs(b.hoehe - k.hoehe) > 10 || Math.abs((b.lage || 0) - (k.lage || 0)) > 10 || Math.abs(b.winkel - k.winkel) > 20)) best.push(k);
    if (best.length === 3) break;
  }
  return { geprueft: kand.geprueft, gueltig: gueltig.length, best };
}

// Steifigkeit je Stelle für Hohlkörper: K = E · t³ / L², L = Abstand zur nächsten versteifenden Kante (Knick > 30°), Boden, Deckel
export function steifigkeit(geo, box, E, t) {
  const edges = new THREE.EdgesGeometry(geo, 30).attributes.position;
  const pts = [];
  const a = new THREE.Vector3(), b = new THREE.Vector3();
  for (let i = 0; i < edges.count; i += 2) {
    a.fromBufferAttribute(edges, i); b.fromBufferAttribute(edges, i + 1);
    const n = Math.max(1, Math.ceil(a.distanceTo(b) / 8));
    for (let k = 0; k <= n; k++) pts.push(a.clone().lerp(b, k / n));
  }
  const cell = 20, grid = new Map(), key = (x, y, z) => `${x},${y},${z}`;
  for (const p of pts) { const k = key(Math.floor(p.x / cell), Math.floor(p.y / cell), Math.floor(p.z / cell)); if (!grid.has(k)) grid.set(k, []); grid.get(k).push(p); }
  const pos = geo.attributes.position, K = new Float32Array(pos.count), v = new THREE.Vector3();
  for (let i = 0; i < pos.count; i++) {
    v.fromBufferAttribute(pos, i);
    let best = Math.min(v.y - box.min.y, box.max.y - v.y);                   // Boden und Deckel
    const cx = Math.floor(v.x / cell), cy = Math.floor(v.y / cell), cz = Math.floor(v.z / cell);
    for (let r = 0; r <= 6 && best > r * cell; r++)
      for (let x = cx - r; x <= cx + r; x++) for (let y = cy - r; y <= cy + r; y++) for (let z = cz - r; z <= cz + r; z++) {
        if (Math.max(Math.abs(x - cx), Math.abs(y - cy), Math.abs(z - cz)) !== r) continue;
        const l = grid.get(key(x, y, z)); if (l) for (const p of l) best = Math.min(best, p.distanceTo(v));
      }
    const L = Math.max(best, 2);
    K[i] = E * t ** 3 / (L * L);
  }
  let max = 0; for (const k of K) max = Math.max(max, k);
  return { K, max };
}

// ---------------------------------------------------------------- Bedienung
export function initPro(K) {
  const $ = K.$;
  const box = $('#kfg-pro');
  if (!box) return null;
  const orange = 0xe07b1f;
  const grp = new THREE.Group(); grp.visible = false; K.scene.add(grp);
  // Greifzone: orange, gestrichelt
  const zoneMesh = new THREE.Mesh(new THREE.BoxGeometry(1, 1, 1), new THREE.MeshBasicMaterial({ color: orange, transparent: true, opacity: 0.12, depthWrite: false, side: THREE.DoubleSide }));
  const zoneLines = new THREE.LineSegments(new THREE.EdgesGeometry(new THREE.BoxGeometry(1, 1, 1)), new THREE.LineDashedMaterial({ color: orange, dashSize: 0.03, gapSize: 0.02 }));
  zoneLines.computeLineDistances();
  grp.add(zoneMesh, zoneLines);
  // Schwerpunkt: immer sichtbar
  const cogMark = new THREE.Group();
  const cogMat = new THREE.MeshBasicMaterial({ color: 0x13171d, depthTest: false });
  cogMark.add(new THREE.Mesh(new THREE.SphereGeometry(1, 16, 12), cogMat));
  for (const ax of ['x', 'y', 'z']) { const c = new THREE.Mesh(new THREE.BoxGeometry(ax === 'x' ? 3 : 0.25, ax === 'y' ? 3 : 0.25, ax === 'z' ? 3 : 0.25), cogMat); cogMark.add(c); }
  cogMark.renderOrder = 20; cogMark.traverse((o) => { o.renderOrder = 20; });
  grp.add(cogMark);
  const resGrp = new THREE.Group(); grp.add(resGrp);
  const zonen = [];   // { art: 'sperre'|'last', p, r, kpa, name, mesh }
  let aktiv = false, markModus = null, ergebnis = null, gewaehlt = 0, version = 0, veraltet = false, steif = null;
  const zone = { art: 'auto', lage: 0, dicke: 40, winkel: 0 };
  const num = (id) => zahl($(id).value);
  const teil = () => K.part();

  // ---------- Greifzone ----------
  function grenzenZone() {
    const t = teil(); if (!t) return null;
    const s = new THREE.Vector3(); t.box.getSize(s);
    if (zone.art === 'senkrecht') { const phi = THREE.MathUtils.degToRad(zone.winkel), ext = Math.abs(Math.cos(phi)) * s.x + Math.abs(Math.sin(phi)) * s.z; return { min: -ext / 2, max: ext / 2, dmax: ext }; }
    return { min: t.box.min.y, max: t.box.max.y, dmax: s.y };
  }
  function zeichneZone() {
    const t = teil(); if (!t) return;
    const s = new THREE.Vector3(); t.box.getSize(s); const c = t.box.getCenter(new THREE.Vector3());
    zone.dicke = Math.max(zone.dicke, zone.art === 'senkrecht' ? num('#pro-bw') : num('#pro-bh'));
    zoneMesh.visible = zoneLines.visible = zone.art !== 'auto';
    if (zone.art === 'waagerecht') { zoneMesh.scale.set(s.x * 1.25 + 20, zone.dicke, s.z * 1.25 + 20); zoneMesh.position.set(c.x, zone.lage, c.z); zoneMesh.rotation.set(0, 0, 0); }
    else if (zone.art === 'senkrecht') {
      const phi = THREE.MathUtils.degToRad(zone.winkel), n = new THREE.Vector3(Math.cos(phi), 0, -Math.sin(phi));
      zoneMesh.scale.set(zone.dicke, s.y * 1.25 + 20, Math.max(s.x, s.z) * 1.25 + 20);
      zoneMesh.position.set(c.x, c.y, c.z).addScaledVector(n, zone.lage); zoneMesh.rotation.set(0, phi, 0);
    }
    zoneLines.position.copy(zoneMesh.position); zoneLines.rotation.copy(zoneMesh.rotation); zoneLines.scale.copy(zoneMesh.scale);
    zoneLines.material.dashSize = 6 / Math.max(1, Math.max(...zoneMesh.scale.toArray()) / 1); zoneLines.material.gapSize = zoneLines.material.dashSize * 0.6;
    cogMark.position.copy(t.cog); cogMark.scale.setScalar(Math.max(3, s.length() / 90));
    const g = grenzenZone();
    $('#pro-lage').min = Math.floor(g.min); $('#pro-lage').max = Math.ceil(g.max);
    $('#pro-lage').value = Math.round(zone.lage); $('#pro-dicke').value = Math.round(zone.dicke);
    $('#pro-lage-out').textContent = `${fmt(zone.art === 'waagerecht' ? zone.lage - t.box.min.y : zone.lage)} mm`;
    $('#pro-winkel').value = zone.winkel;
    box.querySelectorAll('[data-zone]').forEach((b) => b.setAttribute('aria-pressed', String(b.dataset.zone === zone.art)));
    $('#pro-zone-felder').hidden = zone.art === 'auto';
    $('#pro-winkel-feld').hidden = zone.art !== 'senkrecht';
    $('#pro-zone-text').textContent = zone.art === 'auto' ? 'Das Programm sucht am ganzen Teil: waagerecht, alle Höhen und Richtungen.'
      : zone.art === 'waagerecht' ? 'Waagerechte Scheibe: Die Finger greifen in dieser Höhe. ↑/↓ verschiebt, Umschalt + Pfeil ändert die Dicke, Ziehen mit der Maus verschiebt.'
        : 'Senkrechte Scheibe, um die Hochachse drehbar: Die Finger schließen in der Scheibe. ←/→ verschiebt, Umschalt + Pfeil ändert die Dicke.';
  }
  function setZone(art) {
    const t = teil(); zone.art = art;
    if (t) {
      const s = new THREE.Vector3(); t.box.getSize(s);
      if (art === 'waagerecht') { zone.lage = t.box.min.y + s.y * 0.5; zone.dicke = Math.max(num('#pro-bh'), Math.round(s.y * 0.3)); }
      if (art === 'senkrecht') { zone.lage = 0; zone.dicke = Math.max(num('#pro-bw'), Math.round(Math.max(s.x, s.z) * 0.2)); }
    }
    zeichneZone(); alt();
  }
  function moveZone(dl, dd = 0) {
    const g = grenzenZone(); if (!g || zone.art === 'auto') return;
    zone.dicke = THREE.MathUtils.clamp(zone.dicke + dd, zone.art === 'senkrecht' ? num('#pro-bw') : num('#pro-bh'), Math.max(g.dmax, 10));
    zone.lage = THREE.MathUtils.clamp(zone.lage + dl, g.min, g.max);
    zeichneZone(); alt();
  }

  // ---------- Modus ----------
  function modus(profi) {
    aktiv = profi; box.hidden = !profi; grp.visible = profi;
    K.showGripper(!profi);
    K.root.querySelectorAll('[data-modus]').forEach((b) => b.setAttribute('aria-pressed', String((b.dataset.modus === 'profi') === profi)));
    K.root.classList.toggle('is-profi', profi);
    if (profi) { syncProdukt(); zeichneZone(); hohlUI(); }
    K.partColors(profi && steif && $('#pro-karte').checked ? steif : null);
  }
  K.root.querySelectorAll('[data-modus]').forEach((b) => b.addEventListener('click', () => modus(b.dataset.modus === 'profi')));

  // ---------- Masse, Hohlkörper ----------
  function massen() {
    const t = teil(); if (!t) return { m: 0 };
    const direkt = num('#pro-masse');
    const dichte = (W[$('#pro-produkt').value] || {}).dichte || 1000;
    if (!$('#pro-hohl').checked) return { m: direkt > 0 ? direkt : t.vol * 1e-9 * dichte, quelle: direkt > 0 ? 'eingegeben' : 'Volumen × Dichte' };
    const wand = num('#pro-wand') || 1, flaeche = t.flaeche;
    const wandVol = Math.min(t.vol, flaeche * wand), innen = Math.max(0, t.vol - wandVol);   // mm³
    const fuell = THREE.MathUtils.clamp(num('#pro-fuell'), 0, 100) / 100;
    const mWand = wandVol * 1e-9 * dichte, mFuell = innen * fuell * 1e-6;   // Füllgut ≈ Wasser (1 g/ml)
    const kopf = $('#pro-kopf').value !== '' ? num('#pro-kopf') : innen * (1 - fuell) / 1000;   // ml
    return { m: direkt > 0 ? direkt : mWand + mFuell, quelle: direkt > 0 ? 'eingegeben' : `Wand ${fmt(mWand * 1000)} g + Füllung ${fmt(mFuell * 1000)} g`, innenMl: innen / 1000, kopf };
  }
  function syncProdukt() {
    const t = teil(); if (!t) return;
    const ms = massen();
    $('#pro-masse-auto').textContent = `Rechenwert: ${ms.m < 1 ? fmt(ms.m * 1000) + ' g' : fmt(ms.m, 2) + ' kg'} (${ms.quelle})`;
    if (ms.kopf != null && $('#pro-kopf').value === '') $('#pro-kopf').placeholder = `${fmt(ms.kopf)} ml aus Füllstand`;
    belastInfo();
  }
  function hohlUI() {
    $('#pro-hohl-felder').hidden = !$('#pro-hohl').checked;
    const t = teil();
    if (t && $('#pro-hohl').checked) {
      steif = steifigkeit(t.geo, t.box, (W[$('#pro-produkt').value] || {}).E || 3000, num('#pro-wand') || 1);
    } else steif = null;
    $('#pro-karte-feld').hidden = !steif;
    K.partColors(aktiv && steif && $('#pro-karte').checked ? steif : null);
  }

  // ---------- Belastbarkeit ----------
  const STUFEN = Object.fromEntries(D.belastbarkeit.map((s) => [s.id, s]));
  function schaetzStufe(prod) { const s = D.belastbarkeit_schaetzung; return s[prod] || (gruppe(prod) === 'hart' ? s['*hart'] : 'normal'); }
  function belastung() {
    const v = $('#pro-belast').value;
    if (v === 'eigen') {
      const wert = num('#pro-belast-wert'), einheit = $('#pro-belast-einheit').value;
      return einheit === 'kpa' ? { id: 'eigen', kpa: wert, name: 'eigener Wert' } : { id: 'eigen', nJeBacke: wert, name: 'eigener Wert' };
    }
    if (v === 'unbekannt') { const id = schaetzStufe($('#pro-produkt').value); return { ...STUFEN[id], schaetzung: true }; }
    return STUFEN[v];
  }
  function belastInfo() {
    const b = belastung(), A = num('#pro-bw') * num('#pro-bh');
    const nmax = b.nJeBacke ? b.nJeBacke : b.kpa == null ? Infinity : b.kpa * A / 1000;
    $('#pro-belast-info').textContent = b.nJeBacke ? `entspricht ${fmt(b.nJeBacke / A * 1000)} kPa bei ${fmt(A)} mm² Belag`
      : `höchstens ${kraft(nmax)} je Backe bei ${fmt(A)} mm² Belag${b.schaetzung ? ` (Schätzwert: ${b.name})` : ''}`;
    $('#pro-belast-eigen').hidden = $('#pro-belast').value !== 'eigen';
  }

  // ---------- Markieren: Sperrzonen und Bereiche mit eigener Belastbarkeit ----------
  const rc = new THREE.Raycaster(); let down = null;
  const ndc = (e) => { const r = K.canvas.getBoundingClientRect(); return new THREE.Vector2((e.clientX - r.left) / r.width * 2 - 1, -(e.clientY - r.top) / r.height * 2 + 1); };
  K.canvas.addEventListener('pointerdown', (e) => {
    down = [e.clientX, e.clientY];
    if (!aktiv || zone.art === 'auto' || markModus) return;
    rc.setFromCamera(ndc(e), K.camera);
    if (!rc.intersectObject(zoneMesh).length) return;
    K.controls.enabled = false;
    const r = K.canvas.getBoundingClientRect();
    const n = zone.art === 'waagerecht' ? UP.clone() : new THREE.Vector3(Math.cos(THREE.MathUtils.degToRad(zone.winkel)), 0, -Math.sin(THREE.MathUtils.degToRad(zone.winkel)));
    const a = zoneMesh.position.clone().project(K.camera), b = zoneMesh.position.clone().addScaledVector(n, 100).project(K.camera);
    const v = new THREE.Vector2((b.x - a.x) * r.width / 2, -(b.y - a.y) * r.height / 2), len = v.length() || 1; v.divideScalar(len);
    let last = [e.clientX, e.clientY];
    const mv = (ev) => { const dx = ev.clientX - last[0], dy = ev.clientY - last[1]; last = [ev.clientX, ev.clientY]; moveZone((dx * v.x + dy * v.y) / len * 100); };
    const up = () => { K.controls.enabled = true; window.removeEventListener('pointermove', mv); window.removeEventListener('pointerup', up); };
    window.addEventListener('pointermove', mv); window.addEventListener('pointerup', up);
  });
  K.canvas.addEventListener('pointerup', (e) => {
    if (!aktiv || !markModus || !down || Math.hypot(e.clientX - down[0], e.clientY - down[1]) > 5) return;
    const t = teil(); if (!t) return;
    rc.setFromCamera(ndc(e), K.camera);
    const h = rc.intersectObject(t.mesh)[0]; if (!h) return;
    const r = num('#pro-mark-r') || 15;
    if (markModus === 'sperre') addZone({ art: 'sperre', p: h.point, r });
    else { const s = STUFEN[$('#pro-mark-stufe').value]; addZone({ art: 'last', p: h.point, r, kpa: s.kpa, name: s.name }); }
  });
  function addZone(z) {
    const col = z.art === 'sperre' ? 0xc8372d : z.kpa == null ? 0x2e9d5b : z.kpa <= 100 ? 0xe0a21f : 0x6fae7f;
    z.mesh = new THREE.Mesh(new THREE.SphereGeometry(z.r, 24, 16), new THREE.MeshBasicMaterial({ color: col, transparent: true, opacity: 0.45, depthWrite: false }));
    z.mesh.position.copy(z.p); grp.add(z.mesh); zonen.push(z); markText(); alt();
  }
  function markText() {
    const s = zonen.filter((z) => z.art === 'sperre').length, l = zonen.length - s;
    $('#pro-mark-info').textContent = !zonen.length ? 'Nichts markiert.' : [s ? `${s} Sperrzone${s > 1 ? 'n' : ''}` : '', l ? `${l} Bereich${l > 1 ? 'e' : ''} mit eigener Belastbarkeit` : ''].filter(Boolean).join(', ');
  }
  function markLoeschen() { for (const z of zonen) { grp.remove(z.mesh); z.mesh.geometry.dispose(); } zonen.length = 0; markText(); alt(); }
  function setMark(m) {
    markModus = markModus === m ? null : m;
    box.querySelectorAll('[data-mark]').forEach((b) => b.setAttribute('aria-pressed', String(b.dataset.mark === markModus)));
    K.canvas.style.cursor = markModus ? 'crosshair' : '';
  }
  box.querySelectorAll('[data-mark]').forEach((b) => b.addEventListener('click', () => setMark(b.dataset.mark)));
  $('#pro-mark-weg').addEventListener('click', markLoeschen);

  K.canvas.tabIndex = 0;
  K.canvas.addEventListener('keydown', (e) => {
    if (!aktiv || zone.art === 'auto') return;
    const k = { ArrowUp: 1, ArrowRight: 1, ArrowDown: -1, ArrowLeft: -1 }[e.key]; if (!k) return;
    e.preventDefault(); if (e.shiftKey) moveZone(0, k * 2); else moveZone(k * 2);
  });
  box.querySelectorAll('[data-zone]').forEach((b) => b.addEventListener('click', () => setZone(b.dataset.zone)));
  $('#pro-lage').addEventListener('input', () => { zone.lage = num('#pro-lage'); moveZone(0); });
  $('#pro-dicke').addEventListener('change', () => { zone.dicke = num('#pro-dicke'); moveZone(0); });
  $('#pro-winkel').addEventListener('input', () => { zone.winkel = num('#pro-winkel'); moveZone(0); });

  // Produktwerkstoff folgt dem Werkstoff oben, solange der Nutzer ihn nicht selbst wählt
  const sync = () => { const k = K.$('#kfg-material').selectedOptions[0].dataset.pro; if (k && W[k]) $('#pro-produkt').value = k; };
  K.$('#kfg-material').addEventListener('change', () => { sync(); syncProdukt(); alt(); });
  sync();
  // jede Eingabe macht das Ergebnis veraltet
  box.querySelectorAll('.pro__grid input, .pro__grid select').forEach((el) => el.addEventListener(el.type === 'checkbox' || el.tagName === 'SELECT' ? 'change' : 'input', () => {
    if (el.id === 'pro-backen') formUI();
    if (el.id === 'pro-hohl' || el.id === 'pro-wand' || el.id === 'pro-karte') hohlUI();
    syncProdukt(); alt();
  }));
  function formUI() {
    const f = $('#pro-backen').value;
    $('#pro-alpha-feld').hidden = f !== 'prisma'; $('#pro-umschl-feld').hidden = f !== 'kontur'; $('#pro-gamma-feld').hidden = f !== 'konus';
  }
  formUI();

  // ---------- Berechnen ----------
  function eingaben() {
    const belag = $('#pro-belag').value, prod = $('#pro-produkt').value, zustand = $('#pro-zustand').value;
    const rw = reibwert(belag, prod, zustand), muHand = zahl($('#pro-mu').value);
    const ms = massen(), b = belastung();
    const S = THREE.MathUtils.clamp(zahl($('#pro-s').value) || 2, F.sicherheit_pro[0], F.sicherheit_pro[1]);
    return { belag, prod, zustand, rw, muHand, mu: muHand > 0 ? muHand : rw.mu, ms, m: ms.m, n: num('#pro-n') || 2, S,
      az: num('#pro-az'), ax: num('#pro-ax'), aN: num('#pro-an'), form: $('#pro-backen').value, alpha: num('#pro-alpha'),
      U: Math.min(num('#pro-umschl'), F.umschliessung_max), gamma: num('#pro-gamma'), backe: $('#pro-backe').value,
      tUmg: num('#pro-tumg'), tProd: num('#pro-tprod'), takt: $('#pro-takt').checked, feuchte: num('#pro-feuchte'),
      bw: num('#pro-bw'), bh: num('#pro-bh'), hubMax: num('#pro-hub'), schritt: Math.max(1, num('#pro-schritt') || 5),
      strecke: num('#pro-strecke') || 1000, belast: b, stufe: b.id,
      hohl: $('#pro-hohl').checked, zu: $('#pro-zu').checked, eindr: num('#pro-eindr') || F.eindrueckung_vorschlag_mm };
  }
  function feuchteFaktor(E) {
    if (E.prod !== 'Karton') return 1;
    for (const [bis, f] of D.feuchte_karton) if (E.feuchte <= bis) return f;
    return 0.5;
  }
  // zulässige Kraft je Backe an einer Position
  function fmaxAn(E, k) {
    const A = Math.max(k.flaeche, 1);
    const kp = k.zone ? k.zone.kpa : E.belast.kpa;
    let f = k.zone ? (kp == null ? Infinity : kp * A / 1000) : E.belast.nJeBacke ? E.belast.nJeBacke : kp == null ? Infinity : kp * A / 1000;
    f *= feuchteFaktor(E);
    let stuetz = null;
    if (E.hohl && E.zu && E.ms.kopf > 0) {
      const dV = 2 * E.eindr * A / 1000;                                       // ml, beide Backen
      const dp = F.luftdruck_kpa * dV / Math.max(E.ms.kopf - dV, 0.1);         // kPa (Boyle-Mariotte)
      stuetz = dp * A / 1000;
      f = isFinite(f) ? f + stuetz : f;                                        // Wand plus eingeschlossene Luft
    }
    return { f, stuetz };
  }
  function rechnen() {
    const t = teil(); if (!t) return;
    const E = eingaben();
    if (E.prod === 'Backware') { ergebnis = { backware: true, E, version: ++version }; veraltet = false; zeige(); return; }
    const belag = { w: E.bw, h: E.bh };
    const ctx = { bvh: t.bvh, box: t.box, cog: t.cog, R: t.box.getSize(new THREE.Vector3()).length() + 50, belag, zonen };
    const kand = abtasten(ctx, { ...zone }, E.schritt);
    const res = bewerten(kand, (k) => {
      const fm = fmaxAn(E, k);
      const c = { m: E.m, mu: E.mu, n: E.n, S: E.S, az: E.az, ax: E.ax, aN: E.aN, form: E.form, alpha: E.alpha, U: E.U, gamma: E.gamma,
        quer: k.quer, e: k.e, rk: Math.sqrt(k.flaeche / Math.PI) * 2 / 3, fmaxN: fm.f };
      const r = lastfaelle(c);
      r.stuetz = fm.stuetz; r.aMax = aMax(c); r.zuweit = E.hubMax > 0 && k.hub > E.hubMax;
      return r;
    });
    // Hinweise und Sperren
    const H = [];
    const sp = sperren(E);
    for (const r of sp) H.push([r.stufe === 'gesperrt' ? 'rot' : 'gelb', `${r.stufe === 'gesperrt' ? 'Gesperrt' : 'Warnung'}: ${W[E.belag] ? E.belag : ''} auf ${E.prod}: ${r.grund}. Vorschlag: ${r.vorschlag}.`, r.stufe === 'gesperrt']);
    if (E.rw.ersatz && !(E.muHand > 0)) H.push(['gelb', `Für ${E.belag} auf ${E.prod} gibt es keinen Literaturwert. Gerechnet wird mit dem kleinsten bekannten Wert der Werkstoffgruppe${E.rw.ersatz.von ? ` (${E.rw.ersatz.von}, ${fmt(E.rw.ersatz.mu, 2)})` : ''}. Versuch empfohlen.`]);
    if (E.rw.annahme) H.push(['gelb', `Der Faktor für „${$('#pro-zustand').selectedOptions[0].textContent}“ ist bei ${E.rw.klasse} eine Annahme. Im Versuch bestätigen.`]);
    if (E.belast.schaetzung) H.push(['gelb', `Belastbarkeit unbekannt: Gerechnet wird mit dem Schätzwert „${E.belast.name}“ für ${E.prod}.`]);
    if (E.belast.annahme) H.push(['info', `Die Stufe „${E.belast.name}“ ist eine Annahme und sollte im Versuch geprüft werden.`]);
    if (E.prod === 'Karton' && E.feuchte > 50) H.push([E.feuchte > 85 ? 'gelb' : 'info', `Luftfeuchte ${E.feuchte} %: Die zulässige Greifkraft für Karton sinkt auf das ${fmt(feuchteFaktor(E), 1)}-Fache.`]);
    if ((E.form === 'prisma' || E.form === 'kontur') && res.best[0] && !res.best[0].quer) H.push(['info', 'Prismen- und Konturbacken helfen nur bei Last quer zur Teileachse (liegende Welle). Hier wird senkrecht gehoben; gerechnet wird wie mit Flachbacken.']);
    if (E.form === 'kontur' && num('#pro-umschl') > F.umschliessung_max) H.push(['info', `Umschließung auf ${F.umschliessung_max} % begrenzt, sonst bleibt die Backe beim Öffnen hängen.`]);
    if (E.hohl && !E.zu) H.push(['info', 'Offener Behälter: Die Flüssigkeit weicht nach oben aus, nur die Wand trägt die Greifkraft.']);
    const best = res.best[gewaehlt] || res.best[0];
    const pS = best ? best.r.fmin / Math.max(best.flaeche, 1) * E.S : 0;      // MPa
    for (const h of temperatur('Belag', E.belag, E.tUmg, E.tProd, pS, E.takt).concat(temperatur('Backe', E.backe, E.tUmg, E.tProd, pS, E.takt))) H.push(h);
    // Belagsvorschlag: gesperrte und zu heiße Beläge streichen, nach μ sortieren
    const vorschlag = Object.keys(W).filter((n) => W[n].rollen.includes('belag')).map((n) => {
      const r = reibwert(n, E.prod, E.zustand);
      const gesperrt = sperren({ ...E, belag: n, rw: r }).some((x) => x.stufe === 'gesperrt');
      const heiss = temperatur('Belag', n, E.tUmg, E.tProd, 0, E.takt).some((h) => h[0] === 'rot');
      return { n, mu: r.mu, ersatz: !!r.ersatz, gesperrt, heiss };
    }).filter((v) => !v.gesperrt && !v.heiss && !v.ersatz).sort((a, b) => b.mu - a.mu).slice(0, 3);
    ergebnis = { ...res, E, H, vorschlag, version: ++version };
    gewaehlt = 0; veraltet = false;
    zeige();
  }
  $('#pro-rechnen').addEventListener('click', () => {
    const b = $('#pro-rechnen'); b.disabled = true; b.textContent = 'Rechnet …';
    setTimeout(() => { try { rechnen(); } finally { b.disabled = false; b.textContent = 'Berechnen'; } }, 30);
  });
  // jede Änderung: altes Ergebnis grau, Status „Neu berechnen“
  function alt() { if (ergebnis && !veraltet) { veraltet = true; zeige(); } }

  function ampel() {
    if (!ergebnis) return null;
    if (ergebnis.backware) return 'gelb';
    if (!ergebnis.best.length || ergebnis.H.some((h) => h[0] === 'rot')) return 'rot';
    return ergebnis.H.some((h) => h[0] === 'gelb') ? 'gelb' : 'gruen';
  }

  // ---------- 3D: Greifstelle, Backen, Kraftpfeile, Greifhöhe ----------
  function label(text, color = '#13171d') {
    const c = document.createElement('canvas'); c.width = 512; c.height = 96;
    const x = c.getContext('2d'); x.font = '600 44px system-ui, sans-serif';
    const w = Math.min(500, x.measureText(text).width + 36);
    x.fillStyle = 'rgba(255,255,255,.94)'; x.beginPath(); x.roundRect((512 - w) / 2, 8, w, 80, 18); x.fill();
    x.strokeStyle = color; x.lineWidth = 4; x.stroke();
    x.fillStyle = color; x.textAlign = 'center'; x.textBaseline = 'middle'; x.fillText(text, 256, 50);
    const t = new THREE.CanvasTexture(c); t.colorSpace = THREE.SRGBColorSpace;
    const s = new THREE.Sprite(new THREE.SpriteMaterial({ map: t, depthTest: false, transparent: true }));
    s.renderOrder = 30; return s;
  }
  function zeichneErgebnis() {
    while (resGrp.children.length) { const c = resGrp.children.pop(); c.traverse((o) => { if (o.geometry) o.geometry.dispose(); }); }
    if (!ergebnis || ergebnis.backware || !ergebnis.best.length) return;
    const t = teil(), k = ergebnis.best[gewaehlt], E = ergebnis.E;
    const sz = t.box.getSize(new THREE.Vector3()).length();
    const farbe = veraltet ? 0x9aa3ad : { gruen: 0x2e9d5b, gelb: 0xe0a21f, rot: 0xc8372d }[ampel()];
    const css = '#' + farbe.toString(16).padStart(6, '0');
    const basis = new THREE.Matrix4().makeBasis(k.d, UP, new THREE.Vector3().crossVectors(k.d, UP));
    for (const [p, s] of [[k.A, 1], [k.B, -1]]) {
      const pad = new THREE.Mesh(new THREE.BoxGeometry(2, E.bh, E.bw), new THREE.MeshBasicMaterial({ color: farbe }));
      pad.quaternion.setFromRotationMatrix(basis); pad.position.copy(p).addScaledVector(k.d, s * 1); resGrp.add(pad);
      const jaw = new THREE.Mesh(new THREE.BoxGeometry(Math.max(12, E.bw * 0.6), E.bh * 1.15, E.bw * 1.15), new THREE.MeshStandardMaterial({ color: 0x0061aa, transparent: true, opacity: 0.32, depthWrite: false }));
      jaw.quaternion.copy(pad.quaternion); jaw.position.copy(p).addScaledVector(k.d, s * (2 + Math.max(12, E.bw * 0.6) / 2)); resGrp.add(jaw);
      const len = Math.max(30, sz * 0.18);
      const arrow = new THREE.ArrowHelper(k.d.clone().multiplyScalar(-s), p.clone().addScaledVector(k.d, s * (len + 4)), len, farbe, len * 0.3, len * 0.18);
      resGrp.add(arrow);
    }
    const lab = label(veraltet ? 'Neu berechnen' : `${kraft(k.r.fmin)} je Backe`, css);
    const mid = k.A.clone().add(k.B).multiplyScalar(0.5);
    lab.position.copy(k.A).addScaledVector(k.d, Math.max(30, sz * 0.18) + 30).add(new THREE.Vector3(0, E.bh, 0));
    lab.scale.set(sz * 0.32, sz * 0.06, 1); resGrp.add(lab);
    // Maßlinie Greifhöhe
    const x0 = k.B.clone().addScaledVector(k.d, -Math.max(40, sz * 0.12));
    const y0 = t.box.min.y, y1 = mid.y;
    const pts = [new THREE.Vector3(x0.x, y0, x0.z), new THREE.Vector3(x0.x, y1, x0.z)];
    resGrp.add(new THREE.Line(new THREE.BufferGeometry().setFromPoints(pts), new THREE.LineBasicMaterial({ color: 0x13171d })));
    for (const y of [y0, y1]) resGrp.add(new THREE.Line(new THREE.BufferGeometry().setFromPoints([new THREE.Vector3(x0.x, y, x0.z).addScaledVector(k.d, 10), new THREE.Vector3(x0.x, y, x0.z).addScaledVector(k.d, -10)]), new THREE.LineBasicMaterial({ color: 0x13171d })));
    const hl = label(`Greifhöhe ${fmt(k.hoehe)} mm`); hl.position.set(x0.x, (y0 + y1) / 2, x0.z).addScaledVector(k.d, -sz * 0.12); hl.scale.set(sz * 0.3, sz * 0.056, 1); resGrp.add(hl);
  }

  // ---------- Ergebnisfeld ----------
  function zeige() {
    zeichneErgebnis();
    const out = $('#pro-ergebnis');
    out.classList.toggle('is-stale', veraltet);
    if (!ergebnis) { out.innerHTML = ''; uebergabeKnopf(); return; }
    const amp = ampel(), A = { gruen: ['ok', 'Grün: Greifbar'], gelb: ['warn', 'Gelb: möglich, knapp oder unsicher'], rot: ['bad', 'Rot: so nicht möglich'] }[amp];
    let html = veraltet ? '<p class="kfg__status is-info pro__neu">Eingaben geändert: <strong>Neu berechnen</strong>. Das graue Ergebnis gilt nicht mehr.</p>' : '';
    if (ergebnis.backware) {
      html += '<p class="kfg__status is-warn">Backwaren werden immer mit einem Nadelgreifer gegriffen, kein Reibschluss. Passende Greifer: <a href="../produkte/nadelgreifer/index.html">Nadelgreifer N203 und N206</a>.</p>';
      out.innerHTML = html; uebergabeKnopf(); return;
    }
    const { best, geprueft, gueltig, E, H } = ergebnis;
    if (!best.length) {
      html += `<p class="kfg__status is-bad">${A[1]}. In dieser Greifzone ist keine Position gültig (${fmt(geprueft)} geprüft). Was helfen würde: anderer Belag, Prismen- oder Konturbacke, eine andere oder größere Greifzone oder weniger Beschleunigung.</p>`;
    } else {
      const k = best[gewaehlt], r = k.r;
      const aM = r.aMax, vM = aM != null ? Math.sqrt(aM * E.strecke / 1000) : null;
      html += `<p class="kfg__status is-${A[0]}">${A[1]}. Nötige Greifkraft <strong>${kraft(r.fmin)} je Backe</strong>${isFinite(r.fmax) ? `, zulässig bis ${kraft(r.fmax)}` : ''}.</p>
      <dl class="kfg__facts pro__facts">
        <dt>Greifhöhe</dt><dd>${fmt(k.hoehe)} mm über der Auflage${k.lage != null ? `, Lage ${fmt(k.lage)} mm` : ''}, Schließrichtung ${fmt(k.winkel)}°</dd>
        <dt>Kontakt</dt><dd>${fmt(k.flaeche)} mm² je Backe, Hub ${fmt(k.hub)} mm${k.rund ? `, rund (r ≈ ${fmt(k.radius)} mm): Prismen- oder Konturbacke empfohlen` : ''}</dd>
        <dt>Greifkraft</dt><dd>${kraft(r.fmin)} je Backe (maßgebend: ${r.L.find((l) => l.mass).name})</dd>
        <dt>Max. Beschleunigung</dt><dd>${aM == null ? `nicht begrenzt durch das Produkt (gerechnet mit ${fmt(Math.max(E.az, E.ax))} m/s²)` : `${fmt(aM, 1)} m/s²`}</dd>
        <dt>Max. Geschwindigkeit</dt><dd>${vM == null ? '–' : `${fmt(vM, 2)} m/s bei ${fmt(E.strecke)} mm Fahrstrecke`}</dd>
        <dt>Masse · μ · S</dt><dd>${fmt(E.m, 3)} kg (${E.ms.quelle}) · μ = ${fmt(E.mu, 3)} · S = ${fmt(E.S, 1)}</dd>
        <dt>Reibwert</dt><dd>${E.muHand > 0 ? 'eigener Wert' : `${E.belag} auf ${E.prod}: Tabelle ${fmt(E.rw.tab, 2)} × ${fmt(F.abschlag_mu, 1)}${E.rw.faktor != null && E.rw.faktor !== 1 ? ` × ${fmt(E.rw.faktor, 2)} (${E.zustand})` : E.rw.faktor == null ? ` → fester Wert (${E.zustand})` : ''}${E.rw.quelle ? `, Quelle: ${E.rw.quelle}` : ''}`}</dd>
        ${r.stuetz != null ? `<dt>Stützwirkung</dt><dd>${kraft(r.stuetz)} je Backe aus dem Kopfraum (${fmt(E.ms.kopf)} ml, ${fmt(E.eindr, 1)} mm Eindrückung)</dd>` : ''}
        <dt>Geprüft</dt><dd>${fmt(geprueft)} Positionen, ${fmt(gueltig)} gültig · Ergebnis V${ergebnis.version}</dd>
      </dl>
      <table class="pro__tab"><thead><tr><th>Lastfall</th><th>Greifkraft je Backe</th></tr></thead><tbody>
        ${r.L.map((l) => `<tr${l.mass ? ' class="is-mass"' : ''}><td>${l.nr}. ${l.name}${l.mass ? ' · maßgebend' : ''}</td><td>${kraft(l.F)}</td></tr>`).join('')}
        <tr><td>7. Produkt nicht beschädigen${k.zone ? ` (Bereich: ${k.zone.name})` : ` (${E.belast.name})`}</td><td>${isFinite(r.fmax) ? 'max. ' + kraft(r.fmax) : 'keine Grenze'}</td></tr>
      </tbody></table>`;
      if (best.length > 1) html += `<div class="pro__alt"><span class="muted">Greifstellen:</span>${best.map((b, i) => `<button type="button" class="btn btn--xs ${i === gewaehlt ? 'btn--primary' : 'btn--ghost'}" data-alt="${i}">${i === 0 ? 'Gewählt' : 'Alternative ' + i}: ${fmt(b.hoehe)} mm, ${kraft(b.r.fmin)}</button>`).join('')}</div>`;
      if (E.form === 'kontur' && k.rund) html += `<div class="pro__alt"><button type="button" class="btn btn--ghost btn--xs" id="pro-stl">⤓ Konturbacke als STL (${Math.round(E.U)} % Umschließung)</button><span class="kfg__small muted">Backenkörper aus PETG, ASA, PA oder PC, Kontaktfläche mit TPU-Belag.</span></div>`;
    }
    if (ergebnis.vorschlag.length) html += `<p class="kfg__small"><strong>Belagsvorschlag für ${E.prod}:</strong> ${ergebnis.vorschlag.map((v, i) => `${i + 1}. ${v.n} (μ ${fmt(v.mu, 2)})`).join(' · ')}</p>`;
    if (H.length) html += `<ul class="pro__hinweise">${H.map(([c, t, gesperrt]) => `<li class="is-${c}">${t}${gesperrt ? ` <a class="btn btn--ghost btn--xs" href="mailto:info@gmg-system.com?subject=${encodeURIComponent('Technische Prüfung anfragen: ' + t.slice(0, 80))}">Technische Prüfung anfragen</a>` : ''}</li>`).join('')}</ul>`;
    html += '<p class="kfg__small muted">Der Konfigurator gibt eine Empfehlung, keine Freigabe. Reibwerte sind vorsichtige Rechenwerte aus der Literatur; für die Auslegung prüfen wir Ihre Anwendung gern im Versuch.</p>';
    out.innerHTML = html;
    out.querySelectorAll('[data-alt]').forEach((b) => b.addEventListener('click', () => { gewaehlt = Number(b.dataset.alt); zeige(); }));
    const stl = out.querySelector('#pro-stl'); if (stl) stl.addEventListener('click', konturSTL);
    uebergabeKnopf();
  }

  // ---------- Übergabe an die Simulation ----------
  function datensatz() {
    if (!ergebnis || ergebnis.backware || !ergebnis.best.length) return null;
    const k = ergebnis.best[gewaehlt], E = ergebnis.E, mid = k.A.clone().add(k.B).multiplyScalar(0.5);
    return {
      version: ergebnis.version, ampel: ampel(), x: mid.x, y: mid.y - E.bh / 2, z: mid.z, inside: false, state: 'pro', gripper: null,
      yaw: THREE.MathUtils.degToRad(k.winkel - 90),                             // Teil so drehen, dass die Schließrichtung in Z liegt
      kontakt: { A: k.A.toArray(), B: k.B.toArray(), bw: E.bw, bh: E.bh }, backen: E.form, belag: E.belag, kraft: k.r.fmin, S: E.S,
      grenzen: { a: k.r.aMax ?? Math.max(E.az, E.ax), aN: E.aN, v: k.r.aMax != null ? Math.sqrt(k.r.aMax * E.strecke / 1000) : null },
    };
  }
  function uebergabeKnopf() {
    const b = $('#pro-uebergabe'), a = ampel();
    b.disabled = !ergebnis || veraltet || !(a === 'gruen' || a === 'gelb') || !datensatz();
    b.textContent = ergebnis && !ergebnis.backware ? `An Simulation übergeben (V${ergebnis.version})` : 'An Simulation übergeben';
  }
  $('#pro-uebergabe').addEventListener('click', () => { const d = datensatz(); if (d) { K.uebergabe(d); $('#pro-uebergabe-info').textContent = `V${d.version} an die Simulation übergeben.`; } });

  // ---------- Konturbacke als STL ----------
  function konturSTL() {
    const k = ergebnis.best[gewaehlt], E = ergebnis.E;
    const r = (k.radius || k.hub / 2) + 0.3 + 2;                             // Spiel 0,3 mm + 2 mm Belag
    const phi = THREE.MathUtils.degToRad(Math.min(E.U, F.umschliessung_max) / 100 * 90);
    const W2 = Math.max(r * Math.sin(phi) + 8, E.bw / 2 + 5), T = r * (1 - Math.cos(phi)) + 12;
    // Profil: Block von y = −T bis 0, Kontur als Kreisbogen ±φ um die Schließrichtung (Teilmitte bei y = r·cos φ)
    const arc = [];
    for (let i = 0; i <= 32; i++) { const a = phi - 2 * phi * i / 32; arc.push(new THREE.Vector2(r * Math.sin(a), r * Math.cos(phi) - r * Math.cos(a))); }
    const shape = new THREE.Shape([new THREE.Vector2(-W2, 0), new THREE.Vector2(-W2, -T), new THREE.Vector2(W2, -T), new THREE.Vector2(W2, 0), ...arc]);
    const geo = new THREE.ExtrudeGeometry(shape, { depth: E.bh, bevelEnabled: false });
    const stl = new STLExporter().parse(new THREE.Mesh(geo), { binary: false });
    const a = document.createElement('a'); a.download = `Konturbacke_r${Math.round(r)}_${Math.round(E.U)}pct.stl`;
    a.href = URL.createObjectURL(new Blob([stl], { type: 'model/stl' })); a.click();
    geo.dispose();
  }

  // ---------- Neu berechnen aus der Simulation ----------
  function neuBerechnen(a) {
    modus(true);
    $('#pro-az').value = fmt(a, 1).replace('.', '').replace(',', '.'); $('#pro-ax').value = $('#pro-az').value;
    if (num('#pro-an') < a) $('#pro-an').value = $('#pro-az').value;
    box.scrollIntoView({ behavior: 'smooth', block: 'start' });
    rechnen();
  }

  // ---------- Info-Fenster: „!“ neben jedem Feld, Inhalte aus data/info_texte.json ----------
  let INFO = null, zuletzt = null;
  const modal = $('#info-modal');
  async function infoOeffnen(key, btn) {
    if (!INFO) { try { INFO = await (await fetch(K.base + 'data/info_texte.json')).json(); } catch (e) { INFO = {}; } }
    const t = INFO[key]; if (!t) return;
    zuletzt = btn;
    modal.querySelector('#info-titel').textContent = t.titel;
    modal.querySelector('.info-modal__satz').textContent = t.satz;
    modal.querySelector('.info-modal__bilder').innerHTML = t.bilder.map((b) => `<figure><img src="${K.base}${b.datei}" alt="${b.beschriftung}"><figcaption>${b.beschriftung}</figcaption></figure>`).join('');
    modal.querySelector('.info-modal__text').textContent = t.text;
    modal.querySelector('.info-modal__legende').innerHTML = t.legende.map((l) => `<li>${l}</li>`).join('');
    modal.querySelector('.info-modal__tipp').textContent = t.tipp;
    modal.querySelector('.info-modal__tipp').hidden = !t.tipp;
    modal.hidden = false;
    modal.querySelector('.info-modal__x').focus();
  }
  function infoZu() { modal.hidden = true; if (zuletzt) zuletzt.focus(); }
  K.root.querySelectorAll('.info[data-info]').forEach((b) => b.addEventListener('click', (e) => { e.preventDefault(); e.stopPropagation(); infoOeffnen(b.dataset.info, b); }));
  modal.addEventListener('click', (e) => { if (e.target === modal || e.target.closest('.info-modal__x')) infoZu(); });
  document.addEventListener('keydown', (e) => { if (e.key === 'Escape' && !modal.hidden) infoZu(); });

  K.onPlace(() => { sync(); markLoeschen(); ergebnis = null; veraltet = false; zeige(); hohlUI(); if (aktiv) { setZone(zone.art); syncProdukt(); } });
  markText(); belastInfo();
  return { modus, rechnen, setZone, zone, neuBerechnen, ergebnis: () => ergebnis, ampel, datensatz,
    markiere: (art, p, r, stufe) => addZone(art === 'sperre' ? { art, p: p.clone(), r } : { art: 'last', p: p.clone(), r, kpa: STUFEN[stufe].kpa, name: STUFEN[stufe].name }) };
}
