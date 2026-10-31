// Profi-Modus des Konfigurators: Greifberechnung nach dem Konzept „Greifberechnung: Konzept für den Konfigurator“.
// Der Nutzer legt eine Greifzone (Scheibe mit Dicke, waagerecht oder senkrecht) und Sperrzonen fest und gibt Bewegung
// und Umgebung an. Das Programm tastet die Zone ab, sucht gegenüberliegende Kontaktflächen außerhalb der Sperrzonen,
// rechnet alle Lastfälle und wählt die Position mit der größten Reserve zwischen F_min und F_max.
// Greiferunabhängig: Ergebnis ist das Greifkraftfenster, der nötige Hub und die Lage der Fingerbeläge.
// Einheiten: Längen in mm, Masse in kg, Kräfte in N.
import * as THREE from 'three';

const G = 9.81;

// ---------- Reibwerte (Rechenwerte = vorsichtige Wahl aus Literaturwerten, siehe Konzept) ----------
export const BELAGE = {
  gummi: { name: 'Gummi (NBR)', t: [-30, 100] },
  pu: { name: 'Polyurethan-Beschichtung (Shore A 60)', t: [-50, 90], kurz: 130 },
  pa: { name: 'Polyamid (PA), harter Kunststoff', t: [-40, 110] },
  pe: { name: 'Polyethylen (PE)', t: [-50, 80] },
  ptfe: { name: 'PTFE (Teflon)', t: [-200, 260] },
  stahl: { name: 'Stahl, blank', t: [-50, 400] },
};
// Paarung Fingerbelag | Produkt → Rechenwert μ, Literaturbereich, Quelle
const MU = {
  'gummi|gummi': [0.8, '1,16', 'Engineering ToolBox'],
  'gummi|karton': [0.5, '0,5 bis 0,8', 'Engineering ToolBox'],
  'gummi|papier': [0.2, '0,2', 'Hochschul-Übungswert'],
  'stahl|glas': [0.4, '0,6', 'chemie.de'],
  'stahl|holz': [0.4, '0,5', 'chemie.de'],
  'pa|stahl': [0.3, '0,4', 'Engineering ToolBox'],
  'stahl|alu': [0.3, '0,35 bis 0,61', 'Übungswert, Engineering ToolBox'],
  'pe|stahl': [0.15, '0,2', 'Engineering ToolBox'],
  'stahl|stahl': [0.1, '0,08 bis 0,18', 'chemie.de, Bystronic'],
  'ptfe|stahl': [0.05, '0,05 bis 0,2', 'Engineering ToolBox'],
};
export const ZUSTAND = {
  trocken: { name: 'trocken, sauber', f: 1 },
  nass: { name: 'nass, Kondenswasser', f: 0.4 },
  oelig: { name: 'ölig, gefettet', f: 0.2 },
  staubig: { name: 'staubig, mehlig', f: 0.5, annahme: true },
};
export function reibwert(belag, produkt) {
  const r = MU[`${belag}|${produkt}`];
  if (r) return { mu: r[0], lit: r[1], quelle: r[2], ersatz: false };
  return { mu: 0.1, lit: null, quelle: null, ersatz: true };   // kein Literaturwert: vorsichtiger Ersatzwert
}

// ---------- Rechenweg (Lastfälle 1 bis 7) ----------
// c: m, mu, n, S, az (Heben), ax (quer), aN (Not-Halt), prisma (Öffnungswinkel in Grad oder 0), e (mm), rk (mm), flaeche (mm²), pzul (N/mm²), fmax (N)
export function lastfaelle(c) {
  const { m, mu, n, S, az, ax, aN } = c;
  const L = [];
  const quer = (a) => Math.sqrt((G + az) ** 2 + a * a);
  if (c.prisma) {
    const k = Math.sin(THREE.MathUtils.degToRad(c.prisma / 2)) * S / (2 * mu);
    L.push({ nr: 4, name: 'Prismenbacken, Heben/Absenken', F: m * (G + az) * k });
    L.push({ nr: 4, name: 'Prismenbacken, seitliche Beschleunigung', F: m * quer(ax) * k });
    L.push({ nr: 4, name: 'Prismenbacken, Not-Halt', F: m * Math.sqrt(G * G + aN * aN) * k });
  } else {
    L.push({ nr: 1, name: 'Klemmen, Heben/Absenken', F: m * (G + az) * S / (mu * n) });
    L.push({ nr: 2, name: 'Klemmen, seitliche Beschleunigung', F: m * quer(ax) * S / (mu * n) });
    L.push({ nr: 2, name: 'Klemmen, Not-Halt', F: m * Math.sqrt(G * G + aN * aN) * S / (mu * n) });
  }
  L.push({ nr: 3, name: 'Beschleunigung in Schließrichtung', F: m * Math.max(ax, aN) * S });
  if (c.e > 0.5 && c.rk > 0) {
    const M = m * (G + az) * c.e / 1000;                                   // Nm
    L.push({ nr: 6, name: `Kippen (Hebelarm ${Math.round(c.e)} mm)`, F: M * S / (mu * n * c.rk / 1000) });
  }
  let fmin = 0, mass = null;
  for (const l of L) if (l.F > fmin) { fmin = l.F; mass = l; }
  if (mass) mass.mass = true;
  let fmax = Infinity, grund = null;
  if (c.pzul > 0 && c.flaeche > 0) { fmax = c.pzul * c.flaeche; grund = `Flächenpressung ${c.pzul} N/mm² × ${Math.round(c.flaeche)} mm²`; }
  if (c.fmax > 0 && c.fmax < fmax) { fmax = c.fmax; grund = 'vorgegebene Höchstkraft'; }
  return { L, fmin, fmax, grund, reserve: fmax - fmin };
}

