// VÍNCULO VENTANA
var archivos = document.getElementById('archivos');
var sombra = document.getElementById('sombra');
var ventana = document.getElementById('ventana');

// FUNCIONES
function activar(){
    ventana.classList.add("activarventana");
    sombra.classList.add("activarsombra");
}

// EVENTO
archivos.addEventListener('click', activar);
