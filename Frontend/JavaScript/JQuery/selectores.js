// esta linea hace que el codigo espere a que el documento termine de cargar antes de ejecutarse
$(document).ready(function() {
    // El código de JQuery va aquí

    // Selector de JQuery
    // cambio de texto con JQuery
    $('#test').text('He cambiado el texto con JQuery');
    
    // cambio de texto con JS
    // const p = document.getElementById('test');
    // p.innerHTML = 'Otro cambio de texto';

    // cambio css con JQuery
    const p = $('#test');
    p.css('color', 'blue');

    // crear un array a partir de numeros elementos
    // la 'p' hace referencia a todos los parrafos 
    const parrafos = $('p');
    parrafos.css('fontSize', '30px');

    // Ejemplo de evento
    // toggleClass es quitar o poner
    $('#btn').click(function(){
        $('#miDiv').toggleClass('big');
    })
})

// Aquí podemos escribir vanilla JS
// DOM vanilla
// document.getElementById('test').style.color = 'red';