function toggleMenu() {
  const navLinks = document.getElementById('nav-links');
  const overlay = document.getElementById('overlay');

  navLinks.classList.toggle('active');
  overlay.classList.toggle('active');
}



function fecharMenuSeMobile() {
  const navLinks = document.getElementById('nav-links');
  const overlay = document.getElementById('overlay');

  if (window.innerWidth <= 768) {
    navLinks.classList.remove('active');
    overlay.classList.remove('active');
  }
}

function scrollToHome(event) {
  event.preventDefault();
  const home = document.querySelector('#home');
  const headerHeight = document.querySelector('nav').offsetHeight;

  window.scrollTo({
    top: home.offsetTop - headerHeight,
    behavior: 'smooth',
  });

  fecharMenuSeMobile();
}

function scrollToUnity(event) {
  event.preventDefault();
  const unity = document.querySelector('#unity');
  const headerHeight = document.querySelector('nav').offsetHeight;

  window.scrollTo({
    top: unity.offsetTop - headerHeight,
    behavior: 'smooth',
  });

  fecharMenuSeMobile();
}

function scrollToInfo(event) {
  event.preventDefault();
  const info = document.querySelector('#info');
  const headerHeight = document.querySelector('nav').offsetHeight;

  window.scrollTo({
    top: info.offsetTop - headerHeight,
    behavior: 'smooth',
  });

  const targetImage = info.querySelector('.article-image img');
  if (targetImage) {
    targetImage.classList.remove('scroll-animate');
    void targetImage.offsetWidth; // força reflow para reiniciar a animação
    targetImage.classList.add('scroll-animate');
  }

  fecharMenuSeMobile();
}

function scrollToHistory(event) {
  event.preventDefault();

  const history = document.querySelector('#history');
  const headerHeight = document.querySelector('nav').offsetHeight;

  window.scrollTo({
    top: history.offsetTop - headerHeight,
    behavior: 'smooth',
  });

  // Animação nas imagens
  const imagens = history.querySelectorAll('.image-history img');
  imagens.forEach(img => {
    img.classList.add('scroll-animate');
    setTimeout(() => {
      img.classList.remove('scroll-animate');
    }, 600);
  });

  fecharMenuSeMobile();
}


function scrollToServices(event) {
  event.preventDefault();
  const services = document.querySelector('#services');
  const headerHeight = document.querySelector('nav').offsetHeight;

  window.scrollTo({
    top: services.offsetTop - headerHeight,
    behavior: 'smooth',
  });

  fecharMenuSeMobile();
}