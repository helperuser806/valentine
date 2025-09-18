// Corazones animados
function crearCorazon() {
  const corazon = document.createElement("div");
  corazon.classList.add("corazon");
  corazon.innerHTML = "❤️";
  corazon.style.left = Math.random() * 100 + "vw";
  corazon.style.fontSize = Math.random() * 20 + 20 + "px";
  document.getElementById("corazones").appendChild(corazon);

  setTimeout(() => {
    corazon.remove();
  }, 6000);
}
setInterval(crearCorazon, 250);

// Fotos y frases personalizadas
const fotos = [
  { src: "img/foto1.jpeg", frase: "Eres mi chapolita hermosa 🦋💖, la razón por la que sonrío todos los días 🌞✨." },
  { src: "img/foto2.jpeg", frase: "Mi bebesauria 🦖💞, contigo cada día es una aventura mágica llena de amor y risas 🤭💕." },
  { src: "img/foto3.jpeg", frase: "Mi niña preciosa 👧🏼❤️, gracias por ser mi mejor compañía en este viaje de la vida 🚀💘." },
  { src: "img/foto4.jpeg", frase: "Eres mi San Valentín eterno 💘✨, no tengo ojos para otra mujer 👀❤️. Tú eres mi click, mi destino, mi todo 🌹🔗." },
  { src: "img/foto5.png", frase: "✨ Emily x Sebas 💞— Forever ♾️                dos edades distintas, pero un solo corazón latiendo al mismo ritmo. Nuestro amor fue destino, y por siempre sera divino.", especial: true }
];

let indice = 0;

const carta = document.getElementById("carta");
const galeria = document.getElementById("galeria");
const imagen = document.getElementById("imagen");
const frase = document.getElementById("frase");
const transicion = document.getElementById("transicion");
const fotoTexto = document.querySelector(".foto-texto");

// Función para mostrar transición
function mostrarTransicion(callback) {
  transicion.style.opacity = "1";
  setTimeout(() => {
    callback();
    transicion.style.opacity = "0";
  }, 600);
}

// Evento al hacer clic en carta
carta.addEventListener("click", () => {
  mostrarTransicion(() => {
    carta.classList.add("oculto");
    galeria.classList.remove("oculto");
    indice = 0;
    mostrarFoto();
  });
});

// Evento para pasar fotos
galeria.addEventListener("click", () => {
  mostrarTransicion(() => {
    indice++;
    if (indice >= fotos.length) {
      galeria.classList.add("oculto");
      carta.classList.remove("oculto");
    } else {
      mostrarFoto();
    }
  });
});

// Mostrar foto y frase
function mostrarFoto() {
  imagen.src = fotos[indice].src;
  frase.textContent = fotos[indice].frase;

  // Si es la última, aplicamos fondo con palabras
  if (fotos[indice].especial) {
    fotoTexto.classList.add("especial-fondo");
  } else {
    fotoTexto.classList.remove("especial-fondo");
  }
}