// Ejercicio 1 - TEST EVALUATOR

function rendimientoAlumno(nota){
    while(nota < 0 || nota >10){
        console.log('Valor invalido')
        break
    }
    if(nota >= 0 && nota <= 2){
        console.log('Muy mal')
    }
    else if(nota >= 2 && nota <= 5){
        console.log('Mal')
    }
    else if(nota >= 5 && nota <= 6){
        console.log('Tan cerca pero tan lejos')
    }
    else if(nota >= 6 && nota <= 8){
        console.log('Bien!')
    }
    else if(nota >= 8 && nota <= 10){
        console.log('Muy bien!!')
    }
}


let notaAlumno = parseInt(prompt('¿Cual es la nota del alumno?'))

rendimientoAlumno(notaAlumno);

// Ejercicio 2 - THE BIGGEST ONE

function biggestOne(num1, num2, palabra){
    if(num1 == num2){
        let letras = palabra.split("")
        console.log('la primer letra es '+ letras[0])
        console.log('la ultima letra es '+ letras[letras.length -1])
    }
    else if(num1 > num2){
        console.log(num1)
    }else if(num1 < num2){
        console.log(num2)
    }
};

biggestOne(16,2,"Haz") // 16
biggestOne(3,3,"Haz") // Hz

// Ejercicio 3 - FROOTLOOP

let frutasYVerduras = [{fruta:"banana"},{verdura:"apio"},{fruta:"manzana"},{fruta:"frutilla"},{verdura:"zanahoria"},{fruta:"kiwi"},{fruta:"sandia"},{fruta:"melon"},{verdura:"repollo"},{fruta:"mango"}]

let frutas = frutasYVerduras.filter(fruit => fruit.fruta)

console.log(frutas);

// Ejercicio 4 - SODA DISPENSER

function dispenserGaseosas(unidades, gaseosas){
    var gaseosasEnStock = {}


    for(let i = 0; i < gaseosas.length; i++){
        var gaseosa = gaseosas[i]
        var unidad = unidades[i]

        gaseosasEnStock[gaseosa] = unidad;
    }
    return gaseosasEnStock
}



let unidades = [1, 2, 3, 4];
let gaseosas = ["cocacola", "sprite", "fanta", "seven up"]

var gaseosasEnStock = dispenserGaseosas(unidades, gaseosas);

var gaseosaDeseada = "sprite";
if (gaseosasEnStock.hasOwnProperty(gaseosaDeseada)) {
  console.log("La gaseosa " + gaseosaDeseada + " está en stock.");
  console.log("Unidades disponibles: " + gaseosasEnStock[gaseosaDeseada]);
} else {
  console.log("La gaseosa " + gaseosaDeseada + " no está en stock.");
}

// Ejercicio 5 - AÑO DE NACIMIENTO

function agregarAnioNacimiento(personas) {
    var añoActual = 2023;
    for (let i = 0; i < personas.length; i++) {
      var persona = personas[i];
      var edadEnAños = añoActual - persona.edad;
      persona['Edad en años'] = edadEnAños;
    }
    return personas;
}
  
var personas = [
    { nombre: "Juan", edad: 19 },
    { nombre: "Mario", edad: 22 }
];
  
var personasConAnioNacimiento = agregarAnioNacimiento(personas);
console.log(personasConAnioNacimiento);
  