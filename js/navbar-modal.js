const searchBtn = document.querySelector('#search-button');
const navbarModal = document.querySelector('#navbar-modal');
const body = document.body;

searchBtn.addEventListener('click', (event) => {
  event.preventDefault();
  searchBtn.classList.toggle('active');
  navbarModal.classList.toggle('visible');
  if (!navbar.classList.contains('expanded')) {
    navbar.classList.add('expanded');
    expandBtn.classList.add('navbar__link--caret');
  }
  letBodyScroll();
});

function letBodyScroll() {
  if (body.style.overflowY === 'hidden') {
    body.style.overflowY = 'unset';
  } else {
    body.style.overflowY = 'hidden';
  }
}