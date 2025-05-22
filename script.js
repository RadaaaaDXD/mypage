// Obtenemos los elementos clave
const greeting = document.getElementById('greeting');
const backgroundMusic = document.getElementById('background-music');
const greetingScreen = document.getElementById('greeting-screen');
const content = document.getElementById('content');
const interactiveBox = document.querySelector('.interactive-box');
const profileImage = document.querySelector('.profile img');
const socialButtons = document.querySelectorAll('.social-button');
const imageGallery = document.querySelector('.image-gallery');

// Activar música y mostrar contenido al hacer clic en saludo
greeting.addEventListener('click', function () {
    backgroundMusic.play();
    greeting.textContent = "¡El Mejor Cheater!";
    greetingScreen.style.display = 'none';
    content.style.display = 'flex';
    imageGallery.style.display = 'block'; // Mostrar la galería
    greeting.style.cursor = 'default';
    backgroundMusic.volume = 0.08;
});

// Movimiento interactivo
interactiveBox.addEventListener('mousemove', (e) => {
    const boxRect = interactiveBox.getBoundingClientRect();
    const mouseX = e.clientX - boxRect.left;
    const mouseY = e.clientY - boxRect.top;
    const moveX = (mouseX / boxRect.width - 0.5) * 20;
    const moveY = (mouseY / boxRect.height - 0.5) * 20;

    profileImage.style.transform = `translate(${moveX}px, ${moveY}px)`;
    socialButtons.forEach(button => {
        button.style.transform = `translate(${moveX}px, ${moveY}px)`;
    });
});

// Bloquear clic derecho y combinaciones de teclas
document.addEventListener("contextmenu", e => e.preventDefault());
document.addEventListener('keydown', function (e) {
    if (e.keyCode === 123 || 
        (e.ctrlKey && e.shiftKey && e.keyCode === 73) || 
        (e.ctrlKey && e.keyCode === 85)) {
        e.preventDefault();
    }
});

// Slider de galería
const slides = document.querySelectorAll('.slide');
let currentIndex = 0;

function showSlide(index) {
    slides.forEach((slide, i) => {
        slide.classList.remove('active');
        slide.style.display = i === index ? 'block' : 'none';
    });
}

document.querySelector('.prev').addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + slides.length) % slides.length;
    showSlide(currentIndex);
});

document.querySelector('.next').addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % slides.length;
    showSlide(currentIndex);
});

// Inicializa el slider
showSlide(currentIndex);

