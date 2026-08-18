const seta = document.querySelector('.capa-seta');

window.addEventListener('scroll', () => {
  if (window.scrollY > 50) { // some depois de 50px de scroll
    seta.classList.add('escondida');
  } else {
    seta.classList.remove('escondida');
  }
});