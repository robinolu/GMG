# GMG – Entwurf neue Webseite

Statischer Entwurf der neuen Webseite für GMG Gesellschaft für modulare Greifersysteme mbH.

- `index.html`, `produkte/`, `ueber-gmg/`, … – erzeugte Seiten (39 Seiten)
- `assets/` – CSS, JavaScript, Logo und Produktbilder (von gmg-system.com übernommen)
- `data/produkte.json` – alle Produktdaten (Texte, Merkmale, Downloads, Videos)
- `tools/build.py` – erzeugt alle Seiten neu: `python3 tools/build.py`
- `tools/build_single.py` – packt alles in eine Vorschau-Datei: `python3 tools/build_single.py`
- `tools/produktbilder.py` – Produktbilder in hoher Auflösung (Datenblatt-Renderings aus `data/renders/`, sonst hochgerechnet)
- `tools/greifer3d/` – 3D-Greifer der Startseite (Platzhaltermodell aus `data/3d/`); Bündeln mit esbuild zu `assets/js/greifer3d.js`
- `tools/konfigurator/` – Greifer-Konfigurator (STEP/STL im Browser, Vorschlag aus `data/greifer-specs.json`, Greiftest); Bündeln mit esbuild zu `assets/js/konfigurator.js`, STEP-Leser in `assets/vendor/occt/`
- `tools/tentra/` – Tentra T3: `lesen.js` liest die STEP-Stellungen OPEN/GRASP, `bewegung.py` berechnet daraus die Gelenkkette → `data/3d/tentra-t3.json`
- `tools/pinza/` – adaptiver Parallelgreifer: `lesen.js` liest die STEP-Datei, `export.py` ordnet die Teile den Getriebegliedern zu → `data/3d/pinza-adattiva.json`
- `tools/logo3d.py`, `tools/logo_assets.py` – Logo (Vektor, 3D) und daraus Favicon, App-Symbol, Link-Vorschaubild
- `docs/` – Inhaltsinventar der alten Seite und Konzept

## Ansehen
- **Am einfachsten:** `vorschau/GMG-Webseite-Vorschau.html` herunterladen und per Doppelklick im Browser öffnen. Eine Datei, alles enthalten.
- **Lokal (alle Dateien):** Repo als ZIP herunterladen, **komplett entpacken**, dann `index.html` öffnen.
- **GitHub Pages:** Settings → Pages → Source „Deploy from a branch“ → Branch `claude/modest-heisenberg-qagymn`, Ordner `/ (root)`.
