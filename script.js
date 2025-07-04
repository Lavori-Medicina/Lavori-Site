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


function scrollToContact(event) {
  event.preventDefault();
  const contact = document.querySelector('#contato');
  const headerHeight = document.querySelector('nav').offsetHeight;

  window.scrollTo({
    top: contact.offsetTop - headerHeight,
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


function openModal(event) {
  event.preventDefault();
  const modalSelector = event.currentTarget.getAttribute('data-modal');
  const modal = document.querySelector(modalSelector);

  if (modal) {
    modal.classList.add('active');
    document.body.style.overflow = 'hidden'; // impede scroll do fundo
  }
}

function closeModal() {
  const modais = document.querySelectorAll('.modal');
  modais.forEach(modal => {
    modal.classList.remove('active');
  });
  document.body.style.overflow = 'auto';
}
window.addEventListener('click', function(e) {
  const modais = document.querySelectorAll('.modal');
  modais.forEach(modal => {
    if (e.target === modal) {
      modal.classList.remove('active');
      document.body.style.overflow = 'auto';
    }
  });
});

function anotherScreen() {
  const anotherScreen = document.querySelector('#another-screen');
  const headerHeight = document.querySelector('nav').offsetHeight;

  window.scrollTo({
    top: anotherScreen.offsetTop - headerHeight,
    behavior: 'smooth',
  });

  fecharMenuSeMobile();
}


function scrollWithOffset(targetSelector) {
  const target = document.querySelector(targetSelector);
  const headerHeight = document.querySelector("nav").offsetHeight;

  if (target) {
    window.scrollTo({
      top: target.offsetTop - headerHeight,
      behavior: "smooth",
    });
  }
}

document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener("click", function (event) {
      const href = this.getAttribute("href");

      if (document.querySelector(href)) {
        event.preventDefault();
        scrollWithOffset(href);

        // Fecha o menu se estiver no mobile
        if (typeof fecharMenuSeMobile === "function") {
          fecharMenuSeMobile();
        }
      }
    });
  });
});



window.addEventListener("load", () => {
  if (window.location.hash) {
    scrollWithOffset(window.location.hash);
  }
});

// Dicionário com as imagens de cada galeria
const imageSets = {
  imbituba: [
    "image/clinica imbituba.jpg",
    "image/clinica-lavori-imbituba-recepcao-1.jpg",
    "image/clinica-lavori-imbituba-recepcao-2.jpg"
  ],
  laguna: [
    "image/laguna-porta.jpg",
    "image/laguna-recepção2.jpg",
    "image/laguna-recepção.jpg"
  ],
  garopaba: [
    "image/clinica imbituba.jpg",
    "image/clinica-lavori-imbituba-recepcao-1.jpg",
    "image/clinica-lavori-imbituba-recepcao-2.jpg"
  ],
  pauloLopes: [
   "image/clinica imbituba.jpg",
    "image/clinica-lavori-imbituba-recepcao-1.jpg",
    "image/clinica-lavori-imbituba-recepcao-2.jpg"
  ],

};

const imageIndexes = {
  imbituba: 0,
  laguna: 0,
  garopaba:0,
  pauloLopes:0

};

function changeImage(clinica, direction) {
  const total = imageSets[clinica].length;
  imageIndexes[clinica] += direction;

  if (imageIndexes[clinica] < 0) imageIndexes[clinica] = total - 1;
  if (imageIndexes[clinica] >= total) imageIndexes[clinica] = 0;

  const imgElement = document.getElementById(`imageSlider-${clinica}`);
  imgElement.src = imageSets[clinica][imageIndexes[clinica]];
}



