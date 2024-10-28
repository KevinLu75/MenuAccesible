 // Contenedor de descripción que será insertado y removido dinámicamente
 const descriptionContainer = document.createElement('div');
 descriptionContainer.classList.add('description-container');
 descriptionContainer.setAttribute('aria-live', 'polite');

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

         // Alterna la visibilidad de la descripción
         if (!expanded) {
             // Configura el contenido y muestra el contenedor
             descriptionContainer.textContent = this.getAttribute('data-description');
             descriptionContainer.style.display = 'block';

             // Inserta el contenedor justo después del elemento expandido
             this.parentNode.insertBefore(descriptionContainer, this.nextSibling);
         } else {
             // Oculta y remueve el contenedor después de haber sido leído
             descriptionContainer.style.display = 'none';
             descriptionContainer.textContent = '';  // Limpia el contenido
             if (descriptionContainer.parentNode) {
                 descriptionContainer.parentNode.removeChild(descriptionContainer);
             }
         }
     });

     item.addEventListener('keypress', function(event) {
         if (event.key === 'Enter' || event.key === ' ') {
             this.click();
         }
     });
 });