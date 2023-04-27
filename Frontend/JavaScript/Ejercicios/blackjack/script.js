// VARIABLES GLOBALES (tengo acceso desde cualquier parte del documento a ellas )

// Seleccionamos el contenedor de la baraja y definimos los iconos de las cartas
const contenedorBaraja = document.getElementById('contenedor-baraja');
let iconoDuda = `<i class="bi bi-question-lg"></i>`;
let iconoDiamantes = `<i class='bi bi-suit-diamond'></i>`;
let iconoPicas = `<i class="bi bi-suit-spade"></i>`;
let iconoCorazones = `<i class="bi bi-suit-heart"></i>`;
let iconoTreboles = `<i class="bi bi-suit-club"></i>`;
// Definimos las variables de la apuesta actual y el balance
let apuestaActual = 0;
let balance = 1000;
// Llamamos a la función para crear la baraja
crearBaraja();
// Seleccionamos los elementos del HTML necesarios para interactuar con ellos posteriormente
let baraja = document.querySelectorAll('.baraja');
let caraCartas = document.querySelectorAll('.baraja .carta-contenedor');
let barajaTrasera = document.querySelectorAll('.trasera');
let num = document.querySelectorAll('.baraja .num');
let palos = document.querySelectorAll('.baraja .palo');
let boteApuestas = document.getElementById('boteApuestas');
// El juego de la casa
let puntosCasa = 0;
let jugadaCasa = [];
let cartasCasa = ["A",2,3,4,5,6,7,8,9,10,"J","Q","K"];
// El juego del jugador
let puntosJugador = 0;
let jugadaJugador = [];
let cartasJugador = ["A",2,3,4,5,6,7,8,9,10,"J","Q","K"];
// Identificamos los elementos de HTML
const manoCasa = document.getElementById('mano-casa');
const manoJugador = document.getElementById('mano-jugador');
const displayCasa = document.getElementById('puntos-casa');
const displayJugador = document.getElementById('puntos-jugador');
const resultado = document.getElementById('resultado');
const btnIniciar = document.getElementById('btn-iniciar');
const btnPedir = document.getElementById('btn-pedir');
const btnPlantarse = document.getElementById('btn-plantarse');
const btnSeguir = document.getElementById('btn-seguir');
const fichasBtn = document.getElementsByClassName('ficha');

// Desactivar botones usuario
desactivarBoton([btnIniciar,btnPedir,btnPlantarse,btnSeguir]);
// Inicialización de variable
let temporizador = 0;
// Event listener
btnIniciar.addEventListener('click', empezarJuego);
btnPedir.addEventListener('click', darCarta);
btnPlantarse.addEventListener('click', plantarse);
btnSeguir.addEventListener('click', seguirJugando);

// FUNCIONES

/* Esta función crea la baraja del juego.
    Se crean los palos, los rangos y se combinan para formar la baraja de cartas. 
    Luego, se asignan los iconos y los colores correspondientes a cada palo 
    y se crea cada carta con los elementos necesarios (valor, palo, icono, etc.) 
    y se asigna su posición en la baraja.*/
function crearBaraja() {
    // Creamos un array para la baraja, otro para los palos y otro para los rangos
    let baraja = new Array();
    let palos = {
        "T": "Tréboles",
        "D": "Diamantes",
        "P": "Picas",
        "C": "Corazones"
    }
    let rangos = new Array("A", 2, 3, 4, 5, 6, 7, 8, 9, 0, "J", "Q", "K");
    // Recorremos los palos y los rangos para crear la baraja
    Object.keys(palos).forEach(function (value) {
        for (let i = 0; i < rangos.length; i++) {
            baraja.push(rangos[i] + value);
        }
    })
    // Recorremos la baraja y creamos una carta para cada elemento
    for (let i = 0; i < baraja.length; i++) {
        let valor = baraja[i].charAt(0);
        if (valor == 0) valor = 10;
        let palo = baraja[i].charAt(1);
        let print = '';
        let color = '';
        // Asignamos el icono y el color correspondiente a cada palo
        switch (palo) {
            case 'T':
                print = iconoTreboles;
                color = 'carta-negra';
                break;
            case 'D':
                print = iconoDiamantes;
                color = 'carta-roja';
                break;
            case 'C':
                print = iconoCorazones;
                color = 'carta-roja';
                break;
            case 'P':
                print = iconoPicas;
                color = 'carta-negra';
                break;
            default:
                break;
        }

        // Creamos la carta con los elementos necesarios (valor, palo, icono, etc.)
        contenedorBaraja.innerHTML +=
            "<div id='" + baraja[i] + "' class='carta baraja'>"
            + "<div class='carta-contenedor'>"
            + "<div class='frontal " + color + "'>"
            + "<div class='num top'>" + valor + "</div>"
            + "<div class='palo'>" + print + "</div>"
            + "<div class='num bot'>" + valor + "</div>"
            + "</div>"
            + "<div class='duda trasera'><div class='palo'>" + iconoDuda + "</div></div>"
            + "</div>"
            + "</div>";

        // Asignamos la posición de cada carta en la baraja
        let cartaTop = document.querySelectorAll('.baraja');
        cartaTop[cartaTop.length - 1].style.zIndex = i;
    }
}
/* Esta función comienza el juego y resetea las cartas. 
    Luego, recoge las dos cartas iniciales del jugador y las dos cartas iniciales de la casa. 
    Se crea una carta de la casa girada y se activan los botones de Pedir y Plantarse, 
    ademas de desactivan los botones de las fichas y de iniciar. */
