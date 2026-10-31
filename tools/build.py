#!/usr/bin/env python3
"""Erzeugt die statische GMG-Webseite aus data/produkte.json.

Aufruf (im Repo-Hauptordner):  python3 tools/build.py
Alle Links sind relativ und zeigen explizit auf index.html, damit die Seite
auf GitHub Pages, lokal und in jeder Vorschau ohne Server-Konfiguration läuft.
"""
import html
import json
import pathlib
import re

ROOT = pathlib.Path(__file__).resolve().parent.parent
# Versionskennung für CSS/JS, damit Browser nach jedem Update die neuen Dateien laden.
BUILD = __import__("time").strftime("%Y%m%d%H%M")
FAMILIES = json.loads((ROOT / "data" / "produkte.json").read_text(encoding="utf-8"))
MEDIA = "https://www.gmg-system.com/media/"
PHONE = "+49 (0) 2921 4062"
PHONE_LINK = "tel:+4929214062"
MAIL = "info@gmg-system.com"
# Öffentliche Adresse der Testseite; nötig für absolute Links in der Link-Vorschau (WhatsApp, LinkedIn, …).
SITE_URL = "https://robinolu.github.io/GMG/"
ADDRESS = "Werler Landstraße 6–8, 59494 Soest"

ICON = {
    "phone": '<path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1.9.4 1.8.7 2.7a2 2 0 0 1-.5 2.1L8 9.8a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.4c.9.3 1.8.6 2.7.7a2 2 0 0 1 1.7 2z"/>',
    "mail": '<rect x="2" y="4" width="20" height="16" rx="2"/><path d="m22 7-10 6L2 7"/>',
    "pin": '<path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0z"/><circle cx="12" cy="10" r="3"/>',
    "arrow": '<path d="M5 12h14M13 6l6 6-6 6"/>',
    "check": '<circle cx="12" cy="12" r="10"/><path d="m8 12 3 3 5-6"/>',
    "file": '<path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><path d="M14 2v6h6M9 15h6M9 18h4"/>',
    "cube": '<path d="M21 16V8a2 2 0 0 0-1-1.7l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.7l7 4a2 2 0 0 0 2 0l7-4a2 2 0 0 0 1-1.7z"/><path d="M3.3 7 12 12l8.7-5M12 22V12"/>',
    "play": '<path d="M6 4l14 8-14 8z" fill="currentColor" stroke="none"/>',
    "menu": '<path d="M4 6h16M4 12h16M4 18h16"/>',
    "award": '<circle cx="12" cy="8" r="6"/><path d="M15.5 13 17 22l-5-3-5 3 1.5-9"/>',
    "drop": '<path d="M12 2.7s-6 6.6-6 11.3a6 6 0 0 0 12 0c0-4.7-6-11.3-6-11.3z"/><path d="m4 4 16 16"/>',
    "shield": '<path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>',
    "tool": '<path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.8-3.8a6 6 0 0 1-7.9 7.9l-6.9 6.9a2.1 2.1 0 0 1-3-3l6.9-6.9a6 6 0 0 1 7.9-7.9z"/>',
    "shape": '<rect x="3" y="3" width="7" height="7" rx="1"/><circle cx="17.5" cy="6.5" r="3.5"/><path d="M6.5 14 10 21H3z"/><rect x="14" y="14" width="7" height="7" rx="1"/>',
    "fingers": '<path d="M6 21V9M10 21V5M14 21V7M18 21V11"/>',
    "move": '<path d="M5 9l-3 3 3 3M9 5l3-3 3 3M15 19l-3 3-3-3M19 9l3 3-3 3M2 12h20M12 2v20"/>',
    "ruler": '<path d="M21.3 8.7 8.7 21.3a1 1 0 0 1-1.4 0l-4.6-4.6a1 1 0 0 1 0-1.4L15.3 2.7a1 1 0 0 1 1.4 0l4.6 4.6a1 1 0 0 1 0 1.4z"/><path d="m7.5 10.5 2 2M10.5 7.5l2 2M13.5 4.5l2 2M4.5 13.5l2 2"/>',
    "download": '<path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4M7 10l5 5 5-5M12 15V3"/>',
}


def icon(name):
    return ('<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" '
            f'stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">{ICON[name]}</svg>')


e = html.escape


def products():
    """Alle Produkte als (Familie, Produkt, Pfad) in Seitenreihenfolge."""
    for fam in FAMILIES:
        if "product" in fam:
            yield fam, fam["product"], f"produkte/{fam['slug']}"
        else:
            for p in fam["series"]:
                yield fam, p, f"produkte/{fam['slug']}/{p['slug']}"


def heading(p):
    """Kurzer Produkttitel: Code + Beschreibung, ohne doppelten Code."""
    title = re.sub(r"\s*" + re.escape(p["code"]) + r"\s*$", "", p["title"], flags=re.I)
    sub = p["subtitle"]
    if sub and not sub.startswith("Größe") and sub.upper() != p["code"].upper():
        desc = sub
    else:
        desc = title
    code = sub if sub.upper() == p["code"].upper() else p["code"]
    return code, desc, title


def chips(p):
    text = " ".join(p["features"] + p["notes"])
    out = []
    m = re.search(r"hohle Mitte \(Ø\s?(\d+)\s?mm\)", text)
    if m:
        out.append(f"Hohle Mitte Ø {m.group(1)} mm")
    if "abgedichtet" in text:
        out.append("Komplett abgedichtet")
    if "10 Mio" in text:
        out.append("Wartungsfrei bis 10 Mio. Hübe")
    elif "schmierungsfrei" in text:
        out.append("Wartungs- & schmierungsfrei")
    if "unter 2 s" in text:
        out.append("Zykluszeit unter 2 s")
    if "Objektsicherung" in text:
        out.append("Objektsicherung bei Energieausfall")
    if "Patent angemeldet" in text:
        out.append("Patent angemeldet")
    return out


