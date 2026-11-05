(function () {
  var reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if ('IntersectionObserver' in window) {
    var contacto = document.getElementById('contacto');
    var boton = document.querySelector('.to-top');
    if (contacto && boton) {
      new IntersectionObserver(function (entries) {
        boton.classList.toggle('visible', entries[entries.length - 1].isIntersecting);
      }, { threshold: 0.2 }).observe(contacto);
    }
    if (!reduced) {
      var observer = new IntersectionObserver(function (entries) {
        var i = 0;
        entries.forEach(function (entry) {
          if (!entry.isIntersecting) return;
          entry.target.style.animationDelay = Math.min(i++, 6) * 80 + 'ms';
          entry.target.classList.add('rv-in');
          observer.unobserve(entry.target);
        });
      }, { threshold: 0.15 });
      document.querySelectorAll('.rv').forEach(function (el) { observer.observe(el); });
    }
  }
})();
