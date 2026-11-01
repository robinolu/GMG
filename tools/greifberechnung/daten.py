"""Datentabelle der Greifberechnung (data/greifberechnung.json) aus dem Konzept „Greifberechnung: Konzept für den
Konfigurator“ (Stand 1. November 2026). Regeln stehen hier und in der JSON-Datei, nicht im Programmcode.
Aufruf: python3 tools/greifberechnung/daten.py
"""
import json, pathlib
ROOT = pathlib.Path(__file__).resolve().parent.parent.parent

# Werkstoffe: Gruppe (für Zustandsfaktoren und fehlende Reibwerte), Oberfläche glatt/rau, Dichte (kg/m³), E-Modul (MPa),
# Rollen, Temperaturgrenzen (°C): unten, dauer, kurz, hdt045, hdt18 (None = keine Angabe)
W = [
  # name, gruppe, glatt, dichte, E, rollen, unten, dauer, kurz, hdt045, hdt18
  ('Naturgummi', 'gummi', True, 930, 2, 'belag produkt', -40, 70, None, None, None),
  ('Nitrilgummi', 'gummi', True, 1000, 4, 'belag produkt', -20, 110, None, None, None),
  ('Silikon', 'gummi', True, 1150, 2, 'belag produkt', -60, 220, None, None, None),
  ('PU', 'gummi', True, 1200, 25, 'belag produkt', -50, 80, 130, None, None),
  ('TPU', 'gummi', True, 1200, 30, 'belag backe produkt', None, 60, None, None, None),
  ('Leder', 'leder', False, 860, 200, 'belag produkt', None, None, None, None, None),
  ('Holz', 'holz', False, 600, 10000, 'produkt', None, None, None, None, None),
  ('Karton', 'karton', False, 150, 3000, 'produkt', None, None, None, None, None),
  ('Glas', 'glas', True, 2500, 70000, 'produkt', None, None, None, None, None),
  ('Stahl', 'metall', True, 7850, 210000, 'belag backe produkt', None, None, None, None, None),
  ('Aluminium', 'metall', True, 2700, 70000, 'backe produkt', None, None, None, None, None),
  ('Plexiglas', 'hart', True, 1190, 3200, 'backe produkt', None, 65, None, None, None),
  ('Polyamid', 'hart', True, 1140, 3000, 'belag backe produkt', None, 80, 120, None, None),
  ('POM', 'hart', True, 1410, 3000, 'belag backe produkt', -50, 105, 130, None, None),
  ('Polystyrol', 'hart', True, 1050, 3200, 'backe produkt', None, 65, 80, None, None),
  ('Polyethylen', 'hart', True, 950, 1000, 'belag backe produkt', -200, 90, None, None, None),
  ('PP', 'hart', True, 905, 1500, 'belag backe produkt', -10, 100, 130, None, None),
  ('PTFE', 'hart', True, 2200, 500, 'belag backe produkt', -200, 250, None, None, None),
  ('PLA', 'hart', True, 1240, 3500, 'backe produkt', None, None, None, 55, None),
  ('PETG', 'hart', True, 1270, 2000, 'backe produkt', None, None, None, 70, None),
  ('ABS', 'hart', True, 1040, 2200, 'backe produkt', None, None, None, 85, None),
  ('ASA', 'hart', True, 1070, 2000, 'backe produkt', None, None, None, 95, None),
  ('PC', 'hart', True, 1200, 2400, 'backe produkt', -80, 130, None, 110, None),
  ('Backware', 'backware', False, 300, 1, 'produkt', None, None, None, None, None),
]
werkstoffe = {w[0]: {'gruppe': w[1], 'glatt': w[2], 'dichte': w[3], 'E': w[4], 'rollen': w[5].split(),
              'unten': w[6], 'dauer': w[7], 'kurz': w[8], 'hdt045': w[9], 'hdt18': w[10]} for w in W}
werkstoffe['PC']['gedruckt_hdt'] = True          # gedrucktes PC: HDT 110; Halbzeug: dauerhaft 130
for n in ('PLA', 'PETG', 'ABS', 'ASA'): werkstoffe[n]['gedruckt'] = True

