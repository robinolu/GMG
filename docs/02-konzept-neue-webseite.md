# GMG – Konzept für die neue Webseite

## Ziel
Moderne, professionelle Industrie-Webseite. Besucher verstehen in 3 Sekunden:
**GMG = Spezialist für modulare Greifer aus Soest, seit 1992, patentiert, individuell anpassbar.**
Kontakt ist von jeder Seite mit einem Klick möglich.

## Design
- Klar, technisch, ruhig: viel Weißraum, eine Akzentfarbe aus dem Logo, Grautöne, große Produktfotos.
- Schrift: sachliche Sans (z. B. Inter / IBM Plex Sans).
- Dezente Übergänge, keine verspielten Effekte. Mobil zuerst.

## Seitenstruktur
1. **Startseite** – Hero (Bild/Video + Claim + Buttons „Produkte“ / „Anfrage“), Kennzahlen
   (seit 1992 · patentiert · modular · Sonderanfertigung), Produktfamilien-Kacheln,
   Anwendungen, „Warum GMG“, Kontaktblock mit Ansprechpartner.
2. **Produkte** – Übersicht → Familie (Hexagonal, Winkel, Parallel-Winkel, Langarm, Schwerlast,
   Reifen, Nadel, Einzelfinger) → Baureihe mit Datentabelle, Varianten, Downloads, CAD,
   Button „Für diese Baureihe anfragen“.
3. **Modulares System** – Erklärung Form / Fingeranzahl / Fingerbewegung / Fingerlänge (Grafik).
4. **Anwendungen & Branchen**
5. **Sonderlösungen**
6. **Downloadcenter** (filterbar)
7. **Über GMG** – Geschichte, Erfinder-Story, Fertigung, Team
8. **Kontakt**, Impressum, Datenschutz

## Kontakt – einfach gelöst
- Telefon + „Anfrage“-Button immer sichtbar (mobil: feste Leiste unten).
- Kurzes Formular (Name, Firma, E-Mail, Nachricht; optional Baureihe, Datei-Upload).
- Auf Produktseiten Baureihe vorausgefüllt.
- Klickbare Telefonnummer / E-Mail, Ansprechpartner mit Foto. Optional Rückruf-Bitte.

## Optimierung – was gebraucht wird
**Bilder:** Freisteller jeder Baureihe, Einsatzfotos, Fertigung/Montage, Gebäude, Team, Geschäftsführer.
**Videos:** 30–60 s Hero-Loop; 10–20 s Clips je Greifer in Aktion; 3D-Explosionsansicht des modularen Aufbaus.
**Texte:** Neue Start-/Über-uns-Texte, Kurzbeschreibung + Datentabelle je Baureihe (HTML statt nur PDF),
Referenzen, Branchen, FAQ (Lieferzeit, Sonderbau, Ersatzteile, Ex-Schutz), vollständiges Englisch.
**Funktionen:** Produktfilter (Antrieb, Finger, Greifkraft, Ex), CAD-Download (STEP), Ersatzteil-Anfrage,
SEO (eine Seite je Baureihe, schnelle Ladezeit, Google-Unternehmensprofil), DSGVO-konform,
barrierearm, einfach pflegbares CMS.

## Entscheidungen (Stand 30.10.2026)
- **Logo:** Variante 2 („schlanker + dezent 3D“), Original-Form als Vektor nachgezeichnet (`assets/logo/gmg-3d-dezent*.svg`).
- **Slogan:** „Die rechte Hand Ihrer Maschine“ entfällt ersatzlos.
- **Startbild:** B02 als scharfes Standbild aus dem Datenblatt-Rendering.
- **Scroll-Animation des Greifers:** zurückgestellt, bis die STEP-Datei des B02 von GMG vorliegt (echtes 3D-Modell statt zerschnittenem Foto).
- **Einsatzszene beim Drüberfahren:** nur am Startbild, nur per Maus; Umgebung in hellen Graustufen, Greifer farbig. KI-Szene (Roboter + Halle) ohne Karton, echter Greifer wird pixelgenau darübergelegt.
- **Veröffentlichung:** ausschließlich unter https://robinolu.github.io/GMG/
