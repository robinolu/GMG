"""Info-Fenster aus den Vorlagen übernehmen.

Quelle: quelle/info_texte.json (Texte) und quelle/info_fenster_alle.html (Bilder je Feld).
Ergebnis: data/info_texte.json (Liste wie die Vorlage, Bildpfade auf die Website umgestellt)
und assets/img/info/<id>_1.svg|png, <id>_2.svg|png.
Aufruf: python3 tools/greifberechnung/info.py
"""
import base64, json, re
from pathlib import Path

ROOT = Path(__file__).resolve().parents[2]
Q = Path(__file__).resolve().parent / 'quelle'
OUT = ROOT / 'assets/img/info'

html = (Q / 'info_fenster_alle.html').read_text(encoding='utf-8')
i = html.index('const F=') + len('const F=')
karten, _ = json.JSONDecoder().raw_decode(html[i:])
bilder = {k['id']: (k['a'], k['b']) for k in karten}
texte = json.loads((Q / 'info_texte.json').read_text(encoding='utf-8'))

OUT.mkdir(parents=True, exist_ok=True)
for alt in OUT.iterdir():
    alt.unlink()

def doppelte_attribute_entfernen(svg):
    """Inline im HTML gilt bei doppelten Attributen das erste; als eigene SVG-Datei wäre es ungültig."""
    def tag(m):
        gesehen, teile = set(), []
        for a in re.finditer(r'([\w:-]+)="[^"]*"', m.group(2)):
            if a.group(1) not in gesehen:
                gesehen.add(a.group(1)); teile.append(a.group(0))
        return '<' + m.group(1) + (' ' + ' '.join(teile) if teile else '') + m.group(3) + '>'
    return re.sub(r'<([\w:-]+)((?:\s+[\w:-]+="[^"]*")*)\s*(/?)>', tag, svg)

def speichern(id_, nr, frag):
    m = re.search(r'src="data:image/png;base64,([^"]+)"', frag)
    if m:
        name = f'{id_}_{nr}.png'
        (OUT / name).write_bytes(base64.b64decode(m.group(1)))
    else:
        name = f'{id_}_{nr}.svg'
        (OUT / name).write_text(doppelte_attribute_entfernen(frag.strip()), encoding='utf-8')
    return 'assets/img/info/' + name

for t in texte:
    a, b = bilder[t['id']]
    t['bild_links'] = speichern(t['id'], 1, a)
    t['bild_rechts'] = speichern(t['id'], 2, b)

(ROOT / 'data/info_texte.json').write_text(json.dumps(texte, ensure_ascii=False, indent=1), encoding='utf-8')
print(len(texte), 'Info-Fenster,', len(list(OUT.iterdir())), 'Bilder')
