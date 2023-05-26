let autoRojo = document.querySelector("#autoRojo")
let autoAzul = document.querySelector("#autoAzul")

let acumulador1 = 0
let acumulador2 = 0

window.addEventListener('keyup', function(event) {
    if(event.key == 'a' || event.key == 'A'){
        acumulador1+=4
        console.log(acumulador1)
        autoRojo.style.marginLeft = acumulador1 + 'px';
        if (autoRojo.style.marginLeft === "1088px") {
            alert('¡El auto rojo ha ganado!');
            autoRojo.style.marginLeft = '0px';
            autoAzul.style.marginLeft = '0px';
        }
    }else if(event.key == 'l' || event.key == 'L'){
        acumulador2+=4
        console.log(acumulador2)
        autoAzul.style.marginLeft = acumulador2 + 'px';
        if (autoAzul.style.marginLeft === "1088px") {
            alert('¡El auto azul ha ganado!');
            autoRojo.style.marginLeft = '0px';
            autoAzul.style.marginLeft = '0px';
        }
    }

});

