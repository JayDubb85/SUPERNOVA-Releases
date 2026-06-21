// Theme Management
const themeToggle = document.getElementById('themeToggle');
const themeIcon = document.querySelector('.theme-icon');
const htmlElement = document.documentElement;

// Get saved theme from localStorage or system preference
function getInitialTheme() {
  const saved = localStorage.getItem('theme');
  if (saved) {
    return saved;
  }
  
  // Check system preference
  if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
    return 'dark';
  }
  
  return 'light';
}

// Set theme
function setTheme(theme) {
  if (theme === 'dark') {
    htmlElement.setAttribute('data-theme', 'dark');
    if (themeIcon) {
      themeIcon.textContent = '☀️';
    }
    localStorage.setItem('theme', 'dark');
  } else {
    htmlElement.removeAttribute('data-theme');
    if (themeIcon) {
      themeIcon.textContent = '🌙';
    }
    localStorage.setItem('theme', 'light');
  }
}

// Initialize theme
const initialTheme = getInitialTheme();
setTheme(initialTheme);

// Theme toggle button
if (themeToggle) {
  themeToggle.addEventListener('click', () => {
    const currentTheme = htmlElement.getAttribute('data-theme');
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    setTheme(newTheme);
  });
}

// Listen for system theme changes
if (window.matchMedia) {
  window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (e) => {
    if (!localStorage.getItem('theme')) {
      setTheme(e.matches ? 'dark' : 'light');
    }
  });
}
