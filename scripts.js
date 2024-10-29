// Contenedor de descripción que será insertado y removido dinámicamente
const descriptionContainer = document.createElement('div');
descriptionContainer.classList.add('description-container');
descriptionContainer.setAttribute('aria-live', 'polite');
descriptionContainer.setAttribute('tabindex', '-1'); // Permite que el contenedor reciba el foco temporalmente

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
        
        // Cierra cualquier descripción previamente expandida
        document.querySelectorAll('.food-item[aria-expanded="true"]').forEach(openItem => {
            openItem.setAttribute('aria-expanded', 'false');
        });
        descriptionContainer.style.display = 'none';
        descriptionContainer.textContent = ''; // Limpia el contenido
        if (descriptionContainer.parentNode) {
            descriptionContainer.parentNode.removeChild(descriptionContainer);
        }

        // Expandir la nueva descripción
        if (!expanded) {
            this.setAttribute('aria-expanded', 'true');
            descriptionContainer.textContent = this.getAttribute('data-description');
            descriptionContainer.style.display = 'block';

            // Inserta el contenedor justo después del elemento expandido
            this.parentNode.insertBefore(descriptionContainer, this.nextSibling);

            // Mueve el foco a la descripción para que el lector de pantalla lo lea
            descriptionContainer.focus();
        } else {
            // Si el platillo se contrae, se devuelve el foco
            this.focus();
        }
    });

    item.addEventListener('keypress', function(event) {
        if (event.key === 'Enter' || event.key === ' ') {
            this.click();
        }
    });
});
