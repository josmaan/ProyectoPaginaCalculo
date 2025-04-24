// Efecto de cambio de color al pasar el mouse sobre un botón
document.addEventListener("DOMContentLoaded", () => {
    const button = document.querySelector("button");

    if (button) {
        button.addEventListener("mouseover", () => {
            button.style.backgroundColor = "lightblue";
        });

        button.addEventListener("mouseout", () => {
            button.style.backgroundColor = "";
        });
    }

    // Efecto de desvanecimiento para un elemento de texto
    const fadeText = document.querySelector(".fade-text");

    if (fadeText) {
        fadeText.style.opacity = 1;

        setInterval(() => {
            fadeText.style.transition = "opacity 1s";
            fadeText.style.opacity = fadeText.style.opacity == 1 ? 0 : 1;
        }, 2000);
    }

    // Efecto de escala al pasar el mouse sobre el h1
    const header = document.querySelector("h1");

    if (header) {
        header.style.animation = "permanent-scale 3s infinite alternate, color-change 5s infinite alternate";
    }
});

// Agregar estilos para las animaciones permanentes
const style = document.createElement("style");
style.textContent = `
    @keyframes permanent-scale {
        0% {
            transform: scale(1);
        }
        100% {
            transform: scale(1.2);
        }
    }

    @keyframes color-change {
        0% {
            color: lightblue;
        }
        50% {
            color: dodgerblue;
        }
        100% {
            color: darkblue;
        }
    }

    @keyframes rotate-effect {
        0% {
            transform: rotate(0deg);
        }
        100% {
            transform: rotate(360deg);
        }
    }

    @keyframes background-pulse {
        0% {
            background-color: lightblue;
        }
        50% {
            background-color: skyblue;
        }
        100% {
            background-color: steelblue;
        }
    }

    h1 {
        animation: permanent-scale 3s infinite alternate, color-change 5s infinite alternate, rotate-effect 10s infinite linear;
    }

    body {
        animation: background-pulse 6s infinite alternate;
    }
`;
document.head.appendChild(style);