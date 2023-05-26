// Obtener todas las imágenes y botones
var images = document.querySelectorAll('image');
var buttons = document.querySelectorAll('button');

// Agregar event listeners a los botones
for (var i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener('click', aparicionDeImagenes);
  function aparicionDeImagenes() {
    // Función para mostrar u ocultar la imagen asociada a un botón
    var image = this.parentNode.querySelector('img');
      image.classList.toggle('oculto');
  }  
}


