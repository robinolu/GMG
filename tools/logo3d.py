#!/usr/bin/env python3
"""Original-GMG-Logo exakt nachgezeichnet (Vektor) und behutsam plastisch gemacht.

Die Form bleibt die des Originals: Die Bildmarke wird aus assets/img/gmg-logo.png
hochgerechnet und per Potrace in Vektorpfade umgewandelt. Darauf kommen:
schlankere Module (leicht verdünnt), Licht von links oben, eine Materialstärke
nach rechts unten und ein weicher Schatten. Schriftzug „GMG“ in Arial-ähnlicher
Schrift (Liberation Sans Bold) als Pfad, M blau, wie im Original.

Aufruf:  python3 tools/logo3d.py  →  assets/logo/gmg-*.svg
Benötigt: numpy, pillow, potracer, fonttools.
"""
import pathlib

import numpy as np
import potrace
from fontTools.pens.svgPathPen import SVGPathPen
from fontTools.pens.transformPen import TransformPen
from fontTools.ttLib import TTFont
from PIL import Image, ImageFilter

ROOT = pathlib.Path(__file__).resolve().parent.parent
SRC = ROOT / "assets" / "img" / "gmg-logo.png"
OUT = ROOT / "assets" / "logo"
FONT = pathlib.Path("/usr/share/fonts/truetype/liberation/LiberationSans-Bold.ttf")
K = 12  # Hochrechnung vor dem Nachzeichnen


def masks():
    im = Image.open(SRC).convert("RGBA").crop((0, 0, 89, 125))
    a = np.asarray(im.resize((89 * K, 125 * K), Image.BICUBIC)).astype(int)
    r, g, b, al = a[..., 0], a[..., 1], a[..., 2], a[..., 3]
    ys = np.arange(a.shape[0])[:, None]
    blue = (al > 128) & (b > r + 60) & (ys < 92 * K)
    stem = (al > 128) & (r < 110) & (g < 110) & (b < 110) & (ys > 75 * K) & (ys < 99 * K)
    return blue, stem


def smooth(mask, thin_px):
    """Kanten glätten und Module um thin_px (Originalpixel) verdünnen."""
    img = Image.fromarray((mask * 255).astype("uint8")).filter(ImageFilter.GaussianBlur(K * 0.25))
    img = img.point(lambda v: 255 if v > 127 else 0)
    n = int(round(thin_px * K))
    if n > 0:
        img = img.filter(ImageFilter.MinFilter(2 * n + 1))
    return np.asarray(img) > 127


def trace(mask):
    """Maske → Liste von SVG-Pfaden (ein Pfad je Modul), Einheit = Originalpixel."""
    paths = []
    for curve in potrace.Bitmap(~mask).trace(  # Potrace füllt die dunklen (False) Pixel
        turdsize=40, alphamax=0.55, opttolerance=0.2):
        f = lambda p: f"{p.x / K:.3f} {p.y / K:.3f}"
        d = [f"M{f(curve.start_point)}"]
        for seg in curve.segments:
            if seg.is_corner:
                d.append(f"L{f(seg.c)} L{f(seg.end_point)}")
            else:
                d.append(f"C{f(seg.c1)} {f(seg.c2)} {f(seg.end_point)}")
        paths.append("".join(d) + "Z")
    return paths


def wordmark(x_center, y_base, height, fills):
    font = TTFont(FONT)
    gs, cmap = font.getGlyphSet(), font.getBestCmap()
    cap = font["OS/2"].sCapHeight
    scale = height / cap
    width = sum(gs[cmap[ord(c)]].width for c in "GMG") * scale
    x, out = x_center - width / 2, []
    for i, c in enumerate("GMG"):
        pen = SVGPathPen(gs)
        gs[cmap[ord(c)]].draw(TransformPen(pen, (scale, 0, 0, -scale, x, y_base)))
        out.append(f'<path d="{pen.getCommands()}" fill="{fills[i]}"/>')
        x += gs[cmap[ord(c)]].width * scale
    return "".join(out)