def page(path, title, body, active="", description="", scripts=()):
    depth = path.count("/") + 1 if path else 0
    r = "../" * depth
    nav = [("Produkte", "produkte/index.html", "produkte"), ("Konfigurator", "konfigurator/index.html", "konfigurator"),
           ("Über GMG", "ueber-gmg/index.html", "ueber"),
           ("Downloads", "downloads/index.html", "downloads"), ("Kontakt", "kontakt/index.html", "kontakt")]
    nav_html = "".join(
        f'<a href="{r}{href}"{" class=\"nav__kfg\"" if key == "konfigurator" else ""}'
        f'{" aria-current=\"page\"" if key == active else ""}>{icon("cube") if key == "konfigurator" else ""}{label}</a>'
        for label, href, key in nav)
    fam_links = "".join(f'<li><a href="{r}produkte/{f["slug"]}/index.html">{e(f["name"])}</a></li>' for f in FAMILIES[:9])
    full_title = f"{title} | GMG – Modulare Greifersysteme" if title else "GMG – Modulare Greifersysteme aus Soest"
    desc = description or ('GMG – Gesellschaft für modulare Greifersysteme mbH, Soest. Der Erfinder der modularen '
                          'Greifersysteme: Greifer für Roboter, Maschinen und Handhabungsgeräte seit 1992.')
    out = f"""<!doctype html>
<html lang="de">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<meta name="robots" content="noindex, nofollow">
<title>{e(full_title)}</title>
<meta name="description" content="{e(desc)}">
<meta property="og:type" content="website">
<meta property="og:site_name" content="GMG – Modulare Greifersysteme">
<meta property="og:locale" content="de_DE">
<meta property="og:title" content="{e(full_title)}">
<meta property="og:description" content="{e(desc)}">
<meta property="og:url" content="{SITE_URL}{path + '/' if path else ''}">
<meta property="og:image" content="{SITE_URL}assets/img/gmg-vorschau.jpg">
<meta property="og:image:width" content="1200">
<meta property="og:image:height" content="630">
<meta property="og:image:alt" content="GMG – Modulare Greifersysteme direkt vom Erfinder">
<meta name="twitter:card" content="summary_large_image">
<link rel="icon" href="{r}assets/logo/gmg-3d-dezent-bildmarke.svg" type="image/svg+xml">
<link rel="alternate icon" href="{r}assets/img/gmg-bildmarke-3d.png" type="image/png">
<link rel="apple-touch-icon" href="{r}assets/img/apple-touch-icon.png">
<link rel="stylesheet" href="{r}assets/css/style.css?v={BUILD}">
</head>
<body>
<div class="draft">Entwurf / Testversion der neuen GMG-Webseite. Inhalte von gmg-system.com übernommen.</div>
<header class="header">
  <div class="wrap header__inner">
    <a class="brand" href="{r}index.html" aria-label="GMG Startseite">
      <img src="{r}assets/logo/gmg-3d-dezent-bildmarke.svg" alt="" width="92" height="101">
      <span class="brand__text"><span class="brand__name">GMG</span><span class="brand__tag">Modulare Greifersysteme</span></span>
    </a>
    <nav class="nav" aria-label="Hauptnavigation">{nav_html}</nav>
    <div class="header__cta">
      <a class="header__phone" href="{PHONE_LINK}">{icon('phone')}{PHONE}</a>
      <a class="btn btn--primary btn--sm" href="{r}kontakt/index.html">Anfrage stellen</a>
    </div>
    <button class="burger" aria-label="Menü" aria-expanded="false">{icon('menu')}</button>
  </div>
</header>
<main>
{body}
</main>
<footer class="footer">
  <div class="wrap">
    <div class="footer__grid">
      <div>
        <h4>GMG</h4>
        <p>GMG Gesellschaft für modulare Greifersysteme mbH<br>{ADDRESS}</p>
        <p><a href="{PHONE_LINK}">{PHONE}</a><br><a href="mailto:{MAIL}">{MAIL}</a></p>
      </div>
      <div><h4>Produkte</h4><ul>{fam_links}</ul></div>
      <div><h4>Unternehmen</h4><ul>
        <li><a href="{r}ueber-gmg/index.html">Über GMG</a></li>
        <li><a href="{r}downloads/index.html">Downloads</a></li>
        <li><a href="{r}kontakt/index.html">Kontakt</a></li>
        <li><a href="{MEDIA}agb_gmg-gmbh.pdf">AGB (PDF)</a></li>
      </ul></div>
      <div><h4>Direkt anfragen</h4>
        <p>Beschreiben Sie Ihre Handhabungsaufgabe. Wir finden den passenden Greifer.</p>
        <a class="btn btn--primary btn--sm" href="{r}kontakt/index.html">Anfrage stellen</a>
      </div>
    </div>
    <div class="footer__bottom">
      <span>© GMG Gesellschaft für modulare Greifersysteme mbH</span>
      <span><a href="{r}impressum/index.html">Impressum</a> · <a href="{r}datenschutz/index.html">Datenschutz</a></span>
    </div>
  </div>
</footer>
<div class="mobilebar">
  <a class="btn btn--ghost" href="{PHONE_LINK}">{icon('phone')}Anrufen</a>
  <a class="btn btn--ghost" href="{r}konfigurator/index.html">{icon('cube')}Konfigurator</a>
  <a class="btn btn--primary" href="{r}kontakt/index.html">{icon('mail')}Anfrage</a>
</div>
<script src="{r}assets/js/main.js?v={BUILD}"></script>{"".join(f'<script src="{r}{s}?v={BUILD}" defer></script>' for s in scripts)}
</body>
</html>
"""
    target = ROOT / path / "index.html" if path else ROOT / "index.html"
    target.parent.mkdir(parents=True, exist_ok=True)
    target.write_text(out, encoding="utf-8")
    return r


def img(r, name):
    return f"{r}assets/img/produkte/{name}.webp"


def crumbs(r, items):
    parts = [f'<a href="{r}index.html">Start</a>']
    for label, href in items:
        parts.append('<span aria-hidden="true">/</span>')
        parts.append(f'<a href="{r}{href}">{e(label)}</a>' if href else f"<span>{e(label)}</span>")
    return f'<nav class="crumbs" aria-label="Brotkrumen">{"".join(parts)}</nav>'


def kfg_banner(r):
    """Hinweis oben auf den Produktseiten: direkt zum Konfigurator."""
    return (f'<a class="kfg-banner" href="{r}konfigurator/index.html">{icon("cube")}'
            '<span><strong>Greifer-Konfigurator</strong><span>Ihr Teil als STEP/STL laden und den Greifer direkt in 3D testen</span></span>'
            f'<span class="kfg-banner__go">Jetzt testen {icon("arrow")}</span></a>')


def rel(path):
    return "../" * (path.count("/") + 1)


