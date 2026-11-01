"""Info-Fenster der Greifberechnung: Texte (data/info_texte.json) und Skizzen (assets/img/info/<feld>-1.svg, -2.svg).
Regeln aus dem Konzept: Teil grau, Backe blau, gemeinter Wert orange, Sperrzone rot schraffiert, gut grün, Nummern als
orange Kreise mit Legende unter dem Text. Texte und Bilder lassen sich ohne Programmänderung tauschen und übersetzen.
Aufruf: python3 tools/greifberechnung/info.py
"""
import json, pathlib
ROOT = pathlib.Path(__file__).resolve().parent.parent.parent
OUT = ROOT / 'assets' / 'img' / 'info'
GR, GRS, BL, OR, RT, GN, INK = '#c9ced4', '#6b7480', '#0061aa', '#e07b1f', '#c8372d', '#2e9d5b', '#13171d'

def svg(body):
    return ('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 240 170" font-family="system-ui, sans-serif">'
            '<defs><pattern id="sch" width="6" height="6" patternUnits="userSpaceOnUse" patternTransform="rotate(45)">'
            f'<rect width="6" height="6" fill="#fbe4e2"/><line x1="0" y1="0" x2="0" y2="6" stroke="{RT}" stroke-width="2"/></pattern>'
            f'<marker id="pf" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M0 0 10 5 0 10z" fill="{OR}"/></marker>'
            f'<marker id="pk" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M0 0 10 5 0 10z" fill="{INK}"/></marker></defs>'
            f'<rect width="240" height="170" fill="#f6f8fa"/>{body}</svg>')
def nr(x, y, n): return f'<circle cx="{x}" cy="{y}" r="9" fill="{OR}"/><text x="{x}" y="{y+4}" text-anchor="middle" font-size="11" font-weight="700" fill="#fff">{n}</text>'
def teil(x, y, w, h, rx=4): return f'<rect x="{x}" y="{y}" width="{w}" height="{h}" rx="{rx}" fill="{GR}" stroke="{GRS}" stroke-width="1.5"/>'
def kreis(cx, cy, r): return f'<circle cx="{cx}" cy="{cy}" r="{r}" fill="{GR}" stroke="{GRS}" stroke-width="1.5"/>'
def backe(x, y, w, h, fill=BL, op=1): return f'<rect x="{x}" y="{y}" width="{w}" height="{h}" rx="2" fill="{fill}" opacity="{op}"/>'
def pfeil(x1, y1, x2, y2, c=OR, w=2.5): return f'<line x1="{x1}" y1="{y1}" x2="{x2}" y2="{y2}" stroke="{c}" stroke-width="{w}" marker-end="url(#{"pf" if c == OR else "pk"})"/>'
def mass(x1, y1, x2, y2): return f'<line x1="{x1}" y1="{y1}" x2="{x2}" y2="{y2}" stroke="{OR}" stroke-width="2" marker-start="url(#pf)" marker-end="url(#pf)"/>'
def txt(x, y, t, c=INK, s=11, a='middle', w=600): return f'<text x="{x}" y="{y}" text-anchor="{a}" font-size="{s}" font-weight="{w}" fill="{c}">{t}</text>'
def zone(x, y, w, h): return f'<rect x="{x}" y="{y}" width="{w}" height="{h}" fill="{OR}" fill-opacity=".15" stroke="{OR}" stroke-width="1.6" stroke-dasharray="5 3"/>'
def sperr(x, y, w, h): return f'<rect x="{x}" y="{y}" width="{w}" height="{h}" fill="url(#sch)" stroke="{RT}" stroke-width="1.5"/>'
def boden(): return f'<line x1="20" y1="150" x2="220" y2="150" stroke="{GRS}" stroke-width="1.5"/>'
def klemme(cx, y, w, h, bh=26, gut=False):
    return (teil(cx - w / 2, y, w, h) + backe(cx - w / 2 - 14, y + h / 2 - bh / 2, 12, bh) + backe(cx + w / 2 + 2, y + h / 2 - bh / 2, 12, bh)
            + (f'<rect x="{cx - w / 2 - 3}" y="{y + h / 2 - bh / 2}" width="3" height="{bh}" fill="{GN}"/><rect x="{cx + w / 2}" y="{y + h / 2 - bh / 2}" width="3" height="{bh}" fill="{GN}"/>' if gut else ''))

