// Greiferbacken: eine gemeinsame Geometrie für Simulation, STL und STEP.
// Koordinaten in mm, eine Backe (die zweite ist um die Hochachse gedreht):
//   z = Schließrichtung, von der Teilmitte (z = 0) nach außen; x = Belagbreite; y = Belaghöhe (0 = Fingerspitze).
// Jeder Körper ist ein Prisma: ebenes Profil, entlang einer Achse extrudiert.
//   achse 'y': Profilpunkte [x, z], extrudiert von y = von bis bis
//   achse 'x': Profilpunkte [z, y], extrudiert von x = von bis bis
// Rundungen werden in Facetten zerlegt (für Fräsen oder 3D-Druck reicht das, in CAD lassen sie sich weiter bearbeiten).

const BELAG_DICKE = 2;     // mm
const KOERPER = 12;        // mm Backenkörper hinter dem Belag
const SPIEL = 0.3;         // mm Luft der Konturbacke zum Teil

const rad = (g) => g * Math.PI / 180;
const clamp = (v, a, b) => Math.min(b, Math.max(a, v));

// p: { backen, hub, radius, rund, bw, bh, alpha, U, gamma }
export function backenModell(p) {
  const half = p.hub / 2, r = p.radius || p.hub / 2, bw = p.bw, bh = p.bh, d = BELAG_DICKE;
  const form = (p.backen === 'prisma' || p.backen === 'kontur') && !p.rund ? 'flach' : (p.backen || 'flach');
  const y = (pts) => ({ achse: 'y', von: 0, bis: bh, pts });
  if (form === 'prisma') {
    const alpha = clamp(p.alpha || 90, 30, 170), h = rad(alpha / 2), za = r / Math.sin(h), dz = d / Math.sin(h);
    const X = Math.max(r * Math.cos(h) + 5, bw / 2), zf = za - X / Math.tan(h), zb = za + dz + KOERPER;
    return { form, ruecken: zb, text: `Prismenbacke α ${Math.round(alpha)}° für Ø ${fmt(2 * r)} mm`,
      belag: y([[-X, zf], [0, za], [X, zf], [X, zf + dz], [0, za + dz], [-X, zf + dz]]),
      koerper: y([[-X, zf + dz], [0, za + dz], [X, zf + dz], [X, zb], [-X, zb]]) };
  }
  if (form === 'kontur') {
    const U = clamp(p.U || 70, 10, 85), phi = rad(U / 100 * 90), ri = r + SPIEL, ra = ri + d, zb = ra + KOERPER;
    const X = Math.max(ra * Math.sin(phi) + 8, bw / 2 + 5), n = 32;
    const bogen = (R, rueck) => { const o = []; for (let i = 0; i <= n; i++) { const b = -phi + 2 * phi * (rueck ? n - i : i) / n; o.push([R * Math.sin(b), R * Math.cos(b)]); } return o; };
    return { form, ruecken: zb, text: `Konturbacke ${Math.round(U)} % Umschließung für Ø ${fmt(2 * r)} mm (Spiel ${String(SPIEL).replace('.', ',')} mm)`,
      belag: y([...bogen(ri, false), ...bogen(ra, true)]),
      koerper: y([[-X, ra * Math.cos(phi)], ...bogen(ra, false), [X, ra * Math.cos(phi)], [X, zb], [-X, zb]]) };
  }
  if (form === 'konus') {
    // schräge Anlage: an der Fingerspitze näher am Teil, das Teil stützt sich auf der Schräge ab
    const gamma = clamp(p.gamma || 15, 3, 60), t = bh * Math.tan(rad(gamma)), z0 = half - t / 2, z1 = half + t / 2, zb = z1 + d + KOERPER;
    const x = { achse: 'x', von: -bw / 2, bis: bw / 2 };
    return { form, ruecken: zb, text: `Kegelbacke γ ${Math.round(gamma)}°`,
      belag: { ...x, pts: [[z0, 0], [z0 + d, 0], [z1 + d, bh], [z1, bh]] },
      koerper: { ...x, pts: [[z0 + d, 0], [zb, 0], [zb, bh], [z1 + d, bh]] } };
  }
  return { form: 'flach', ruecken: half + d + KOERPER, text: 'Flachbacke',
    belag: y([[-bw / 2, half], [bw / 2, half], [bw / 2, half + d], [-bw / 2, half + d]]),
    koerper: y([[-bw / 2, half + d], [bw / 2, half + d], [bw / 2, half + d + KOERPER], [-bw / 2, half + d + KOERPER]]) };
}
function fmt(v) { return (Math.round(v * 10) / 10).toLocaleString('de-DE'); }

