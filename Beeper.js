const boton = document.getElementById('enviar-btn');
const body = document.getElementsByTagName('body')[0]; // Obtener el primer elemento <body>

function seEjecutaEvento(){
    boton.addEventListener("click", function() {
        body.insertAdjacentHTML('beforeend', '<p>BEEP</p>')
        body.classList.toggle("color");
    });
}

seEjecutaEvento()