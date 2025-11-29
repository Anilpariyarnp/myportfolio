// Mobile Menu
document.querySelector('.mobile-menu').addEventListener('click', () => {
  document.querySelector('.mobile-nav').classList.toggle('active');
});
document.querySelectorAll('.mobile-nav a').forEach(l => l.addEventListener('click', () => {
  document.querySelector('.mobile-nav').classList.remove('active');
}));

// Smooth Scroll
document.querySelectorAll('a[href^="#"]').forEach(a => {
  a.addEventListener('click', e => {
    e.preventDefault();
    document.querySelector(a.getAttribute('href')).scrollIntoView({ behavior: 'smooth' });
  });
});

// Dark Mode
const toggle = document.querySelector('.theme-toggle i');
document.querySelector('.theme-toggle').addEventListener('click', () => {
  const isDark = document.body.getAttribute('data-theme') === 'dark';
  document.body.setAttribute('data-theme', isDark ? 'light' : 'dark');
  toggle.classList.toggle('fa-moon', isDark);
  toggle.classList.toggle('fa-sun', !isDark);
  localStorage.setItem('theme', isDark ? 'light' : 'dark');
});
if (localStorage.getItem('theme') === 'dark') {
  document.body.setAttribute('data-theme', 'dark');
  toggle.classList.replace('fa-moon', 'fa-sun');
}

// Lightbox
document.querySelectorAll('.project-card img').forEach(img => {
  img.style.cursor = 'pointer';
  img.addEventListener('click', () => {
    document.getElementById('lightbox-img').src = img.src;
    document.getElementById('lightbox').style.display = 'flex';
  });
});
document.querySelector('.close-lightbox').onclick = () => document.getElementById('lightbox').style.display = 'none';
document.getElementById('lightbox').onclick = e => e.target === document.getElementById('lightbox') && (document.getElementById('lightbox').style.display = 'none');