# je Feld: (Bild 1, Bild 2) als (Beschriftung, Zeichnung)
B = {}
B['zone_waagerecht'] = [('schmale Zone: wenig Auswahl', boden() + teil(90, 40, 60, 110) + zone(60, 88, 120, 14) + nr(196, 95, 1)),
                        ('breite Zone: mehr Auswahl', boden() + teil(90, 40, 60, 110) + zone(60, 70, 120, 50) + backe(76, 88, 12, 22) + backe(152, 88, 12, 22) + nr(196, 95, 1) + nr(40, 99, 2))]
B['zone_senkrecht'] = [('Zone quer zur Welle', boden() + teil(30, 95, 180, 40, 18) + zone(105, 40, 30, 120) + nr(120, 30, 1)),
                       ('um die Hochachse gedreht', boden() + teil(30, 95, 180, 40, 18) + f'<g transform="rotate(25 120 110)">{zone(105, 40, 30, 120)}</g>' + nr(150, 30, 2))]
B['zonendicke'] = [('dünn: nur so breit wie der Belag', teil(80, 30, 80, 120) + zone(60, 82, 120, 16) + backe(66, 82, 12, 16) + backe(162, 82, 12, 16) + mass(190, 82, 190, 98) + nr(210, 90, 1)),
                   ('dick: Programm wählt die Höhe', teil(80, 30, 80, 120) + zone(60, 55, 120, 70) + backe(66, 80, 12, 22) + backe(162, 80, 12, 22) + mass(190, 55, 190, 125) + nr(210, 90, 1) + nr(40, 91, 2))]
B['sperrzone'] = [('ohne Sperrzone: Greifer am Deckel', teil(85, 50, 70, 100) + teil(100, 30, 40, 20, 2) + backe(84, 30, 12, 20) + backe(144, 30, 12, 20) + nr(170, 40, 1)),
                  ('Deckel gesperrt: tiefer greifen', teil(85, 50, 70, 100) + sperr(100, 30, 40, 20) + klemme(120, 50, 70, 100, 26, True) + nr(170, 40, 1) + nr(185, 100, 2))]
B['produktmaterial'] = [('glatt: wenig Reibung', klemme(120, 45, 80, 90) + txt(120, 95, 'Stahl', INK) + pfeil(120, 140, 120, 160) + nr(30, 30, 1)),
                        ('griffig: mehr Reibung', klemme(120, 45, 80, 90) + txt(120, 95, 'Karton', INK) + f'<g stroke="{GRS}">' + ''.join(f'<line x1="{82+i*8}" y1="47" x2="{78+i*8}" y2="133"/>' for i in range(10)) + '</g>' + nr(30, 30, 2))]
B['masse'] = [('leicht: wenig Kraft', klemme(120, 70, 60, 50) + pfeil(120, 125, 120, 145, INK) + txt(170, 140, '1 kg', OR) + nr(40, 95, 1)),
              ('schwer: mehr Kraft', klemme(120, 40, 100, 100) + pfeil(120, 140, 120, 165, INK, 4) + txt(190, 160, '10 kg', OR) + nr(40, 95, 1))]
B['belastbarkeit'] = [('empfindlich: wenig Druck', kreis(120, 95, 45) + backe(60, 80, 12, 30) + backe(168, 80, 12, 30) + pfeil(40, 95, 58, 95) + pfeil(200, 95, 182, 95) + txt(120, 100, '100 kPa', OR) + nr(30, 70, 1)),
                      ('fest: viel Druck möglich', teil(75, 50, 90, 90) + backe(60, 80, 12, 30) + backe(168, 80, 12, 30) + pfeil(20, 95, 58, 95, OR, 5) + pfeil(220, 95, 182, 95, OR, 5) + txt(120, 100, '2 MPa', OR) + nr(30, 70, 2))]
