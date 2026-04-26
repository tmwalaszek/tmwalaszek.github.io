// Set theme as early as possible to prevent FOUC.
// Order: explicit user choice (localStorage) → OS preference → light.
(function () {
  try {
    var saved = localStorage.getItem('theme');
    var prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
    var theme = saved || (prefersDark ? 'dark' : 'light');
    document.documentElement.setAttribute('data-theme', theme);
  } catch (e) {
    document.documentElement.setAttribute('data-theme', 'light');
  }
})();

document.addEventListener('DOMContentLoaded', function () {
  var toggle = document.getElementById('theme-toggle');
  if (!toggle) return;
  var html = document.documentElement;

  toggle.addEventListener('click', function () {
    var current = html.getAttribute('data-theme') === 'dark' ? 'dark' : 'light';
    var next = current === 'dark' ? 'light' : 'dark';
    html.setAttribute('data-theme', next);
    try { localStorage.setItem('theme', next); } catch (e) {}
    toggle.setAttribute(
      'aria-label',
      next === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'
    );
  });

  // Follow OS theme changes when the user hasn't made an explicit choice.
  if (window.matchMedia) {
    var media = window.matchMedia('(prefers-color-scheme: dark)');
    var listener = function (e) {
      if (localStorage.getItem('theme')) return; // user has chosen
      html.setAttribute('data-theme', e.matches ? 'dark' : 'light');
    };
    if (media.addEventListener) media.addEventListener('change', listener);
    else if (media.addListener) media.addListener(listener);
  }
});
