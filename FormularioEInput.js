
const enviarBtn = document.getElementById("enviar-btn");

enviarBtn.addEventListener("click", function() {
    var datos = []
    const nombre = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const genero = document.querySelector('input[name="genero"]:checked').value;
    const edad = document.getElementById("rango-edad").value;
    var nacionalidad = document.querySelector('input[name="nacionalidad"]:checked').value;
    if(nacionalidad == 'argentino'){
        nacionalidad = true
    }else if(nacionalidad == 'otro'){
        nacionalidad = false
    }
    datos.unshift(nombre, email, genero, edad, nacionalidad)
    console.log(datos)
})
