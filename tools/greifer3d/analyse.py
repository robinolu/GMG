"""Zerlegt Capit.stl in Baugruppen und prüft die Getriebe-Kinematik (Ebene X/Z, Drehachsen ∥ Y)."""
import sys, json, math
import numpy as np, trimesh

m = trimesh.load(sys.argv[1] if len(sys.argv) > 1 else "", force="mesh")
parts = m.split(only_watertight=False)
P = {  # Gelenkpunkte (x, z), aus den Bolzen gemessen
 'P1a': (44.75, 43.2), 'P1b': (44.75, 55.65),   # Kurbel-Drehpunkt am Gehäuse
 'Ca': (46.4, 46.25), 'Cb': (46.4, 52.6),       # Kurbel <- Koppel
 'J1a': (48.65, 38.8), 'J1b': (48.65, 60.05),   # Kurbel -> Backe
 'P2a': (46.5, 45.1), 'P2b': (46.5, 53.7),      # Lenker-Drehpunkt am Gehäuse
 'J2a': (49.6, 41.2), 'J2b': (49.6, 57.65),     # Lenker -> Backe
 'Sa': (44.4, 46.4), 'Sb': (44.4, 52.4),        # Schieber-Bolzen
}
def center(p):
    c = p.bounds.mean(axis=0); return c[0], c[2]
def near(c, key, tol=0.5):
    return math.dist(c, P[key]) < tol
groups = {k: [] for k in ['gehaeuse', 'schieber', 'kurbel_a', 'kurbel_b', 'lenker_a', 'lenker_b', 'koppel_a', 'koppel_b', 'backe_a', 'backe_b']}
for p in parts:
    b = p.bounds; c = center(p); n = len(p.faces)
    sx, sz = b[1][0] - b[0][0], b[1][2] - b[0][2]
    if n == 1220: g = 'gehaeuse'
    elif n == 496: g = 'backe_a' if c[1] < 49.4 else 'backe_b'
    elif n == 326 or b[0][0] < 40 or (sx < 0.6 and sz < 2.5 and 45 < c[0] < 46): g = 'schieber'
    elif n == 268: g = 'kurbel_a' if c[1] < 49.4 else 'kurbel_b'
    elif n == 132: g = 'koppel_a' if c[1] < 49.4 else 'koppel_b'
    elif n == 124: g = 'lenker_a' if c[1] < 49.4 else 'lenker_b'
    else:  # Bolzen und Schraubenköpfe: dem Gelenk zuordnen, an dem sie sitzen
        g = None
        for key, grp in [('Sa', 'schieber'), ('Sb', 'schieber'), ('Ca', 'kurbel_a'), ('Cb', 'kurbel_b'),
                         ('J1a', 'backe_a'), ('J1b', 'backe_b'), ('J2a', 'backe_a'), ('J2b', 'backe_b'),
                         ('P1a', 'gehaeuse'), ('P1b', 'gehaeuse'), ('P2a', 'gehaeuse'), ('P2b', 'gehaeuse')]:
            if near(c, key, 0.6): g = grp; break
        if g is None: g = 'gehaeuse'; print('unzugeordnet -> Gehäuse', n, np.round(c, 2))
    groups[g].append(p)
for k, v in groups.items(): print(k, len(v), sum(len(p.faces) for p in v))

# Kinematik: Kurbel dreht um P1 um phi; Backe hängt an J1 (Kurbel) und J2 (Lenker um P2).
def rot(p, c, a):
    x, z = p[0] - c[0], p[1] - c[1]
    return (c[0] + x * math.cos(a) - z * math.sin(a), c[1] + x * math.sin(a) + z * math.cos(a))
def circ(c0, r0, c1, r1, ref):
    d = math.dist(c0, c1); a = (r0**2 - r1**2 + d**2) / (2 * d); h = math.sqrt(max(0, r0**2 - a**2))
    mx, mz = c0[0] + a * (c1[0] - c0[0]) / d, c0[1] + a * (c1[1] - c0[1]) / d
    s = [(mx + h * (c1[1] - c0[1]) / d, mz - h * (c1[0] - c0[0]) / d), (mx - h * (c1[1] - c0[1]) / d, mz + h * (c1[0] - c0[0]) / d)]
    return min(s, key=lambda q: math.dist(q, ref))
inner = max(groups['backe_a'], key=lambda p: len(p.faces)).vertices[:, [0, 2]]
r2, cj = math.dist(P['P2a'], P['J2a']), math.dist(P['J1a'], P['J2a'])
for deg in range(-30, 31, 5):
    a = math.radians(deg)
    J1 = rot(P['J1a'], P['P1a'], a); J2 = circ(P['P2a'], r2, J1, cj, P['J2a'])
    # Backe: Starrkörper (J1a,J2a) -> (J1,J2)
    b0 = math.atan2(P['J2a'][1] - P['J1a'][1], P['J2a'][0] - P['J1a'][0]); b1 = math.atan2(J2[1] - J1[1], J2[0] - J1[0])
    db = b1 - b0
    v = inner - P['J1a']; zmax = (J1[1] + v[:, 0] * math.sin(db) + v[:, 1] * math.cos(db)).max()
    print(f'phi {deg:4d}°  Backe innen z_max {zmax:6.2f}  Backenwinkel {math.degrees(db):6.2f}°')
