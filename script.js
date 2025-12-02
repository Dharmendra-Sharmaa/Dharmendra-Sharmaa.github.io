// Simple theme toggle: persists preference in localStorage
const toggle = document.getElementById('themeToggle');
const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
const saved = localStorage.getItem('theme');

function applyTheme(theme) {
  if (theme === 'light') {
    document.documentElement.setAttribute('data-theme', 'light');
    toggle.innerHTML = '<i class="fa-solid fa-sun"></i>';
  } else {
    document.documentElement.removeAttribute('data-theme');
    toggle.innerHTML = '<i class="fa-solid fa-moon"></i>';
  }
}

applyTheme(saved || (prefersDark ? 'dark' : 'light'));

toggle.addEventListener('click', () => {
  const now = document.documentElement.getAttribute('data-theme') === 'light' ? 'dark' : 'light';
  applyTheme(now);
  localStorage.setItem('theme', now);
});
