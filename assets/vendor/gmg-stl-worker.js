// Zerlegt STL-Dateien (binär oder ASCII) im Hintergrund und meldet den Fortschritt (0–1).
// Antwort: { progress } zwischendurch, am Ende { positions: Float32Array } oder { error }.
onmessage = (ev) => {
  try {
    const buf = ev.data, dv = new DataView(buf);
    const n = buf.byteLength >= 84 ? dv.getUint32(80, true) : 0;
    const binary = buf.byteLength === 84 + n * 50;
    let pos;
    if (binary) {
      pos = new Float32Array(n * 9);
      const step = Math.max(1, Math.floor(n / 50));
      for (let i = 0; i < n; i++) {
        const o = 84 + i * 50 + 12;
        for (let k = 0; k < 9; k++) pos[i * 9 + k] = dv.getFloat32(o + k * 4, true);
        if (i % step === 0) postMessage({ progress: i / n });
      }
    } else {
      const text = new TextDecoder().decode(new Uint8Array(buf));
      const re = /vertex\s+(\S+)\s+(\S+)\s+(\S+)/g, out = [];
      let m, c = 0;
      while ((m = re.exec(text))) {
        out.push(+m[1], +m[2], +m[3]);
        if (++c % 30000 === 0) postMessage({ progress: re.lastIndex / text.length });
      }
      if (!out.length) throw new Error('Keine Dreiecke in der STL-Datei gefunden.');
      pos = new Float32Array(out);
    }
    postMessage({ progress: 1 });
    postMessage({ positions: pos }, [pos.buffer]);
  } catch (e) {
    postMessage({ error: String(e.message || e) });
  }
};
