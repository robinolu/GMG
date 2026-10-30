"""Tentra T3: Bewegung je Bauteil aus den beiden STEP-Stellungen OPEN und GRASP berechnen.

Eingabe: die mit occt-import-js gelesenen Netze beider Stellungen (JSON, siehe lesen.js).
Ausgabe: data/3d/tentra-t3.json – Netze in OPEN-Lage und je bewegtem Teil die Bewegung als
Kette: Jedes Wirbelglied dreht relativ zu seinem Vorgänger um ein Gelenk (Drehpunkt, Quaternion,
Restverschiebung). So bleiben die Finger auch in Zwischenstellungen geschlossen. Polster hängen
an ihrem Wirbel. Sehnen (in beiden Stellungen verschiedene Teile) und das Demo-Werkstück entfallen.
"""
import json, sys
import numpy as np

def kabsch(a, b):
    ca, cb = a.mean(0), b.mean(0)
    h = (a - ca).T @ (b - cb)
    u, _, vt = np.linalg.svd(h)
    d = np.sign(np.linalg.det(vt.T @ u.T))
    r = vt.T @ np.diag([1, 1, d]) @ u.T
    return r, cb - r @ ca

def quat(r):
    w = np.sqrt(max(0, 1 + r[0, 0] + r[1, 1] + r[2, 2])) / 2
    x = np.copysign(np.sqrt(max(0, 1 + r[0, 0] - r[1, 1] - r[2, 2])) / 2, r[2, 1] - r[1, 2])
    y = np.copysign(np.sqrt(max(0, 1 - r[0, 0] + r[1, 1] - r[2, 2])) / 2, r[0, 2] - r[2, 0])
    z = np.copysign(np.sqrt(max(0, 1 - r[0, 0] - r[1, 1] + r[2, 2])) / 2, r[1, 0] - r[0, 1])
    return [float(x), float(y), float(z), float(w)]

op, gr, out = json.load(open(sys.argv[1])), json.load(open(sys.argv[2])), sys.argv[3]
skip = ('Return_spine', 'Pull_tendon', 'Demo_workpiece')
gr_by = {}
for m in gr:
    gr_by.setdefault(m['name'], []).append(m)
def mat(r, t):
    m = np.eye(4); m[:3, :3] = r; m[:3, 3] = t; return m

parts, used, G = [], {}, []   # G: GRASP-Lage je Teil (4×4), Einheitsmatrix für ruhende Teile
for m in op:
    if any(k in m['name'] for k in skip):
        continue
    p = np.array(m['p']).reshape(-1, 3)
    cand = [g for g in gr_by.get(m['name'], []) if len(g['p']) == len(m['p']) and id(g) not in used]
    g4 = np.eye(4)
    if cand:   # baugleiche Teile (z. B. Wirbel der drei Finger) passen alle exakt – daher das nächstgelegene nehmen
        best = None
        for g in cand:
            q = np.array(g['p']).reshape(-1, 3)
            r, tr = kabsch(p, q)
            err = np.abs((p @ r.T + tr) - q).max()
            dist = np.linalg.norm(q.mean(0) - p.mean(0))
            key = (round(err, 3), dist)
            if best is None or key < best[0]:
                best = (key, g, r, tr)
        _, g, r, tr = best
        used[id(g)] = True
        if np.abs(r - np.eye(3)).max() > 1e-4 or np.abs(tr).max() > 1e-3:
            g4 = mat(r, tr)
    parts.append({'name': m['name'], 'p': np.round(p, 2).ravel().tolist(), 'i': m['i']})
    G.append(g4)

# Kette: Wirbel 01 hängt am Gehäuse, Wirbel n an Wirbel n-1, Polster am letzten Wirbel davor
parent, last_vert = [-1] * len(parts), None
for k, pt in enumerate(parts):
    if 'Vertebra_01' in pt['name']:
        last_vert = None
    if 'Vertebra' in pt['name']:
        parent[k] = last_vert if last_vert is not None else -1
        last_vert = k
    elif 'Contact_pad' in pt['name']:
        parent[k] = last_vert if last_vert is not None else -1
moving = 0
for k, pt in enumerate(parts):
    if np.allclose(G[k], np.eye(4)):
        continue
    pg = G[parent[k]] if parent[k] >= 0 else np.eye(4)
    x = np.linalg.inv(pg) @ G[k]                       # Bewegung relativ zum Vorgänger
    r, d = x[:3, :3], x[:3, 3]
    piv = np.linalg.lstsq(r - np.eye(3), -d, rcond=None)[0]   # Gelenkpunkt (Drehachse)
    rest = r @ piv + d - piv                           # Verschiebung entlang der Achse
    pt['bewegung'] = {'parent': parent[k], 'pivot': np.round(piv, 4).tolist(), 'q': quat(r), 'rest': np.round(rest, 4).tolist()}
    moving += 1
print('Teile', len(parts), 'davon bewegt', moving)
json.dump({'parts': parts}, open(out, 'w'), separators=(',', ':'))
