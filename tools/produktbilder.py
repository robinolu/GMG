#!/usr/bin/env python3
"""Produktbilder in höherer Auflösung.

1. Wo die Datenblätter ein großes Rendering enthalten (data/renders/*.jpg, 1024 × 768),
   wird es freigestellt (weißer Hintergrund → transparent) und ersetzt das Webbild.
2. Alle übrigen Bilder werden verdoppelt (Lanczos) und leicht nachgeschärft.
   Das macht Kanten auf hochauflösenden Displays glatter, erfindet aber keine Details.

Aufruf:  python3 tools/produktbilder.py
Ausgabe als WebP. Die Originale von gmg-system.com bleiben in data/renders/web/ erhalten.
"""
import pathlib
import shutil

from PIL import Image, ImageChops, ImageDraw, ImageFilter

ROOT = pathlib.Path(__file__).resolve().parent.parent
RENDERS = ROOT / "data" / "renders"
WEB_ORIG = RENDERS / "web"
OUT = ROOT / "assets" / "img" / "produkte"


def cut_out(path):
    rgb = Image.open(path).convert("RGB")
    diff = ImageChops.difference(rgb, Image.new("RGB", rgb.size, "white")).convert("L")
    flood = diff.point(lambda v: 255 if v > 14 else 0)
    ImageDraw.floodfill(flood, (0, 0), 128)
    outside = flood.point(lambda v: 0 if v == 128 else 255)
    pure_white = rgb.convert("L").point(lambda v: 0 if v >= 250 else 255).filter(ImageFilter.MinFilter(3)).filter(ImageFilter.MaxFilter(3))
    alpha = ImageChops.multiply(outside, pure_white).filter(ImageFilter.GaussianBlur(0.7))
    rgb.putalpha(alpha)
    return rgb.crop(alpha.point(lambda v: 255 if v > 20 else 0).getbbox())


def main():
    WEB_ORIG.mkdir(parents=True, exist_ok=True)
    for p in OUT.glob("*.png"):          # Ausgangsbilder einmalig sichern
        if not (WEB_ORIG / p.name).exists():
            shutil.copy(p, WEB_ORIG / p.name)
    from_render = {r.stem for r in RENDERS.glob("*.jpg")}
    for src in sorted(WEB_ORIG.glob("*.png")):
        name = src.stem
        if name in from_render:
            img = cut_out(RENDERS / f"{name}.jpg")
            how = "Rendering"
        else:
            img = Image.open(src).convert("RGBA")
            img = img.resize((img.width * 2, img.height * 2), Image.LANCZOS)
            r, g, b, a = img.split()
            img = Image.merge("RGB", (r, g, b)).filter(ImageFilter.UnsharpMask(radius=1.2, percent=60, threshold=2))
            img.putalpha(a)
            how = "hochgerechnet"
        img.save(OUT / f"{name}.webp", "WEBP", quality=90, method=6)
        print(f"{name:16} {how:14} {img.size}")


if __name__ == "__main__":
    main()
