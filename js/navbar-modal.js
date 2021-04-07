const searchBtn = document.querySelector('#search-button');
const navbarModal = document.querySelector('#navbar-modal');

searchBtn.addEventListener('click', (event) => {
  event.preventDefault();
  searchBtn.classList.toggle('active');
  navbarModal.classList.toggle('visible');
  if (!navbar.classList.contains('expanded')) {
    navbar.classList.add('expanded');
    expandBtn.classList.add('navbar__link--caret');
  }
});