// Profilpunkt (a, b) in Höhe t → [x, y, z]
export function punkt(k, a, b, t) { return k.achse === 'y' ? [a, t, b] : [t, b, a]; }

// geschlossene Hülle: Liste von Flächen (Punktschleifen, außen gesehen gegen den Uhrzeigersinn)
export function flaechen(k) {
  const P = k.pts, n = P.length;
  const unten = P.map(([a, b]) => punkt(k, a, b, k.von)), oben = P.map(([a, b]) => punkt(k, a, b, k.bis));
  const F = [unten.slice(), oben.slice().reverse()];
  for (let i = 0; i < n; i++) { const j = (i + 1) % n; F.push([unten[j], unten[i], oben[i], oben[j]]); }
  // Umlaufsinn so drehen, dass die Normalen nach außen zeigen (Volumen > 0)
  let vol = 0;
  for (const f of F) for (let i = 1; i < f.length - 1; i++) vol += det(f[0], f[i], f[i + 1]);
  if (vol < 0) F.forEach((f) => f.reverse());
  return F;
}
const det = (a, b, c) => a[0] * (b[1] * c[2] - b[2] * c[1]) - a[1] * (b[0] * c[2] - b[2] * c[0]) + a[2] * (b[0] * c[1] - b[1] * c[0]);