B['hohl'] = [('massiv: nur Flächenpressung', teil(85, 40, 70, 110) + backe(70, 80, 12, 30) + backe(158, 80, 12, 30) + nr(120, 30, 1)),
             ('hohl: Wand gibt nach', f'<rect x="85" y="40" width="70" height="110" rx="4" fill="none" stroke="{GRS}" stroke-width="5"/>' + backe(72, 80, 12, 30) + backe(156, 80, 12, 30) + mass(100, 160, 92, 160) + nr(120, 30, 2) + txt(140, 164, 'Wand t', OR, 10))]
B['fuellstand'] = [('leer: leicht, aber weich', f'<rect x="85" y="30" width="70" height="120" rx="4" fill="#fff" stroke="{GRS}" stroke-width="3"/>' + nr(120, 20, 1)),
                   ('voll: schwer, verschlossen steif', f'<rect x="85" y="30" width="70" height="120" rx="4" fill="#fff" stroke="{GRS}" stroke-width="3"/><rect x="87" y="48" width="66" height="100" fill="#cfe3f5"/>' + mass(165, 148, 165, 48) + nr(190, 98, 1))]
B['kopfraum'] = [('viel Luft: gibt nach', f'<rect x="85" y="30" width="70" height="120" rx="4" fill="#fff" stroke="{GRS}" stroke-width="3"/><rect x="87" y="80" width="66" height="68" fill="#cfe3f5"/>' + mass(165, 32, 165, 80) + nr(190, 56, 1)),
                 ('wenig Luft: steif', f'<rect x="85" y="30" width="70" height="120" rx="4" fill="#fff" stroke="{GRS}" stroke-width="3"/><rect x="87" y="40" width="66" height="108" fill="#cfe3f5"/>' + mass(165, 32, 165, 40) + nr(190, 36, 1))]
B['verschlossen'] = [('offen: Flüssigkeit weicht aus', f'<rect x="85" y="40" width="70" height="110" rx="4" fill="#fff" stroke="{GRS}" stroke-width="3"/><rect x="87" y="55" width="66" height="93" fill="#cfe3f5"/>' + backe(72, 90, 12, 30) + backe(156, 90, 12, 30) + pfeil(120, 60, 120, 25) + nr(140, 30, 1)),
                     ('verschlossen: Luft stützt', f'<rect x="85" y="40" width="70" height="110" rx="4" fill="#fff" stroke="{GRS}" stroke-width="3"/><rect x="100" y="30" width="40" height="12" fill="{GRS}"/><rect x="87" y="55" width="66" height="93" fill="#cfe3f5"/>' + backe(72, 90, 12, 30) + backe(156, 90, 12, 30) + f'<rect x="87" y="43" width="66" height="12" fill="{GN}" opacity=".35"/>' + nr(120, 20, 2))]
B['eindrueckung'] = [('1 mm: kleine Verformung', f'<path d="M85 40 H155 V80 L151 95 L155 110 V150 H85 V110 L89 95 L85 80Z" fill="{GR}" stroke="{GRS}" stroke-width="1.5"/>' + backe(72, 80, 12, 30) + backe(156, 80, 12, 30) + nr(40, 95, 1)),
                     ('4 mm: deutliche Delle', f'<path d="M85 40 H155 V75 L143 95 L155 115 V150 H85 V115 L97 95 L85 75Z" fill="{GR}" stroke="{GRS}" stroke-width="1.5"/>' + backe(84, 80, 12, 30) + backe(144, 80, 12, 30) + nr(40, 95, 1))]
B['beschleunigung'] = [('sanft: wenig Zusatzkraft', klemme(120, 60, 60, 60) + pfeil(170, 90, 200, 90) + txt(205, 80, 'a', OR) + nr(40, 90, 1)),
                       ('stark: Teil will rutschen', klemme(120, 60, 60, 60) + pfeil(170, 90, 230, 90, OR, 5) + txt(215, 78, 'a', OR) + pfeil(120, 128, 100, 150, INK) + nr(40, 90, 1) + nr(90, 150, 2))]
B['nothalt'] = [('Fahrt: gleichmäßig', klemme(120, 60, 60, 60) + pfeil(40, 90, 70, 90, INK) + nr(120, 140, 1)),
                ('Not-Halt: harter Ruck', klemme(120, 60, 60, 60) + pfeil(170, 90, 230, 90, OR, 5) + txt(200, 78, 'Ruck', OR) + nr(120, 140, 2))]
