const divAEditar = document.querySelector('div')
divAEditar.style.width = "100px"
divAEditar.style.height = "100px"
divAEditar.style.backgroundColor = "lime", "lime"
// divAEditar.classList.add= "square en Javascript"

console.log(divAEditar.classList)

// devuelve DOMTokenList ['square', add: 'square en Javascript', value: 'square']

// divAEditar.classList.remove("square") en consola 

function toggleSquareClass() {
    divAEditar.classList.toggle("square");
    console.log(divAEditar)
}
  
setInterval(toggleSquareClass, 1000);