def family_card(r, fam):
    count = len(fam.get("series", [])) or 1
    label = f"{count} Baureihen" if count > 1 else "1 Baureihe"
    return f"""<a class="card" href="{r}produkte/{fam['slug']}/index.html">
  <div class="card__img"><img src="{img(r, fam['image'])}" alt="{e(fam['name'])}" loading="lazy"></div>
  <div class="card__body"><span class="badge">{label}</span><h3>{e(fam['name'])}</h3><p>{e(fam['teaser'])}</p>
  <span class="card__more">Ansehen {icon('arrow')}</span></div>
</a>"""


def cta_band(r, product=None):
    q = f"?produkt={product}" if product else ""
    title = f"Fragen zum {e(product)}?" if product else "Ihre Handhabungsaufgabe. Unsere Greiferlösung."
    return f"""<section class="cta-band">
  <div class="wrap cta-band__inner">
    <div>
      <h2>{title}</h2>
      <p class="lead">Rufen Sie uns an oder schicken Sie uns Ihre Anfrage, gern mit Zeichnung oder Skizze. Häufig entsteht daraus ein kundenspezifischer Greifer.</p>
      <div class="btn-row">
        <a class="btn btn--white" href="{r}kontakt/index.html{q}">Anfrage stellen {icon('arrow')}</a>
        <a class="btn btn--outline-white" href="{PHONE_LINK}">{icon('phone')}{PHONE}</a>
      </div>
    </div>
    <div class="contact-card">
      <div class="contact-card__person">
        <div class="avatar">Foto<br>folgt</div>
        <div><strong style="color:var(--ink)">Ihr Ansprechpartner</strong><br><span class="muted">Name und Funktion folgen</span></div>
      </div>
      <div class="contact-lines">
        <a href="{PHONE_LINK}">{icon('phone')}{PHONE}</a>
        <a href="mailto:{MAIL}">{icon('mail')}{MAIL}</a>
        <span>{icon('pin')}{ADDRESS}</span>
      </div>
    </div>
  </div>
</section>"""


def video_grid(videos, fallback):
    items = []
    for v in videos:
        label = v["label"] or fallback
        items.append(f"""<div class="video"><div class="video__frame">
  <button data-yt="{v['id']}" aria-label="Video abspielen: {e(label)}">
    <img src="https://i.ytimg.com/vi/{v['id']}/hqdefault.jpg" alt="" loading="lazy">
    <span class="video__play">{icon('play')}</span>
  </button></div><div class="video__label">{e(label)}</div></div>""")
    return (f'<div class="videos">{"".join(items)}</div>'
            '<p class="video__hint">Die Videos werden erst nach Klick von YouTube geladen.</p>')


def build_home():
    r = ""
    fams = "".join(family_card(r, f) for f in FAMILIES)
    home_videos = [{"id": "FLs6g3Z5qdc", "label": "Schwerlastgreifer S310 im Einsatz"},
                   {"id": "dITKkOq6PW4", "label": "Langarmgreifer I105"}]
    body = f"""
<section class="hero">
  <div class="hero__inner wrap">
    <div>
      <span class="eyebrow">Seit 1992 · Made in Soest</span>
      <h1>Modulare Greifersysteme <span>direkt vom Erfinder.</span></h1>
      <p class="lead">GMG entwickelt, fertigt und vertreibt ausschließlich Greifer: technische Hände für Roboter, Maschinen und Anlagen. Form, Fingeranzahl, Bewegung und Fingerlänge wählen Sie frei.</p>
      <div class="btn-row">
        <a class="btn btn--primary" href="kontakt/index.html">Greiferlösung anfragen {icon('arrow')}</a>
        <a class="btn btn--ghost" href="konfigurator/index.html">{icon('cube')}Greifer im Konfigurator testen</a>
      </div>
      <div class="hero__meta">
        <span>{icon('check')}International patentiert</span>
        <span>{icon('check')}Wartungs- &amp; schmierungsfrei</span>
        <span>{icon('check')}Kundenspezifische Lösungen</span>
      </div>
    </div>
    <div class="hero__visual">
      <div class="hero3d" data-roboter3d>
        <img class="hero3d__fallback" src="{img(r, 'b02')}" alt="GMG-Greifer B02">
        <canvas aria-label="3D-Szene: Roboter mit Greifer setzt beim Scrollen ein Kugellager von einem Tisch auf den anderen"></canvas>
      </div>
      <p class="hero3d__note">3D-Testszene mit Testgreifer Tentra T3 – wird durch einen GMG-Greifer ersetzt</p>
    </div>
  </div>
</section>

<section class="facts">
  <div class="wrap facts__grid">
    <div class="fact"><div class="fact__value">1992</div><div class="fact__label">gegründet in Soest</div></div>
    <div class="fact"><div class="fact__value">9</div><div class="fact__label">Produktfamilien</div></div>
    <div class="fact"><div class="fact__value">20+</div><div class="fact__label">Baureihen</div></div>
    <div class="fact"><div class="fact__value">10 Mio.</div><div class="fact__label">Hübe wartungsfrei</div></div>
    <div class="fact"><div class="fact__value">850 Nm</div><div class="fact__label">Belastbarkeit pro Achse und Finger</div></div>
  </div>
</section>

<section class="section" id="produkte">
  <div class="wrap">
    <div class="section__head">
      <span class="eyebrow">Produkte</span>
      <h2>Der passende Greifer für Ihre Aufgabe</h2>
      <p class="lead">Neun Produktfamilien, vom kompakten Winkelgreifer bis zum Schwerlastgreifer mit bis zu 850 Nm pro Achse und Finger.</p>
    </div>
    <div class="grid grid--3">{fams}</div>
  </div>
</section>

<section class="section section--alt">
  <div class="wrap">
    <div class="section__head">
      <span class="eyebrow">Das Prinzip</span>
      <h2>Was modular bei GMG bedeutet</h2>
      <p class="lead">Ein Baukasten, aus dem für jede Handhabungsaufgabe der passende Greifer entsteht. Wirtschaftlich anpassbar, wenn sich die Aufgabe ändert.</p>
    </div>
    <div class="grid grid--4">
      <div class="tile"><div class="tile__icon">{icon('shape')}</div><div class="tile__num">01</div><h3>Geometrische Form</h3><p>Hexagonal, rechteckig, quadratisch oder als Einzelmodul.</p></div>
      <div class="tile"><div class="tile__icon">{icon('fingers')}</div><div class="tile__num">02</div><h3>Anzahl der Finger</h3><p>Zwei bis sechs Finger, frei positionierbar.</p></div>
      <div class="tile"><div class="tile__icon">{icon('move')}</div><div class="tile__num">03</div><h3>Bewegungsform</h3><p>Parallel, schwenkend oder kombiniert, für jeden Finger einzeln.</p></div>
      <div class="tile"><div class="tile__icon">{icon('ruler')}</div><div class="tile__num">04</div><h3>Fingerlänge</h3><p>Variabel, für jeden Finger einzeln wählbar.</p></div>
    </div>
  </div>
</section>

<section class="section">
  <div class="wrap split">
    <div>
      <span class="eyebrow">Warum GMG</span>
      <h2>Robust, wartungsfrei und patentiert</h2>
      <p class="lead">Exakte Linearbewegungen der Greiffinger, realisiert ausschließlich mit einfachen Drehgelenken. Ohne gehärtete und geschmierte Führungsnuten, die bei langen Fingern zum Klemmen neigen.</p>
      <ul class="checklist">
        <li>{icon('check')}<span><strong>Erfinder der modularen Greifersysteme</strong>, dazu der Parallel-Winkelgreifer und der Schwerlastgreifer. International patentiert und mehrfach ausgezeichnet.</span></li>
        <li>{icon('check')}<span><strong>Wartungs- und schmierungsfreie Gleitlager</strong>, viele Baureihen wartungsfrei bis 10 Mio. Hübe.</span></li>
        <li>{icon('check')}<span><strong>Aluminiumlegierungen und nichtrostender Stahl</strong>: abwaschbar, rostfrei, langlebig und 100 % wiederverwertbar.</span></li>
        <li>{icon('check')}<span><strong>Kundenspezifische Greifer</strong>: Aus dem engen Kontakt mit Ihnen entstehen neue Lösungen.</span></li>
      </ul>
    </div>
    <div>{video_grid(home_videos, '')}</div>
  </div>
</section>

{cta_band(r)}
"""
    page("", "", body, scripts=["assets/js/roboter3d.js"])


