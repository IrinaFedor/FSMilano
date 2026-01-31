(function () {
  var headerEl = document.getElementById('site-header-placeholder');
  var footerEl = document.getElementById('site-footer-placeholder');
  if (!headerEl && !footerEl) return;

  var headerHTML = '<section class="hero hero--banner">' +
    '<div class="hero-bg" aria-hidden="true"></div>' +
    '<div class="hero-header">' +
    '<div class="container hero-header-inner">' +
    '<a href="index.html" class="logo-hero">Milano Cortina <span>2026</span></a>' +
    '<nav class="nav-hero">' +
    '<a href="index.html">Home</a>' +
    '<a href="participants-by-discipline.html">Participants by discipline</a>' +
    '<a href="schedule.html">Schedule</a>' +
    '<a href="participants.html">Participants by country</a>' +
    '<a href="suggestions.html">Suggestions</a>' +
    '</nav>' +
    '</div>' +
    '</div>' +
    '<div class="container hero-content">' +
    '<h1>Winter Olympics Figure Skating</h1>' +
    '</div>' +
    '</section>';

  var footerHTML = '<footer class="site-footer">' +
    '<div class="container">' +
    '<p>Public information about figure skating at the Olympic Winter Games Milano Cortina 2026. Not affiliated with the IOC or Milano Cortina 2026.</p>' +
    '<p><a href="https://www.olympics.com/en/milano-cortina-2026" target="_blank" rel="noopener">Official Milano Cortina 2026</a></p>' +
    '</div>' +
    '</footer>';

  function inject(headerText, footerText) {
    if (headerEl && headerText != null) headerEl.innerHTML = headerText;
    if (footerEl && footerText != null) footerEl.innerHTML = footerText;
  }

  function useFallback() {
    inject(headerHTML, footerHTML);
  }

  if (typeof fetch !== 'function') {
    useFallback();
    return;
  }

  Promise.all([
    fetch('header.html').then(function (r) { return r.ok ? r.text() : Promise.reject(); }),
    fetch('footer.html').then(function (r) { return r.ok ? r.text() : Promise.reject(); })
  ]).then(function (results) {
    inject(results[0], results[1]);
  }).catch(useFallback);
})();
