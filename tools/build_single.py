#!/usr/bin/env python3
"""Packt die erzeugte Webseite in EINE HTML-Datei (vorschau/GMG-Webseite-Vorschau.html).

Die Datei enthält CSS, JavaScript, alle Bilder und alle Seiten. Sie lässt sich per
Doppelklick im Browser öffnen, ohne Entpacken und ohne Server. Seitenwechsel laufen
über die Adresse nach dem #, z. B. #/produkte/hexagonal/c10.

Aufruf (nach tools/build.py):  python3 tools/build_single.py
"""
import base64
import json
import pathlib
import posixpath
import re

ROOT = pathlib.Path(__file__).resolve().parent.parent
OUT = ROOT / "vorschau" / "GMG-Webseite-Vorschau.html"
SKIP = ("vorschau", "docs", "tools", "data", "assets", "logo-varianten")


def rewrite(fragment, page_dir):
    """Relative Seitenlinks auf #/-Routen, Bildpfade auf Bildnamen umstellen."""
    def href(m):
        url = m.group(1)
        if re.match(r"^(https?:|mailto:|tel:|#)", url):
            return m.group(0)
        path, _, query = url.partition("?")
        target = posixpath.normpath(posixpath.join(page_dir, path))
        if not target.endswith("index.html"):
            return m.group(0)
        route = posixpath.dirname(target)
        return f'href="#/{route}{"?" + query if query else ""}"'

    def img(m):
        attr, name = m.group(1), m.group(2)
        return f'{"data-img" if attr == "src" else "data-img-full"}="{name}"'

    fragment = re.sub(r'href="([^"]*)"', href, fragment)
    fragment = re.sub(r'(?<=<image )([^>]*?)href="(?:\.\./)*assets/img/hero/([\w.-]+)\.webp"',
                      lambda m: f'{m.group(1)}data-img-href="{m.group(2)}"', fragment)
    return re.sub(r'(src|data-src)="(?:\.\./)*assets/(?:img|logo)/(?:produkte/)?([\w.-]+)\.(?:png|svg|webp)"', img, fragment)


def main():
    pages, titles = {}, {}
    for f in sorted(ROOT.rglob("index.html")):
        rel = f.relative_to(ROOT)
        if rel.parts[0] in SKIP:
            continue
        page_dir = "" if str(rel.parent) == "." else str(rel.parent)
        doc = f.read_text(encoding="utf-8")
        pages[page_dir] = rewrite(re.search(r"<main>(.*)</main>", doc, re.S).group(1), page_dir or ".")
        titles[page_dir] = re.search(r"<title>(.*?)</title>", doc).group(1)

    shell = rewrite((ROOT / "index.html").read_text(encoding="utf-8"), ".")
    images = {p.stem: "data:image/png;base64," + base64.b64encode(p.read_bytes()).decode()
              for p in sorted((ROOT / "assets" / "img").rglob("*.png"))
              if p.parent.name == "img"}
    images.update({p.stem: "data:image/webp;base64," + base64.b64encode(p.read_bytes()).decode()
                   for p in sorted((ROOT / "assets" / "img").rglob("*.webp"))})
    images.update({p.stem: "data:image/svg+xml;base64," + base64.b64encode(p.read_bytes()).decode()
                   for p in sorted((ROOT / "assets" / "logo").glob("gmg-3d-dezent*.svg"))})
    css = (ROOT / "assets" / "css" / "style.css").read_text(encoding="utf-8")
    js = (ROOT / "assets" / "js" / "main.js").read_text(encoding="utf-8")

    templates = "".join(f'<template id="p:{k}">{v}</template>\n' for k, v in pages.items())
    router = f"""<script>
var GMG_IMG = {json.dumps(images)};
var GMG_TITLES = {json.dumps(titles, ensure_ascii=False)};
function gmgImages(root) {{
  root.querySelectorAll('[data-img]').forEach(function (el) {{ el.src = GMG_IMG[el.dataset.img] || ''; }});
  root.querySelectorAll('[data-img-full]').forEach(function (el) {{ el.dataset.src = GMG_IMG[el.dataset.imgFull] || ''; }});
  root.querySelectorAll('[data-img-href]').forEach(function (el) {{ el.setAttribute('href', GMG_IMG[el.dataset.imgHref] || ''); }});
}}
function gmgRoute() {{
  var route = decodeURIComponent(location.hash.replace(/^#\\/?/, '').split('?')[0]).replace(/\\/$/, '');
  var tpl = document.getElementById('p:' + route) || document.getElementById('p:');
  var main = document.querySelector('main');
  main.innerHTML = tpl.innerHTML;
  gmgImages(main);
  document.title = GMG_TITLES[route] || GMG_TITLES[''];
  var top = route.split('/')[0];
  document.querySelectorAll('.nav a').forEach(function (a) {{
    var t = a.getAttribute('href').replace('#/', '').split('/')[0];
    if (t === top && top) a.setAttribute('aria-current', 'page'); else a.removeAttribute('aria-current');
  }});
  document.querySelector('.header').classList.remove('is-open');
  window.scrollTo(0, 0);
  if (window.gmgInit) window.gmgInit();
}}
window.addEventListener('hashchange', gmgRoute);
</script>"""

    out = re.sub(r'<link rel="stylesheet"[^>]*>', lambda _: f"<style>\n{css}</style>", shell)
    out = re.sub(r'<link rel="alternate icon"[^>]*>\n', '', out)
    out = re.sub(r'<link rel="icon"[^>]*>', lambda _: f'<link rel="icon" href="{images["gmg-3d-dezent-bildmarke"]}">', out)
    out = re.sub(r"<main>.*</main>", "<main></main>", out, flags=re.S)
    out = re.sub(r'<script src="[^"]*main\.js"></script>',
                 lambda _: f"{templates}{router}\n<script>gmgImages(document);gmgRoute();</script>\n<script>\n{js}</script>", out)
    OUT.parent.mkdir(exist_ok=True)
    OUT.write_text(out, encoding="utf-8")
    print(f"Fertig: {OUT.relative_to(ROOT)} ({len(pages)} Seiten, {OUT.stat().st_size / 1e6:.1f} MB)")


if __name__ == "__main__":
    main()
