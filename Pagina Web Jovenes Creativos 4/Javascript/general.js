document.addEventListener('DOMContentLoaded', function() {
    const searchInput = document.getElementById('searchInput');
    const searchItems = document.getElementById('searchItems');
    const originalItems = Array.from(searchItems.children);

    searchInput.addEventListener('input', function() {
        const searchTerm = this.value.toLowerCase();
        const filteredItems = originalItems.filter(item => 
            item.textContent.toLowerCase().includes(searchTerm)
        );

        searchItems.innerHTML = '';
        filteredItems.forEach(item => searchItems.appendChild(item.cloneNode(true)));

        if (filteredItems.length === 0) {
            const noResults = document.createElement('div');
            noResults.textContent = 'No se encontraron resultados';
            noResults.className = 'search-item';
            searchItems.appendChild(noResults);
        }
    });
});

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