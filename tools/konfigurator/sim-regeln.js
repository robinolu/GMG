// Greifer-Simulator: Bewertung nach einfachen Regeln (keine Physik) und Kennzahlen.
// Alle Grenzwerte an einer Stelle, damit sie leicht angepasst werden können.

// Tragkraft der Testgreifer in kg (Schätzwerte, bis echte GMG-Daten vorliegen)
export const GREIFER = {
  capit: { last: 2, weich: false },
  tentra: { last: 0.5, weich: true },    // weiche Finger: für empfindliche Produkte geeignet
  pinza: { last: 2.5, weich: false },
};

// Handhabungsgeräte: Traglast (kg), Grundtakt (s für einen Greifzyklus bei 100 %), Arbeitsraum (mm, Abstand Aufnahme–Ablage)
export const GERAETE = {
  roboter6: { name: '6-Achs-Industrieroboter', last: 60, takt: 4.2, weg: 3200 },
  delta: { name: 'Delta-Roboter', last: 3, takt: 0.7, weg: 1300 },
  portal: { name: 'Linearportal', last: 50, takt: 3.6, weg: 4000 },
  cobot: { name: 'Cobot', last: 10, takt: 6.0, weg: 2000 },
};

const fmt = (v, d = 0) => v.toLocaleString('de-DE', { maximumFractionDigits: d, minimumFractionDigits: d });

// c: { greifer: {id, code, range}, produkt: {name, kg, griff, innen, weich}, s1, s2, s3, abstand }
export function bewerten(c) {
  const rot = [], gelb = [];
  const g = GREIFER[c.greifer.id] || { last: 1, weich: false };
  const d = GERAETE[c.s2.modul];
  const p = c.produkt;
  const r = c.greifer.range;

  // Greifweite: außen über die Greifbreite, innen über das Innenmaß (falls das Produkt eines hat)
  const aussen = r.aussen && p.griff >= r.aussen[0] && p.griff <= r.aussen[1];
  const innen = r.innen && p.innen && p.innen >= r.innen[0] && p.innen <= r.innen[1];
  if (!aussen && !innen) {
    rot.push(`Greifweite: ${c.greifer.code} greift ${fmt(r.aussen[0])}–${fmt(r.aussen[1])} mm, das Produkt ist ${fmt(p.griff)} mm breit` +
      (p.innen ? ` (innen ${fmt(p.innen)} mm)` : '') + '.');
  }
  if (p.kg > g.last) rot.push(`Gewicht: ${fmt(p.kg, 1)} kg ist zu schwer für ${c.greifer.code} (ca. ${fmt(g.last, 1)} kg).`);
  else if (p.kg > g.last * 0.8) gelb.push(`Gewicht nahe an der Grenze des Greifers (${fmt(g.last, 1)} kg).`);
  const teile = Number(c.s2.teile) || 1;
  if (d && p.kg * teile > d.last) rot.push(`${d.name} trägt höchstens ${fmt(d.last)} kg.`);
  else if (d && p.kg * teile > d.last * 0.8) gelb.push(`${d.name} arbeitet nahe an seiner Traglast.`);

  if (p.weich && !g.weich && Number(c.s2.speed) > 70) gelb.push('Empfindliches Produkt bei hoher Geschwindigkeit: Druckstellen möglich.');
  if (p.weich && !g.weich) gelb.push('Für empfindliche Produkte sind weiche Finger oder Polster ratsam.');
  if (c.s1.lage === 'chaotisch' && c.s1.erkennung !== 'kamera3d') gelb.push('Chaotische Lage braucht eine 3D-Kamera zur Erkennung.');
  if (c.s2.modul === 'delta' && c.abstand > GERAETE.delta.weg) gelb.push('Der Delta-Roboter hat einen kleinen Arbeitsraum. Stationen näher zusammen planen.');
  if (c.s2.modul === 'cobot' && c.s2.zaun === 'nein' && Number(c.s2.speed) > 60) gelb.push('Cobot ohne Schutzzaun: Geschwindigkeit begrenzen (ca. 60 %).');

  // Kennzahlen
  const speed = Math.max(10, Number(c.s2.speed) || 50) / 100;
  let takt = d ? d.takt * Math.pow(1 / speed, 0.8) : 0;
  takt += (Number(c.s2.hub) || 0.3) * 0.8;                       // Hubhöhe in m
  if (c.s2.ablauf === 'drehen') takt += 0.3;
  takt = Math.max(0.4, takt);
  const geraet = 3600 / takt * teile;
  const zufuhr = (Number(c.s1.takt) || 10) * 60;
  const stunde = Math.min(geraet, zufuhr);

  let tipp;
  if (zufuhr < geraet * 0.95) tipp = `Die Zuführung (${fmt(Number(c.s1.takt))} Teile pro Minute) begrenzt die Leistung. Das Gerät schafft bis ${fmt(geraet)} Teile pro Stunde.`;
  else if (teile === 1) tipp = 'Mit einem Mehrfachgreifer (2 Teile pro Griff) ist bis zur doppelten Leistung möglich.';
  else tipp = `Mehrfachgreifer: ${teile} Teile pro Griff.`;

  const ampel = rot.length ? 'rot' : gelb.length ? 'gelb' : 'gruen';
  return { ampel, gruende: rot.length ? rot : gelb, takt, stunde, tipp };
}
