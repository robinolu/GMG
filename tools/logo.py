#!/usr/bin/env python3
"""Zeichnet drei Varianten des GMG-Logos als SVG und eine Vergleichsseite.

Aufbau des Originals: eine Hand aus Modulen, um ~37° gedreht. Drei Finger aus je
vier bis fünf Kachel-Segmenten, ein durchgehender Balken, unten ein abgespreizter
Daumen aus drei Segmenten. Darunter der Roboterflansch, darunter „GMG“ (M blau).

Aufruf:  python3 tools/logo.py   →  assets/logo/*.svg  und  logo-varianten/index.html
Benötigt: fonttools (pip install fonttools) und die Schrift Inter.
"""
import math
import pathlib

from fontTools.pens.svgPathPen import SVGPathPen
from fontTools.pens.transformPen import TransformPen
from fontTools.ttLib import TTFont

ROOT = pathlib.Path(__file__).resolve().parent.parent
OUT = ROOT / "assets" / "logo"
FONTS = pathlib.Path("/usr/share/fonts/opentype/inter")
ANGLE = -37  # Drehung der Hand

BLUE = "#0061aa"
NAVY = "#13202e"


def text_path(text, font_file, x, y, size, tracking=0.0, fills=None):
    """Text als Vektorpfade (unabhängig von installierten Schriften). Gibt (svg, breite) zurück."""
    font = TTFont(FONTS / font_file)
    gs = font.getGlyphSet()
    cmap = font.getBestCmap()
    scale = size / font["head"].unitsPerEm
    out, cx = [], x
    for i, ch in enumerate(text):
        name = cmap[ord(ch)]
        pen = SVGPathPen(gs)
        gs[name].draw(TransformPen(pen, (scale, 0, 0, -scale, cx, y)))
        fill = (fills or {}).get(i, "currentColor")
        out.append(f'<path d="{pen.getCommands()}" fill="{fill}"/>')
        cx += gs[name].width * scale + tracking * size
    return "".join(out), cx - x - tracking * size


def text_width(text, font_file, size, tracking=0.0):
    return text_path(text, font_file, 0, 0, size, tracking)[1]


def hand(style):
    """Kacheln der Hand in lokalen Koordinaten (0–100): u Richtung Fingerspitzen, v quer zur Hand.

    Gibt Rechtecke (u, v, b, h, art) zurück. Finger und Balken werden später gekrümmt,
    der Daumen wird um sein Gelenk am Balken nach unten abgespreizt.
    """
    g = style["gap"]
    col = [(0, 20), (20 + g, 44), (44 + g, 68)]
    rows = [(0, 16), (16 + g, 34), (34 + g, 52), (52 + g, 70)]
    tiles = [(u0, v0, u1 - u0, v1 - v0, "finger") for (u0, u1) in col for (v0, v1) in rows]
    tiles.append((0, 70 + g, 20, 16, "finger"))             # fünftes Segment des äußeren Fingers
    tiles.append((68 + g, 0, 96 - 68 - g, 76, "bar"))      # durchgehender Balken
    tw = (100 - 28 - 2 * g) / 3
    thumb = [(28 + i * (tw + g), 80, tw, 17, "thumb") for i in range(3)]
    return tiles + thumb


def to_screen(u, v, kind, style):
    """Lokale Koordinaten → Bildschirm: Finger krümmen, Daumen abspreizen, Hand drehen."""
    if kind == "thumb":
        a = math.radians(-style["thumb_angle"])
        du, dv = u - 100, v - 80                           # Daumengelenk am Balkenende
        u, v = 100 + du * math.cos(a) - dv * math.sin(a), 80 + du * math.sin(a) + dv * math.cos(a)
    else:
        v += style["curl"] * max(0.0, 70 - u) ** 2          # Finger biegen sich zur Handfläche
    a = math.radians(ANGLE)
    return u * math.cos(a) - v * math.sin(a), u * math.sin(a) + v * math.cos(a)


