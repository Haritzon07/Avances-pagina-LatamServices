const hamburger = document.querySelector('.hamburger-menu');
const navLinks = document.querySelector('.nav-links');
const dropdowns = document.querySelectorAll('.dropdown');
const searchBtn = document.querySelector('.search-btn');
const searchContainer = document.querySelector('.search-container');

// Toggle menú hamburguesa
hamburger.addEventListener('click', (e) => {
    e.stopPropagation(); // Prevenir propagación
    hamburger.classList.toggle('active');
    navLinks.classList.toggle('active');
});

// Manejo de dropdowns en móvil
dropdowns.forEach(dropdown => {
    const dropdownLink = dropdown.querySelector('a');
    dropdownLink.addEventListener('click', (e) => {
        if (window.innerWidth <= 1100) {
            e.preventDefault();
            e.stopPropagation(); // Prevenir propagación
            dropdown.classList.toggle('active');
        }
    });
});

// Manejo del botón de búsqueda en móvil
if (searchBtn) {
    searchBtn.addEventListener('click', (e) => {
        if (window.innerWidth <= 1100) {
            e.preventDefault();
            e.stopPropagation(); // Prevenir propagación
            searchContainer.classList.toggle('active');
        }
    });
}

// Cerrar menú al hacer clic en un enlace
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', (e) => {
        if (window.innerWidth <= 1100 && !link.parentElement.classList.contains('dropdown')) {
            hamburger.classList.remove('active');
            navLinks.classList.remove('active');
        }
    });
});

// Cerrar menú al hacer clic fuera
document.addEventListener('click', (e) => {
    if (!navLinks.contains(e.target) && !hamburger.contains(e.target)) {
        hamburger.classList.remove('active');
        navLinks.classList.remove('active');
        dropdowns.forEach(dropdown => dropdown.classList.remove('active'));
        if (searchContainer) searchContainer.classList.remove('active');
    }
});