B['oberflaeche'] = [('trocken: volle Reibung', klemme(120, 45, 80, 90) + nr(30, 30, 1)),
                    ('ölig oder nass: rutscht', klemme(120, 45, 80, 90) + ''.join(f'<circle cx="{82 + (i % 2) * 74}" cy="{60 + i * 12}" r="3" fill="#7fb0d8"/>' for i in range(6)) + pfeil(120, 140, 120, 165) + nr(30, 30, 2))]
B['temp_umgebung'] = [('Raumtemperatur', klemme(120, 60, 60, 60) + txt(120, 40, '20 °C', OR, 14)),
                      ('heiße Halle: Belag altert', klemme(120, 60, 60, 60) + txt(120, 40, '60 °C', OR, 14) + ''.join(f'<path d="M{70+i*30} 150 q5 -10 0 -20 q-5 -10 0 -20" stroke="{OR}" fill="none" stroke-width="2"/>' for i in range(4)) + nr(200, 40, 1))]
B['temp_produkt'] = [('kaltes Teil', klemme(120, 60, 60, 60) + txt(120, 95, '20 °C', INK)),
                     ('heißes Teil: Kontakt wird heiß', klemme(120, 60, 60, 60) + f'<rect x="90" y="60" width="60" height="60" rx="4" fill="{OR}" opacity=".45"/>' + txt(120, 95, '200 °C', INK) + nr(200, 90, 1))]
B['luftfeuchte'] = [('trockene Luft: Karton fest', klemme(120, 50, 80, 80) + txt(120, 95, 'Karton', INK) + txt(120, 30, '40 %', OR, 13)),
                    ('feuchte Luft: Karton weich', f'<path d="M80 50 H160 V85 L152 95 L160 105 V130 H80 V105 L88 95 L80 85Z" fill="{GR}" stroke="{GRS}"/>' + backe(66, 80, 12, 30) + backe(162, 80, 12, 30) + txt(120, 30, '85 %', OR, 13) + nr(40, 95, 1))]
B['backenform'] = [('Flachbacke: Reibung', kreis(120, 95, 40) + backe(66, 75, 12, 40) + backe(162, 75, 12, 40) + nr(120, 30, 1)),
                   ('Prismen- und Konturbacke: Form', kreis(120, 95, 40) + f'<path d="M62 55 L95 95 L62 135 L50 135 L50 55Z" fill="{BL}"/><path d="M178 55 L145 95 L178 135 L190 135 L190 55Z" fill="{BL}"/>' + nr(120, 30, 2))]
B['alpha'] = [('α = 120°: flache Kerbe', kreis(120, 95, 40) + f'<path d="M45 50 L95 95 L45 140Z" fill="{BL}"/>' + nr(30, 95, 1)),
              ('α = 60°: tiefe Kerbe, Keilwirkung', kreis(120, 95, 40) + f'<path d="M40 70 L82 95 L40 120Z" fill="{BL}"/>' + nr(30, 95, 1))]
B['umschliessung'] = [('33 %: wenig umschlossen', kreis(120, 95, 40) + f'<path d="M58 70 A40 40 0 0 0 58 120 H45 V70Z" fill="{BL}"/>' + nr(30, 95, 1)),
                      ('78 %: weit umschlossen', kreis(120, 95, 40) + f'<path d="M100 60 A40 40 0 0 0 100 130 H50 V60Z" fill="{BL}"/><path d="M140 60 A40 40 0 0 1 140 130 H190 V60Z" fill="{BL}"/>' + nr(30, 95, 1))]
B['gamma'] = [('γ klein: wenig Keil', f'<path d="M100 40 H140 L146 150 H94Z" fill="{GR}" stroke="{GRS}"/>' + backe(80, 70, 14, 40) + backe(146, 70, 14, 40) + nr(30, 90, 1)),
              ('γ groß: Kegel trägt mit', f'<path d="M110 40 H130 L170 150 H70Z" fill="{GR}" stroke="{GRS}"/><path d="M78 70 L94 70 L104 110 L88 110Z" fill="{BL}"/><path d="M162 70 L146 70 L136 110 L152 110Z" fill="{BL}"/>' + nr(30, 90, 2))]
