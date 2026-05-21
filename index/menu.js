const navToggleButton = document.createElement('button');
navToggleButton.className = 'nav-toggle';
navToggleButton.setAttribute('aria-expanded', 'false');
navToggleButton.setAttribute('aria-label', 'Toggle navigation menu');
navToggleButton.innerHTML = '<span></span>';

const header = document.querySelector('header');
const navBar = document.querySelector('.nav_bar');

if (header && navBar) {
  header.insertBefore(navToggleButton, navBar);

  navToggleButton.addEventListener('click', () => {
    const isOpen = navBar.classList.toggle('open');
    navToggleButton.setAttribute('aria-expanded', String(isOpen));
  });

  document.addEventListener('click', (event) => {
    if (!event.target.closest('.nav_bar') && !event.target.closest('.nav-toggle')) {
      navBar.classList.remove('open');
      navToggleButton.setAttribute('aria-expanded', 'false');
    }
  });
}