def build_overview():
    path = "produkte"
    r = rel(path)
    fams = "".join(family_card(r, f) for f in FAMILIES)
    rows = []
    for fam, p, ppath in products():
        code, desc, _ = heading(p)
        rows.append(f'<tr><td><a href="{r}{ppath}/index.html">{e(code)}</a></td><td>{e(desc)}</td><td>{e(fam["name"])}</td></tr>')
    body = f"""
<section class="page-head"><div class="wrap">
  {crumbs(r, [('Produkte', None)])}
  {kfg_banner(r)}
  <h1>Produkte</h1>
  <p class="lead">Neun Produktfamilien mit über 20 Baureihen: Greifer für Roboter, Maschinen und Handhabungsgeräte, modular aufgebaut und auf Wunsch kundenspezifisch.</p>
</div></section>
<section class="section"><div class="wrap"><div class="grid grid--3">{fams}</div></div></section>
<section class="section section--alt"><div class="wrap">
  <div class="section__head"><span class="eyebrow">Übersicht</span><h2>Alle Baureihen auf einen Blick</h2></div>
  <div class="table-wrap"><table><thead><tr><th>Baureihe</th><th>Beschreibung</th><th>Familie</th></tr></thead><tbody>{''.join(rows)}</tbody></table></div>
</div></section>
{cta_band(r)}"""
    page(path, "Produkte", body, "produkte")


def build_family(fam):
    path = f"produkte/{fam['slug']}"
    r = rel(path)
    cards = []
    for p in fam["series"]:
        code, desc, _ = heading(p)
        cards.append(f"""<a class="card" href="{r}{path}/{p['slug']}/index.html">
  <div class="card__img"><img src="{img(r, p['images'][0])}" alt="{e(code)}" loading="lazy"></div>
  <div class="card__body"><h3>{e(code)}</h3><p>{e(desc)}</p><span class="card__more">Details &amp; Downloads {icon('arrow')}</span></div></a>""")
    body = f"""
<section class="page-head"><div class="wrap">
  {crumbs(r, [('Produkte', 'produkte/index.html'), (fam['name'], None)])}
  {kfg_banner(r)}
  <h1>{e(fam['name'])}</h1>
  <p class="lead">{e(fam['teaser'])}</p>
</div></section>
<section class="section"><div class="wrap"><div class="grid grid--3">{''.join(cards)}</div></div></section>
{cta_band(r)}"""
    page(path, fam["name"], body, "produkte", fam["teaser"])


