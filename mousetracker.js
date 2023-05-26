// let body = document.querySelector('body')
// let imagen = document.getElementsByClassName('imagen')

document.body.addEventListener('mousemove', function(event) {
    var mouseX = event.clientX + 'px';
    var mouseY = event.clientY + 'px';
    var trackerImage = document.querySelector('.mouse-tracker');
    trackerImage.style.top = mouseY;
    trackerImage.style.left = mouseX;
});
  