// Schwerpunkt eines geschlossenen Netzes (Tetraeder zum Ursprung, volumengewichtet)
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

// ---------- Abtasten der Greifzone ----------
const UP = new THREE.Vector3(0, 1, 0);
const nrm = new THREE.Vector3(), ray = new THREE.Ray();
function hit(bvh, o, d) {
  ray.origin.copy(o); ray.direction.copy(d);
  const h = bvh.raycastFirst(ray, THREE.DoubleSide);
  if (!h) return null;
  nrm.copy(h.face.normal);
  return { p: h.point.clone(), n: nrm.clone(), dist: h.distance };
}

// Eine Position prüfen: Greifachse durch P0 in Richtung d, Beläge w (quer, entlang u) × h (senkrecht)
function pruefen(ctx, P0, d) {
  const { bvh, R, belag, sperren, cog } = ctx;
  const u = new THREE.Vector3().crossVectors(UP, d).normalize();
  const nd = d.clone().negate();
  const A = hit(bvh, P0.clone().addScaledVector(d, R), nd);       // Kontakt auf der +d-Seite
  const B = hit(bvh, P0.clone().addScaledVector(d, -R), d);       // Kontakt auf der −d-Seite
  if (!A || !B) return null;
  const cosA = A.n.dot(d), cosB = B.n.dot(nd);
  // Flächennormalen müssen nach außen in Schließrichtung zeigen (Toleranz 35°), sonst kein Flächenpaar
  const ok = (cs) => Math.abs(cs) > 0.82;
  if (!ok(cosA) || !ok(cosB)) return null;
  // Belag abtasten (5 × 5 Strahlen je Seite): Anteil der Fläche in Kontakt, Krümmung, Sperrzonen
  const side = (H, dirIn, from) => {
    let inPlane = 0, total = 0, spread = 0;
    const pts = [];
    for (let i = -2; i <= 2; i++) for (let j = -2; j <= 2; j++) {
      const off = new THREE.Vector3().addScaledVector(u, i / 4 * belag.w).addScaledVector(UP, j / 4 * belag.h);
      const o = from.clone().add(off);
      const s = hit(bvh, o, dirIn);
      total++;
      if (!s) { spread = Math.max(spread, 99); continue; }
      const dz = s.dist - H.dist;                  // Abstand zur Belagebene
      spread = Math.max(spread, Math.abs(dz));
      if (Math.abs(dz) < 1.0) { inPlane++; pts.push(s.p); }
      else pts.push(H.p.clone().add(off));
    }
    return { anteil: inPlane / total, spread, pts };
  };
  const sA = side(A, nd, P0.clone().addScaledVector(d, R));
  const sB = side(B, d, P0.clone().addScaledVector(d, -R));
  // Sperrzonen: kein Punkt des Belags darf in eine Sperrkugel fallen
  for (const s of sperren) for (const q of sA.pts.concat(sB.pts)) if (q.distanceTo(s.p) < s.r) return null;
  const hub = A.p.distanceTo(B.p);
  const anteil = Math.min(sA.anteil, sB.anteil);
  const rund = anteil < 0.5 && Math.max(sA.spread, sB.spread) < Math.max(belag.w, belag.h);   // gewölbt, aber geschlossen
  if (anteil < 0.2 && !rund) return null;          // zu wenig Auflage
  const flaeche = Math.max(anteil, rund ? 0.15 : 0) * belag.w * belag.h;
  // Hebelarm: Abstand des Schwerpunkts von der Greifachse quer zur Schwerkraft
  const e = Math.abs(new THREE.Vector3().subVectors(cog, A.p).cross(UP).dot(d));
  return { A: A.p, B: B.p, nA: A.n, nB: B.n, d: d.clone(), u, hub, flaeche, rund, e, P0: P0.clone() };
}

