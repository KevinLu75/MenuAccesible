// Función para controlar la expansión y contracción de las categorías
document.querySelectorAll('.category-header').forEach(header => {
    header.addEventListener('click', function() {
        const expanded = this.getAttribute('aria-expanded') === 'true';
        this.setAttribute('aria-expanded', !expanded);
        this.parentElement.classList.toggle('expanded');
    });

    header.addEventListener('keypress', function(event) {
        if (event.key === 'Enter' || event.key === ' ') {
            this.click();
        }
    });
});

// Función para controlar la expansión de las descripciones de los platillos
document.querySelectorAll('.food-item').forEach(item => {
    item.addEventListener('click', function() {
        const expanded = this.getAttribute('aria-expanded') === 'true';
        this.setAttribute('aria-expanded', !expanded);
    });

    item.addEventListener('keypress', function(event) {
        if (event.key === 'Enter' || event.key === ' ') {
            this.click();
        }
    });
});
