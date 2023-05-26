var colorInput = document.getElementById('color-input');
var body = document.querySelector('body');

colorInput.addEventListener('keydown', function(event) {
    
    console.log(event.key)
  if (event.key === 'Enter') {
    var color = colorInput.value;
    body.style.backgroundColor = color;
  }else if (event.key === 'Backspace' ) {
    body.style.backgroundColor = 'white';
  }
});

