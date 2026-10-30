"""ABB IRB 120 (STEP von ABB) und Kurvenrolle SKF 361204 R für die Startseiten-Szene aufbereiten.

Roboter: Teile nach Achsen ordnen (Basis, Glied 1–5; Achse 6 bleibt fest am Glied 5).
Koordinaten wie im STEP (mm, Y nach oben, Arm zeigt in −X):
  Achse 1 senkrecht durch (0, 0), Achse 2 bei y = 290, Achse 3 bei y = 560 (beide ∥ Z),
  Achse 4 entlang X auf y = 630, Achse 5 ∥ Z bei x = −302, Flansch bei x = −374.
Kleinteile (Schrauben < 12 mm) entfallen.
Aufruf (nach tools/pinza/lesen.js für beide STEP-Dateien):
  python3 tools/roboter/export.py <abb.json> <lager.json> data/3d/roboter-szene.json
"""
import json, re, sys
import numpy as np

def link(name):
    m = re.search(r'_(\d+)$', name or '')
    n = int(m.group(1)) if m else 0
    if n == 0 or n >= 73:          # Sockel, Anschlusskasten, Stecker
        return 'basis'
    if n == 72:
        return 'glied1'
    if 62 <= n <= 71:
        return 'glied2'
    if n in (47, 48, 49) or 50 <= n <= 61:
        return 'glied3'
    if n in (1, 2, 3, 4, 6):
        return 'glied5'
    return 'glied4'

def pack(groups):
    return {k: {'v': np.round(np.concatenate(g['v']), 1).ravel().tolist() if g['v'] else [],
                'i': np.concatenate(g['i']).tolist() if g['i'] else []} for k, g in groups.items()}

def add(G, p, i):
    G['i'].append(np.array(i) + G['n']); G['v'].append(p); G['n'] += len(p)

abb = json.load(open(sys.argv[1]))
groups = {k: {'v': [], 'i': [], 'n': 0} for k in ['basis', 'glied1', 'glied2', 'glied3', 'glied4', 'glied5']}
for m in abb:
    p = np.array(m['p']).reshape(-1, 3)
    mn, mx = p.min(0), p.max(0)
    if np.linalg.norm(mx - mn) < 12:
        continue
    add(groups[link(m['name'])], p, m['i'])

# Kurvenrolle: Achse entlang X (0…14 mm), Außenring Ø52 → Achse nach oben (Y), Mitte in den Ursprung
lager = json.load(open(sys.argv[2]))
names = ['aussenring', 'innenring', 'dichtung', 'dichtung', 'kaefig']
lg = {k: {'v': [], 'i': [], 'n': 0} for k in ['aussenring', 'innenring', 'dichtung', 'kaefig']}
for k, m in zip(names, lager):
    p = np.array(m['p']).reshape(-1, 3)
    p = np.stack([p[:, 1], p[:, 0] - 7, p[:, 2]], 1)   # x→y, gespiegelt (Dreiecksdrehsinn tauschen)
    i = np.array(m['i']).reshape(-1, 3)[:, ::-1].ravel()
    add(lg[k], p, i)

out = {'roboter': pack(groups), 'lager': {k: {'v': np.round(np.concatenate(g['v']), 2).ravel().tolist(), 'i': np.concatenate(g['i']).tolist()} for k, g in lg.items()}}
json.dump(out, open(sys.argv[3], 'w'), separators=(',', ':'))
for k, v in {**out['roboter'], **out['lager']}.items():
    print(f'{k:10} {len(v["i"]) // 3:6} Dreiecke')