// zone: { art: 'waagerecht'|'senkrecht'|'auto', lage (mm), dicke (mm), winkel (Grad) }
export function abtasten(ctx, zone, schritt = 5) {
  const { box, cog } = ctx;
  const s = new THREE.Vector3(); box.getSize(s);
  const c = box.getCenter(new THREE.Vector3());
  const kand = []; let geprueft = 0;
  const range = (a, b, st) => { const out = []; const n = Math.max(1, Math.round((b - a) / st)); for (let i = 0; i <= n; i++) out.push(a + (b - a) * i / n); return out; };
  if (zone.art === 'senkrecht') {
    const phi = THREE.MathUtils.degToRad(zone.winkel);
    const n = new THREE.Vector3(Math.cos(phi), 0, -Math.sin(phi));          // Normale der Scheibe
    const d = new THREE.Vector3(-n.z, 0, n.x);                               // Schließrichtung in der Scheibe
    const half = Math.max(0, (zone.dicke - ctx.belag.w) / 2);
    for (const q of range(zone.lage - half, zone.lage + half, schritt))
      for (const y of range(box.min.y + ctx.belag.h / 2 + 1, box.max.y - ctx.belag.h / 2 - 1, Math.max(schritt, s.y / 24))) {
        const P0 = new THREE.Vector3(c.x, y, c.z).addScaledVector(n, q);
        geprueft++; const k = pruefen(ctx, P0, d); if (k) kand.push({ ...k, lage: q, hoehe: y, winkel: zone.winkel });
      }
  } else {
    const y0 = zone.art === 'auto' ? box.min.y + ctx.belag.h / 2 + 1 : zone.lage - Math.max(0, (zone.dicke - ctx.belag.h) / 2);
    const y1 = zone.art === 'auto' ? box.max.y - ctx.belag.h / 2 - 1 : zone.lage + Math.max(0, (zone.dicke - ctx.belag.h) / 2);
    const st = zone.art === 'auto' ? Math.max(schritt, s.y / 24) : schritt;
    const ext = Math.max(s.x, s.z);
    const offs = [0]; for (let k = 1; k <= 4; k++) offs.push(k * ext / 10, -k * ext / 10);
    for (const y of range(y0, y1, st))
      for (let w = 0; w < 180; w += 15) {
        geprueft++;
        const a = THREE.MathUtils.degToRad(w), d = new THREE.Vector3(Math.cos(a), 0, Math.sin(a));
        const u = new THREE.Vector3().crossVectors(UP, d).normalize();
        for (const o of offs) {
          const P0 = new THREE.Vector3(cog.x, y, cog.z).addScaledVector(u, o);
          const k = pruefen(ctx, P0, d); if (k) { kand.push({ ...k, hoehe: y, winkel: w, versatz: o }); break; }   // nächstliegende gültige Achse genügt
        }
      }
  }
  kand.geprueft = geprueft;
  return kand;
}

// Rangfolge: größte Reserve, dann kleinerer Hebelarm, dann größere Fläche, dann kleinere Mindestkraft
export function bewerten(kand, rechne) {
  const g = kand.map((k) => ({ ...k, r: rechne(k) }));
  const gueltig = g.filter((k) => k.r.fmin <= k.r.fmax && (!k.hubMax || k.hub <= k.hubMax));
  gueltig.sort((a, b) => {
    const ra = a.r.reserve, rb = b.r.reserve;
    if (isFinite(ra) || isFinite(rb)) { if (Math.abs(ra - rb) > 1e-6) return rb - ra; }
    if (Math.abs(a.e - b.e) > 1) return a.e - b.e;
    if (Math.abs(a.flaeche - b.flaeche) > 1) return b.flaeche - a.flaeche;
    return a.r.fmin - b.r.fmin;
  });
  // Alternativen: deutlich andere Lage (Höhe/Lage > 10 mm oder Winkel > 20°)
  const best = [];
  for (const k of gueltig) {
    if (best.every((b) => Math.abs((b.lage ?? b.hoehe) - (k.lage ?? k.hoehe)) > 10 || Math.abs(b.hoehe - k.hoehe) > 10 || Math.abs((b.winkel || 0) - (k.winkel || 0)) > 20)) best.push(k);
    if (best.length === 3) break;
  }
  return { geprueft: kand.geprueft || g.length, gefunden: g.length, gueltig: gueltig.length, best };
}

