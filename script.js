// script.js
document.getElementById('menuToggle').addEventListener('click', function() {
    const sidebar = document.getElementById('sidebar');
    if (sidebar.style.left === '-250px') {
        sidebar.style.left = '0';
    } else {
        sidebar.style.left = '-250px';
    }
});

// Obtener todos los enlaces del menú
const menuLinks = document.querySelectorAll('#sidebar a');

// Obtener todas las secciones
const sections = document.querySelectorAll('.section-content');

// Función para ocultar todas las secciones
function hideAllSections() {
    sections.forEach(section => {
        section.classList.remove('active');
    });
}

// Añadir evento a cada enlace del menú
menuLinks.forEach(link => {
    link.addEventListener('click', function(event) {
        event.preventDefault();
        // Ocultar todas las secciones
        hideAllSections();
        // Mostrar la sección correspondiente
        const target = this.getAttribute('href').substring(1);
        document.getElementById(target).classList.add('active');
        // Cerrar el menú
        document.getElementById('sidebar').style.left = '-250px';
    });
});
