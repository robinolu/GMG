#!/usr/bin/env python3
"""Zerlegt das B02-Rendering (data/renders/b02.jpg) in Ebenen für die Scroll-Animation.

Ebenen (je 1024 × 768, transparent): Gehäuse, obere Schiene (mit ihren Hebeln),
untere Schiene und die drei sichtbaren Hebel der unteren Schiene. Im Rendering steht
der Greifer offen; die Webseite schiebt die Teile beim Laden zusammen und öffnet sie
beim Scrollen wieder in diese Lage.

Aufruf:  python3 tools/hero_layers.py  →  assets/img/hero/*.webp + assets/img/hero/geometrie.json
"""
import json
import pathlib

from PIL import Image, ImageChops, ImageDraw, ImageFilter

ROOT = pathlib.Path(__file__).resolve().parent.parent
SRC = ROOT / "data" / "renders" / "b02.jpg"
OUT = ROOT / "assets" / "img" / "hero"

# Umrisse in Bildpixeln (am Rendering vermessen).
TOP_RAIL = [(198, 296), (578, 88), (648, 122), (660, 150), (690, 205), (700, 230), (754, 260), (754, 302), (700, 302),
            (642, 252), (600, 270), (600, 366), (558, 370), (516, 330), (516, 302), (320, 422), (198, 354)]
BOTTOM_RAIL = [(200, 626), (694, 484), (696, 542), (322, 756), (200, 708)]
ARMS = {
    "hebel-1": {"poly": [(411, 488), (472, 484), (492, 500), (462, 562), (418, 566), (406, 540)], "pivot": (466, 492), "foot": (437, 558)},
    "hebel-2": {"poly": [(472, 488), (542, 482), (558, 500), (532, 562), (514, 594), (472, 596), (466, 560), (488, 520)],
                "pivot": (533, 500), "foot": (500, 577)},
    "hebel-3": {"poly": [(716, 368), (744, 376), (744, 400), (702, 470), (694, 510), (638, 514), (620, 492), (640, 450),
                         (672, 408)], "pivot": (727, 383), "foot": (640, 490)},
}
# Bewegung: Öffnungsrichtung je Schiene und Achsrichtung der Schienen (Bildschirm).
GEOMETRY = {"axis": [0.918, -0.397], "open_top": [0, -1], "open_bottom": [0, 1], "travel": 24, "axial": 10}


def mask(poly, size, grow=0):
    """Harte Maske; bewegte Teile um grow Pixel größer, damit keine Naht zum Gehäuse entsteht."""
    m = Image.new("L", size, 0)
    ImageDraw.Draw(m).polygon(poly, fill=255)
    return m.filter(ImageFilter.MaxFilter(2 * grow + 1)) if grow else m


def background_alpha(img):
    """Weißen Hintergrund (vom Rand her zusammenhängend) transparent machen."""
    rgb = img.convert("RGB")
    near_white = ImageChops.difference(rgb, Image.new("RGB", rgb.size, "white")).convert("L").point(lambda v: 255 if v > 14 else 0)
    flood = near_white.copy()
    ImageDraw.floodfill(flood, (0, 0), 128)
    outside = flood.point(lambda v: 0 if v == 128 else 255)
    # Auch eingeschlossene Lücken zwischen Bauteilen zeigen im Rendering reines Weiß.
    pure_white = rgb.convert("L").point(lambda v: 0 if v >= 250 else 255).filter(ImageFilter.MinFilter(3)).filter(ImageFilter.MaxFilter(3))
    return ImageChops.multiply(outside, pure_white).filter(ImageFilter.GaussianBlur(0.7))


def main():
    OUT.mkdir(parents=True, exist_ok=True)
    src = Image.open(SRC).convert("RGB")
    size = src.size
    alpha = background_alpha(src)
    rgba = src.copy()
    rgba.putalpha(alpha)

    moving = Image.new("L", size, 0)
    layers = {"schiene-oben": TOP_RAIL, "schiene-unten": BOTTOM_RAIL}
    layers.update({k: v["poly"] for k, v in ARMS.items()})
    for name, poly in layers.items():
        m = ImageChops.multiply(mask(poly, size, grow=1), alpha)
        part = src.copy()
        part.putalpha(m)
        part.save(OUT / f"{name}.webp", "WEBP", quality=90, method=6)
        moving = ImageChops.lighter(moving, mask(poly, size))
    body = src.copy()
    body.putalpha(ImageChops.multiply(alpha, ImageChops.invert(moving)))
    body.save(OUT / "gehaeuse.webp", "WEBP", quality=90, method=6)

    geo = dict(GEOMETRY, size=list(size), pivots={k: list(v["pivot"]) for k, v in ARMS.items()},
               arm_vectors={k: [v["foot"][0] - v["pivot"][0], v["foot"][1] - v["pivot"][1]] for k, v in ARMS.items()})
    (OUT / "geometrie.json").write_text(json.dumps(geo), encoding="utf-8")
    print("Fertig:", ", ".join(sorted(p.name for p in OUT.glob("*.webp"))))


if __name__ == "__main__":
    main()
