function colorChange() {

    // una función es un bloque de código que se puede reutulizar
    // para cambiar el parrafo de color lo primero es identificar y apuntar al párrafo
    document.getElementById('pColor').style.color = 'pink';
    document.getElementById('pColor').style.backgroundColor = 'rgb(60,60,60)';
}

function showDate() {

    document.getElementById('pDate').innerHTML = new Date();
    // date() es un objeto predefinido de JS, contiene todos los datos referentes a la fecha actual (día de la semana, fecha, hora, año...)
    // cada vez que pulsamos el bóton la hora se actializa. esto es gracias a la palbra new, que genera un nuevo objeto fecha cada vez que se ejecuta.

}

function hideShow() {

    var condition = document.getElementById('pHide').style.visibility;
    
    // condition es una variable y guarda un dato. En este caso guarda el valor de la visibilidad del parrafo. puede ser 'hidden' o 'visible'.
    // el simbolo = significa que le estamos asignando un valor
    if (condition == 'hidden') {
        // si la condicion se cumple (el elemento es visible) se ejecutara el código contenido en las llaves
        document.getElementById('pHide').style.visibility = 'visible';
    } else {
        // si la condicion de arriba no se cumple (es decir, que el objeto es visible) el if es ignorado y en cambio, se ejecuta el else
        document.getElementById('pHide').style.visibility = 'hidden';
    }
    
}

// interruptor de la luz

// declaramos las variables y guardamos los datos
// esto ocurrira cuando se cargue el documento en el navegador
var bombilla= document.getElementById('bulb');
var estado= "apagada";
// estado me sirve para hacer un seguimiento del estado de la bombilla
var encendida = "../RECURSOS/bombillaencendida.gif";
var apagada = "../RECURSOS/bombillaapagada.gif";

function lightSwitch() {
   
    if (estado == "apagada"){
        bombilla.src = encendida;
        estado = "encendida"
       
    } else {
        bombilla.src = apagada;
        estado = "apagada";
    }
}

/* function encender() {
    document.getElementById('bulOn').style.display = 'block';
    document.getElementById('bulOff').style.display = 'none';
}
function apagar() {
    document.getElementById('bulOn').style.display = 'block';
    document.getElementById('bulOff').style.display = 'none';
} */

