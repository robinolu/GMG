#!/usr/bin/env python3
"""Produktbilder in höherer Auflösung.

1. Wo die Datenblätter ein großes Rendering enthalten (data/renders/*.jpg, 1024 × 768),
   wird es freigestellt (weißer Hintergrund → transparent) und ersetzt das Webbild.
2. Alle übrigen Bilder werden mit einem neuronalen Netz (EDSR, 4-fach) hochgerechnet: glattere Kanten,
   weniger Treppchen als einfaches Vergrößern. Modell nicht im Repository (38 MB):
     curl -L -o /tmp/EDSR_x4.pb https://raw.githubusercontent.com/Saafke/EDSR_Tensorflow/master/models/EDSR_x4.pb
   und pip install opencv-contrib-python-headless. Ohne Modell: Lanczos ×2 mit leichtem Nachschärfen.

Aufruf:  python3 tools/produktbilder.py [Pfad zu EDSR_x4.pb]
Ausgabe als WebP. Die Originale von gmg-system.com bleiben in data/renders/web/ erhalten.
"""
import pathlib
import shutil
import sys

from PIL import Image, ImageChops, ImageDraw, ImageFilter

ROOT = pathlib.Path(__file__).resolve().parent.parent
RENDERS = ROOT / "data" / "renders"
WEB_ORIG = RENDERS / "web"
OUT = ROOT / "assets" / "img" / "produkte"
MAX_PX = 1400


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


def edsr(sr, src):
    """4-fach hochrechnen; Freistellung (Alpha) getrennt per Lanczos, Hintergrund vorher weiß."""
    import cv2
    import numpy as np
    im = Image.open(src).convert("RGBA")
    bg = Image.new("RGBA", im.size, (255, 255, 255, 255))
    bg.alpha_composite(im)
    up = sr.upsample(cv2.cvtColor(np.array(bg.convert("RGB")), cv2.COLOR_RGB2BGR))
    img = Image.fromarray(cv2.cvtColor(up, cv2.COLOR_BGR2RGB))
    img.putalpha(im.split()[3].resize(img.size, Image.LANCZOS))
    return img


def main():
    WEB_ORIG.mkdir(parents=True, exist_ok=True)
    for p in OUT.glob("*.png"):          # Ausgangsbilder einmalig sichern
        if not (WEB_ORIG / p.name).exists():
            shutil.copy(p, WEB_ORIG / p.name)
    from_render = {r.stem for r in RENDERS.glob("*.jpg")}
    sr = None
    model = pathlib.Path(sys.argv[1] if len(sys.argv) > 1 else "/tmp/EDSR_x4.pb")
    if model.exists():
        import cv2
        sr = cv2.dnn_superres.DnnSuperResImpl_create()
        sr.readModel(str(model))
        sr.setModel("edsr", 4)
    for src in sorted(WEB_ORIG.glob("*.png")):
        name = src.stem
        if name in from_render:
            img = cut_out(RENDERS / f"{name}.jpg")
            how = "Rendering"
        elif sr:
            img = edsr(sr, src)
            how = "EDSR ×4"
        else:
            img = Image.open(src).convert("RGBA")
            img = img.resize((img.width * 2, img.height * 2), Image.LANCZOS)
            r, g, b, a = img.split()
            img = Image.merge("RGB", (r, g, b)).filter(ImageFilter.UnsharpMask(radius=1.2, percent=60, threshold=2))
            img.putalpha(a)
            how = "Lanczos ×2"
        if max(img.size) > MAX_PX:                     # fürs Web reicht das auch auf Retina-Displays
            img.thumbnail((MAX_PX, MAX_PX), Image.LANCZOS)
        img.save(OUT / f"{name}.webp", "WEBP", quality=88, method=6)
        print(f"{name:16} {how:14} {img.size}")


if __name__ == "__main__":
    main()
