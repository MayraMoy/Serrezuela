
const hero = document.getElementById('hero');
const images = [
    'img/serrezuela1.webp',
    'img/serrezuela2.webp',
    'img/serrezuela3.webp'
];

let index = 0;

function changeBackground() {
    hero.style.backgroundImage = `url('${images[index]}')`;
    index = (index + 1) % images.length;
}

// Cambiar imagen cada 5 segundos
setInterval(changeBackground, 5000);

  // Mostrar la primera imagen al cargar
changeBackground();

function mostrarModal(img) {
    const modal = document.getElementById("modal");
    const imgAmpliada = document.getElementById("img-ampliada");
    imgAmpliada.src = img.src;
    modal.style.display = "flex";
}

function cerrarModal() {
    document.getElementById("modal").style.display = "none";
}

function mostrarTexto() {
    document.getElementById("texto-completo").style.display = "block";
    document.getElementById("boton-leer").style.display = "none";
}

const btn = document.getElementById('toggleBtn');
const contenido = document.getElementById('contenidoExtra');

btn.addEventListener('click', () => {
    contenido.classList.toggle('expandido');
    btn.textContent = contenido.classList.contains('expandido') ? 'Leer menos' : 'Leer más';
});