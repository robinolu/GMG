// Liest STEP-Dateien im Hintergrund (Web Worker), damit der Konfigurator bedienbar bleibt.
// Erwartet { buffer: Uint8Array, params } und antwortet mit dem Ergebnis von ReadStepFile.
importScripts('occt-import-js.js');
let ready = null;
onmessage = async (ev) => {
  try {
    ready = ready || occtimportjs({ locateFile: (f) => f });
    const occt = await ready;
    postMessage(occt.ReadStepFile(ev.data.buffer, ev.data.params));
  } catch (e) {
    postMessage({ success: false, error: String(e) });
  }
};
