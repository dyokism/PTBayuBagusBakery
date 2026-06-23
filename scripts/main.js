document.addEventListener('DOMContentLoaded', () => {
  const mobileBtn = document.querySelector('.mobile-menu-btn');
  const mobileMenu = document.querySelector('.mobile-nav-menu');
  const mobileLinks = document.querySelectorAll('.mobile-nav-link');

  const closeMenu = () => {
    mobileBtn.setAttribute('aria-expanded', 'false');
    mobileMenu.classList.remove('active');
    mobileBtn.classList.remove('active');
  };

  mobileBtn.addEventListener('click', () => {
    const expanded = mobileBtn.getAttribute('aria-expanded') === 'true';
    mobileBtn.setAttribute('aria-expanded', !expanded);
    mobileMenu.classList.toggle('active');
    mobileBtn.classList.toggle('active');
  });

  mobileLinks.forEach(link => {
    link.addEventListener('click', closeMenu);
  });

  // Closes mobile menu on Escape keypress to meet WCAG keyboard accessibility standards.
  window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && mobileMenu.classList.contains('active')) {
      closeMenu();
      mobileBtn.focus();
    }
  });

  const faders = document.querySelectorAll('.fade-in-section');
  const appearOptions = {
    threshold: 0.1,
    // Trigger reveals slightly before elements hit the viewport bounds for a smoother pacing.
    rootMargin: "0px 0px -60px 0px"
  };

  const appearOnScroll = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      entry.target.classList.add('appear');
      observer.unobserve(entry.target);
    });
  }, appearOptions);

  faders.forEach(fader => {
    appearOnScroll.observe(fader);
  });
});