def build_product(fam, p, path):
    r = rel(path)
    code, desc, title = heading(p)
    single = "product" in fam
    trail = [("Produkte", "produkte/index.html")]
    if not single:
        trail.append((fam["name"], f"produkte/{fam['slug']}/index.html"))
    trail.append((code, None))

    thumbs = ""
    if len(p["images"]) > 1:
        thumbs = '<div class="gallery__thumbs">' + "".join(
            f'<button type="button" data-src="{img(r, i)}" aria-pressed="{"true" if n == 0 else "false"}" aria-label="Ansicht {n + 1}"><img src="{img(r, i)}" alt=""></button>'
            for n, i in enumerate(p["images"])) + "</div>"

    features = "".join(f"<li>{icon('check')}<span>{e(f)}</span></li>" for f in p["features"])
    chip_html = "".join(f'<span class="chip">{e(c)}</span>' for c in chips(p))
    notes = [n for n in p["notes"] if n not in (fam["teaser"], "Patent angemeldet!")]
    note_html = "".join(f'<p class="note"><strong>Auslegung:</strong> {e(n)}</p>' if "Luftdruck" in n else f"<p>{e(n)}</p>" for n in notes)

    dl = "".join(f'<li><a href="{MEDIA}{d["file"]}" target="_blank" rel="noopener">{icon("file")}{e(d["label"])}<small>PDF</small></a></li>' for d in p["downloads"])
    step_mail = (f"mailto:{MAIL}?subject=" + html.escape(f"Anfrage STEP-Daten {code}") +
                 "&amp;body=" + html.escape("Sehr geehrte Damen und Herren,%0D%0A%0D%0Abitte senden Sie mir die STEP-Daten für den Greifer " + code + ".%0D%0A%0D%0AVielen Dank."))

    siblings = ""
    if not single:
        links = "".join(
            f'<a href="{r}produkte/{fam["slug"]}/{s["slug"]}/index.html"{" aria-current=\"page\"" if s is p else ""}>{e(heading(s)[0])}</a>'
            for s in fam["series"])
        siblings = f'<div class="panel"><h3>Weitere Baureihen: {e(fam["name"])}</h3><div class="siblings">{links}</div></div>'

    videos = ""
    if p["videos"]:
        videos = f"""<section class="section section--alt"><div class="wrap">
  <div class="section__head"><span class="eyebrow">Video</span><h2>{e(code)} in Bewegung</h2></div>
  {video_grid(p['videos'], code)}
</div></section>"""

    body = f"""
<section class="page-head"><div class="wrap">
  {crumbs(r, trail)}
  {kfg_banner(r)}
  <span class="eyebrow">{e(fam['name'])}</span>
  <h1>{e(code)} <span class="muted" style="font-weight:500">{e(desc)}</span></h1>
</div></section>
<section class="section"><div class="wrap product">
  <div>
    <div class="gallery" data-gallery>
      <div class="gallery__main"><img src="{img(r, p['images'][0])}" alt="{e(code)} {e(desc)}"></div>
      {thumbs}
    </div>
    {siblings}
  </div>
  <div>
    <p class="lead">{e(title)}{(' · ' + e(p['subtitle'])) if p['subtitle'] and p['subtitle'] != desc else ''}</p>
    <div class="chips">{chip_html}</div>
    {note_html}
    {f'<h3>Merkmale</h3><ul class="checklist">{features}</ul>' if features else ''}
    <div class="btn-row" style="margin-top:28px">
      <a class="btn btn--primary" href="{r}kontakt/index.html?produkt={code}">Anfrage zum {e(code)} {icon('arrow')}</a>
      <a class="btn btn--ghost" href="{PHONE_LINK}">{icon('phone')}Anrufen</a>
    </div>
    <div class="panel">
      <h3>Downloads</h3>
      <ul class="dl-list">{dl}<li><a href="{step_mail}">{icon('cube')}STEP-/CAD-Daten anfordern<small>per E-Mail</small></a></li></ul>
    </div>
  </div>
</div></section>
{videos}
{cta_band(r, code)}"""
    page(path, f"{code} {desc}", body, "produkte", f"{code} – {desc}. {fam['teaser']}")


def configurator_block(r):
    """Greifer-Konfigurator (Startseite und eigene Seite), Logik in tools/konfigurator/konfigurator.js."""
    return f"""<section class="section kfg-section"><div class="wrap">
  <div class="kfg" data-konfigurator data-base="{r}">
    <div class="kfg__panel">
      <div class="kfg__step"><span class="kfg__num">1</span><h3>Teil laden</h3></div>
      <div class="kfg__source" role="group" aria-label="Teil auswählen">
        <button type="button" class="kfg__src-file" data-src="datei">{icon('download')}<span><strong>STEP-/STL-Datei</strong><small>eigenes Teil laden</small></span></button>
        <div class="kfg__seg">
          <button type="button" data-src="zylinder">Zylinder</button>
          <button type="button" data-src="quader">Quader</button>
          <button type="button" data-src="rohr">Rohr / Ring</button>
          <button type="button" data-src="kasten">Kasten offen</button>
        </div>
        <div class="kfg__examples"><span class="muted">Beispielteil:</span>
          <button type="button" class="btn btn--ghost btn--xs" data-src="felge">Felge Ø 400 mm</button>
        </div>
      </div>
      <div id="kfg-quelle-datei" class="kfg__box" hidden>
        <label class="kfg__drop">
          <input id="kfg-file" type="file" accept=".step,.stp,.stl">
          <span class="kfg__drop-title">{icon('download')}Datei hierher ziehen</span>
          <span class="muted">oder klicken zum Auswählen · STEP, STP, STL · max. 100 MB</span>
        </label>
        <p id="kfg-datei" class="kfg__file muted">Noch keine Datei geladen.</p>
        <div class="field"><label for="kfg-einheit">Einheit der Datei</label>
          <select id="kfg-einheit"><option value="auto">Automatisch</option><option value="mm">Millimeter</option><option value="cm">Zentimeter</option><option value="m">Meter</option></select>
          <small id="kfg-einheit-info" class="muted"></small></div>
      </div>
      <div id="kfg-quelle-form" class="kfg__box">
        <div id="kfg-form-felder" class="kfg__fields"></div>
        <p id="kfg-form-hinweis" class="kfg__warn" role="status"></p>
      </div>
      <div class="field"><label for="kfg-material">Werkstoff</label>
        <select id="kfg-material">
          <option value="7850">Stahl</option><option value="2700">Aluminium</option><option value="1200">Kunststoff</option>
          <option value="600">Holz</option><option value="150">Karton / leichte Verpackung</option>
          <option value="1050" data-weich="1">Weich: Teig, Fleisch, Lebensmittel</option>
        </select></div>
      <dl class="kfg__facts"><dt>Abmessungen</dt><dd id="kfg-masse">–</dd><dt>Gewicht</dt><dd id="kfg-gewicht">–</dd></dl>
      <div class="kfg__turn"><span class="muted">Teil um 90° drehen:</span>
        <button type="button" class="btn btn--ghost btn--xs" id="kfg-dreh-y">↻ im Kreis</button>
        <button type="button" class="btn btn--ghost btn--xs" id="kfg-dreh-x">⤾ nach vorn kippen</button>
        <button type="button" class="btn btn--ghost btn--xs" id="kfg-dreh-z">⤿ zur Seite kippen</button></div>

      <div class="kfg__step"><span class="kfg__num">2</span><h3>Greifer</h3></div>
      <div id="kfg-vorschlag" class="kfg__list"></div>
      <p class="kfg__small muted">Hier erscheinen die Greifer, für die ein 3D-Modell vorliegt. Weitere GMG-Greifer folgen.</p>

    </div>
    <div class="kfg__stage">
    <div class="kfg__view">
      <canvas aria-label="3D-Ansicht: Teil und Greifer"></canvas>
      <div class="kfg__hint">Ziehen zum Drehen · Scrollen zum Zoomen</div>
      <div class="kfg__badge" id="kfg-badge">Greifer Capit (Testmodell) in Originalgröße</div>
      <noscript><p class="kfg__nojs">Der Konfigurator benötigt JavaScript.</p></noscript>
      <p class="kfg__offline">Der 3D-Konfigurator läuft nur auf der Webseite (online).</p>
      <div class="kfg__progress" hidden role="progressbar" aria-label="Ladefortschritt">
        <svg viewBox="0 0 120 120"><circle class="kfg__ring-bg" cx="60" cy="60" r="50" pathLength="100"/><circle class="kfg__ring-bar" cx="60" cy="60" r="50" pathLength="100"/></svg>
        <span class="kfg__ring-pct">0 %</span>
        <span class="kfg__ring-label">Datei wird gelesen</span>
      </div>
    </div>
      <div class="kfg__test">
      <div class="kfg__step"><span class="kfg__num">3</span><h3>Greifen testen</h3></div>
      <div class="field"><label for="kfg-hoehe">Höhe: Greifer absenken</label><input id="kfg-hoehe" type="range" min="0" max="100" value="85"></div>
      <div class="field"><label for="kfg-zu" id="kfg-zu-label">Greifer schließen</label><input id="kfg-zu" type="range" min="0" max="100" value="0"></div>
      <div class="field"><label for="kfg-x">Links / rechts</label><input id="kfg-x" type="range" min="-100" max="100" value="0"></div>
      <div class="field"><label for="kfg-z">Vorne / hinten</label><input id="kfg-z" type="range" min="-100" max="100" value="0"></div>
      <div class="kfg__seg kfg__seg--2" role="group" aria-label="Greifart">
        <button type="button" data-griff="aussen" aria-pressed="true">Außen greifen</button>
        <button type="button" data-griff="innen" id="kfg-griff-innen">Innen greifen</button>
      </div>
      <button type="button" class="btn btn--ghost btn--xs kfg__center" id="kfg-zentrieren">⌖ Greifer über dem Teil zentrieren</button>
      <p id="kfg-status" class="kfg__status is-info" role="status">Teil wird geladen …</p>
      <a id="kfg-anfrage" class="btn btn--primary" href="mailto:{MAIL}">Anfrage mit diesem Teil {icon('arrow')}</a>
      </div>
    </div>
  </div>
</div></section>"""


