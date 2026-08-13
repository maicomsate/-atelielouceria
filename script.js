// ===== Menu mobile =====
(function () {
  var toggle = document.getElementById("menuToggle");
  var nav = document.getElementById("navMobile");
  if (!toggle || !nav) return;

  function closeMenu() {
    nav.hidden = true;
    toggle.setAttribute("aria-expanded", "false");
  }

  toggle.addEventListener("click", function () {
    var isOpen = nav.hidden === false;
    if (isOpen) {
      closeMenu();
    } else {
      nav.hidden = false;
      toggle.setAttribute("aria-expanded", "true");
    }
  });

  // Fecha ao clicar em um link
  nav.querySelectorAll("a").forEach(function (link) {
    link.addEventListener("click", closeMenu);
  });

  // Garante estado correto ao voltar para desktop
  window.addEventListener("resize", function () {
    if (window.innerWidth >= 768) closeMenu();
  });
})();

// ===== Animações de entrada ao rolar =====
(function () {
  var items = document.querySelectorAll(".reveal");
  if (!items.length) return;

  if (!("IntersectionObserver" in window)) {
    items.forEach(function (el) {
      el.classList.add("is-visible");
    });
    return;
  }

  var observer = new IntersectionObserver(
    function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.15, rootMargin: "0px 0px -40px 0px" }
  );

  items.forEach(function (el) {
    observer.observe(el);
  });
})();
