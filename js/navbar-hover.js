const searchBtn = document.querySelector('#search-button');
const navbarModal = document.querySelector('#navbar-modal');

searchBtn.addEventListener('click', (event) => {
  event.preventDefault();
  searchBtn.classList.toggle('active');
  navbarModal.classList.toggle('visible');
})