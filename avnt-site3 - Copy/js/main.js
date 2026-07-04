// AVNT — shared interactions: nav state, reveal-on-scroll, motion-line draw, mobile menu

document.addEventListener('DOMContentLoaded', () => {

  // reveal on scroll
  const revealEls = document.querySelectorAll('.reveal, .motion-line');
  const io = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        e.target.classList.add('in');
        io.unobserve(e.target);
      }
    });
  }, { threshold: 0.18 });
  revealEls.forEach(el => io.observe(el));

  // mobile menu
  const burger = document.querySelector('.nav-burger');
  const mobileMenu = document.querySelector('.mobile-menu');
  if (burger && mobileMenu) {
    const links = document.querySelectorAll('.nav-links a:not(.nav-cta)');
    mobileMenu.innerHTML = Array.from(links).map(a =>
      `<a href="${a.getAttribute('href')}" style="font-family:'Archivo',sans-serif;font-weight:700;text-transform:uppercase;font-size:28px;color:var(--paper);letter-spacing:0.02em;">${a.textContent}</a>`
    ).join('');
    burger.addEventListener('click', () => {
      const open = mobileMenu.classList.toggle('open');
      mobileMenu.style.transform = open ? 'translateY(0)' : 'translateY(-100%)';
      burger.textContent = open ? 'Fechar' : 'Menu';
    });
  }

  // active nav link
  const path = location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav-links a, .mobile-menu a').forEach(a => {
    if (a.getAttribute('href') === path) a.classList.add('active');
  });
});
