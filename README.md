# GMG – Entwurf neue Webseite

Statischer Entwurf der neuen Webseite für GMG Gesellschaft für modulare Greifersysteme mbH.

- `index.html`, `produkte/`, `ueber-gmg/`, … – erzeugte Seiten (39 Seiten)
- `assets/` – CSS, JavaScript, Logo und Produktbilder (von gmg-system.com übernommen)
- `data/produkte.json` – alle Produktdaten (Texte, Merkmale, Downloads, Videos)
- `tools/build.py` – erzeugt alle Seiten neu: `python3 tools/build.py`
- `tools/build_single.py` – packt alles in eine Vorschau-Datei: `python3 tools/build_single.py`
- `docs/` – Inhaltsinventar der alten Seite und Konzept

## Ansehen
- **Am einfachsten:** `vorschau/GMG-Webseite-Vorschau.html` herunterladen und per Doppelklick im Browser öffnen. Eine Datei, alles enthalten.
- **Lokal (alle Dateien):** Repo als ZIP herunterladen, **komplett entpacken**, dann `index.html` öffnen.
- **GitHub Pages:** Settings → Pages → Source „Deploy from a branch“ → Branch `claude/modest-heisenberg-qagymn`, Ordner `/ (root)`.
