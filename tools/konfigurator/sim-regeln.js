// Greifer-Simulator: Kennzahlen des Ablaufs (Taktzeit, Teile pro Stunde) aus Gerät, Geschwindigkeit,
// Hubhöhe und Drehung. Bewusst keine Bewertung, ob ein Greifer ein Teil halten kann.

// Handhabungsgeräte: Grundtakt in s für einen Greifzyklus bei 100 % Geschwindigkeit
export const GERAETE = {
  roboter6: { name: '6-Achs-Industrieroboter', takt: 4.2 },
  linear: { name: '6-Achs-Roboter auf Linearachse', takt: 5.4 },
  delta: { name: 'Delta-Roboter', takt: 0.7 },
  portal: { name: 'Linearportal', takt: 3.6 },
};

export function kennzahlen(s2) {
  const d = GERAETE[s2.modul];
  const speed = Math.max(10, Number(s2.speed) || 70) / 100;
  let takt = d.takt * Math.pow(1 / speed, 0.8) + (Number(s2.hub) || 0.3) * 0.8;
  if (Number(s2.dreh)) takt += 0.3;
  takt = Math.max(0.4, takt);
  return { takt, stunde: 3600 / takt };
}
