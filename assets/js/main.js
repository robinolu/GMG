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

  window.gmgInit = init;
  init();
})();
