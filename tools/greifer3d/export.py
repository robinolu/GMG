"""Exportiert die Baugruppen von Capit.stl als kompakte JSON-Daten für three.js."""
import sys, json, runpy, io, contextlib
import numpy as np
with contextlib.redirect_stdout(io.StringIO()):
    ns = runpy.run_path(sys.argv[3], run_name='lib')   # analyse.py: liefert groups + P
groups, P = ns['groups'], ns['P']
out = {'pivots': P, 'groups': {}}
for name, parts in groups.items():
    verts, idx, off = [], [], 0
    for p in parts:
        verts.append(np.round(p.vertices, 3)); idx.append(p.faces + off); off += len(p.vertices)
    v = np.vstack(verts); f = np.vstack(idx)
    out['groups'][name] = {'v': v.ravel().tolist(), 'i': f.ravel().astype(int).tolist()}
json.dump(out, open(sys.argv[2], 'w'), separators=(',', ':'))
print('ok', sum(len(g['i']) // 3 for g in out['groups'].values()), 'Dreiecke')