function empezarJuego() {
    
    // Se resetean las cartas
    jugadaCasa = [];
    jugadaJugador = [];

    // Recogemos la dos cartas iniciales del jugador:
    darCarta();
    darCarta();

    // Recogemos la dos cartas iniciales de la casa:
    darCarta("casa");
    manoCasa.innerHTML += "<div id='girar' class='carta duda'>"
        + "<div class='palo'>" + iconoDuda + "</div>"
        + "</div>";

    desactivarBoton(fichasBtn);
    activarBoton([btnPedir,btnPlantarse])
    desactivarBoton([btnIniciar]);
}
/* Esta función recibe un array de botones y los activa estableciendo el valor de las 
propiedades CSS pointer-events y opacity.  */
function activarBoton(arrayBotones) {
    for (let i = 0; i < arrayBotones.length; i++) {
        const element = arrayBotones[i];
        element.style['pointer-events'] = 'auto';
        element.style['opacity'] = 1;  
    }
}
/* Esta función recibe un array de botones y los desactiva estableciendo el valor de las 
propiedades CSS pointer-events y opacity.  */
function desactivarBoton(arrayBotones) {
    for (let i = 0; i < arrayBotones.length; i++) {
        const element = arrayBotones[i];
        element.style['pointer-events'] = 'none';
        element.style['opacity'] = 0.7;  
    }
}
/* Esta función calcula los puntos que tiene la casa y el jugador.
    Se recorren las cartas de cada uno y se suman los puntos correspondientes a cada carta.
    En caso de que haya un As en la jugada y se hayan superado los 21 puntos, el AS vale uno en vez de 11. 
    Esta función se encarga de mostrar las cartas del jugador y de la casa.
    Se llama a la función ganador() para ver si la partida ha finalizado o no.    */
