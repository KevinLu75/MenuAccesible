// Contenedor de descripción que será insertado y removido dinámicamente
const descriptionContainer = document.createElement('div');
descriptionContainer.classList.add('description-container');
descriptionContainer.setAttribute('aria-live', 'polite');
descriptionContainer.setAttribute('tabindex', '-1'); // Permite que el contenedor reciba el foco temporalmente

// Función para controlar la expansión y contracción de las categorías
document.querySelectorAll('.category-header').forEach(header => {
    header.addEventListener('click', function() {
        const expanded = this.getAttribute('aria-expanded') === 'true';

        // Contrae cualquier categoría previamente expandida
        document.querySelectorAll('.category-header[aria-expanded="true"]').forEach(openHeader => {
            openHeader.setAttribute('aria-expanded', 'false');
            openHeader.parentElement.classList.remove('expanded');
            document.getElementById(openHeader.getAttribute('aria-controls')).hidden = true;
        });

        // Si la categoría actual no estaba expandida, expándela
        if (!expanded) {
            this.setAttribute('aria-expanded', 'true');
            this.parentElement.classList.add('expanded');
            document.getElementById(this.getAttribute('aria-controls')).hidden = false;

            const listId = this.getAttribute('aria-controls');
            const list = document.getElementById(listId);
            list.hidden = false;
            const firstItem = list.querySelector('.food-item');
            if (firstItem) {
                setTimeout(() => {
                    firstItem.focus();
                }, 50);
            }
            
        }

        
    });

    header.addEventListener('keypress', function(event) {
        if (event.key === 'Enter' || event.key === ' ') {
            this.click();
        }
    });
});

// Función para manejar la expansión de las descripciones de los platillos
document.querySelectorAll('.food-item').forEach(item => {
    item.addEventListener('click', function() {
        const expanded = this.getAttribute('aria-expanded') === 'true';

        // Cierra cualquier descripción previamente expandida
        document.querySelectorAll('.food-item[aria-expanded="true"]').forEach(openItem => {
            openItem.setAttribute('aria-expanded', 'false');
        });
        // Remueve el contenedor de descripción anterior
        if (descriptionContainer.parentNode) {
            descriptionContainer.parentNode.removeChild(descriptionContainer);
        }
        
        // Si el elemento actual no estaba expandido, expandirlo
        if (!expanded) {
            this.setAttribute('aria-expanded', 'true');
            descriptionContainer.textContent = this.getAttribute('data-description');
            descriptionContainer.style.display = 'block';

            // Inserta el contenedor justo después del elemento expandido
            this.parentNode.insertBefore(descriptionContainer, this.nextSibling);

            // Mueve el foco al contenedor de descripción con un breve retraso para que el lector de pantalla lo lea correctamente
            setTimeout(() => {
                descriptionContainer.focus();
            }, 50);
        } else {
            // Si el platillo se contrae, se devuelve el foco al platillo
            this.focus();
        }
    });

    item.addEventListener('keypress', function(event) {
        if (event.key === 'Enter' || event.key === ' ') {
            this.click();
        }
    });
});

// Función para contraer el platillo al hacer clic en la descripción mostrada
descriptionContainer.addEventListener('click', function() {
    const expandedItem = document.querySelector('.food-item[aria-expanded="true"]');
    if (expandedItem) {
        expandedItem.setAttribute('aria-expanded', 'false');
    }
    descriptionContainer.style.display = 'none';
    descriptionContainer.textContent = ''; // Limpia el contenido
    if (descriptionContainer.parentNode) {
        descriptionContainer.parentNode.removeChild(descriptionContainer);
    }

    // Devuelve el foco al elemento del platillo
    if (expandedItem) {
        expandedItem.focus();
    }
});

// Seleccionar el botón de alternancia
const themeToggle = document.getElementById('theme-toggle');

// Función para aplicar el modo oscuro o claro según la preferencia guardada
function applyStoredTheme() {
    const storedTheme = localStorage.getItem('theme');
    if (storedTheme === 'dark') {
        document.body.classList.add('dark-mode');
        themeToggle.textContent = '☀️ Modo Claro';
    } else {
        document.body.classList.remove('dark-mode');
        themeToggle.textContent = '🌙 Modo Oscuro';
    }
}

// Llamar a la función al cargar la página para aplicar el tema almacenado
applyStoredTheme();

// Función para alternar el modo oscuro y almacenar la preferencia
themeToggle.addEventListener('click', function() {
    document.body.classList.toggle('dark-mode');

    if (document.body.classList.contains('dark-mode')) {
        themeToggle.textContent = '☀️ Modo Claro';
        localStorage.setItem('theme', 'dark'); // Almacena la preferencia en modo oscuro
    } else {
        themeToggle.textContent = '🌙 Modo Oscuro';
        localStorage.setItem('theme', 'light'); // Almacena la preferencia en modo claro
    }
});