B['fingerbelag'] = [('harter Belag: rutscht eher', klemme(120, 50, 70, 80) + nr(40, 90, 1)),
                    ('Gummibelag: haftet', klemme(120, 50, 70, 80, 26, True) + f'<rect x="72" y="77" width="6" height="26" fill="{GN}"/><rect x="162" y="77" width="6" height="26" fill="{GN}"/>' + nr(40, 90, 1))]
B['reibwert'] = [('μ klein: viel Greifkraft nötig', klemme(120, 60, 60, 60) + pfeil(30, 90, 62, 90, OR, 5) + pfeil(210, 90, 178, 90, OR, 5) + nr(120, 140, 1)),
                 ('μ groß: wenig Greifkraft', klemme(120, 60, 60, 60) + pfeil(45, 90, 62, 90) + pfeil(195, 90, 178, 90) + nr(120, 140, 1))]
B['greifkraft'] = [('zu wenig: Teil rutscht', klemme(120, 60, 60, 60) + pfeil(50, 90, 62, 90) + pfeil(190, 90, 178, 90) + pfeil(120, 128, 120, 160, INK) + nr(40, 60, 1)),
                   ('im Fenster: hält, ohne zu drücken', klemme(120, 60, 60, 60, 26, True) + pfeil(35, 90, 62, 90, OR, 4) + pfeil(205, 90, 178, 90, OR, 4) + nr(40, 60, 2))]
B['sicherheit'] = [('S = 1,5: weniger Reserve', f'<rect x="40" y="70" width="120" height="30" fill="{GR}"/><rect x="160" y="70" width="40" height="30" fill="{OR}"/>' + txt(120, 120, 'nötig + 50 %', INK) + nr(220, 85, 1)),
                   ('S = 2: doppelte Kraft', f'<rect x="20" y="70" width="100" height="30" fill="{GR}"/><rect x="120" y="70" width="100" height="30" fill="{OR}"/>' + txt(120, 120, 'nötig + 100 %', INK) + nr(220, 85, 1))]
B['ampel'] = [('Grün und Gelb', ''.join(f'<circle cx="{80 + i * 40}" cy="80" r="16" fill="{c}"/>' for i, c in enumerate([GN, '#e0a21f'])) + nr(80, 120, 1) + nr(120, 120, 2)),
              ('Rot', f'<circle cx="120" cy="80" r="16" fill="{RT}"/>' + nr(120, 120, 3))]

