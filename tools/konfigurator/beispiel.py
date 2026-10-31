"""Beispielteil für den Konfigurator aus einer STEP-Datei (vorher mit tools/pinza/lesen.js zerlegt).

Aufruf: python3 tools/konfigurator/beispiel.py <teil.json> <Name> <achse> data/3d/beispiele/<name>.json
<achse>: x, y oder z – diese Achse des Teils wird senkrecht gestellt (bei der Felge x: liegt flach).
"""
import json, sys
import numpy as np

src, name, axis, dst = sys.argv[1:5]
ms = json.load(open(src))
v, idx, n = [], [], 0
for m in ms:
    p = np.array(m['p']).reshape(-1, 3)
    if axis == 'x':
        p = np.stack([-p[:, 1], p[:, 0], p[:, 2]], 1)
    elif axis == 'z':
        p = np.stack([p[:, 0], p[:, 2], -p[:, 1]], 1)
    v.append(p); idx.extend((np.array(m['i']) + n).tolist()); n += len(p)
v = np.concatenate(v)
json.dump({'name': name, 'v': np.round(v, 1).ravel().tolist(), 'i': idx}, open(dst, 'w'), separators=(',', ':'))
print(name, len(idx) // 3, 'Dreiecke, Maße', (v.max(0) - v.min(0)).round(1))
