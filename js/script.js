ScrollTrigger.clearScrollMemory("manual");
window.scrollTo(0, 0);

gsap.registerPlugin(ScrollTrigger);

const video = document.querySelector(".capa-video");

function animarCapa() {
  const linhaDoTempo = gsap.timeline({
    scrollTrigger: {
      trigger: ".capa",
      start: "top top",
      end: "+=2500",
      scrub: 1,
      pin: true
    }
  });

  linhaDoTempo.to(".capa-conteudo, .badges, .capa-seta", {
    opacity: 0,
    scale: 0.6,
    duration: 0.1
  }, 0);

  linhaDoTempo.to(video, { opacity: 1, duration: 0.8 }, 0);

  linhaDoTempo.to(video, {
    currentTime: video.duration || 1,
    duration: 1,
    ease: "none"
  }, 0);
}

if (video.readyState >= 1) {
  animarCapa();
} else {
  video.addEventListener("loadedmetadata", animarCapa);
}

// ===== Menu esconde ao rolar a página =====
const menu = document.getElementById("menu");

window.addEventListener("scroll", function () {
  if (!menu) return;

  if (window.scrollY > 50) {
    menu.classList.add("menu-rolado");
  } else {
    menu.classList.remove("menu-rolado");
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