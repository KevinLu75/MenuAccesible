// Función para alternar el estado expandido/contraído de las secciones
document.querySelectorAll('.seccion-toggle').forEach(button => {
    button.addEventListener('click', () => {
        const expanded = button.getAttribute('aria-expanded') === 'true';
        button.setAttribute('aria-expanded', !expanded);

        // Toggle visibility of the section content
        const sectionContent = document.getElementById(button.getAttribute('aria-controls'));
        sectionContent.hidden = expanded;
    });
});

// Función para alternar el estado expandido/contraído de los platillos
document.querySelectorAll('.platillo-toggle').forEach(button => {
    button.addEventListener('click', () => {
        const expanded = button.getAttribute('aria-expanded') === 'true';
        button.setAttribute('aria-expanded', !expanded);

        // Toggle visibility of the dish description
        const dishDescription = document.getElementById(button.getAttribute('aria-controls'));
        dishDescription.hidden = expanded;
    });
});
