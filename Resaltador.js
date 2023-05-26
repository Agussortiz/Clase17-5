let parrafos = document.querySelectorAll('p')

parrafos.forEach((parrafo) => {
    parrafo.addEventListener('click', () => {
      parrafo.classList.toggle('resaltado');
    });
});

// anotaciones de este ejercicio:
// .toggle => si esta true pasa a false y viceversa
// .addEventListener es valido para querySelectorAll sino no