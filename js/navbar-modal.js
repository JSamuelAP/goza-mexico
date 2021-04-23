const searchBtn = document.querySelector('#search-button');
const navbarModal = document.querySelector('#navbar-modal');
const body = document.body;

searchBtn.addEventListener('click', (event) => {
  event.preventDefault();
  body.classList.toggle('no-scrolling');
  searchBtn.classList.toggle('active');
  navbarModal.classList.toggle('visible');
  if (!navbar.classList.contains('expanded')) {
    navbar.classList.add('expanded');
    expandBtn.classList.add('navbar__link--caret');
    navbarModal.style.animationDelay = '600ms';
  } else {
    navbarModal.style.animationDelay = '0s';
  }
});