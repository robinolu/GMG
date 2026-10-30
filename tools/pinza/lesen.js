const fs = require('fs');
const occtimportjs = require(process.argv[2] + '/node_modules/occt-import-js');
(async () => {
  const occt = await occtimportjs();
  const r = occt.ReadStepFile(new Uint8Array(fs.readFileSync(process.argv[3])), { linearUnit: 'millimeter', linearDeflectionType: 'bounding_box_ratio', linearDeflection: 0.0025, angularDeflection: 0.5 });
  console.log('Teile', r.meshes.length, 'Dreiecke', r.meshes.reduce((a, m) => a + m.index.array.length / 3, 0));
  for (const m of r.meshes) { const p = m.attributes.position.array; let mn = [1e9,1e9,1e9], mx = [-1e9,-1e9,-1e9];
    for (let i = 0; i < p.length; i += 3) for (let k = 0; k < 3; k++) { mn[k] = Math.min(mn[k], p[i+k]); mx[k] = Math.max(mx[k], p[i+k]); }
    console.log((m.name || '?').padEnd(40), String(p.length/3).padStart(6), mn.map(v=>v.toFixed(1)).join(','), '|', mx.map(v=>v.toFixed(1)).join(','), m.color ? m.color.map(c=>c.toFixed(2)).join('/') : ''); }
  fs.writeFileSync(process.argv[4], JSON.stringify(r.meshes.map(m => ({ name: m.name, color: m.color, p: Array.from(m.attributes.position.array), i: Array.from(m.index.array) }))));
})();
