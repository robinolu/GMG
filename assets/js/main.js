// GMG – kleine Helfer: Mobilmenü, Bildergalerie, Videos erst nach Klick laden,
// Kontaktformular (Entwurf: öffnet das E-Mail-Programm), Download-Suche.
(function () {
  var header = document.querySelector('.header');
  var burger = document.querySelector('.burger');
  if (burger) {
    burger.addEventListener('click', function () {
      var open = header.classList.toggle('is-open');
      burger.setAttribute('aria-expanded', open ? 'true' : 'false');
    });
  }

  // Seiteninhalt verdrahten. Wird in der Einzeldatei-Vorschau nach jedem Seitenwechsel erneut aufgerufen.
  function init() {
    document.querySelectorAll('[data-gallery]').forEach(function (g) {
      var main = g.querySelector('.gallery__main img');
      g.querySelectorAll('.gallery__thumbs button').forEach(function (b) {
        b.addEventListener('click', function () {
          main.src = b.dataset.src;
          g.querySelectorAll('.gallery__thumbs button').forEach(function (o) { o.setAttribute('aria-pressed', 'false'); });
          b.setAttribute('aria-pressed', 'true');
        });
      });
    });

    // YouTube wird erst nach Klick geladen (Datenschutz).
    document.querySelectorAll('[data-yt]').forEach(function (btn) {
      btn.addEventListener('click', function () {
        var f = document.createElement('iframe');
        f.src = 'https://www.youtube-nocookie.com/embed/' + btn.dataset.yt + '?autoplay=1&rel=0';
        f.allow = 'autoplay; encrypted-media; picture-in-picture';
        f.allowFullscreen = true;
        f.title = btn.getAttribute('aria-label') || 'Video';
        btn.replaceWith(f);
      });
    });

    var form = document.querySelector('#anfrage');
    if (form) {
      var query = location.search || (location.hash.indexOf('?') > -1 ? location.hash.slice(location.hash.indexOf('?')) : '');
      var params = new URLSearchParams(query);
      var p = params.get('produkt');
      if (p) {
        var sel = form.querySelector('[name=produkt]');
        if (![].some.call(sel.options, function (o) { return o.value === p; })) sel.add(new Option(p, p));
        sel.value = p;
      }
      form.addEventListener('submit', function (e) {
        e.preventDefault();
        if (!form.reportValidity()) return;
        var d = new FormData(form);
        var subject = 'Anfrage über die Webseite' + (d.get('produkt') ? ' – ' + d.get('produkt') : '');
        var body = [
          'Name: ' + d.get('name'),
          'Firma: ' + (d.get('firma') || '-'),
          'E-Mail: ' + d.get('email'),
          'Telefon: ' + (d.get('telefon') || '-'),
          'Produkt: ' + (d.get('produkt') || '-'),
          '',
          d.get('nachricht')
        ].join('\n');
        location.href = 'mailto:info@gmg-system.com?subject=' + encodeURIComponent(subject) + '&body=' + encodeURIComponent(body);
      });
    }

    var search = document.querySelector('#dl-search');
    if (search) {
      search.addEventListener('input', function () {
        var q = search.value.trim().toLowerCase();
        document.querySelectorAll('[data-dl-row]').forEach(function (r) {
          r.hidden = q && r.textContent.toLowerCase().indexOf(q) === -1;
        });
      });
    }
  }

  // Hero-Greifer: geschlossen beim Laden, öffnet sich beim Herunterscrollen.
  // Schienen fahren parallel nach außen, die Hebel schwenken um ihre Drehpunkte am Gehäuse.
  function initGripper() {
    var svg = document.querySelector('.gripper');
    if (!svg || svg.dataset.ready) return;
    svg.dataset.ready = '1';
    var g = JSON.parse(svg.dataset.geo);
    var part = function (n) { return svg.querySelector('[data-part="' + n + '"]'); };
    var u = g.axis;
    var dispFor = function (open, q) {
      return [q * (-g.travel * open[0] + g.axial * u[0]), q * (-g.travel * open[1] + g.axial * u[1])];
    };
    var still = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    var ticking = false;

    function render() {
      ticking = false;
      var range = Math.max(240, window.innerHeight * 0.55);
      var p = still ? 1 : Math.min(1, Math.max(0, window.scrollY / range));
      var q = 1 - (1 - Math.pow(1 - p, 2));  // sanft auslaufend
      var top = dispFor(g.open_top, q), bottom = dispFor(g.open_bottom, q);
      part('schiene-oben').setAttribute('transform', 'translate(' + top[0] + ' ' + top[1] + ')');
      part('schiene-unten').setAttribute('transform', 'translate(' + bottom[0] + ' ' + bottom[1] + ')');
      Object.keys(g.pivots).forEach(function (n) {
        // Hebel: Drehpunkt bleibt am Gehäuse, Fußpunkt folgt der Schiene (affine Abbildung, Achsrichtung bleibt).
        var P = g.pivots[n], a = g.arm_vectors[n];
        var b = [a[0] + bottom[0], a[1] + bottom[1]];
        var M = solve(a, u, b, u);
        var e = P[0] - (M[0] * P[0] + M[2] * P[1]), f = P[1] - (M[1] * P[0] + M[3] * P[1]);
        part(n).setAttribute('transform', 'matrix(' + M.join(' ') + ' ' + e + ' ' + f + ')');
      });
    }
    window.addEventListener('scroll', function () { if (!ticking) { ticking = true; requestAnimationFrame(render); } }, { passive: true });
    window.addEventListener('resize', render);
    render();
  }

  // Matrix M (Spalten [a c; b d]) mit M·v1 = w1 und M·v2 = w2.
  function solve(v1, v2, w1, w2) {
    var det = v1[0] * v2[1] - v2[0] * v1[1];
    var i11 = v2[1] / det, i12 = -v2[0] / det, i21 = -v1[1] / det, i22 = v1[0] / det;
    return [w1[0] * i11 + w2[0] * i21, w1[1] * i11 + w2[1] * i21, w1[0] * i12 + w2[0] * i22, w1[1] * i12 + w2[1] * i22];
  }

  window.gmgInit = function () { init(); initGripper(); };
  window.gmgInit();
})();
