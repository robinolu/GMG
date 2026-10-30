// Liest TENTRA_T3_OPEN/GRASP.STEP und zeigt die Teile mit Namen, Dreiecken und Lage.
const fs = require('fs'), path = require('path');
const occtimportjs = require(process.argv[2] + '/node_modules/occt-import-js');
(async () => {
  const occt = await occtimportjs();
  for (const f of ['TENTRA_T3_OPEN.STEP', 'TENTRA_T3_GRASP.STEP']) {
    const r = occt.ReadStepFile(new Uint8Array(fs.readFileSync(path.join(process.argv[3], f))), { linearUnit: 'millimeter', linearDeflectionType: 'bounding_box_ratio', linearDeflection: 0.001, angularDeflection: 0.5 });
    console.log(f, 'Teile:', r.meshes.length, 'Dreiecke:', r.meshes.reduce((a, m) => a + m.index.array.length / 3, 0));
    const names = {};
    for (const m of r.meshes) { const p = m.attributes.position.array; let mn = [1e9, 1e9, 1e9], mx = [-1e9, -1e9, -1e9];
      for (let i = 0; i < p.length; i += 3) for (let k = 0; k < 3; k++) { mn[k] = Math.min(mn[k], p[i + k]); mx[k] = Math.max(mx[k], p[i + k]); }
      names[m.name] = (names[m.name] || 0) + 1;
      if (f.includes('OPEN')) console.log('  ', (m.name || '?').padEnd(36), String(p.length / 3).padStart(6), mn.map(v => v.toFixed(0)).join(','), '|', mx.map(v => v.toFixed(0)).join(','));
    }
    console.log('  Namen:', Object.keys(names).length);
    fs.writeFileSync(path.join(process.argv[4], f + '.json'), JSON.stringify(r.meshes.map(m => ({ name: m.name, color: m.color, p: Array.from(m.attributes.position.array), i: Array.from(m.index.array) }))));
  }
})();