def mark_svg(style):
    """SVG der Bildmarke (Hand + Flansch). Gibt (svg, bbox) zurück."""
    r = style["radius"]
    polys, pts = [], []
    for u, v, w, h, kind in hand(style):
        u0, v0, u1, v1 = u + r, v + r, u + w - r, v + h - r   # für runde Ecken nach innen versetzen
        steps = 6 if kind != "thumb" else 1                    # Kanten unterteilen, damit die Krümmung sichtbar wird
        edge = ([(u0 + (u1 - u0) * i / steps, v0) for i in range(steps)] +
                [(u1, v0), (u1, v1)] +
                [(u1 - (u1 - u0) * i / steps, v1) for i in range(steps)] + [(u0, v1)])
        sp = [to_screen(pu, pv, kind, style) for pu, pv in edge]
        pts += sp
        polys.append((kind, sp))
    xs, ys = [p[0] for p in pts], [p[1] for p in pts]
    x0, x1, y0, y1 = min(xs) - r, max(xs) + r, min(ys) - r, max(ys) + r
    body = []
    for kind, sp in polys:
        fill = style["fill"](kind)
        d = "M" + " L".join(f"{x:.2f} {y:.2f}" for x, y in sp) + "Z"
        stroke = f' stroke="{fill}" stroke-width="{2 * r}" stroke-linejoin="round"' if r else ""
        body.append(f'<path d="{d}" fill="{fill}"{stroke}/>')
    fw, fh = style["flange"]
    fx, fy = (x0 + x1) / 2 - fw / 2, y1 - fh * style.get("flange_overlap", 0.45)
    defs = style.get("defs", "").replace("Y0", f"{y0:.1f}").replace("Y1", f"{y1:.1f}")
    return defs + "".join(body) + style["flange_svg"](fx, fy, fw, fh), (x0, y0, x1, fy + fh)


def logo(style, layout):
    mark, (x0, y0, x1, y1) = mark_svg(style)
    mw, mh = x1 - x0, y1 - y0
    wm = style["wordmark"]
    if layout == "stacked":
        size = mw * wm["stack_scale"]
        tw = text_width("GMG", wm["font"], size, wm["tracking"])
        ty = y1 + style["stack_gap"] + size * 0.73
        word, _ = text_path("GMG", wm["font"], (x0 + x1) / 2 - tw / 2, ty, size, wm["tracking"], wm["fills"])
        vb = (min(x0, (x0 + x1) / 2 - tw / 2) - 2, y0 - 2, max(mw, tw) + 4, ty - y0 + 4)
        body = mark + word
    elif layout == "horizontal":
        size = mh * 0.46
        tx = x1 + mw * 0.16
        ty = (y0 + y1) / 2 + size * 0.36 - (size * 0.18 if wm.get("tagline") else 0)
        word, tw = text_path("GMG", wm["font"], tx, ty, size, wm["tracking"], wm["fills"])
        body = mark + word
        width = tx + tw - x0
        if wm.get("tagline"):
            ts = size * 0.27
            tag, tagw = text_path(wm["tagline"], "Inter-Medium.otf", tx + size * 0.03, ty + ts * 1.9, ts, 0.02,
                                  {i: wm["tagline_fill"] for i in range(len(wm["tagline"]))})
            body += tag
            width = max(width, tx + tagw - x0 + size * 0.03)
        vb = (x0 - 2, y0 - 2, width + 4, mh + 4)
    else:  # nur Bildmarke
        vb = (x0 - 2, y0 - 2, mw + 4, mh + 4)
        body = mark
    return (f'<svg xmlns="http://www.w3.org/2000/svg" viewBox="{vb[0]:.1f} {vb[1]:.1f} {vb[2]:.1f} {vb[3]:.1f}" '
            f'role="img" aria-label="GMG">{body}</svg>')


def plain_flange(color, radius=0):
    return lambda x, y, w, h: f'<rect x="{x:.2f}" y="{y:.2f}" width="{w}" height="{h}" rx="{radius}" fill="{color}"/>'


def robot_flange(color):
    def draw(x, y, w, h):
        return (f'<rect x="{x:.2f}" y="{y:.2f}" width="{w}" height="{h * 0.62:.2f}" rx="2.5" fill="{color}"/>'
                f'<rect x="{x - w * 0.35:.2f}" y="{y + h * 0.66:.2f}" width="{w * 1.7:.2f}" height="{h * 0.34:.2f}" rx="2.5" fill="{color}"/>')
    return draw


def gradient_fill(kind):
    return "#1f8ee0" if kind == "thumb" else "url(#gmgC)"


