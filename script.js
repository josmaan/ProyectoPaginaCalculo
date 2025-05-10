document.addEventListener("DOMContentLoaded", () => {
  // efectos de sombra y color en botones
  const initButtonHoverEffects = () => {
    const buttons = document.querySelectorAll("button");
    buttons.forEach(button => {
      button.addEventListener("mouseenter", () => button.classList.add("hovered"));
      button.addEventListener("mouseleave", () => button.classList.remove("hovered"));
    });
  };

  // desvanecimiento de texto
  const initTextFadeEffect = () => {
    const fadeElements = document.querySelectorAll(".fade-text");
    fadeElements.forEach(el => {
      el.style.opacity = 1;
      let isVisible = true;
      
      setInterval(() => {
        el.style.transition = "opacity 1s ease-in-out";
        isVisible = !isVisible;
        el.style.opacity = isVisible ? 1 : 0;
      }, 2000);
    });
  };

  // animaciones de encabezados
  const initHeaderAnimations = () => {
    const headers = document.querySelectorAll("h1");
    headers.forEach(header => {
      header.style.animation = 
        "permanent-scale 3s infinite alternate, color-change 5s infinite alternate";
    });
  };

  // ajuste automático de altura de textareas
  const initAutoResizeTextareas = () => {
    const textareas = document.querySelectorAll("textarea");
    textareas.forEach(textarea => {
      textarea.addEventListener("input", () => {
        textarea.style.height = "auto";
        textarea.style.height = `${textarea.scrollHeight}px`;
      });
      // lanza el evento input para ajustar la altura al cargar
      textarea.dispatchEvent(new Event("input"));
    });
  };

 // scroll suave y efectos de desplazamiento
 
const initScrollEffects = () => {
  const nav = document.querySelector(".container");
  if (!nav) return;

  let lastScrollY = 0;
  const onScroll = () => {
    const isScrolled = window.scrollY > 50;
    if (isScrolled !== lastScrollY) {
      nav.classList.toggle("scrolled", isScrolled);
      lastScrollY = isScrolled;
    }
  };

  window.addEventListener("scroll", debounce(onScroll, 100)); // Usar debounce para optimizar
};

// funcion de retardo para optimizar el scroll
const debounce = (func, wait) => {
  let timeout;
  return (...args) => {
    clearTimeout(timeout);
    timeout = setTimeout(() => func(...args), wait);
  };
};

  // Resaltar enlace activo
  const initActiveLinkHighlight = () => {
    const links = document.querySelectorAll(".container a");
    links.forEach(link => {
      link.addEventListener("click", function(e) {
        // se previene el comportamiento por defecto solo si es un enlace interno
        if (this.getAttribute("href").startsWith("#")) {
          e.preventDefault();
          const target = document.querySelector(this.getAttribute("href"));
          if (target) {
            target.scrollIntoView({ behavior: "smooth" });
          }
        }
        
        links.forEach(l => l.classList.remove("active"));
        this.classList.add("active");
      });
    });
  };

  // estilos de animación para el fondo y el texto
  const addAnimationStyles = () => {
    const style = document.createElement("style");
    style.textContent = `
      @keyframes background-pulse {
        0% { background-color: var(--primary-100); }
        50% { background-color: var(--primary-300); }
        100% { background-color: var(--primary-500); }
      }
      
      @keyframes permanent-scale {
        0% { transform: scale(1); }
        100% { transform: scale(1.05); }
      }
      
      @keyframes color-change {
        0% { color: var(--primary-700); }
        50% { color: var(--primary-800); }
        100% { color: var(--primary-500); }
      }
      
      @keyframes rotate-effect {
        0% { transform: rotate(-2deg); }
        100% { transform: rotate(2deg); }
      }
      
      h1 {
        animation: permanent-scale 3s infinite alternate, 
                  color-change 5s infinite alternate, 
                  rotate-effect 10s infinite linear;
      }
      
      body {
        animation: background-pulse 15s infinite alternate;
      }
    `;
    document.head.appendChild(style);
  };

  // inicializar todas las funciones
  const initAll = () => {
    initButtonHoverEffects();
    initTextFadeEffect();
    initHeaderAnimations();
    initAutoResizeTextareas();
    initScrollEffects();
    initActiveLinkHighlight();
    addAnimationStyles();
  };

  initAll();
});
 
// Funciones para validar respuestas y mostrar explicaciones 
function validarRespuesta(){
  const seleccion= document.querySelector('input[name="answer1"]:checked');
  const respuestaCorrecta='verdadero';
  const mensajeDiv= document.getElementById('mensajito');
  if(seleccion){
    if(seleccion.value===respuestaCorrecta){
      mensajeDiv.textContent='Correcto!';
      mensajeDiv.style.color='green';
    }else{
      mensajeDiv.textContent='Incorrecto!';
      mensajeDiv.style.color='red';
    }

    const respuesta=document.getElementById('respuesta');
    
     document.getElementById('verRespuestaCorrecta').style.display='inline-block';
    
  }

  
} 

function validarRespuesta2(){
  const seleccion= document.querySelector('input[name="answer2"]:checked');
  const respuestaCorrecta='verdadero';
  const mensajeDiv= document.getElementById('mensaje2');
  if(seleccion){
    if(seleccion.value===respuestaCorrecta){
      mensajeDiv.textContent='Correcto!';
      mensajeDiv.style.color='green';
    }else{
      mensajeDiv.textContent='Incorrecto!';
      mensajeDiv.style.color='red';
    }

    const respuesta=document.getElementById('respuesta2');
    
     document.getElementById('verRespuestaCorrecta2').style.display='inline-block';
    
  } }


  
  function mostrarExplicacion() {
    const explicacion = document.getElementById("explicacionn");
    if (explicacion.style.display === "none") {
      explicacion.style.display = "block";
    } else {
      explicacion.style.display = "none";
    }
  }
  function mostrarRespuesta() {
    const explicacion = document.getElementById("explicacionn2");
    if (explicacion.style.display === "none") {
      explicacion.style.display = "block";
    } else {
      explicacion.style.display = "none";
    }
  }

  