# Haftreibung trocken (Matrix aus dem Konzept, 57 Paarungen); sperre = gesperrt für Reibschluss bzw. Bruchgefahr
R = [
 ('Naturgummi','Glas',1.68,'Forbo DB 3, NR 40 Shore A'),('Naturgummi','Aluminium',1.52,'Forbo DB 3'),('Naturgummi','Stahl',1.46,'Forbo DB 3'),
 ('Naturgummi','Holz',1.25,'Forbo DB 3'),('Naturgummi','Karton',1.14,'Forbo DB 3'),('Naturgummi','Polyethylen',1.20,'Forbo DB 3, gegen PE-Folie'),
 ('Naturgummi','Naturgummi',1.16,'Engineering ToolBox, Gummi auf Gummi'),('Naturgummi','Nitrilgummi',0.62,'Engineers Edge, Gummi 60A auf Gummi 40A'),
 ('Nitrilgummi','Nitrilgummi',0.73,'Engineers Edge, Gummi 60A auf 60A'),('Nitrilgummi','PU',0.67,'Engineers Edge, Gummi 60A auf Urethan'),
 ('Nitrilgummi','Glas',1.27,'Forbo DB 1, NBR 55 Shore A'),('Nitrilgummi','Stahl',1.13,'Forbo DB 1'),('Nitrilgummi','Aluminium',1.07,'Forbo DB 1'),
 ('Nitrilgummi','Holz',0.99,'Forbo DB 1'),('Nitrilgummi','Karton',0.81,'Forbo DB 1'),('Nitrilgummi','Polyethylen',0.90,'Forbo DB 1, gegen PE-Folie'),
 ('Silikon','Stahl',0.98,'Forbo DB 26, 35 Shore A'),('Silikon','Aluminium',0.88,'Forbo DB 26'),('Silikon','Glas',0.84,'Forbo DB 26'),
 ('Silikon','Holz',0.63,'Forbo DB 26'),('Silikon','Karton',0.62,'Forbo DB 26'),('Silikon','Polyethylen',1.09,'Forbo DB 26, gegen PE-Folie'),
 ('PU','Stahl',1.20,'Forbo DB 4, PU 85 Shore A glatt'),('PU','Aluminium',1.01,'Forbo DB 4'),('PU','Holz',0.66,'Forbo DB 4'),
 ('PU','Karton',0.49,'Forbo DB 4'),('PU','Polyethylen',0.64,'Forbo DB 4, gegen PE-Folie'),
 ('TPU','Stahl',0.30,'Weerg, TPU auf Metall 0,3 bis 0,6'),('TPU','Aluminium',0.30,'Weerg, TPU auf Metall 0,3 bis 0,6'),
 ('Leder','Stahl',0.40,'Engineering ToolBox 0,4; Engineers Edge 0,6'),('Leder','Aluminium',0.30,'Engineering ToolBox, Lederfaser auf Aluminium'),
 ('Leder','Holz',0.30,'Engineering ToolBox und Engineers Edge, 0,3 bis 0,4'),('Holz','Holz',0.25,'Engineering ToolBox und Engineers Edge, 0,25 bis 0,5'),
 ('Holz','Stahl',0.20,'Engineering ToolBox 0,2 bis 0,6; Dorn 2021 glatter Stahl 0,1 bis 0,3'),('Holz','Aluminium',0.20,'Engineering ToolBox, Holz auf Metall 0,2 bis 0,6'),
 ('Glas','Glas',0.90,'Engineering ToolBox 0,9 bis 1,0; Schoolphysics 0,94'),
 ('Glas','Stahl',0.50,'Engineering ToolBox und Engineers Edge, 0,5 bis 0,7',True),('Glas','Aluminium',0.50,'Engineering ToolBox, Glas auf Metall 0,5 bis 0,7',True),
 ('Stahl','Stahl',0.15,'chemie.de und Weber 1965: 0,15; Labor 0,5 bis 0,8'),('Stahl','Aluminium',0.61,'Engineering ToolBox, Engineers Edge, Schoolphysics'),
 ('Aluminium','Aluminium',1.05,'Engineering ToolBox 1,05 bis 1,35; Engineers Edge 1,10 bis 1,35'),
 ('Plexiglas','Stahl',0.40,'Engineering ToolBox und eMachineShop, 0,4 bis 0,5'),('Plexiglas','Plexiglas',0.80,'Engineering ToolBox'),
 ('Polyamid','Stahl',0.35,'Wieleba 2009 PA6 0,35; Engineering ToolBox 0,4'),('Polyamid','Polyamid',0.15,'Engineering ToolBox, 0,15 bis 0,25'),
 ('POM','Stahl',0.17,'Wieleba 2009 0,17; Professional Plastics 0,2 bis 0,35'),('Polystyrol','Stahl',0.30,'Engineering ToolBox, 0,3 bis 0,35'),
 ('Polystyrol','Polystyrol',0.50,'Engineering ToolBox'),('Polyethylen','Stahl',0.20,'Engineering ToolBox 0,2; Professional Plastics HDPE 0,29'),
 ('Polyethylen','Polyethylen',0.20,'Engineering ToolBox'),('PP','Stahl',0.10,'Professional Plastics, 0,1 bis 0,3'),
 ('PTFE','Stahl',0.05,'Engineering ToolBox 0,05; Wieleba 0,07; eMachineShop 0,04',True),('PTFE','PTFE',0.04,'Engineering ToolBox',True),
 ('PLA','Stahl',0.22,'Popovici 2024, 3D-Druck, 0,22 bis 0,38 je Last'),('PETG','Stahl',0.25,'Popovici 2024, 3D-Druck, 0,25 bis 0,40 je Last'),
 ('ABS','Stahl',0.30,'Popovici 2024, 3D-Druck, 0,30 bis 0,48; Professional Plastics 0,5'),('PC','Stahl',0.31,'Professional Plastics 0,31; Tecanat 0,38 dynamisch'),
]
reibwerte = [{'a': r[0], 'b': r[1], 'mu': r[2], 'quelle': r[3], **({'sperre': True} if len(r) > 4 else {})} for r in R]

