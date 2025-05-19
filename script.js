
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

document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('verMasBtn').addEventListener('click', function () {
        const ocultos = document.querySelectorAll('#atractivos .card.oculto');
        ocultos.forEach(card => card.style.display = 'block');
        this.style.display = 'none'; // Oculta el botón después de mostrar
    });
});