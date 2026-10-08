// ===== Animação da capa: conteúdo some, vídeo aparece, tudo preso na tela =====
gsap.registerPlugin(ScrollTrigger);

const video = document.querySelector(".capa-video");
const botoes = document.querySelectorAll(".botoes-capa a");
const seta = document.querySelector(".capa-seta");

function animarCapa() {
  const linhaDoTempo = gsap.timeline({
    scrollTrigger: {
      trigger: ".capa",
      start: "top top",
      end: "+=3000",
      scrub: 1,
      pin: true
    }
  });

  linhaDoTempo.to(".capa-conteudo, .badges, .capa-seta, .botoes-capa", {
    opacity: 0,
    scale: 0.6,
    duration: 0.3
  }, 0);

  linhaDoTempo.to(video, { opacity: 1, duration: 0.5 }, 0);

  linhaDoTempo.to(video, {
    currentTime: video.duration || 1,
    duration: 2,
    ease: "none"
  }, 0);

  linhaDoTempo.to(video, { opacity: 0, duration: 0.5 }, 2);

  linhaDoTempo.to(".capa-conteudo, .badges, .botoes-capa", {
    opacity: 1,
    scale: 1,
    duration: 0.5
  }, 2.5);
}

if (video.readyState >= 1) {
  animarCapa();
} else {
  video.addEventListener("loadedmetadata", animarCapa);
}

// ===== Menu esconde ao rolar + botões da capa param de funcionar ao rolar =====
const menu = document.getElementById("menu");

window.addEventListener("scroll", function () {
  if (menu) {
    if (window.scrollY > 50) {
      menu.classList.add("menu-rolado");
    } else {
      menu.classList.remove("menu-rolado");
    }
  }

  const rolou = window.scrollY > 50;
  botoes.forEach((el) => {
    el.style.pointerEvents = rolou ? "none" : "auto";
  });
});

// ===== Blocos aparecendo suavemente ao rolar (fade-in) =====
const blocos = document.querySelectorAll(".aparecer");

const observador = new IntersectionObserver(function (entradas) {
  entradas.forEach(function (entrada) {
    if (entrada.isIntersecting) {
      entrada.target.classList.add("visivel");
      observador.unobserve(entrada.target);
    }
  });
}, { threshold: 0.15 });

blocos.forEach(function (bloco) {
  observador.observe(bloco);
});


(function () {
  var botoesFiltro = [].slice.call(document.querySelectorAll('.filtros__botao'));
  var aparicoes = [].slice.call(document.querySelectorAll('.aparicao'));
  var contador = document.querySelector('.aparicoes__contador');
  if (!botoesFiltro.length || !aparicoes.length) return;

  botoesFiltro.forEach(function (botao) {
    botao.addEventListener('click', function () {
      var categoria = botao.getAttribute('data-filtro');
      var visiveis = 0;

      botoesFiltro.forEach(function (outro) {
        outro.setAttribute('aria-pressed', outro === botao);
      });

      aparicoes.forEach(function (aparicao) {
        var mostrar = categoria === 'Todos' || aparicao.getAttribute('data-categoria') === categoria;
        aparicao.hidden = !mostrar;
        if (mostrar) visiveis++;
      });

      if (contador) contador.textContent = visiveis + (visiveis === 1 ? ' título' : ' títulos');
    });
  });
})();

(() => {
  const cards = document.querySelectorAll('.curio-card');
  if (!cards.length) return;
 
  const io = new IntersectionObserver((entries) => {
    entries.forEach((entry, i) => {
      if (!entry.isIntersecting) return;
      setTimeout(() => entry.target.classList.add('in'), i * 150);
      io.unobserve(entry.target);
    });
  }, { threshold: 0.25 });
 
  cards.forEach(card => io.observe(card));
})();
 