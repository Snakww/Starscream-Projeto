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
      end: "+=1400",
      scrub: 1,
      pin: true
    }
  });

  linhaDoTempo.to(".capa-conteudo, .badges, .capa-seta, .botoes-capa", {
    opacity: 0,
    scale: 0.85,
    duration: 0.35
  }, 0);

  linhaDoTempo.to(video, { opacity: 1, duration: 0.4 }, 0);

  linhaDoTempo.to(video, {
    currentTime: video.duration || 1,
    duration: 1.5,
    ease: "none"
  }, 0);

  linhaDoTempo.to(video, { opacity: 0, duration: 0.4 }, 1.5);

  linhaDoTempo.to(".capa-conteudo, .badges, .botoes-capa", {
    opacity: 1,
    scale: 1,
    duration: 0.4
  }, 1.9);
}

if (video.readyState >= 1) {
  animarCapa();
} else {
  video.addEventListener("loadedmetadata", animarCapa);
}

// ===== Controle da seta ao rolar =====
window.addEventListener("scroll", function () {
  if (seta) {
    if (window.scrollY > 150) {
      seta.classList.add("escondida");
    } else {
      seta.classList.remove("escondida");
    }
  }
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
 

(() => {
  const input = document.getElementById('nome-input');
  const caixa = document.getElementById('nome-resultado');
  const imagem = document.getElementById('nome-imagem');
  const texto = document.getElementById('nome-texto');
  if (!input || !caixa) return;
 
  const NOME = 'anthony';
  const FOTO = './images/desenho.png';
  const MENSAGEM = 'Eu te amo ❤️';
 
  // para qualquer outro nome
  const FOTO_OUTRO = './images/fool.jpg';
  const MENSAGEM_OUTRO = 'Acesso Negado';
 
  // ignora maiúsculas, acentos e espaços nas pontas
  const normalizar = (s) =>
    s.normalize('NFD').replace(/[\u0300-\u036f]/g, '').trim().toLowerCase();
 
  input.addEventListener('input', () => {
    const digitado = normalizar(input.value);
 
    // campo vazio: esconde tudo
    if (!digitado) {
      caixa.hidden = true;
      return;
    }
 
    if (digitado === NOME) {
      imagem.src = FOTO;
      imagem.alt = 'Anthony';
      imagem.hidden = false;
      texto.textContent = MENSAGEM;
    } else {
      imagem.src = FOTO_OUTRO;
      imagem.alt = 'Starscream';
      imagem.hidden = false;
      texto.textContent = MENSAGEM_OUTRO;
    }
 
    caixa.hidden = false;
  });
})();
 