VARIANTS = {
    "a": {
        "name": "Variante A: Präzisiert",
        "desc": "Fast identisch zum Original. Gleiche Form, Farben und Aufteilung, aber exakte Winkel, gleichmäßige Abstände und eine saubere, kräftige Schrift. Bestandskunden merken kaum einen Unterschied.",
        "gap": 3.4, "radius": 0, "thumb_angle": 6, "curl": 0.0042,
        "fill": lambda k: BLUE,
        "flange": (15, 22), "flange_svg": plain_flange("#111111"),
        "stack_gap": 4,
        "wordmark": {"font": "Inter-Black.otf", "tracking": 0.0, "stack_scale": 0.43,
                     "fills": {0: "#111111", 1: BLUE, 2: "#111111"}},
    },
    "b": {
        "name": "Variante B: Modernisiert",
        "desc": "Gleiche Hand, etwas mehr Luft zwischen den Modulen und leicht abgerundete Ecken. Das wirkt präzise gefertigt statt gedruckt. Flansch und Schrift in dunklem Anthrazit-Blau, das M bleibt blau.",
        "gap": 4, "radius": 1.6, "thumb_angle": 7, "curl": 0.0036,
        "fill": lambda k: BLUE,
        "flange": (15, 21), "flange_svg": plain_flange(NAVY, 2.2),
        "stack_gap": 5,
        "wordmark": {"font": "Inter-ExtraBold.otf", "tracking": 0.02, "stack_scale": 0.42,
                     "fills": {0: NAVY, 1: BLUE, 2: NAVY}},
    },
    "c": {
        "name": "Variante C: Spürbar moderner",
        "desc": "Die Hand bekommt Tiefe durch einen dezenten Farbverlauf, der Daumen ist als greifendes Element hervorgehoben, der Flansch ist als Roboteranschluss erkennbar. Mit Zusatz „Modulare Greifersysteme“ in der Querversion.",
        "gap": 4.6, "radius": 2.2, "thumb_angle": 9, "curl": 0.0026,
        "fill": gradient_fill,
        "defs": ('<defs><linearGradient id="gmgC" gradientUnits="userSpaceOnUse" x1="0" y1="Y0" x2="0" y2="Y1">'
                 '<stop offset="0" stop-color="#1878c8"/><stop offset="1" stop-color="#00508f"/></linearGradient></defs>'),
        "flange": (15, 22), "flange_svg": robot_flange(NAVY),
        "stack_gap": 5,
        "wordmark": {"font": "Inter-Bold.otf", "tracking": 0.04, "stack_scale": 0.41,
                     "fills": {0: NAVY, 1: NAVY, 2: NAVY},
                     "tagline": "MODULARE GREIFERSYSTEME", "tagline_fill": "#5b6673"},
    },
}


def white(svg):
    """Einfarbig weiße Fassung für dunkle Hintergründe."""
    import re
    svg = re.sub(r'(fill|stroke)="(?!none)[^"]+"', r'\1="#ffffff"', svg)
    return svg.replace('url(#gmgC)', '#ffffff')


def main():
    OUT.mkdir(parents=True, exist_ok=True)
    files = {}
    for key, st in VARIANTS.items():
        for layout in ("stacked", "horizontal", "mark"):
            svg = logo(st, layout)
            name = f"gmg-logo-{key}-{layout}.svg"
            (OUT / name).write_text(svg, encoding="utf-8")
            (OUT / f"gmg-logo-{key}-{layout}-weiss.svg").write_text(white(svg), encoding="utf-8")
            files[(key, layout)] = svg
    build_page(files)
    print("Fertig:", len(list(OUT.glob('*.svg'))), "SVG-Dateien, Vergleichsseite logo-varianten/index.html")


