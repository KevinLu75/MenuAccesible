// Función para alternar el estado expandido/contraído de las secciones
document.querySelectorAll('.seccion-toggle').forEach(button => {
    button.addEventListener('click', () => {
        const expanded = button.getAttribute('aria-expanded') === 'true';

        // Contraer cualquier otra sección abierta antes de expandir la nueva
        document.querySelectorAll('.seccion-toggle').forEach(otherButton => {
            if (otherButton !== button) {
                otherButton.setAttribute('aria-expanded', 'false');
                document.getElementById(otherButton.getAttribute('aria-controls')).hidden = true;
            }
        });

        // Alternar el estado de la sección seleccionada
        button.setAttribute('aria-expanded', !expanded);
        const sectionContent = document.getElementById(button.getAttribute('aria-controls'));
        sectionContent.hidden = expanded;
    });
});

// Función para alternar el estado expandido/contraído de los platillos
document.querySelectorAll('.platillo-toggle').forEach(button => {
    button.addEventListener('click', () => {
        const expanded = button.getAttribute('aria-expanded') === 'true';

        // Contraer cualquier otro platillo abierto antes de expandir el nuevo
        document.querySelectorAll('.platillo-toggle').forEach(otherButton => {
            if (otherButton !== button) {
                otherButton.setAttribute('aria-expanded', 'false');
                document.getElementById(otherButton.getAttribute('aria-controls')).hidden = true;
            }
        });

        // Alternar el estado del platillo seleccionado
        button.setAttribute('aria-expanded', !expanded);
        const dishDescription = document.getElementById(button.getAttribute('aria-controls'));
        dishDescription.hidden = expanded;
    });
});
