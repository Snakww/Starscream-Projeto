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

// ===== Menu: Efeito ao rolar e Menu Mobile Hambúrguer =====
const menu = document.getElementById("menu");
const btnMobile = document.getElementById("menu-mobile-btn");
const menuConteudo = document.getElementById("menu-conteudo");

window.addEventListener("scroll", function () {
  const scrollAtual = window.scrollY;

  if (menu) {
    if (scrollAtual > 60) {
      menu.classList.add("menu-scrolled");
    } else {
      menu.classList.remove("menu-scrolled");
    }
  }

  if (seta) {
    if (scrollAtual > 150) {
      seta.classList.add("escondida");
    } else {
      seta.classList.remove("escondida");
    }
  }
});

// Toggle Menu Mobile
if (btnMobile && menuConteudo) {
  btnMobile.addEventListener("click", () => {
    const expandido = btnMobile.getAttribute("aria-expanded") === "true";
    btnMobile.setAttribute("aria-expanded", !expandido);
    btnMobile.classList.toggle("ativo");
    menuConteudo.classList.toggle("aberto");
  });

  menuConteudo.querySelectorAll("a").forEach(link => {
    link.addEventListener("click", () => {
      btnMobile.classList.remove("ativo");
      btnMobile.setAttribute("aria-expanded", "false");
      menuConteudo.classList.remove("aberto");
    });
  });
}

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
 

// ===== Lightbox da Galeria =====
(() => {
  const itensGaleria = document.querySelectorAll('.item-galeria');
  const lightbox = document.getElementById('lightbox');
  const lightboxImg = document.getElementById('lightbox-img');
  const lightboxCaption = document.getElementById('lightbox-caption');
  const lightboxClose = document.getElementById('lightbox-close');
  const lightboxOverlay = document.getElementById('lightbox-overlay');

  if (!lightbox || !itensGaleria.length) return;

  function abrirLightbox(imgSrc, caption) {
    lightboxImg.src = imgSrc;
    lightboxCaption.textContent = caption || 'Starscream — Arquivo Visual';
    lightbox.hidden = false;
    document.body.style.overflow = 'hidden';
  }

  function fecharLightbox() {
    lightbox.hidden = true;
    lightboxImg.src = '';
    document.body.style.overflow = '';
  }

  itensGaleria.forEach(item => {
    item.addEventListener('click', () => {
      const img = item.querySelector('img');
      if (img) {
        const caption = item.getAttribute('data-caption') || img.alt;
        abrirLightbox(img.src, caption);
      }
    });
  });

  if (lightboxClose) lightboxClose.addEventListener('click', fecharLightbox);
  if (lightboxOverlay) lightboxOverlay.addEventListener('click', fecharLightbox);

  window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && !lightbox.hidden) {
      fecharLightbox();
    }
  });
})();

// ===== Terminal Interativo Decepticon // Teletraan-II =====
(() => {
  const input = document.getElementById('nome-input');
  const caixa = document.getElementById('nome-resultado');
  const imagem = document.getElementById('nome-imagem');
  const texto = document.getElementById('nome-texto');
  if (!input || !caixa) return;

  const normalizar = (s) =>
    s.normalize('NFD').replace(/[\u0300-\u036f]/g, '').trim().toLowerCase();

  const COMANDOS = {
    'anthony': {
      foto: './images/desenho.png',
      alt: 'Anthony',
      mensagem: 'Eu te amo ❤️'
    },
    'megatron': {
      foto: './images/fool.jpg',
      alt: 'Megatron',
      mensagem: '"Como ousa invocar o nome daquele tirano? O verdadeiro imperador dos Decepticons sou EU, Starscream!"'
    },
    'starscream': {
      foto: './images/galeriaDestaque.jpg',
      alt: 'Starscream',
      mensagem: 'Comandante Supremo da Frota Aérea Seeker. Próximo soberano absoluto de Cybertron.'
    },
    'seekers': {
      foto: './images/seeker1.jpg',
      alt: 'Esquadrão Seeker',
      mensagem: 'Esquadrão de Voo Elite: Starscream (Líder), Skywarp (Teleporte), Thundercracker (Sônico), Slipstream & Sunstorm.'
    },
    'cybertron': {
      foto: './images/altmode.png',
      alt: 'Cybertron',
      mensagem: 'Planeta natal dos Transformers. Em breve sob nova administração imperial.'
    },
    'ajuda': {
      foto: './images/logo.png',
      alt: 'Terminal Teletraan',
      mensagem: 'Comandos reconhecidos: megatron, starscream, seekers, cybertron, anthony.'
    },
    'help': {
      foto: './images/logo.png',
      alt: 'Terminal Teletraan',
      mensagem: 'Comandos reconhecidos: megatron, starscream, seekers, cybertron, anthony.'
    }
  };

  input.addEventListener('input', () => {
    const digitado = normalizar(input.value);

    if (!digitado) {
      caixa.hidden = true;
      return;
    }

    if (COMANDOS[digitado]) {
      const resp = COMANDOS[digitado];
      imagem.src = resp.foto;
      imagem.alt = resp.alt;
      imagem.hidden = false;
      texto.textContent = resp.mensagem;
    } else {
      imagem.src = './images/fool.jpg';
      imagem.alt = 'Acesso Negado';
      imagem.hidden = false;
      texto.textContent = 'ACESSO NEGADO // Nível de autorização insuficiente ou comando desconhecido.';
    }

    caixa.hidden = false;
  });
})();
 