// ---------------------------------------------------------------- STEP (ISO 10303-21, AP214)
// teile: [{ name, koerper }], Flächen eben, Kanten gerade: ADVANCED_BREP aus MANIFOLD_SOLID_BREP.
export function stepDatei(titel, teile) {
  const L = []; let id = 0;
  const e = (s) => { L.push(`#${++id}=${s};`); return `#${id}`; };
  const z = (v) => { const r = Math.abs(v) < 1e-9 ? 0 : v; const s = r.toFixed(6).replace(/0+$/, ''); return s.endsWith('.') ? s : s; };
  const str = (s) => `'${String(s).replace(/'/g, "''").replace(/[^\x20-\x7e]/g, (c) => ({ 'ä': 'ae', 'ö': 'oe', 'ü': 'ue', 'Ä': 'Ae', 'Ö': 'Oe', 'Ü': 'Ue', 'ß': 'ss', 'α': 'alpha', 'γ': 'gamma', 'Ø': 'D', '°': 'deg', '×': 'x' }[c] || '_'))}'`;
  const pt = (p) => e(`CARTESIAN_POINT('',(${p.map(z).join(',')}))`);
  const dir = (v) => e(`DIRECTION('',(${v.map(z).join(',')}))`);
  const sub = (a, b) => [a[0] - b[0], a[1] - b[1], a[2] - b[2]];
  const len = (v) => Math.hypot(v[0], v[1], v[2]);
  const norm = (v) => { const l = len(v) || 1; return [v[0] / l, v[1] / l, v[2] / l]; };
  const cross = (a, b) => [a[1] * b[2] - a[2] * b[1], a[2] * b[0] - a[0] * b[2], a[0] * b[1] - a[1] * b[0]];

  const ctx = [];
  ctx.push(e("APPLICATION_CONTEXT('core data for automotive mechanical design processes')"));
  e(`APPLICATION_PROTOCOL_DEFINITION('international standard','automotive_design',2000,${ctx[0]})`);
  const pc = e(`PRODUCT_CONTEXT('',${ctx[0]},'mechanical')`);
  const prod = e(`PRODUCT(${str(titel)},${str(titel)},'',(${pc}))`);
  e(`PRODUCT_RELATED_PRODUCT_CATEGORY('part',$,(${prod}))`);
  const pdf = e(`PRODUCT_DEFINITION_FORMATION('','',${prod})`);
  const pdc = e(`PRODUCT_DEFINITION_CONTEXT('part definition',${ctx[0]},'design')`);
  const pd = e(`PRODUCT_DEFINITION('design','',${pdf},${pdc})`);
  const pds = e(`PRODUCT_DEFINITION_SHAPE('','',${pd})`);
  const lu = e('(LENGTH_UNIT()NAMED_UNIT(*)SI_UNIT(.MILLI.,.METRE.))');
  const au = e('(NAMED_UNIT(*)PLANE_ANGLE_UNIT()SI_UNIT($,.RADIAN.))');
  const su = e('(NAMED_UNIT(*)SI_UNIT($,.STERADIAN.)SOLID_ANGLE_UNIT())');
  const unc = e(`UNCERTAINTY_MEASURE_WITH_UNIT(LENGTH_MEASURE(1.E-03),${lu},'distance_accuracy_value','confusion accuracy')`);
  const gc = e(`(GEOMETRIC_REPRESENTATION_CONTEXT(3)GLOBAL_UNCERTAINTY_ASSIGNED_CONTEXT((${unc}))GLOBAL_UNIT_ASSIGNED_CONTEXT((${lu},${au},${su}))REPRESENTATION_CONTEXT('Backe','3D'))`);
  const origin = e(`AXIS2_PLACEMENT_3D('',${pt([0, 0, 0])},${dir([0, 0, 1])},${dir([1, 0, 0])})`);

  const solids = [];
  for (const teil of teile) {
    const F = flaechen(teil.koerper);
    const vmap = new Map(), emap = new Map();
    const key = (p) => p.map((v) => v.toFixed(5)).join(',');
    const vtx = (p) => { const k = key(p); if (!vmap.has(k)) vmap.set(k, e(`VERTEX_POINT('',${pt(p)})`)); return vmap.get(k); };
    const kante = (a, b) => {
      const ka = key(a), kb = key(b), k = ka < kb ? ka + '|' + kb : kb + '|' + ka;
      if (!emap.has(k)) {
        const [p, q] = ka < kb ? [a, b] : [b, a], d = sub(q, p);
        const line = e(`LINE('',${pt(p)},${e(`VECTOR('',${dir(norm(d))},${z(len(d))})`)})`);
        emap.set(k, { ref: e(`EDGE_CURVE('',${vtx(p)},${vtx(q)},${line},.T.)`), start: key(p) });
      }
      const ec = emap.get(k);
      return e(`ORIENTED_EDGE('',*,*,${ec.ref},${ec.start === ka ? '.T.' : '.F.'})`);
    };
    const faces = F.map((f) => {
      // doppelte Punkte (z. B. Bogenenden) entfernen
      const g = f.filter((p, i) => key(p) !== key(f[(i + 1) % f.length]));
      let nrm = [0, 0, 0];
      for (let i = 0; i < g.length; i++) { const a = g[i], b = g[(i + 1) % g.length]; nrm[0] += (a[1] - b[1]) * (a[2] + b[2]); nrm[1] += (a[2] - b[2]) * (a[0] + b[0]); nrm[2] += (a[0] - b[0]) * (a[1] + b[1]); }
      nrm = norm(nrm);
      const ref = norm(cross(nrm, cross(sub(g[1], g[0]), nrm)));
      const loop = e(`EDGE_LOOP('',(${g.map((p, i) => kante(p, g[(i + 1) % g.length])).join(',')}))`);
      const bound = e(`FACE_OUTER_BOUND('',${loop},.T.)`);
      const plane = e(`PLANE('',${e(`AXIS2_PLACEMENT_3D('',${pt(g[0])},${dir(nrm)},${dir(ref)})`)})`);
      return e(`ADVANCED_FACE('',(${bound}),${plane},.T.)`);
    });
    const shell = e(`CLOSED_SHELL('',(${faces.join(',')}))`);
    solids.push(e(`MANIFOLD_SOLID_BREP(${str(teil.name)},${shell})`));
  }
  const rep = e(`ADVANCED_BREP_SHAPE_REPRESENTATION(${str(titel)},(${origin},${solids.join(',')}),${gc})`);
  e(`SHAPE_DEFINITION_REPRESENTATION(${pds},${rep})`);
  const jetzt = new Date().toISOString().slice(0, 19);
  return ['ISO-10303-21;', 'HEADER;', `FILE_DESCRIPTION((${str(titel)}),'2;1');`,
    `FILE_NAME(${str(titel + '.step')},'${jetzt}',('GMG System'),('GMG System'),'','GMG Konfigurator','');`,
    "FILE_SCHEMA(('AUTOMOTIVE_DESIGN { 1 0 10303 214 1 1 1 1 }'));", 'ENDSEC;', 'DATA;', ...L, 'ENDSEC;', 'END-ISO-10303-21;', ''].join('\n');
}