STYLES = {
    "scharf": {
        "name": "1 · Original, nur gestochen scharf",
        "desc": "Exakt die heutige Form, als Vektor neu gezeichnet. Kein Effekt. So sieht das Original in jeder Größe sauber aus.",
        "thin": 0.0, "depth": 0.0, "shade": False,
    },
    "3d-dezent": {
        "name": "2 · Schlanker + dezent 3D",
        "desc": "Gleiche Form, die Module etwas schlanker, dazu Licht von links oben und eine feine Materialstärke. Wirkt wie aus Metall gefertigt.",
        "thin": 0.35, "depth": 0.55, "shade": True,
    },
    "3d-kraeftig": {
        "name": "3 · Schlanker + deutlich 3D",
        "desc": "Module noch etwas schlanker, mehr Materialstärke und ein weicher Schatten. Die Hand wirkt wie ein echtes Bauteil.",
        "thin": 0.55, "depth": 1.0, "shade": True,
    },
}

DEFS = """<defs>
<linearGradient id="face{k}" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#3a95dc"/><stop offset=".55" stop-color="#0866b2"/><stop offset="1" stop-color="#004f8e"/></linearGradient>
<linearGradient id="edge{k}" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#ffffff" stop-opacity=".75"/><stop offset=".45" stop-color="#ffffff" stop-opacity="0"/></linearGradient>
<linearGradient id="stem{k}" x1="0" y1="0" x2="1" y2="0"><stop offset="0" stop-color="#4a5058"/><stop offset=".45" stop-color="#22262c"/><stop offset="1" stop-color="#0b0d10"/></linearGradient>
<filter id="shadow{k}" x="-20%" y="-20%" width="140%" height="150%"><feDropShadow dx="0.6" dy="1.2" stdDeviation="1.1" flood-color="#0b1f33" flood-opacity=".28"/></filter>
</defs>"""


def build(key, st, blue, stem):
    tiles, stems = trace(smooth(blue, st["thin"])), trace(smooth(stem, 0))
    parts = []
    if st["shade"]:
        k = key.replace("-", "")
        defs = DEFS.replace("{k}", k)
        steps = max(1, int(st["depth"] / 0.12))
        side = []
        for i in range(steps, 0, -1):  # Materialstärke nach rechts unten
            t = st["depth"] * i / steps
            side.append(f'<g transform="translate({t * 0.55:.3f} {t:.3f})">' +
                        "".join(f'<path d="{d}"/>' for d in tiles) + "</g>")
        sstem = "".join(f'<path d="{d}" fill="url(#stem{k})"/>' for d in stems)
        parts.append(defs)
        parts.append(f'<g filter="url(#shadow{k})">'
                     f'<g fill="#003a6b">{"".join(side)}</g>'
                     + "".join(f'<path d="{d}" fill="url(#face{k})"/>' for d in tiles)
                     + "".join(f'<path d="{d}" fill="none" stroke="url(#edge{k})" stroke-width="0.35"/>' for d in tiles)
                     + sstem + "</g>")
    else:
        parts.append("".join(f'<path d="{d}" fill="#0061aa"/>' for d in tiles))
        parts.append("".join(f'<path d="{d}" fill="#111111"/>' for d in stems))
    mark = "".join(parts)
    word = wordmark(45.0, 123.4, 21.0, ["#111111", "#0061aa", "#111111"])
    stacked = f'<svg xmlns="http://www.w3.org/2000/svg" viewBox="-1 -1 92 127" role="img" aria-label="GMG">{mark}{word}</svg>'
    only = f'<svg xmlns="http://www.w3.org/2000/svg" viewBox="-1 -1 92 101" role="img" aria-label="GMG">{mark}</svg>'
    return stacked, only


def main():
    OUT.mkdir(parents=True, exist_ok=True)
    blue, stem = masks()
    for key, st in STYLES.items():
        stacked, only = build(key, st, blue, stem)
        (OUT / f"gmg-{key}.svg").write_text(stacked, encoding="utf-8")
        (OUT / f"gmg-{key}-bildmarke.svg").write_text(only, encoding="utf-8")
    print("Fertig:", ", ".join(f"gmg-{k}.svg" for k in STYLES))


if __name__ == "__main__":
    main()
