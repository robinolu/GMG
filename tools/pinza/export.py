"""Adaptiver Parallelgreifer („pinza adattativa“, Bauart Robotiq 2F-85): Teile nach Getriebeglied ordnen.

Je Seite ein Parallelogramm: innerer Hebel (SOLID) dreht um P_A, äußerer Hebel (finger1/finger2 +
Schneckenrad) um P_B; das Fingerglied (finger4 + Fingerspitze) wird dabei parallel verschoben.
Gelenkpunkte aus den Lagern im Modell (mm, Ebene X/Y, Drehachsen ∥ Z). Kugellager entfallen (verdeckt), ebenso die frei stehenden Schrauben der Fingerspitzen.
Aufruf: python3 tools/pinza/export.py <pinza.json> data/3d/pinza-adattiva.json
"""
import json, sys
import numpy as np

PIV = {  # rechte Seite; linke Seite gespiegelt (x → −x)
    'A': (12.7, 61.3), 'B': (30.5, 54.8), 'A2': (33.0, 114.7), 'B2': (50.9, 108.2),
}
ms = json.load(open(sys.argv[1]))
groups = {k: {'v': [], 'i': [], 'n': 0} for k in ['gehaeuse', 'hebel_a_r', 'hebel_b_r', 'finger_r', 'hebel_a_l', 'hebel_b_l', 'finger_l']}

def near(c, p, side, tol):
    return np.hypot(c[0] - side * p[0], c[1] - p[1]) < tol

for m in ms:
    name = m['name'] or ''
    if '618' in name:          # Kugellager: verdeckt, viele Dreiecke
        continue
    p = np.array(m['p']).reshape(-1, 3)
    c = p.mean(0)
    side = 1 if c[0] > 0 else -1
    # Schrauben M4×20 der Fingerspitzen samt Muttern: im vereinfachten Modell stehen sie frei vor den Fingern
    if 'M4 x 20' in name or near(c, (39.5, 108.6), side, 4) and 'M4' in name:
        continue
    sfx = '_r' if side > 0 else '_l'
    if name == 'SOLID':
        g = 'hebel_a' + sfx
    elif 'finger2' in name or 'Finger1' in name or 'Ingranaggio' in name:
        g = 'hebel_b' + sfx
    elif 'finger4' in name or 'fingertips' in name:
        g = 'finger' + sfx
    elif near(c, PIV['A2'], side, 5) or near(c, PIV['B2'], side, 5) or near(c, (39.5, 117), side, 5) or near(c, (39.5, 108.6), side, 4):
        g = 'finger' + sfx      # Bolzen, Scheiben, Muttern am Fingerglied
    elif near(c, (51.6, 63.9), side, 4) or near(c, (61.4, 61.8), side, 4):
        g = 'hebel_b' + sfx     # Schrauben, die finger1 und finger2 verbinden
    else:
        g = 'gehaeuse'
    G = groups[g]
    G['v'].extend(np.round(p, 2).ravel().tolist())
    G['i'].extend((np.array(m['i']) + G['n']).tolist())
    G['n'] += len(p)
out = {'pivots': PIV, 'groups': {k: {'v': v['v'], 'i': v['i']} for k, v in groups.items()}}
json.dump(out, open(sys.argv[2], 'w'), separators=(',', ':'))
for k, v in groups.items():
    print(f'{k:10} {len(v["i"]) // 3:6} Dreiecke')