def simulator_block():
    """Greifer-Simulator unter dem Konfigurator: Mini-Anlage aus drei Stationen, Logik in tools/konfigurator/simulator.js."""
    return f"""<section class="section section--alt sim-section" id="simulator" data-simulator data-mail="{MAIL}"><div class="wrap">
  <div class="section__head">
    <span class="eyebrow">Greifer-Simulator</span>
    <h2>Ihr Greifer in Ihrer Anlage</h2>
    <p class="lead">Stellen Sie aus drei Stationen eine kleine Anlage zusammen: wie das Produkt ankommt, welches Gerät den Greifer führt und wohin das Produkt geht. Der Greifer aus dem Konfigurator wird übernommen.</p>
  </div>
  <div class="sim__intro">
    <button type="button" class="btn btn--primary" id="sim-open">{icon('cube')}Anlage aufbauen</button>
    <span class="muted">Am besten am Computer.</span>
  </div>
  <div class="sim" hidden>
    <div class="sim__bar">
      <div class="sim__gripper"><span class="muted">Greifer</span> <strong id="sim-greifer">–</strong></div>
      <label class="sim__tpl"><span class="muted">Vorlage</span>
        <select id="sim-vorlage"></select></label>
      <ol class="sim__steps" id="sim-steps"><li>Vorlage</li><li>Produkt</li><li>Stationen</li><li>Simulation</li></ol>
    </div>
    <div class="sim__body">
      <div class="sim__slots" id="sim-slots"></div>
      <div class="sim__view"><canvas></canvas>
        <div class="sim__hint">Ziehen zum Drehen · Scrollen zum Zoomen · Station anklicken zum Ändern</div>
        <div class="sim__empty" id="sim-empty" hidden>Wählen Sie links für jede Station ein Modul.</div>
      </div>
      <div class="sim__params" id="sim-params"></div>
    </div>
    <div class="sim__result">
      <button type="button" class="btn btn--primary" id="sim-run">Simulation starten</button>
      <dl class="sim__kpi"><div><dt>Taktzeit (ca.)</dt><dd id="sim-takt">–</dd></div><div><dt>Teile pro Stunde (ca.)</dt><dd id="sim-stunde">–</dd></div></dl>
      <p class="sim__note muted" id="sim-hinweis">Die Simulation zeigt den Ablauf. Ob und wie sicher ein Greifer Ihr Teil hält, klären wir gern persönlich.</p>
      <div class="sim__cta">
        <a class="btn btn--primary" id="sim-anfrage" href="mailto:{MAIL}">Angebot für diese Anlage anfragen {icon('arrow')}</a>
        <button type="button" class="btn btn--ghost" id="sim-teilen">Anlage teilen</button>
      </div>
    </div>
  </div>
</div></section>"""


def build_configurator():
    path = "konfigurator"
    r = rel(path)
    body = f"""
<section class="page-head"><div class="wrap">
  {crumbs(r, [('Konfigurator', None)])}
  <span class="eyebrow">Greifer-Konfigurator</span>
  <h1>Welcher Greifer greift Ihr Teil?</h1>
  <p class="lead">Laden Sie Ihr Teil als STEP- oder STL-Datei oder wählen Sie eine Grundform mit Ihren Maßen. Dann testen Sie direkt in 3D, wie der Greifer zufasst. Die Datei bleibt auf Ihrem Rechner und wird nicht hochgeladen.</p>
</div></section>
{configurator_block(r)}
{simulator_block()}
{cta_band(r)}"""
    page(path, "Greifer-Konfigurator", body, "konfigurator",
         "Teil als STEP-Datei laden, passenden GMG-Greifer finden und das Greifen direkt in 3D testen.",
         scripts=["assets/js/konfigurator.js"])


