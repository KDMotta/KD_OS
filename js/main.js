// VÍNCULO MENÚ
var iconomenu = document.getElementById('iconomenu');
var menu = document.getElementById('menu');

// FUNCIONES
function activar(){
    menu.classList.add("activarmenu");
}

// EVENTO
iconomenu.addEventListener('click', activar);