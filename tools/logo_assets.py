#!/usr/bin/env python3
"""Erzeugt aus dem gewählten Logo (Variante 2, assets/logo/gmg-3d-dezent*.svg) die Bilddateien
für die Webseite: Favicon, App-Symbol und das Vorschaubild für WhatsApp & Co.

Aufruf (nach tools/logo3d.py):  python3 tools/logo_assets.py
Benötigt: Playwright mit Chromium (zum Rendern der SVGs) und Pillow.
"""
import pathlib
import subprocess
import tempfile

from PIL import Image, ImageDraw, ImageFont

ROOT = pathlib.Path(__file__).resolve().parent.parent
LOGO = ROOT / "assets" / "logo"
IMG = ROOT / "assets" / "img"
FONTS = pathlib.Path("/usr/share/fonts/opentype/inter")

RENDER_JS = """
const { chromium } = require('playwright');
(async () => {
  const [svg, out, h] = process.argv.slice(2);
  const b = await chromium.launch();
  const p = await b.newPage({ viewport: { width: 2000, height: Number(h) + 20 } });
  const markup = require('fs').readFileSync(svg, 'utf8');
  await p.setContent(`<style>body{margin:0;background:transparent}#i{display:inline-block;height:${h}px}#i svg{height:100%;width:auto;display:block}</style><div id="i">${markup}</div>`);
  await p.waitForTimeout(100);
  await (await p.$('#i')).screenshot({ path: out, omitBackground: true });
  await b.close();
})();
"""


def render(svg, out, height):
    with tempfile.NamedTemporaryFile("w", suffix=".js", delete=False) as f:
        f.write(RENDER_JS)
    subprocess.run(["node", f.name, str(svg), str(out), str(height)], check=True)


def main():
    stacked, mark = LOGO / "gmg-3d-dezent.svg", LOGO / "gmg-3d-dezent-bildmarke.svg"
    render(stacked, IMG / "gmg-logo-3d.png", 560)
    render(mark, IMG / "gmg-bildmarke-3d.png", 256)

    m = Image.open(IMG / "gmg-bildmarke-3d.png").convert("RGBA")
    icon = Image.new("RGB", (180, 180), "white")
    m.thumbnail((140, 140), Image.LANCZOS)
    icon.paste(m, ((180 - m.width) // 2, (180 - m.height) // 2), m)
    icon.save(IMG / "apple-touch-icon.png")

    # Vorschaubild 1200 × 630 für WhatsApp, LinkedIn & Co.
    W, H = 1200, 630
    im = Image.new("RGB", (W, H), "#f4f6f8")
    d = ImageDraw.Draw(im)
    for x in range(0, W, 48):
        d.line([(x, 0), (x, H)], fill="#e6e9ed")
    for y in range(0, H, 48):
        d.line([(0, y), (W, y)], fill="#e6e9ed")
    logo = Image.open(IMG / "gmg-logo-3d.png").convert("RGBA")
    logo.thumbnail((300, 380), Image.LANCZOS)
    im.paste(logo, (90, (H - 72 - logo.height) // 2), logo)
    prod = Image.open(IMG / "produkte" / "home-02.png").convert("RGBA")
    prod.thumbnail((470, 380))
    im.paste(prod, (W - prod.width - 50, 150), prod)
    bold = ImageFont.truetype(str(FONTS / "Inter-Bold.otf"), 52)
    reg = ImageFont.truetype(str(FONTS / "Inter-Regular.otf"), 26)
    tx = 90 + logo.width + 60
    d.text((tx, 200), "Modulare", font=bold, fill="#13171d")
    d.text((tx, 262), "Greifersysteme", font=bold, fill="#13171d")
    d.text((tx, 336), "direkt vom Erfinder.", font=reg, fill="#3a424d")
    d.text((tx, 372), "Seit 1992 aus Soest.", font=reg, fill="#3a424d")
    d.rectangle([0, H - 72, W, H], fill="#0061aa")
    semi = ImageFont.truetype(str(FONTS / "Inter-SemiBold.otf"), 26)
    d.text((90, H - 52), "GMG Gesellschaft für modulare Greifersysteme mbH  ·  +49 (0) 2921 4062", font=semi, fill="white")
    im.save(IMG / "gmg-vorschau.jpg", quality=88)
    print("Fertig: gmg-logo-3d.png, gmg-bildmarke-3d.png, apple-touch-icon.png, gmg-vorschau.jpg")


if __name__ == "__main__":
    main()