function calcularPuntos() {
    puntosCasa = 0;
    puntosJugador = 0;
    for (let i = 0; i < jugadaCasa.length; i++) {
        let as = false;
        switch (jugadaCasa[i]) {
            case "A":
                puntosCasa += 11;
                as = true;
                break;
            case "J":
            case "Q":
            case "K":
                puntosCasa += 10;
                break;
            default:
                puntosCasa += jugadaCasa[i];
                break;
        }
        if (puntosCasa > 21 && as) {
            puntosCasa -= 10;
        }
    }
    for (let i = 0; i < jugadaJugador.length; i++) {
        let as = false;
        switch (jugadaJugador[i]) {
            case "A":
                puntosJugador += 11;
                as = true;
                break;
            case "J":
            case "Q":
            case "K":
                puntosJugador += 10;
                break;

            default:
                puntosJugador += jugadaJugador[i];
                break;
        }
        if (puntosJugador > 21 && as) {
            puntosJugador -= 10;
        }
    }
    // Se imprime en pantalla
    mostrarCartas();
    displayCasa.innerHTML = puntosCasa;
    displayJugador.innerHTML = puntosJugador;
    ganador();
}
/* Se encarga de mostrar las cartas de la casa y del jugador en sus respectivos contenedores 
en la interfaz de usuario. Primero, se vacían los contenedores de las cartas y luego, 
mediante un bucle for, se van iterando las cartas de la casa y del jugador. */
function mostrarCartas() {
    // Se vacían los contenedores de cartas
    manoCasa.innerHTML = '';
    manoJugador.innerHTML = '';
    // Se itera sobre las cartas de la casa y se agregan a su contenedor
    for (let i = 0; i < jugadaCasa.length; i++) {
        manoCasa.innerHTML += "<div class='carta'>"
            + "<div class='num top'>" + jugadaCasa[i] + "</div>"
            + "<div class='palo'>" + iconoDiamantes + "</div>"
            + "<div class='num bot'>" + jugadaCasa[i] + "</div>"
            + "</div>";
    }
    // Se itera sobre las cartas del jugador y se agregan a su contenedor
    for (let i = 0; i < jugadaJugador.length; i++) {
        manoJugador.innerHTML += "<div class='carta'>"
            + "<div class='num top'>" + jugadaJugador[i] + "</div>"
            + "<div class='palo'>" + iconoPicas + "</div>"
            + "<div class='num bot'>" + jugadaJugador[i] + "</div>"
            + "</div>";
    }
}
/* Se encarga de determinar quién ha ganado la partida y actualizar el mensaje en la interfaz de usuario. 
Primero, se comprueba si el jugador o la casa tienen más puntos. Luego, se comprueban diferentes 
condiciones de ganador o perdedor, como si ambos tienen 21 puntos, si la casa tiene blackjack, si el jugador 
tiene blackjack, si el jugador se ha pasado de 21 o si la casa se ha pasado de 21. 
Dependiendo de cada caso, se actualiza el mensaje de la interfaz y se ajustan los valores del bote de apuestas 
y el balance del monedero del usuario. */
function ganador() {
    let mensaje = "";
    
    // Se comprueba quién tiene más puntos
    if (puntosJugador > puntosCasa) {
      mensaje = "Va ganando el jugador";
    } else if (puntosCasa > puntosJugador) {
      mensaje = "Va ganando la casa";
    } else {
      mensaje = "Hay empate";
    }
  
    // Se comprueban diferentes condiciones de ganador o perdedor
    if (puntosCasa === 21 && puntosJugador === 21) {
      mensaje = "Ambas partes tienen 21, la apuesta se recupera.";
      balance += apuestaActual;
      apuestaActual = 0;
      desactivarBoton([btnPedir,btnPlantarse]);
      activarBoton([btnSeguir]);
    } else if (puntosCasa === 21 && puntosJugador !== 21) {
      mensaje = "La casa tiene un Blackjack. El jugador pierde la apuesta";
      apuestaActual = 0;
      desactivarBoton([btnPedir,btnPlantarse]);
      activarBoton([btnSeguir]);
    } else if (puntosCasa !== 21 && puntosJugador === 21) {
      mensaje = "El jugador tiene un Blackjack. Ha ganado!";
      balance += 2 * apuestaActual;
      apuestaActual = 0;
      desactivarBoton([btnPedir,btnPlantarse]);
      activarBoton([btnSeguir]);
    } else if (puntosJugador > 21) {
      mensaje = "El jugador se ha pasado de 21. Gana la casa";
      apuestaActual = 0;
      desactivarBoton([btnPedir,btnPlantarse]);
      activarBoton([btnSeguir]);
    } else if (puntosCasa > 21) {
      mensaje = "La casa se ha pasado de 21. Gana el jugador";
      balance += 2 * apuestaActual;
      apuestaActual = 0;
      desactivarBoton([btnPedir,btnPlantarse]);
      activarBoton([btnSeguir]);
    }
    boteApuestas.innerHTML = "<div class='row'>"
        + "<p> Apuesta actual : " + apuestaActual + "</p>"
        + "<p> Balance : " + balance + "</p>"
        + "</div>";
  
    // Se actualiza el HTML del balance de apuestas
    resultado.innerHTML = mensaje;
}
/* Se encarga de repartir cartas para la casa o el jugador según el valor del parámetro jugada. 
Si el valor es 'casa', se agrega una carta aleatoria del mazo de cartas de la casa a la jugada actual. 
Si el valor es cualquier otro, se agrega una carta aleatoria del mazo de cartas del jugador. 
Después, se comprueba si ya se tienen suficientes cartas para calcular los puntos. */
function darCarta(jugada) {
    switch (jugada) {
        case "casa":
            jugadaCasa.push(cartasCasa[Math.floor(Math.random() * cartasCasa.length)]);
            break;
        default:
            jugadaJugador.push(cartasJugador[Math.floor(Math.random() * cartasJugador.length)]);
            break;
    }

    if (jugadaCasa.length >= 1 && jugadaJugador.length >= 2) calcularPuntos();
}
/* Se encarga de que el jugador se plante, es decir, se quede con las cartas que ya tiene 
y no pida más. Si los puntos del jugador son mayores que los de la casa, la casa toma otra carta y se vuelve a 
llamar a la función plantarse() con un retraso de un segundo para que la casa tarde un poco en tomar su decisión.
 Si los puntos de la casa son mayores o iguales a los del jugador, se detiene el temporizador y se establece en cero. */
