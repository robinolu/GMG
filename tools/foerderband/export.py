"""Gurtband aus Belt1-3.STEP (SolidWorks) für den Simulator aufbereiten.

Das STEP enthält nur den umlaufenden Gurt (ein Körper): Länge 1465 mm, Breite 495 mm, Trommeln Ø 95 mm.
Koordinaten danach: mm, Y nach oben, Förderrichtung +X, Mitte der Trommelachsen bei x = ±A/2, y = 0, z = 0.
Gestell, Beine und Antrieb baut simulator.js nach den Konstruktionsbildern dazu.
Tessellierung wie tools/pinza/lesen.js, aber mit angularDeflection 0.12 (runde Trommeln).
Aufruf: python3 tools/foerderband/export.py <belt.json> data/3d/foerderband.json
"""
import json, sys
import numpy as np

m = json.load(open(sys.argv[1]))[0]
p = np.array(m['p']).reshape(-1, 3)
mn, mx = p.min(0), p.max(0)
R = (mx[1] - mn[1]) / 2                       # Trommelradius inkl. Gurt
cy = (mx[1] + mn[1]) / 2
xa, xb = mn[0] + R, mx[0] - R                 # Trommelachsen
p[:, 0] -= (xa + xb) / 2
p[:, 1] -= cy
p[:, 2] -= (mx[2] + mn[2]) / 2
out = {'achsabstand': round(xb - xa, 1), 'radius': round(R, 2), 'breite': round(mx[2] - mn[2], 1),
       'v': np.round(p, 2).ravel().tolist(), 'i': m['i']}
json.dump(out, open(sys.argv[2], 'w'), separators=(',', ':'))
print('Achsabstand', out['achsabstand'], 'Radius', out['radius'], 'Breite', out['breite'], 'Punkte', len(p))
