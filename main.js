const body = document.getElementById('body');
const boton = document.getElementById('button');
const sun = document.getElementById('sun');
const moon = document.getElementById('moon');

boton.addEventListener('click', function () {
  body.classList.toggle('darkMode');
  sun.classList.toggle('block');
  moon.classList.toggle('hide');
});