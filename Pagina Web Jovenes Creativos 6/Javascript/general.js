const hamburger = document.querySelector('.hamburger-menu');
const navLinks = document.querySelector('.nav-links');
const dropdowns = document.querySelectorAll('.dropdown');
const searchBtn = document.querySelector('.search-btn');
const searchContainer = document.querySelector('.search-container');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navLinks.classList.toggle('active');
});

// Manejo de dropdowns en móvil
dropdowns.forEach(dropdown => {
    dropdown.addEventListener('click', (e) => {
        if (window.innerWidth <= 768) {
            e.preventDefault();
            dropdown.classList.toggle('active');
        }
    });
});

// Manejo del botón de búsqueda en móvil
if (searchBtn) {
    searchBtn.addEventListener('click', (e) => {
        if (window.innerWidth <= 768) {
            e.preventDefault();
            searchContainer.classList.toggle('active');
        }
    });
}

// Cerrar menú al hacer clic en un enlace
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        if (window.innerWidth <= 768 && !link.parentElement.classList.contains('dropdown')) {
            hamburger.classList.remove('active');
            navLinks.classList.remove('active');
        }
    });
});