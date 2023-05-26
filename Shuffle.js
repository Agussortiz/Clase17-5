let source = document.getElementById('source');
let destination = document.getElementById('destination');


var contenidosource = source.innerHTML;

var contenidodestination = destination.innerHTML;

source.innerHTML = contenidodestination;
destination.innerHTML = contenidosource;


