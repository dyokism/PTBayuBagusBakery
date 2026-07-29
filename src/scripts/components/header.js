export const initHeader = () => {
  const header = document.getElementById('site-header');
  const toggleBtn = document.getElementById('menu-toggle-btn');
  const drawer = document.getElementById('mobile-nav-drawer');
  const mobileLinks = document.querySelectorAll('.mobile-nav-item, .mobile-btn-cta');

  if (!header) return;

  // Throttled scroll handling using rAF + passive listener
  let ticking = false;
  window.addEventListener('scroll', () => {
    if (!ticking) {
      requestAnimationFrame(() => {
        if (window.scrollY > 20) {
          header.classList.add('scrolled');
        } else {
          header.classList.remove('scrolled');
        }
        ticking = false;
      });
      ticking = true;
    }
  }, { passive: true });

  const closeDrawer = () => {
    if (drawer) drawer.classList.remove('active');
    if (toggleBtn) {
      toggleBtn.classList.remove('active');
      toggleBtn.setAttribute('aria-expanded', 'false');
    }
    document.documentElement.classList.remove('mobile-menu-open');
    header.classList.remove('mobile-menu-active');
  };

  if (toggleBtn && drawer) {
    toggleBtn.addEventListener('click', () => {
      const isOpen = drawer.classList.contains('active');
      if (isOpen) {
        closeDrawer();
      } else {
        drawer.classList.add('active');
        toggleBtn.classList.add('active');
        toggleBtn.setAttribute('aria-expanded', 'true');
        document.documentElement.classList.add('mobile-menu-open');
        header.classList.add('mobile-menu-active');
      }
    });
  }

  mobileLinks.forEach(link => link.addEventListener('click', closeDrawer));

  window.addEventListener('resize', () => {
    if (window.innerWidth >= 992 && drawer && drawer.classList.contains('active')) {
      closeDrawer();
    }
  }, { passive: true });
};
