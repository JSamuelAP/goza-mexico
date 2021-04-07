const expandBtn = document.querySelector('#expand-navbar');
const navbar = document.querySelector('#navbar');

expandBtn.addEventListener('click', (event) => {
  event.preventDefault();
  navbar.classList.toggle('expanded');
  expandBtn.classList.toggle('navbar__link--caret');
  navbarModal.classList.remove('visible');
  searchBtn.classList.remove('active');
});