// ---------- Bedienung im Konfigurator ----------
const PRODUKT_REIB = { stahl: 'Stahl', alu: 'Aluminium', kunststoff: 'Kunststoff', holz: 'Holz', glas: 'Glas', karton: 'Karton', papier: 'Papier', gummi: 'Gummi', lebensmittel: 'Lebensmittel' };
const fmt = (v, d = 0) => v.toLocaleString('de-DE', { maximumFractionDigits: d, minimumFractionDigits: d });
const kraft = (F) => !isFinite(F) ? 'unbegrenzt' : F >= 1000 ? `${fmt(F / 1000, 2)} kN` : `${fmt(F, F < 10 ? 1 : 0)} N`;

export function initPro(K) {
  const $ = K.$;
  const box = $('#kfg-pro');
  if (!box) return;
  const zoneMat = new THREE.MeshBasicMaterial({ color: 0x0061aa, transparent: true, opacity: 0.16, depthWrite: false, side: THREE.DoubleSide });
  const zoneEdge = new THREE.LineBasicMaterial({ color: 0x0061aa });
  const sperrMat = new THREE.MeshBasicMaterial({ color: 0xc8372d, transparent: true, opacity: 0.45, depthWrite: false });
  const padMat = new THREE.MeshStandardMaterial({ color: 0x2e9d5b, roughness: 0.5 });
  const padAlt = new THREE.MeshStandardMaterial({ color: 0x8fb8a0, roughness: 0.5, transparent: true, opacity: 0.7 });
  const grp = new THREE.Group(); grp.visible = false; K.scene.add(grp);
  const zoneMesh = new THREE.Mesh(new THREE.BoxGeometry(1, 1, 1), zoneMat);
  const zoneLines = new THREE.LineSegments(new THREE.EdgesGeometry(new THREE.BoxGeometry(1, 1, 1)), zoneEdge);
  grp.add(zoneMesh, zoneLines);
  const padGrp = new THREE.Group(); grp.add(padGrp);
  const sperren = [];        // { p, r, mesh }
  let aktiv = false, sperrModus = false, ergebnis = null, gewaehlt = 0;
  const zone = { art: 'auto', lage: 0, dicke: 40, winkel: 0 };
  const num = (id) => Number($(id).value);

  // Grenzen der Zone aus dem Teil
  function teil() { return K.part(); }
  function zoneGrenzen() {
    const t = teil(); if (!t) return null;
    const s = new THREE.Vector3(); t.box.getSize(s);
    if (zone.art === 'senkrecht') {
      const phi = THREE.MathUtils.degToRad(zone.winkel), ext = Math.abs(Math.cos(phi)) * s.x + Math.abs(Math.sin(phi)) * s.z;
      return { min: -ext / 2, max: ext / 2, dickeMax: ext };
    }
    return { min: t.box.min.y, max: t.box.max.y, dickeMax: s.y };
  }
  function zeichneZone() {
    const t = teil(); if (!t) return;
    const s = new THREE.Vector3(); t.box.getSize(s); const c = t.box.getCenter(new THREE.Vector3());
    const m = 1.25, belag = { w: num('#pro-bw'), h: num('#pro-bh') };
    zone.dicke = Math.max(zone.dicke, zone.art === 'senkrecht' ? belag.w : belag.h);
    zoneMesh.visible = zoneLines.visible = zone.art !== 'auto';
    if (zone.art === 'waagerecht') {
      zoneMesh.scale.set(s.x * m + 20, zone.dicke, s.z * m + 20); zoneMesh.position.set(c.x, zone.lage, c.z); zoneMesh.rotation.set(0, 0, 0);
    } else if (zone.art === 'senkrecht') {
      const phi = THREE.MathUtils.degToRad(zone.winkel), n = new THREE.Vector3(Math.cos(phi), 0, -Math.sin(phi));
      zoneMesh.scale.set(zone.dicke, s.y * m + 20, Math.max(s.x, s.z) * m + 20);
      zoneMesh.position.set(c.x, c.y, c.z).addScaledVector(n, zone.lage); zoneMesh.rotation.set(0, phi, 0);
    }
    zoneLines.position.copy(zoneMesh.position); zoneLines.rotation.copy(zoneMesh.rotation); zoneLines.scale.copy(zoneMesh.scale);
    // Eingabefelder nachführen
    const g = zoneGrenzen();
    $('#pro-lage').min = Math.floor(g.min); $('#pro-lage').max = Math.ceil(g.max);
    $('#pro-lage').value = Math.round(zone.lage); $('#pro-dicke').value = Math.round(zone.dicke);
    $('#pro-lage-out').textContent = `${fmt(zone.lage)} mm`;
    $('#pro-winkel').value = zone.winkel;
    box.querySelectorAll('[data-zone]').forEach((b) => b.setAttribute('aria-pressed', String(b.dataset.zone === zone.art)));
    $('#pro-zone-felder').hidden = zone.art === 'auto';
    $('#pro-winkel-feld').hidden = zone.art !== 'senkrecht';
    $('#pro-zone-text').textContent = zone.art === 'auto' ? 'Das Programm sucht am ganzen Teil (waagerecht, alle Höhen und Richtungen).'
      : zone.art === 'waagerecht' ? 'Waagerechte Scheibe: Die Finger greifen in dieser Höhe. Pfeiltasten ↑/↓ verschieben, Umschalt + Pfeil ändert die Dicke, Ziehen mit der Maus verschiebt.'
        : 'Senkrechte Scheibe, um die Hochachse drehbar: Die Finger greifen quer dazu. Pfeiltasten ←/→ verschieben, Umschalt + Pfeil ändert die Dicke.';
  }
  function setZone(art) {
    const t = teil(); zone.art = art;
    if (t) {
      const s = new THREE.Vector3(); t.box.getSize(s);
      if (art === 'waagerecht') { zone.lage = t.box.min.y + s.y * 0.5; zone.dicke = Math.max(num('#pro-bh'), Math.round(s.y * 0.3)); }
      if (art === 'senkrecht') { zone.lage = 0; zone.dicke = Math.max(num('#pro-bw'), Math.round(Math.max(s.x, s.z) * 0.2)); }
    }
    ergebnis = null; zeigePads(); zeichneZone(); zeigeErgebnis();
  }
  function moveZone(dl, dd = 0) {
    const g = zoneGrenzen(); if (!g || zone.art === 'auto') return;
    zone.dicke = THREE.MathUtils.clamp(zone.dicke + dd, zone.art === 'senkrecht' ? num('#pro-bw') : num('#pro-bh'), Math.max(g.dickeMax, 10));
    zone.lage = THREE.MathUtils.clamp(zone.lage + dl, g.min, g.max);
    ergebnis = null; zeigePads(); zeichneZone(); zeigeErgebnis();
  }

  // ---------- Modus umschalten ----------
  function modus(profi) {
    aktiv = profi;
    box.hidden = !profi;
    grp.visible = profi;
    K.showGripper(!profi);
    K.root.querySelectorAll('[data-modus]').forEach((b) => b.setAttribute('aria-pressed', String((b.dataset.modus === 'profi') === profi)));
    K.root.classList.toggle('is-profi', profi);
    if (profi) { syncMasse(); zeichneZone(); }
  }
  K.root.querySelectorAll('[data-modus]').forEach((b) => b.addEventListener('click', () => modus(b.dataset.modus === 'profi')));

  // ---------- Masse ----------
  function masse() { const m = Number($('#pro-masse').value); return m > 0 ? m : (teil() ? teil().mass : 0); }
  function syncMasse() {
    const t = teil(); if (!t) return;
    $('#pro-masse-auto').textContent = `berechnet aus Volumen und Dichte: ${t.mass < 1 ? fmt(t.mass * 1000) + ' g' : fmt(t.mass, 2) + ' kg'}`;
    $('#pro-masse').placeholder = fmt(t.mass, 3);
  }

  // ---------- Sperrzonen per Klick ----------
  const rc = new THREE.Raycaster(); let down = null;
  K.canvas.addEventListener('pointerdown', (e) => {
    down = [e.clientX, e.clientY];
    if (!aktiv || zone.art === 'auto' || sperrModus) return;
    // Zone mit der Maus ziehen
    const r = K.canvas.getBoundingClientRect();
    rc.setFromCamera(new THREE.Vector2((e.clientX - r.left) / r.width * 2 - 1, -(e.clientY - r.top) / r.height * 2 + 1), K.camera);
    if (rc.intersectObject(zoneMesh).length) {
      K.controls.enabled = false;
      const n = zone.art === 'waagerecht' ? new THREE.Vector3(0, 1, 0) : new THREE.Vector3(Math.cos(THREE.MathUtils.degToRad(zone.winkel)), 0, -Math.sin(THREE.MathUtils.degToRad(zone.winkel)));
      const a = zoneMesh.position.clone().project(K.camera), b = zoneMesh.position.clone().addScaledVector(n, 100).project(K.camera);
      const v = new THREE.Vector2((b.x - a.x) * r.width / 2, -(b.y - a.y) * r.height / 2);
      const len = v.length() || 1; v.divideScalar(len);
      let last = [e.clientX, e.clientY];
      const mv = (ev) => { const dx = ev.clientX - last[0], dy = ev.clientY - last[1]; last = [ev.clientX, ev.clientY]; moveZone((dx * v.x + dy * v.y) / len * 100); };
      const up = () => { K.controls.enabled = true; window.removeEventListener('pointermove', mv); window.removeEventListener('pointerup', up); };
      window.addEventListener('pointermove', mv); window.addEventListener('pointerup', up);
    }
  });
  K.canvas.addEventListener('pointerup', (e) => {
    if (!aktiv || !sperrModus || !down || Math.hypot(e.clientX - down[0], e.clientY - down[1]) > 5) return;
    const t = teil(); if (!t) return;
    const r = K.canvas.getBoundingClientRect();
    rc.setFromCamera(new THREE.Vector2((e.clientX - r.left) / r.width * 2 - 1, -(e.clientY - r.top) / r.height * 2 + 1), K.camera);
    const h = rc.intersectObject(t.mesh)[0];
    if (!h) return;
    const rad = num('#pro-sperr-r');
    const m = new THREE.Mesh(new THREE.SphereGeometry(rad, 24, 16), sperrMat); m.position.copy(h.point); grp.add(m);
    sperren.push({ p: h.point.clone(), r: rad, mesh: m });
    ergebnis = null; zeigePads(); zeigeErgebnis(); sperrText();
  });
  function sperrText() { $('#pro-sperr-info').textContent = sperren.length ? `${sperren.length} Sperrzone${sperren.length > 1 ? 'n' : ''} markiert` : 'Keine Sperrzone markiert.'; }
  function sperrenLoeschen() { for (const s of sperren) { grp.remove(s.mesh); s.mesh.geometry.dispose(); } sperren.length = 0; sperrText(); ergebnis = null; zeigePads(); zeigeErgebnis(); }
  $('#pro-sperr').addEventListener('click', () => {
    sperrModus = !sperrModus;
    $('#pro-sperr').setAttribute('aria-pressed', String(sperrModus));
    $('#pro-sperr').textContent = sperrModus ? '✓ Fertig mit Sperrzonen' : '⊘ Sperrzonen anklicken';
    K.canvas.style.cursor = sperrModus ? 'crosshair' : '';
  });
  $('#pro-sperr-weg').addEventListener('click', sperrenLoeschen);

  // Tastatur: Zone verschieben (Pfeile), Dicke ändern (Umschalt + Pfeil)
  K.canvas.tabIndex = 0;
  K.canvas.addEventListener('keydown', (e) => {
    if (!aktiv || zone.art === 'auto') return;
    const k = { ArrowUp: 1, ArrowRight: 1, ArrowDown: -1, ArrowLeft: -1 }[e.key];
    if (!k) return;
    e.preventDefault();
    if (e.shiftKey) moveZone(0, k * 2); else moveZone(k * 2);
  });
  box.querySelectorAll('[data-zone]').forEach((b) => b.addEventListener('click', () => setZone(b.dataset.zone)));
  $('#pro-lage').addEventListener('input', () => { zone.lage = num('#pro-lage'); moveZone(0); });
  $('#pro-dicke').addEventListener('change', () => { zone.dicke = num('#pro-dicke'); moveZone(0); });
  $('#pro-winkel').addEventListener('input', () => { zone.winkel = num('#pro-winkel'); moveZone(0); });

  // Produktwerkstoff für die Reibung folgt dem Werkstoff oben
  const sync = () => { const k = K.$('#kfg-material').selectedOptions[0].dataset.key; if (k && PRODUKT_REIB[k]) $('#pro-produkt').value = k; };
  K.$('#kfg-material').addEventListener('change', () => { sync(); syncMasse(); });
  sync();
  $('#pro-backen').addEventListener('change', () => { $('#pro-prisma-feld').hidden = $('#pro-backen').value !== 'prisma'; });
  $('#pro-dreh').addEventListener('change', () => { $('#pro-s').value = $('#pro-dreh').checked ? 2 : 1.5; });

  // ---------- Berechnen ----------
  function eingaben() {
    const belag = $('#pro-belag').value, prod = $('#pro-produkt').value, zust = ZUSTAND[$('#pro-zustand').value];
    const rw = reibwert(belag, prod);
    const muHand = Number(String($('#pro-mu').value).replace(',', '.'));
    const mu0 = muHand > 0 ? muHand : rw.mu;
    return { belag, prod, zust, rw, muHand, mu: mu0 * zust.f, mu0,
      m: masse(), n: num('#pro-n'), S: Number(String($('#pro-s').value).replace(',', '.')) || 2,
      az: num('#pro-az'), ax: num('#pro-ax'), aN: num('#pro-an'),
      prisma: $('#pro-backen').value === 'prisma' ? num('#pro-alpha') : 0,
      pzul: Number(String($('#pro-pzul').value).replace(',', '.')) || 0, fmax: num('#pro-fmax') || 0,
      hubMax: num('#pro-hub') || 0, temp: num('#pro-temp'), feuchte: num('#pro-feuchte'),
      bw: num('#pro-bw'), bh: num('#pro-bh'), schritt: Math.max(1, num('#pro-schritt') || 5) };
  }
  function hinweise(E) {
    const H = [];
    const b = BELAGE[E.belag];
    if (E.temp < b.t[0] || E.temp > (b.kurz || b.t[1])) H.push(['rot', `Temperatur ${E.temp} °C liegt außerhalb des Bereichs von ${b.name} (${b.t[0]} bis ${b.t[1]} °C).`]);
    else if (E.temp > b.t[1] || E.temp < 0 || E.temp - b.t[0] < 10 || b.t[1] - E.temp < 10) H.push(['gelb', `Temperatur ${E.temp} °C nahe der Grenze von ${b.name} oder unter 0 °C: Versuch empfohlen.`]);
    if ((E.prod === 'karton' || E.prod === 'papier') && E.feuchte >= 70) H.push(['gelb', `Hohe Luftfeuchte (${E.feuchte} %): Karton und Papier verlieren an Festigkeit. Zulässige Greifkraft vorsichtig wählen.`]);
    if (E.rw.ersatz && !(E.muHand > 0)) H.push(['gelb', `Für ${b.name} auf ${PRODUKT_REIB[E.prod]} ist kein Literaturwert hinterlegt. Gerechnet wird vorsichtig mit μ = 0,1. Eigenen Wert eintragen oder im Versuch messen.`]);
    if (E.zust.annahme) H.push(['gelb', 'Der Faktor für staubige oder mehlige Oberflächen ist eine Annahme. Versuch nötig.']);
    if (E.belag === 'pu') H.push(['info', 'PU-Beschichtungen erhöhen die Reibung spürbar; eine belastbare Zahl fehlt noch.']);
    if (!(E.pzul > 0) && !(E.fmax > 0)) H.push(['info', 'Ohne zulässige Flächenpressung oder Höchstkraft prüft das Programm nicht, ob das Produkt beschädigt wird.']);
    return H;
  }
  function rechnen() {
    const t = teil(); if (!t) return;
    const E = eingaben();
    const belag = { w: E.bw, h: E.bh };
    const ctx = { bvh: t.bvh, box: t.box, cog: t.cog, R: t.box.getSize(new THREE.Vector3()).length() + 50, belag, sperren };
    const kand = abtasten(ctx, { ...zone }, E.schritt);
    kand.forEach((k) => { k.hubMax = E.hubMax; });
    const res = bewerten(kand, (k) => lastfaelle({ m: E.m, mu: E.mu, n: E.n, S: E.S, az: E.az, ax: E.ax, aN: E.aN, prisma: E.prisma,
      e: k.e, rk: Math.sqrt(k.flaeche / Math.PI) * 2 / 3, flaeche: k.flaeche, pzul: E.pzul, fmax: E.fmax }));
    ergebnis = { ...res, E, H: hinweise(E) };
    gewaehlt = 0;
    zeigePads(); zeigeErgebnis();
  }
  $('#pro-rechnen').addEventListener('click', () => {
    const b = $('#pro-rechnen'); b.disabled = true; b.textContent = 'Rechnet …';
    setTimeout(() => { try { rechnen(); } finally { b.disabled = false; b.textContent = 'Berechnen'; } }, 30);
  });

  // ---------- Darstellung ----------
  function zeigePads() {
    while (padGrp.children.length) { const c = padGrp.children.pop(); if (c.geometry) c.geometry.dispose(); }
    if (!ergebnis || !ergebnis.best.length) return;
    const E = ergebnis.E;
    ergebnis.best.forEach((k, i) => {
      if (i !== gewaehlt) return;
      for (const [p, s] of [[k.A, 1], [k.B, -1]]) {
        const m = new THREE.Mesh(new THREE.BoxGeometry(6, E.bh, E.bw), i === gewaehlt ? padMat : padAlt);
        m.position.copy(p).addScaledVector(k.d, s * 3);
        m.quaternion.setFromRotationMatrix(new THREE.Matrix4().makeBasis(k.d, UP, new THREE.Vector3().crossVectors(k.d, UP)));
        padGrp.add(m);
      }
      const line = new THREE.Line(new THREE.BufferGeometry().setFromPoints([k.A.clone().addScaledVector(k.d, 40), k.B.clone().addScaledVector(k.d, -40)]), new THREE.LineDashedMaterial({ color: 0x2e9d5b, dashSize: 6, gapSize: 4 }));
      line.computeLineDistances(); padGrp.add(line);
    });
  }
  function zeigeErgebnis() {
    const out = $('#pro-ergebnis');
    if (!ergebnis) { out.innerHTML = ''; return; }
    const { best, geprueft, gueltig, E, H } = ergebnis;
    const rot = H.some((h) => h[0] === 'rot') || !best.length;
    const gelb = !rot && H.some((h) => h[0] === 'gelb');
    const amp = rot ? 'bad' : gelb ? 'warn' : 'ok';
    let html = '';
    if (!best.length) {
      html += `<p class="kfg__status is-bad">In dieser Greifzone ist keine Position gültig (${fmt(geprueft)} geprüft). Vorschläge: größere oder andere Zone, Formschluss (Prismenbacken), weniger Beschleunigung${E.pzul || E.fmax ? ' oder höhere zulässige Kraft' : ''}.</p>`;
    } else {
      const k = best[gewaehlt], r = k.r;
      const lage = k.lage != null ? `Lage ${fmt(k.lage)} mm, Höhe ${fmt(k.hoehe)} mm` : `Höhe ${fmt(k.hoehe)} mm über Auflage, Schließrichtung ${fmt(k.winkel)}°`;
      html += `<p class="kfg__status is-${amp}">${rot ? 'Nicht empfohlen' : gelb ? 'Möglich, mit Hinweisen' : 'Greifbar'}: nötige Greifkraft <strong>${kraft(r.fmin)}</strong>${isFinite(r.fmax) ? `, zulässig bis <strong>${kraft(r.fmax)}</strong>` : ''}.</p>
      <dl class="kfg__facts pro__facts">
        <dt>Position</dt><dd>${lage}</dd>
        <dt>Nötiger Hub</dt><dd>${fmt(k.hub)} mm (Abstand der Kontaktflächen)</dd>
        <dt>Kontaktfläche</dt><dd>ca. ${fmt(k.flaeche)} mm² je Belag${k.rund ? ' · gewölbt: Prismenbacken empfohlen' : ''}</dd>
        <dt>Hebelarm zum Schwerpunkt</dt><dd>${fmt(k.e)} mm</dd>
        <dt>Masse · μ</dt><dd>${fmt(E.m, 3)} kg · μ = ${fmt(E.mu, 3)} (${E.muHand > 0 ? 'eigener Wert' : E.rw.ersatz ? 'Ersatzwert' : 'Rechenwert, Literatur ' + E.rw.lit + ', ' + E.rw.quelle}${E.zust.f !== 1 ? ` × ${fmt(E.zust.f, 1)} ${E.zust.name}` : ''})</dd>
        <dt>Geprüft</dt><dd>${fmt(geprueft)} Positionen, ${fmt(gueltig)} gültig</dd>
      </dl>
      <table class="pro__tab"><thead><tr><th>Lastfall</th><th>Greifkraft</th></tr></thead><tbody>
        ${r.L.map((l) => `<tr${l.mass ? ' class="is-mass"' : ''}><td>${l.nr}. ${l.name}${l.mass ? ' · maßgebend' : ''}</td><td>${kraft(l.F)}</td></tr>`).join('')}
        <tr><td>7. Produkt nicht beschädigen${r.grund ? ` (${r.grund})` : ''}</td><td>${isFinite(r.fmax) ? 'max. ' + kraft(r.fmax) : 'nicht geprüft'}</td></tr>
      </tbody></table>`;
      if (best.length > 1) html += `<div class="pro__alt"><span class="muted">Positionen:</span>${best.map((b, i) => `<button type="button" class="btn btn--xs ${i === gewaehlt ? 'btn--primary' : 'btn--ghost'}" data-alt="${i}">${i === 0 ? 'Gewählt' : 'Alternative ' + i}: ${kraft(b.r.fmin)}</button>`).join('')}</div>`;
    }
    if (H.length) html += `<ul class="pro__hinweise">${H.map(([c, t]) => `<li class="is-${c}">${t}</li>`).join('')}</ul>`;
    html += '<p class="kfg__small muted">Der Konfigurator gibt eine Empfehlung, keine Freigabe. Reibwerte sind vorsichtige Rechenwerte aus der Literatur; für die Auslegung prüfen wir Ihre Anwendung gern im Versuch.</p>';
    out.innerHTML = html;
    out.querySelectorAll('[data-alt]').forEach((b) => b.addEventListener('click', () => { gewaehlt = Number(b.dataset.alt); zeigePads(); zeigeErgebnis(); }));
  }

  // neues oder gedrehtes Teil: Zone, Sperrzonen und Ergebnis zurücksetzen
  K.onPlace(() => { sync(); sperrenLoeschen(); ergebnis = null; zeigePads(); zeigeErgebnis(); if (aktiv) { setZone(zone.art); syncMasse(); } });
  sperrText();
  return { modus, rechnen, setZone, zone, ergebnis: () => ergebnis, sperre: (p, r) => { const m = new THREE.Mesh(new THREE.SphereGeometry(r, 16, 12), sperrMat); m.position.copy(p); grp.add(m); sperren.push({ p: p.clone(), r, mesh: m }); sperrText(); } };
}