T = {
 'zone_waagerecht': ('Greifzone waagerecht', 'Der Bereich in der Höhe, in dem gegriffen werden darf.',
   'Die Greifzone ist eine Scheibe mit Dicke. Die Finger greifen waagerecht in dieser Höhe. Das Programm prüft alle Höhen und Richtungen in der Zone und wählt die Stelle mit der größten Reserve.',
   ['Greifzone (orange, gestrichelt)', 'vom Programm gewählte Höhe'], 'Eine dickere Zone gibt dem Programm mehr Auswahl.'),
 'zone_senkrecht': ('Greifzone senkrecht', 'Eine senkrechte Scheibe, um die Hochachse drehbar.',
   'Für liegende, runde Teile wie Wellen: Die Finger schließen in der Scheibe quer zur Welle. Die Scheibe lässt sich um die Hochachse drehen, das Programm prüft zusätzlich kleine Winkelschritte.',
   ['senkrechte Zone', 'gedrehte Zone'], 'Den Lagersitz als Sperrzone markieren.'),
 'zonendicke': ('Zonendicke', 'Wie viel Spielraum das Programm in der Zone hat.',
   'Die Mindestdicke ist die Größe des Fingerbelags. Je dicker die Zone, desto mehr Höhen prüft das Programm. Belaggröße bestimmt auch die Kontaktfläche und damit die Flächenpressung.',
   ['Dicke der Zone', 'gewählte Höhe'], 'Mit Umschalt + Pfeiltaste ändern.'),
 'sperrzone': ('Sperrzone und Bereiche', 'Stellen, an denen nicht oder nur vorsichtig gegriffen werden darf.',
   'Eine Sperrzone (rot) schließt eine Stelle aus, etwa Deckel, Ausgießer, Etikett oder Dichtfläche. Ein Bereich mit eigener Belastbarkeit legt fest, wie fest dort gegriffen werden darf. Kundenangaben haben immer Vorrang.',
   ['gesperrter Deckel', 'gewählte Stelle außerhalb der Sperrzone'], 'Auf das Teil klicken, Radius vorher einstellen.'),
 'produktmaterial': ('Produktmaterial', 'Aus welchem Werkstoff die Oberfläche des Teils ist.',
   'Das Material bestimmt zusammen mit dem Fingerbelag den Reibwert μ. Gerechnet wird mit dem Tabellenwert mal 0,7. Fehlt der Wert für die Paarung, nimmt das Programm den kleinsten bekannten Wert der Werkstoffgruppe und zeigt Gelb.',
   ['glatte Oberfläche', 'griffige Oberfläche'], 'PE steht auch für PE-beschichtete Verpackungen wie Milchpackungen.'),
 'masse': ('Masse', 'Wie schwer das Teil ist.',
   'Die Masse kommt aus Volumen und Dichte oder wird direkt eingegeben. Bei Hohlkörpern und Füllgut ist die Eingabe Pflicht, oder das Programm rechnet Wand und Füllung aus Wandstärke und Füllstand.',
   ['Gewicht des Teils'], 'Die Greifkraft wächst im gleichen Verhältnis wie die Masse.'),
 'belastbarkeit': ('Belastbarkeit', 'Wie fest gegriffen werden darf, ohne das Produkt zu beschädigen.',
   'Stufen: sehr empfindlich 25 kPa (wie Erdbeeren), empfindlich 100 kPa (wie Äpfel, Kiwis), normal 300 kPa (wie Milchkartons), fest 2 MPa (massive Kunststoffteile), unbegrenzt (Stahl, Glas mit Belag). Der Sicherheitsfaktor ist enthalten. Daneben steht die höchste Greifkraft je Backe für die gewählte Belaggröße.',
   ['empfindliches Produkt', 'festes Produkt'], 'Die Vergleichsprodukte sind Richtwerte, keine geprüften Grenzwerte.'),
 'hohl': ('Hohlkörper und Wandstärke', 'Ist das Produkt hohl, und wie dick ist die Wand?',
   'Viele 3D-Modelle sind geschlossene Volumen, auch wenn das echte Produkt hohl ist. Bei Hohlkörpern entscheidet die Verformung der Wand. Das Programm zeigt eine Steifigkeitskarte: nahe Kanten, Boden und Deckel steif, mitten auf großen Flächen weich (K = E · t³ / L²).',
   ['massives Teil', 'Wandstärke t'], 'Am besten nahe an Kanten, Boden oder Deckel greifen.'),
 'fuellstand': ('Füllstand', 'Wie voll der Behälter ist.',
   'Leer ist der Behälter leicht, die Wand gibt aber früh nach. Voll ist er schwer und braucht mehr Greifkraft, wird verschlossen aber steifer, weil sich die Flüssigkeit nicht zusammendrücken lässt.',
   ['Füllhöhe'], 'Ohne eigene Masse rechnet das Programm die Füllung mit 1 g/ml.'),
 'kopfraum': ('Kopfraum', 'Die Luft über der Füllung.',
   'Nur die Luft im Kopfraum lässt sich zusammendrücken. Weniger Kopfraum bedeutet weniger Verformung. Die Stützwirkung rechnet das Programm nach Boyle-Mariotte: Δp = p₀ · ΔV / (V_K − ΔV), F = Δp · Kontaktfläche.',
   ['Kopfraum'], 'Leer lassen: das Programm schätzt ihn aus dem Füllstand.'),
 'verschlossen': ('Verschlossen', 'Ist der Behälter beim Greifen zu?',
   'Offen weicht die Flüssigkeit nach oben aus, nur die Wand trägt. Verschlossen stützt die eingeschlossene Luft die Greifkraft mit, bei einer Milchpackung mit 50 ml Kopfraum rund 61 N je Backe bei 2 mm Eindrückung.',
   ['offener Behälter', 'eingeschlossene Luft stützt'], 'Die Werte für die Wand allein müssen gemessen oder angegeben werden.'),
 'eindrueckung': ('Zulässige Eindrückung', 'Wie tief die Backe die Wand eindrücken darf.',
   'Aus der Eindrückung folgt das verdrängte Volumen und damit die Stützwirkung im Kopfraum. Vorschlag 2 mm.',
   ['Eindrückung der Wand'], 'Mehr Eindrückung erlaubt mehr Kraft, verformt aber das Produkt.'),
 'beschleunigung': ('Beschleunigung', 'Wie stark der Roboter anfährt und bremst.',
   'Die Greifkraft hängt von der Beschleunigung ab, nicht von der Geschwindigkeit. Beim Heben kommt sie zum Gewicht hinzu, seitlich rechnet das Programm mit der Resultierenden. Die höchste Geschwindigkeit folgt aus der erlaubten Beschleunigung und der Fahrstrecke.',
   ['Beschleunigung a', 'Teil will rutschen'], 'Typisch 5 m/s², schnelle Roboter deutlich mehr.'),
 'nothalt': ('Not-Halt-Verzögerung', 'Wie hart der Roboter im Notfall bremst.',
   'Der Not-Halt ist fast immer der ungünstigste Lastfall. Er wird immer mitgerechnet.',
   ['gleichmäßige Fahrt', 'harter Ruck beim Not-Halt'], 'Wert aus der Roboter-Dokumentation nehmen, sonst 10 m/s².'),
 'oberflaeche': ('Oberflächenzustand', 'Trocken, nass, ölig oder staubig.',
   'Nässe und Öl wirken je nach Paarung sehr unterschiedlich: Harte Kunststoffe auf Stahl verlieren mit Fett praktisch nichts, Metallpaarungen fallen auf etwa ein Viertel, Gummi auf glatten Flächen bricht stark ein. Staub senkt die Reibung von Gummi deutlich.',
   ['trockene Fläche', 'Film aus Öl oder Wasser'], 'Gummi auf glatter, öliger Fläche: profilierten Belag wählen.'),
 'temp_umgebung': ('Umgebungstemperatur', 'Die Temperatur in der Anlage, dauerhaft.',
   'Sie wirkt dauerhaft auf Greifer, Backen und Beläge und wird mit der dauerhaften Obergrenze verglichen. Über der Grenze Rot, bis 10 °C darunter Gelb. Auch die Untergrenze wird geprüft, etwa bei Tiefkühlware.',
   ['heiße Umgebung'], 'Werkstoffe mit Rot fallen aus dem Belagsvorschlag.'),
 'temp_produkt': ('Produkttemperatur', 'Wie heiß oder kalt das Teil ist.',
   'Sie wirkt nur während des Greifens auf die Kontaktfläche und wird mit der kurzzeitigen Grenze verglichen. Bei hoher Taktzahl heizt sich die Backe auf, dann gilt die dauerhafte Grenze. Gedruckte Kunststoffe geben je nach Flächenpressung früher nach (HDT bei 0,45 und 1,8 MPa).',
   ['heißes Teil'], 'Für 200 °C heiße Teile: Metallbacke mit Silikonbelag.'),
 'luftfeuchte': ('Luftfeuchte', 'Wie feucht die Luft in der Halle ist.',
   'Bei Karton wirkt sie auf die Festigkeit: bis 50 % volle Greifkraft, über 50 % das 0,6-Fache, über 85 % das 0,5-Fache (Annahme, Ampel Gelb).',
   ['feuchter, weicher Karton'], 'Auf μ wirkt die Luftfeuchte kaum.'),
 'backenform': ('Backenform', 'Wie die Backe am Teil anliegt.',
   'Flachbacken halten nur über Reibung. Prismen-, Kontur- und Kegelbacken nutzen zusätzlich die Form und brauchen deutlich weniger Kraft. Prismen- und Konturbacken helfen bei Last quer zur Teileachse, Kegelbacken auch längs.',
   ['Reibschluss', 'Formschluss'], 'Formschluss schont das Teil.'),
 'alpha': ('Öffnungswinkel α', 'Wie weit die Prismenkerbe geöffnet ist.',
   'Die Keilwirkung verstärkt die Normalkraft: F = m · (g + a) · sin(α/2) · S / (2 μ). Je kleiner α, desto weniger Greifkraft.',
   ['Öffnungswinkel'], 'Üblich sind 90° oder 120°.'),
 'umschliessung': ('Umschließung', 'Wie viel des Umfangs die Konturbacken umfassen.',
   'Die Haltekraft wächst mit der Umschließung: 50 % ergibt das 1,4-Fache, 67 % das 2-Fache, 89 % das 5,8-Fache der Flachbacke. Höchstens 85 %, sonst bleibt die Backe beim Öffnen hängen. Das Programm erzeugt die Konturbacke als STL-Datei.',
   ['Umschließung'], 'Backenkörper aus PETG, ASA, PA oder PC, Kontaktfläche mit Belag.'),
 'gamma': ('Kegelwinkel γ', 'Halber Kegelwinkel einer konischen Backe.',
   'Wird das Teil unterhalb der Greifstelle breiter, stützt eine Kegelbacke die Last über die Keilwirkung, auch längs der Achse: F = m · (g + a) · S / (2 (μ + tan γ)).',
   ['kleiner Winkel', 'Kegel trägt mit'], 'Bei γ = 15° und μ = 0,3 sinkt die Kraft fast auf die Hälfte.'),
 'fingerbelag': ('Fingerbelag und Backe', 'Woraus die Kontaktfläche und der Backenkörper sind.',
   'Weiche, glatte Gummibeläge haften am besten, Strukturprofile und Schaum schlechter, Gewebe kaum. Metallfinger auf Glas sind gesperrt, PTFE nur mit Formschluss. Beide Werkstoffe werden gegen die Temperaturen geprüft.',
   ['Belag'], 'Das Programm schlägt die drei besten Beläge vor.'),
 'reibwert': ('Reibwert μ', 'Wie gut Belag und Produkt aneinander haften.',
   'Gerechnet wird mit dem unteren Tabellenwert mal 0,7, danach mit dem Zustandsfaktor. Ein eigener Messwert ersetzt den Tabellenwert.',
   ['nötige Greifkraft'], 'Eigene Werte im Versuch messen: schiefe Ebene oder Zugversuch.'),
 'greifkraft': ('Greifkraft', 'Mit welcher Kraft jede Backe drückt.',
   'Das Programm rechnet jeden Lastfall und nimmt den ungünstigsten (F_min). Die Belastbarkeit des Produkts begrenzt nach oben (F_max). Liegt F_min über F_max, ist die Stelle ungeeignet.',
   ['zu wenig Kraft', 'Kraft im Fenster'], 'Not-Halt-Verzögerung immer mitrechnen.'),
 'sicherheit': ('Sicherheitsfaktor', 'Reserve auf die nötige Greifkraft.',
   'Im Normalmodus fest 2. Im Pro-Modus wählbar von 1,5 bis 2. Herstellerwerte: Festo 1,5 bei Linearbewegung und 2 bei Rotation.',
   ['Reserve'], 'Bei Drehbewegungen 2 wählen.'),
 'ampel': ('Ampel', 'Ob die Greifstelle passt.',
   'Grün: passt. Gelb: knapp oder unsicher, zum Beispiel ohne Literaturwert oder mit Schätzwert. Rot: nicht möglich oder gesperrt. Nur Grün und Gelb lassen sich an die Simulation übergeben.',
   ['Grün: passt', 'Gelb: knapp oder unsicher', 'Rot: nicht möglich'], 'Der Konfigurator gibt eine Empfehlung, keine Freigabe.'),
}
info = {}
for k, (titel, satz, text, legende, tipp) in T.items():
    bilder = []
    for i, (cap, body) in enumerate(B[k], 1):
        name = f'{k}-{i}.svg'
        (OUT / name).write_text(svg(body), encoding='utf-8')
        bilder.append({'datei': f'assets/img/info/{name}', 'beschriftung': cap})
    info[k] = {'titel': titel, 'satz': satz, 'bilder': bilder, 'text': text, 'legende': legende, 'tipp': tipp}
(ROOT / 'data' / 'info_texte.json').write_text(json.dumps(info, ensure_ascii=False, indent=1), encoding='utf-8')
print(len(info), 'Info-Fenster')
