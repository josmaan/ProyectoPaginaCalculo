// Efecto de cambio de color al pasar el mouse sobre los botones
document.querySelectorAll('button').forEach(button => {
    button.addEventListener('mouseover', () => {
        button.style.backgroundColor = '#4CAF50'; // Cambia a verde
        button.style.color = 'white';
    });

    button.addEventListener('mouseout', () => {
        button.style.backgroundColor = ''; // Restaura el color original
        button.style.color = '';
    });
});

// Efecto de desvanecimiento en el texto
document.querySelectorAll('.fade-text').forEach(element => {
    element.style.transition = 'opacity 1s';
    element.addEventListener('mouseover', () => {
        element.style.opacity = '0.5'; // Reduce la opacidad
    });

    element.addEventListener('mouseout', () => {
        element.style.opacity = '1'; // Restaura la opacidad
    });
});