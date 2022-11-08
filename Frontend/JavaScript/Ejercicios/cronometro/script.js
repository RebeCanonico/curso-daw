let minutos = document.getElementById('minutos');
let segundos = document.getElementById('segundos');
let cents = document.getElementById('cents');




let contadorCents = 0;
let contadorSecs = 0;
let contadorMins = 0;
let crono;
// boton start
// el cronometro arranca
function startCrono() {
    // detenemos el intervalo o bucle para evitar errores
    clearInterval(crono);

    // un intervalo se ejecuta en bucle cada x(10 en este caso) milisegundos
    crono = setInterval(start, 10);

}
// funcion que cuenta el tiempo y lo imprime
function start() {
    // aumento el contador en un segundo porque la funcion se ejecuta cada centesima de segundo
    contadorCents++;

    // compruebo si las centesimam llegan a 100 y si es asi reinicial el contador y aumentar un segundo
    if (contadorCents == 100) {
        // reiniciamos el contador 
        contadorCents = 0;
        // los segundos aumentan en 1
        contadorSecs++;
    }

    if (contadorSecs == 60) {
        contadorSecs = 0;
        contadorMins++;
    }

    // imprimo el resultado del contador
    cents.innerHTML = contadorCents;
    segundos.innerHTML = contadorSecs;
    minutos.innerHTML = contadorMins;

     // formato de los numeros
     if (contadorCents < 10) {
        cents.innerHTML = '0' + contadorCents
     }
     if (contadorSecs < 10) {
        segundos.innerHTML = '0' + contadorSecs
     }
     if (contadorMins < 10) {
        minutos.innerHTML = '0' + contadorMins
     }


    // la funcion se ejecuta cada 10ms (1 centesima de segundo)
    // crono = setTimeout(start, 10);
}
// detenemos el bucle
function stop() {
    clearInterval(crono);
    
}

function reset() {
    clearInterval(crono);

    contadorCents = 0;
    contadorSecs = 0;
    contadorMins = 0;

    minutos.innerHTML = '00';
    segundos.innerHTML = '00';
    cents.innerHTML = '00';
}