function plantarse() {

    if (puntosJugador > puntosCasa) {
        darCarta('casa');

        temporizador = setTimeout(() => {
            plantarse();
        }, 1000);
    } else {
        clearTimeout(temporizador);
        temporizador = 0;
    }

}
/* Se encarga de realizar una apuesta en la partida. 
Primero, comprueba si el jugador tiene suficiente saldo en el balance para realizar la apuesta. 
Si es así, se resta la cantidad apostada del balance y se agrega al bote de apuestas. 
Si no, se muestra un mensaje de alerta indicando que no hay suficiente saldo. 
En ambos casos, se activa el botón de inicio de partida. */
function apostar(apuesta) {
    if (balance >= apuesta) {
        apuestaActual += apuesta;
        balance -= apuesta;
        boteApuestas.innerHTML = "<div class='row'>"
        + "<p> Apuesta actual : " + apuestaActual + "</p>"
        + "<p> Balance : " + balance + "</p>"
        + "</div>";
    } else {
       alert(`No tienes suficiente dinero para hacer una apuesta de ${apuesta}.`);
    }
    activarBoton([btnIniciar]);
}
/* Se encarga de preparar la partida para una nueva ronda. 
Desactiva los botones de inicio de partida, pedir carta, plantarse y seguir jugando, 
y activa los botones de las fichas de apuesta. 
Luego, se inicializan los valores de la jugada de la casa y se llama a la función 
darCarta('casa') para que la casa reciba su primera carta.
También sirve para resetear la partida despues de cada mano y volver a empezar. */
function seguirJugando(){
    desactivarBoton([btnIniciar,btnPedir,btnPlantarse,btnSeguir]);
    activarBoton(fichasBtn);

    // El juego de la casa
    let puntosCasa = 0;
    let jugadaCasa = [];
    let cartasCasa = ["A",2,3,4,5,6,7,8,9,10,"J","Q","K"];

    let puntosJugador = 0;
    let jugadaJugador = [];
    let cartasJugador = ["A",2,3,4,5,6,7,8,9,10,"J","Q","K"];
    manoCasa.innerHTML = '';
    manoJugador.innerHTML = '';
}
/* Se comprueba si el primer elemento de la variable caraCartas tiene la clase .voltear. 
 Si es así, elimina esa clase de todos los elementos en caraCartas. 
 Si no tiene la clase .voltear, añade esa clase a todos los elementos en caraCartas.
 */
function voltearBaraja() {
    if (caraCartas[0].classList.contains('voltear')) {
        for (let i = 0; i < caraCartas.length; i++) {
            caraCartas[i].classList.remove('voltear');
        }
    } else {
        for (let i = 0; i < caraCartas.length; i++) {
            caraCartas[i].classList.add('voltear');
        }
    }
}
/* Se mueve cada elemento de la variable baraja creando un efecto de apilamiento. */
function juntar() {
    for (let i = 0; i < baraja.length; i++) {
        baraja[i].style.marginLeft = '-59.85px';
    }
}
/* Se mueve cada elemento de la variable baraja restaurando el estado original de la 
distribución de las cartas. */
function separar() {
    for (let i = 0; i < baraja.length; i++) {
        baraja[i].style.marginLeft = '0';
    }
}
/* Se crea una lista listado con todos los índices de los elementos de la variable baraja,
los baraja aleatoriamente y luego los anima moviendo cada elemento a una nueva posición 
horizontal en el documento, según el índice aleatorio de su posición final en la lista barajada. 
El resultado es una animación que simula la mezcla de una baraja de cartas. */
function mezclar() {
    let listado = [];
    for (let i = 0; i < baraja.length; i++) {
        listado[i] = i;
    }
    let currentIndex = listado.length, randomIndex;
    // Mientras queden elementos por barajar
    while (currentIndex != 0) {
        // Elija un elemento restante
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;
        // Y cámbialo con el elemento actual
        [listado[currentIndex], listado[randomIndex]] = [
            listado[randomIndex], listado[currentIndex]];
    }
    for (let i = 0; i < baraja.length; i++) {
        setTimeout(() => {
            baraja[listado[i]].style.left = '170px';
            baraja[listado[i]].style.zIndex = i;
            baraja[listado[i]].style.order = i;
            setTimeout(() => {
                baraja[listado[i]].style.left = '0px';
            }, 400);
        }, 50 * i);
    }
}