function scrollToHome(event) {
  event.preventDefault();
  const home = document.querySelector('#home');
  window.scrollTo({
    top: home.offsetTop - 300, // compensar o menu fixo
    behavior: 'smooth',
  });
}

function scrollToInfo(event) {
  event.preventDefault();
  const info = document.querySelector('#info');
  window.scrollTo({
    top: info.offsetTop - 80, // compensar o menu fixo
    behavior: 'smooth',
  });
}

function toggleMenu() {
  const navLinks = document.getElementById('nav-links');
  navLinks.classList.toggle('show');
}

