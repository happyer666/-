const menuButton = document.querySelector('.menu-btn');
const navLinks = document.querySelector('.nav-links');
const links = [...document.querySelectorAll('.nav-links a')];

menuButton?.addEventListener('click', () => {
  const isOpen = navLinks.classList.toggle('open');
  menuButton.setAttribute('aria-expanded', String(isOpen));
});

links.forEach(link => {
  link.addEventListener('click', () => {
    navLinks.classList.remove('open');
    menuButton?.setAttribute('aria-expanded', 'false');
  });
});

const sections = [...document.querySelectorAll('main section[id]')];
const updateActiveLink = () => {
  let current = 'home';
  const marker = window.scrollY + 150;
  sections.forEach(section => {
    if (section.offsetTop <= marker) current = section.id;
  });
  links.forEach(link => {
    const href = link.getAttribute('href');
    link.classList.toggle('active', href === `#${current}` || (current === 'about' && href === '#home'));
  });
};
window.addEventListener('scroll', updateActiveLink, {passive:true});
updateActiveLink();