def build_page(files):
    orig = '<img src="../assets/img/gmg-logo.png" alt="Original GMG-Logo" style="height:120px;width:auto">'
    orig_mark = '<img src="../assets/img/gmg-logo-mark.png" alt="" style="height:150px;width:auto">'
    cards = [f"""<section class="lv">
  <div class="lv__head"><h2>Original</h2><p>Das heutige Logo von gmg-system.com (Web-Grafik, keine Vektordatei).</p></div>
  <div class="lv__row">
    <div class="lv__box">{orig_mark}<span>Bildmarke + Schriftzug</span></div>
    <div class="lv__box lv__box--wide">{orig}<span>mit Slogan</span></div>
  </div></section>"""]
    for key, st in VARIANTS.items():
        s, h, m = files[(key, "stacked")], files[(key, "horizontal")], files[(key, "mark")]
        cards.append(f"""<section class="lv">
  <div class="lv__head"><h2>{st['name']}</h2><p>{st['desc']}</p></div>
  <div class="lv__row">
    <div class="lv__box"><div class="lv__svg" style="height:170px">{s}</div><span>Hochformat</span></div>
    <div class="lv__box lv__box--wide"><div class="lv__svg" style="height:96px">{h}</div><span>Querformat (Webseite, Briefkopf)</span></div>
    <div class="lv__box lv__box--blue"><div class="lv__svg" style="height:96px">{white(h)}</div><span>Weiß auf Blau</span></div>
    <div class="lv__box"><div class="lv__sizes"><div style="height:64px">{m}</div><div style="height:32px">{m}</div><div style="height:16px">{m}</div></div><span>Klein (App-Symbol, Browser-Tab)</span></div>
  </div>
  <div class="lv__header"><div class="lv__svg" style="height:44px">{h}</div><nav>Produkte · Über GMG · Downloads · Kontakt</nav></div>
</section>""")
    html = f"""<!doctype html>
<html lang="de"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1">
<meta name="robots" content="noindex, nofollow"><title>Logo-Varianten | GMG Entwurf</title>
<style>
:root {{ --line:#e1e5ea; --muted:#6b7480; --ink:#13171d; --blue:{BLUE}; }}
* {{ box-sizing:border-box; }}
body {{ margin:0; font-family:system-ui,-apple-system,"Segoe UI",Roboto,Arial,sans-serif; color:#3a424d; background:#f4f6f8; }}
.wrap {{ max-width:1200px; margin:0 auto; padding:40px 24px 80px; }}
h1 {{ color:var(--ink); margin:0 0 8px; }} h2 {{ color:var(--ink); margin:0 0 6px; font-size:1.35rem; }}
.intro {{ max-width:760px; margin:0 0 32px; }}
.lv {{ background:#fff; border:1px solid var(--line); border-radius:12px; padding:28px; margin-bottom:28px; }}
.lv__head p {{ margin:0 0 20px; max-width:760px; }}
.lv__row {{ display:grid; grid-template-columns:1fr 1.6fr 1.6fr 1fr; gap:16px; }}
.lv__box {{ border:1px solid var(--line); border-radius:10px; padding:24px 16px 14px; display:flex; flex-direction:column; align-items:center; justify-content:space-between; gap:14px; min-height:230px; }}
.lv__box span {{ font-size:.8rem; color:var(--muted); }}
.lv__box--blue {{ background:var(--blue); }} .lv__box--blue span {{ color:#d6e6f5; }}
.lv__svg {{ display:flex; align-items:center; justify-content:center; width:100%; }}
.lv__svg svg, .lv__sizes svg {{ height:100%; width:auto; max-width:100%; }}
.lv__sizes {{ display:flex; align-items:flex-end; gap:18px; height:100%; }}
.lv__header {{ margin-top:16px; border:1px solid var(--line); border-radius:10px; padding:12px 20px; display:flex; align-items:center; justify-content:space-between; gap:16px; }}
.lv__header .lv__svg {{ width:auto; justify-content:flex-start; }}
.lv__header nav {{ font-size:.9rem; color:var(--ink); font-weight:550; }}
@media (max-width:900px) {{ .lv__row {{ grid-template-columns:1fr 1fr; }} .lv__header nav {{ display:none; }} }}
@media (max-width:520px) {{ .wrap {{ padding:24px 16px 60px; }} .lv {{ padding:18px; }} .lv__row {{ grid-template-columns:1fr; }} }}
</style></head><body><div class="wrap">
<h1>GMG-Logo: drei Varianten</h1>
<p class="intro">Entwurf zur behutsamen Modernisierung. Die Hand aus Modulen, der Daumen, der Flansch und das blaue M bleiben erhalten, damit Bestandskunden das Logo sofort wiedererkennen. Alle Varianten sind Vektorgrafiken (SVG) und in jeder Größe scharf.</p>
{''.join(cards)}
</div></body></html>"""
    d = ROOT / "logo-varianten"
    d.mkdir(exist_ok=True)
    (d / "index.html").write_text(html, encoding="utf-8")


if __name__ == "__main__":
    main()
