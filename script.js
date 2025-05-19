// Obtenemos el saludo y el elemento de la música
const greeting = document.getElementById('greeting');
const backgroundMusic = document.getElementById('background-music');
const greetingScreen = document.getElementById('greeting-screen');
const content = document.getElementById('content');

// Función para activar la música al hacer clic en el saludo
greeting.addEventListener('click', function() {
    // Reproducimos la música
    backgroundMusic.play();
    
    // Cambiamos el texto del saludo
    greeting.textContent = "¡El Mejor Cheater! ";
    
    // Ocultamos la pantalla de bienvenida
    greetingScreen.style.display = 'none';
    
    // Mostramos el contenido de la página
    content.style.display = 'flex';

    // Opcional: Desactivamos la opción de hacer clic después de que la música comienza
    greeting.style.cursor = 'default';
});