def build_about():
    path = "ueber-gmg"
    r = rel(path)
    body = f"""
<section class="page-head"><div class="wrap">
  {crumbs(r, [('Über GMG', None)])}
  <h1>Über GMG</h1>
  <p class="lead">GMG befasst sich ausschließlich mit der Entwicklung, Herstellung und dem Vertrieb von Greifern und ist der Erfinder der modularen Greifersysteme.</p>
</div></section>
<section class="section"><div class="wrap split">
  <div class="prose">
    <span class="eyebrow">Unsere Geschichte</span>
    <h2 style="margin-top:0">Technische Hände für flexible Automation</h2>
    <p>1992 wurde GMG mit dem Ziel gegründet, hochwertige und höchstflexible Greifer als technische Hände für Roboter, Maschinen und Handhabungsgeräte zu entwickeln und zu vermarkten.</p>
    <p>Flexible Handhabung, flexible Montage, flexible Automation, Just-in-time-Fertigung und Lean Production brauchen Greifer, die sich einfach und wirtschaftlich an neue Aufgaben anpassen lassen.</p>
    <p>Dafür entwickelte ein Team von rund zwölf Ingenieuren in Kooperation zwischen GMG, Industrie und Hochschulen in fünf Jahren die erste Generation der modularen Greifer. Sie unterschied sich erheblich vom damaligen Stand der Technik.</p>
    <p>Heute gelten GMG-Greifersysteme als das flexibelste und vielseitigste Greifersystem, das in Serie gebaut und industriell angewendet wird. Sie sind international patentiert und mehrfach ausgezeichnet.</p>
  </div>
  <div><img src="{img(r, 'home-01')}" alt="GMG-Greifersystem" style="margin:0 auto;max-height:420px"></div>
</div></section>
<section class="section section--alt"><div class="wrap">
  <div class="section__head"><span class="eyebrow">Meilensteine</span><h2>Innovationen von GMG</h2></div>
  <div class="grid grid--4">
    <div class="tile"><div class="tile__num">1992</div><h3>Gründung</h3><p>Gründung der GMG Gesellschaft für modulare Greifersysteme mbH in Soest.</p></div>
    <div class="tile"><div class="tile__num">Erfindung</div><h3>Modulare Greifersysteme</h3><p>Freie Wahl von Form, Fingeranzahl, Bewegungsform und Fingerlänge.</p></div>
    <div class="tile"><div class="tile__num">Erfindung</div><h3>Parallel-Winkelgreifer &amp; Schwerlastgreifer</h3><p>In den Industrienationen patentiert und richtungweisend.</p></div>
    <div class="tile"><div class="tile__num">Neu</div><h3>Langarmgreifer I105</h3><p>Schlanker 3-Finger-Greifer für den Griff in die Ecken von Kisten. Patent angemeldet.</p></div>
  </div>
</div></section>
<section class="section"><div class="wrap">
  <div class="section__head"><span class="eyebrow">Technik &amp; Werkstoffe</span><h2>Gebaut für den Dauereinsatz</h2></div>
  <div class="grid grid--3">
    <div class="tile"><div class="tile__icon">{icon('tool')}</div><h3>Präzise Kinematik</h3><p>Exakte Linearbewegungen der Greiffinger ausschließlich mit einfachen Drehgelenken, ohne Führungsnuten, die bei langen Fingern klemmen.</p></div>
    <div class="tile"><div class="tile__icon">{icon('drop')}</div><h3>Wartungs- &amp; schmierungsfrei</h3><p>Gleitlager ohne Schmierung. Umweltfreundlich, abwaschbar und langlebig.</p></div>
    <div class="tile"><div class="tile__icon">{icon('shield')}</div><h3>Aluminium &amp; Edelstahl</h3><p>Al-Legierungen und nichtrostender Stahl: rostfrei und zu 100 % wiederverwertbar.</p></div>
  </div>
</div></section>
{cta_band(r)}"""
    page(path, "Über GMG", body, "ueber")


def build_contact():
    path = "kontakt"
    r = rel(path)
    opts = '<option value="">Noch offen / Beratung gewünscht</option>' + "".join(
        f'<option value="{e(heading(p)[0])}">{e(heading(p)[0])} – {e(heading(p)[1])}</option>' for _, p, _ in products())
    body = f"""
<section class="page-head"><div class="wrap">
  {crumbs(r, [('Kontakt', None)])}
  <h1>Kontakt</h1>
  <p class="lead">Am schnellsten erreichen Sie uns telefonisch. Oder schicken Sie uns Ihre Anfrage, gern mit Zeichnung oder Skizze Ihrer Handhabungsaufgabe.</p>
</div></section>
<section class="section"><div class="wrap split" style="align-items:start">
  <form class="form" id="anfrage" novalidate>
    <div class="form__row">
      <div class="field"><label for="f-name">Name <span class="req">*</span></label><input id="f-name" name="name" required autocomplete="name"></div>
      <div class="field"><label for="f-firma">Firma</label><input id="f-firma" name="firma" autocomplete="organization"></div>
    </div>
    <div class="form__row">
      <div class="field"><label for="f-mail">E-Mail <span class="req">*</span></label><input id="f-mail" name="email" type="email" required autocomplete="email"></div>
      <div class="field"><label for="f-tel">Telefon</label><input id="f-tel" name="telefon" type="tel" autocomplete="tel"></div>
    </div>
    <div class="field"><label for="f-prod">Produkt</label><select id="f-prod" name="produkt">{opts}</select></div>
    <div class="field"><label for="f-msg">Ihre Nachricht <span class="req">*</span></label><textarea id="f-msg" name="nachricht" required placeholder="Was soll gegriffen werden? Gewicht, Abmessungen, Taktzeit …"></textarea></div>
    <label class="check"><input type="checkbox" required> <span>Ich habe die <a href="{r}datenschutz/index.html">Hinweise zum Datenschutz</a> gelesen. <span class="req">*</span></span></label>
    <div><button class="btn btn--primary" type="submit">Anfrage senden {icon('arrow')}</button></div>
    <p class="muted" style="font-size:.85rem;margin:0">Entwurf: Beim Absenden öffnet sich Ihr E-Mail-Programm mit der vorausgefüllten Anfrage. Zeichnungen können Sie dort direkt anhängen.</p>
  </form>
  <div>
    <div class="contact-card" style="border:1px solid var(--line)">
      <div class="contact-card__person">
        <div class="avatar">Foto<br>folgt</div>
        <div><strong style="color:var(--ink)">Ihr Ansprechpartner</strong><br><span class="muted">Name und Funktion folgen</span></div>
      </div>
      <div class="contact-lines">
        <a href="{PHONE_LINK}">{icon('phone')}{PHONE}</a>
        <a href="mailto:{MAIL}">{icon('mail')}{MAIL}</a>
        <a href="https://www.google.com/maps/search/?api=1&amp;query=Werler+Landstra%C3%9Fe+6-8+59494+Soest" target="_blank" rel="noopener">{icon('pin')}{ADDRESS}</a>
      </div>
    </div>
    <div class="panel">
      <h3>GMG Gesellschaft für modulare Greifersysteme mbH</h3>
      <p style="margin:0">Werler Landstraße 6–8<br>59494 Soest<br>Deutschland</p>
    </div>
  </div>
</div></section>"""
    page(path, "Kontakt", body, "kontakt")


