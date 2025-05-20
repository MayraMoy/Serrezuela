// Imagenes 
const hero = document.getElementById('hero');
const images = [
    'img/serrezuela1.webp',
    'img/serrezuela2.webp',
    'img/serrezuela3.webp'
];

let index = 0;

// Cambiar la imagen de fondo
function changeBackground() {
    hero.style.backgroundImage = `url('${images[index]}')`;
    index = (index + 1) % images.length;
}

// Cambiar imagen cada 5 segundos
setInterval(changeBackground, 5000);

  // Mostrar la primera imagen al cargar
changeBackground();

// Mostrar la imagen ampliada
function mostrarModal(img) {
    const modal = document.getElementById("modal");
    const imgAmpliada = document.getElementById("img-ampliada");
    imgAmpliada.src = img.src;
    modal.style.display = "flex";
}

// Cerrar el modal
function cerrarModal() {
    document.getElementById("modal").style.display = "none";
}

// Mostrar mas o menos fotos
document.addEventListener('DOMContentLoaded', function () {
    const verMasBtn = document.getElementById('verMasBtn');
    const verMenosBtn = document.getElementById('verMenosBtn');
    const ocultos = document.querySelectorAll('#atractivos .card.oculto');

    verMasBtn.addEventListener('click', function () {
        ocultos.forEach(card => {
            card.style.display = 'block';
        });
        verMasBtn.style.display = 'none';
        verMenosBtn.style.display = 'inline-block';
    });

    verMenosBtn.addEventListener('click', function () {
        ocultos.forEach(card => {
            card.style.display = 'none';
        });
        verMenosBtn.style.display = 'none';
        verMasBtn.style.display = 'inline-block';
    });

    // Inicialmente ocultar las tarjetas .oculto por si no tienen display:none en CSS
    ocultos.forEach(card => {
        card.style.display = 'none';
    });
});
