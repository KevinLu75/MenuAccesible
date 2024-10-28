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

        // Seleccionamos y configuramos el contenedor de descripción
        const descriptionContainer = document.getElementById('description');
        
        if (!expanded) {
            // Configuramos el contenido y mostramos el contenedor
            descriptionContainer.textContent = this.getAttribute('data-description');
            descriptionContainer.style.display = 'block';

            // Insertamos el contenedor justo después del elemento expandido
            this.parentNode.insertBefore(descriptionContainer, this.nextSibling);
        } else {
            // Ocultamos el contenedor si ya estaba expandido
            descriptionContainer.style.display = 'none';
            descriptionContainer.textContent = '';  // Limpiamos el contenido
        }
    });

    item.addEventListener('keypress', function(event) {
        if (event.key === 'Enter' || event.key === ' ') {
            this.click();
        }
    });
});