def build_downloads():
    path = "downloads"
    r = rel(path)
    rows = []
    for fam, p, ppath in products():
        code, desc, _ = heading(p)
        docs = " · ".join(f'<a href="{MEDIA}{d["file"]}" target="_blank" rel="noopener">{e(d["label"])}</a>' for d in p["downloads"])
        rows.append(f'<tr data-dl-row><td><a href="{r}{ppath}/index.html">{e(code)}</a><br><span class="muted">{e(desc)}</span></td><td>{e(fam["name"])}</td><td>{docs}</td></tr>')
    rows.append(f'<tr data-dl-row><td><strong>AGB</strong><br><span class="muted">Allgemeine Geschäftsbedingungen</span></td><td>–</td><td><a href="{MEDIA}agb_gmg-gmbh.pdf" target="_blank" rel="noopener">AGB GMG GmbH</a></td></tr>')
    body = f"""
<section class="page-head"><div class="wrap">
  {crumbs(r, [('Downloads', None)])}
  <h1>Downloads</h1>
  <p class="lead">Technische Datenblätter, Ersatzteillisten und Betriebsanleitungen für alle Baureihen. STEP-/CAD-Daten senden wir Ihnen gern auf Anfrage.</p>
</div></section>
<section class="section"><div class="wrap">
  <div class="field search"><label for="dl-search">Suchen</label><input id="dl-search" type="search" placeholder="z. B. C10, Winkelgreifer, Ersatzteilliste"></div>
  <div class="table-wrap"><table><thead><tr><th>Baureihe</th><th>Familie</th><th>Dokumente (PDF)</th></tr></thead><tbody>{''.join(rows)}</tbody></table></div>
</div></section>
{cta_band(r)}"""
    page(path, "Downloads", body, "downloads")


def build_legal():
    path = "impressum"
    r = rel(path)
    body = f"""
<section class="page-head"><div class="wrap">{crumbs(r, [('Impressum', None)])}<h1>Impressum</h1></div></section>
<section class="section"><div class="wrap prose">
  <p><strong>GMG Gesellschaft für modulare Greifersysteme mbH</strong><br>Werler Landstraße 6-8<br>59494 Soest</p>
  <p>Telefon: <a href="{PHONE_LINK}">{PHONE}</a><br>E-Mail: <a href="mailto:{MAIL}">{MAIL}</a></p>
  <p>Vertretungsberechtigter: Prof. Dr.-Ing. M. Mohsen Saadat</p>
  <p>Umsatzsteuer-Identifikationsnummer gemäß § 27 a Umsatzsteuergesetz: DE 1622 72004<br>Handelsregister: HRB 5749, Amtsgericht Arnsberg</p>
  <p>Unsere Allgemeinen Geschäftsbedingungen: <a href="{MEDIA}agb_gmg-gmbh.pdf">AGB GMG GmbH (PDF)</a></p>
  <h2>Haftungsausschluss</h2>
  <p>GMG mbH stellt die Inhalte dieser Internetseiten mit großer Sorgfalt zusammen und sorgt für deren regelmäßige Aktualisierung. Die Angaben dienen dennoch nur der unverbindlichen allgemeinen Information und ersetzen nicht die eingehende individuelle Beratung für eine Kaufentscheidung. Die technischen Merkmale und Ausstattungen der beschriebenen Produkte und Leistungen sind lediglich Beispiele. Jederzeitige Änderungen bleiben vorbehalten.</p>
  <h2>Copyright</h2>
  <p>Sämtliche Texte, Bilder und andere auf der Internetseite veröffentlichten Werke sind durch das Urheberrecht geschützt. Jede Vervielfältigung, Verbreitung, Speicherung, Übermittlung, Sendung und Wieder- bzw. Weitergabe ist ohne schriftliche Genehmigung der GMG mbH ausdrücklich untersagt.</p>
  <p class="note">Entwurf: Der vollständige Impressumstext wird beim Livegang aktualisiert (u. a. Angaben zur neuen Webagentur).</p>
</div></section>"""
    page(path, "Impressum", body)

    path = "datenschutz"
    r = rel(path)
    body = f"""
<section class="page-head"><div class="wrap">{crumbs(r, [('Datenschutz', None)])}<h1>Datenschutzerklärung</h1></div></section>
<section class="section"><div class="wrap prose">
  <p class="note">Entwurf: Die Datenschutzerklärung wird beim Livegang an die neue Seite angepasst (Hosting, Kontaktformular, YouTube-Videos mit Zwei-Klick-Lösung). Bis dahin gilt die <a href="https://www.gmg-system.com/datenschutz">Datenschutzerklärung auf gmg-system.com</a>.</p>
  <h2>Verantwortlicher</h2>
  <p>GMG Gesellschaft für modulare Greifersysteme mbH<br>Werler Landstraße 6-8, 59494 Soest<br>Telefon: {PHONE} · <a href="mailto:{MAIL}">{MAIL}</a></p>
  <h2>Datenschutzanfragen</h2>
  <p>Die Bestellung eines Datenschutzbeauftragten ist nicht erforderlich. Anfragen zum Datenschutz richten Sie bitte an Prof. Dr.-Ing. M. Mohsen Saadat unter der oben genannten Anschrift.</p>
</div></section>"""
    page(path, "Datenschutz", body)


def main():
    build_home()
    build_overview()
    for fam in FAMILIES:
        if "series" in fam:
            build_family(fam)
    for fam, p, path in products():
        build_product(fam, p, path)
    build_configurator()
    build_about()
    build_contact()
    build_downloads()
    build_legal()
    print("Fertig:", sum(1 for p in ROOT.rglob("index.html") if p.parts[len(ROOT.parts)] != "logo-varianten"), "Seiten")


if __name__ == "__main__":
    main()