daten = {
  'stand': '2026-11-01',
  'festlegungen': {'sicherheit_normal': 2, 'sicherheit_pro': [1.5, 2], 'abschlag_mu': 0.7, 'umschliessung_max': 85,
                   'temperatur_gelb_abstand': 10, 'hdt_ohne_dauer_abzug': 20, 'hdt18_ersatz_abzug': 30,
                   'eindrueckung_vorschlag_mm': 2, 'luftdruck_kpa': 101},
  'werkstoffe': werkstoffe,
  'reibwerte': reibwerte,
  # Zustandsfaktoren je Paarungsklasse: [nass, ölig, staubig]; annahme = im Versuch bestätigen
  'zustand': {
    'gummi_rau':   {'name': 'Gummi, Silikon, PU auf rauer oder poröser Fläche', 'nass': 0.7, 'oelig': 0.2, 'staubig': 0.5, 'annahme': ['oelig', 'staubig']},
    'gummi_glatt': {'name': 'Gummi, Silikon, PU auf glatter Fläche', 'nass': 0.4, 'oelig': 0.2, 'staubig': 0.5, 'annahme': ['staubig']},
    'metall_metall': {'name': 'Metall auf Metall', 'nass': 0.5, 'oelig': 0.25, 'staubig': 1.0, 'annahme': ['nass']},
    'metall_glas': {'name': 'Metall auf Glas', 'nass': 0.5, 'oelig': 0.4, 'staubig': 1.0, 'annahme': ['nass']},
    'leder_metall': {'name': 'Leder auf Metall', 'nass': 0.5, 'oelig': 0.5, 'staubig': 1.0, 'annahme': ['nass']},
    'hart_stahl': {'name': 'Harte Kunststoffe auf Stahl', 'nass': 1.0, 'oelig': 1.0, 'staubig': 1.0, 'annahme': ['nass']},
    'holz_metall': {'name': 'Holz auf Metall', 'nass_fest': 0.2, 'oelig_fest': 0.2, 'staubig': 1.0, 'annahme': ['oelig']},
    'sonst': {'name': 'übrige Paarungen', 'nass': 0.5, 'oelig': 0.2, 'staubig': 1.0, 'annahme': ['nass', 'oelig']},
  },
  'feuchte_karton': [[50, 1.0], [70, 0.6], [85, 0.6], [101, 0.5]],
  'belastbarkeit': [
    {'id': 'sehr', 'name': 'Sehr empfindlich', 'kpa': 25, 'wie': 'Erdbeeren, Himbeeren, reife Tomaten, Pfirsiche'},
    {'id': 'empf', 'name': 'Empfindlich', 'kpa': 100, 'wie': 'Äpfel, Birnen, Kiwis, Gurken, Paprika'},
    {'id': 'normal', 'name': 'Normal', 'kpa': 300, 'wie': 'Milchkartons, Kartons, leere Kunststoffflaschen, Weichholz', 'annahme': True},
    {'id': 'fest', 'name': 'Fest', 'kpa': 2000, 'wie': 'massive Kunststoffteile, Gehäuse, Hartholz', 'annahme': True},
    {'id': 'frei', 'name': 'Unbegrenzt', 'kpa': None, 'wie': 'Stahl, Aluminium, Guss, Glas mit Belag, bestätigte Siegelnaht'},
  ],
  # Schätzwert, wenn der Kunde „Weiß ich nicht“ wählt (Ampel Gelb)
  'belastbarkeit_schaetzung': {'Glas': 'frei', 'Stahl': 'frei', 'Aluminium': 'frei', 'Holz': 'fest', 'Karton': 'normal',
                               'Polyethylen': 'normal', 'Naturgummi': 'fest', 'Nitrilgummi': 'fest', 'Silikon': 'fest', 'PU': 'fest',
                               'TPU': 'fest', 'Leder': 'fest', '*hart': 'fest'},
  'sperrregeln': [
    {'stufe': 'gesperrt', 'belag_gruppe': 'metall', 'produkt': ['Glas'], 'grund': 'Bruch- und Kratzgefahr durch harte Kanten und Punktlast', 'vorschlag': 'Gummi, Silikon oder Vakuum'},
    {'stufe': 'gesperrt', 'belag_gruppe': 'metall', 'belastbarkeit': ['sehr', 'empf'], 'grund': 'Druckstellen auf druckempfindlichen Lebensmitteln', 'vorschlag': 'Silikon oder Softgreifer'},
    {'stufe': 'gesperrt', 'belag': ['PTFE'], 'nur_reibschluss': True, 'grund': 'μ um 0,05, das Teil rutscht', 'vorschlag': 'nur mit Formschluss (Prismen-, Kontur- oder Kegelbacke)'},
    {'stufe': 'warnung', 'belag_gruppe': 'metall', 'produkt': ['Holz', 'Karton'], 'grund': 'Abdrücke und Kratzer', 'vorschlag': 'Belag aus Gummi oder PU'},
    {'stufe': 'warnung', 'fehlender_wert': True, 'grund': 'Reibwert unbekannt', 'vorschlag': 'Versuch empfohlen'},
    {'stufe': 'warnung', 'belag_gruppe': 'gummi', 'glatt': True, 'zustand': ['oelig'], 'grund': 'Reibwert bricht ein', 'vorschlag': 'profilierter Belag, Formschluss oder Vakuum'},
  ],
  'vakuum_mu': {'rau': 0.6, 'trocken': 0.5, 'nass': 0.25, 'oelig': 0.1},
}
out = ROOT / 'data' / 'greifberechnung.json'
out.write_text(json.dumps(daten, ensure_ascii=False, indent=1), encoding='utf-8')
print(out, len(reibwerte), 'Paarungen', len(werkstoffe), 'Werkstoffe')
