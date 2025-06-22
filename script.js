// function scrollToHome(event) {
//   event.preventDefault();
//   const home = document.querySelector('#home');
//   window.scrollTo({
//     top: home.offsetTop - 300, // compensar o menu fixo
//     behavior: 'smooth',
//   });
// }

// function scrollToInfo(event) {
//   event.preventDefault();
//   const info = document.querySelector('#info');
//   window.scrollTo({
//     top: info.offsetTop - 80, // compensar o menu fixo
//     behavior: 'smooth',
//   });
// }

function toggleMenu() {
  const navLinks = document.getElementById('nav-links');
  if (navLinks.style.display === 'flex') {
    navLinks.style.display = 'none';
  } else {
    navLinks.style.display = 'flex';
    navLinks.style.flexDirection = 'column';
  }
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

function scrollToInfo(event) {
  event.preventDefault();
  const info = document.querySelector('#info');
  const headerHeight = document.querySelector('nav').offsetHeight;

  window.scrollTo({
    top: info.offsetTop - headerHeight,
    behavior: 'smooth',
  });

  const targetImage = info.querySelector('.article-image img'); // ou qualquer outro seletor dentro de #info
  if (targetImage) {
    targetImage.classList.remove('scroll-animate'); // remove para poder reanimar
    void targetImage.offsetWidth; // força reflow
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

function fecharMenuSeMobile() {
  const navLinks = document.getElementById('nav-links');
  if (window.innerWidth <= 768) {
    navLinks.style.display = 'none';
  }
}