// ASCII-STL aus denselben Körpern
export function stlDatei(titel, teile) {
  const o = [`solid ${titel.replace(/\s+/g, '_')}`];
  for (const t of teile) for (const f of flaechen(t.koerper)) {
    const tris = dreiecke(t.koerper, f);
    for (const [a, b, c] of tris) {
      const u = [b[0] - a[0], b[1] - a[1], b[2] - a[2]], v = [c[0] - a[0], c[1] - a[1], c[2] - a[2]];
      let n = [u[1] * v[2] - u[2] * v[1], u[2] * v[0] - u[0] * v[2], u[0] * v[1] - u[1] * v[0]]; const l = Math.hypot(...n) || 1; n = n.map((x) => x / l);
      o.push(`facet normal ${n.join(' ')}`, 'outer loop', ...[a, b, c].map((p) => `vertex ${p.join(' ')}`), 'endloop', 'endfacet');
    }
  }
  o.push(`endsolid ${titel.replace(/\s+/g, '_')}`);
  return o.join('\n');
}

// Dreiecke einer ebenen Fläche (Ohrenschneiden, auch für nicht konvexe Profile)
export function dreiecke(k, f) {
  if (f.length === 3) return [f];
  if (f.length === 4) return [[f[0], f[1], f[2]], [f[0], f[2], f[3]]];
  // in die Ebene projizieren: größte Normalenkomponente weglassen
  let n = [0, 0, 0];
  for (let i = 0; i < f.length; i++) { const a = f[i], b = f[(i + 1) % f.length]; n[0] += (a[1] - b[1]) * (a[2] + b[2]); n[1] += (a[2] - b[2]) * (a[0] + b[0]); n[2] += (a[0] - b[0]) * (a[1] + b[1]); }
  const ax = Math.abs(n[0]) > Math.abs(n[1]) ? (Math.abs(n[0]) > Math.abs(n[2]) ? 0 : 2) : (Math.abs(n[1]) > Math.abs(n[2]) ? 1 : 2);
  const [i0, i1] = [[1, 2], [2, 0], [0, 1]][ax], s = Math.sign(n[ax]) || 1;
  const P = f.map((p) => [p[i0], p[i1]]);
  const area2 = (a, b, c) => ((b[0] - a[0]) * (c[1] - a[1]) - (b[1] - a[1]) * (c[0] - a[0])) * s;
  const idx = f.map((_, i) => i), out = [];
  let guard = 0;
  while (idx.length > 3 && guard++ < 10000) {
    let cut = false;
    for (let i = 0; i < idx.length; i++) {
      const a = idx[(i + idx.length - 1) % idx.length], b = idx[i], c = idx[(i + 1) % idx.length];
      if (area2(P[a], P[b], P[c]) <= 1e-9) continue;
      let leer = true;
      for (const j of idx) {
        if (j === a || j === b || j === c) continue;
        if (area2(P[a], P[b], P[j]) >= 0 && area2(P[b], P[c], P[j]) >= 0 && area2(P[c], P[a], P[j]) >= 0) { leer = false; break; }
      }
      if (!leer) continue;
      out.push([f[a], f[b], f[c]]); idx.splice(i, 1); cut = true; break;
    }
    if (!cut) break;
  }
  if (idx.length === 3) out.push(idx.map((i) => f[i]));
  return out;
}
