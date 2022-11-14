// creamos un array con las distintas palabras del juego
const palabras = [
    "perro",
    "conejo",
    "gato",
    "oso",
    "pollo",
    "langostino",
    "murcielago"
]

const pollo = [
    "p",
    "o",
    "l",
    "l",
    "o"
]


// guardo el contenedor donde la vamos a mostrar
let displayPalabra = document.getElementById('palabra');

// elegimos una palabra del array
// escojer un número al azar 
let random = Math.random(); //0 - 1 incluyendo decimales
random = Math.random() * palabras.length; //0 - 6 incluyendo decimales
// redondeamos el valor de random para eliminar los decimales, creando así un número válido para el indice del array
random = Math.floor(Math.random() * palabras.length); // 0 - 5 sin decimales

// cada vez que carga la pagina, se selecciona un item del array con el indice aleatorio
let palabra = palabras[random];

// imprimimos la palabra
// contamos la longitud de la palabra (número de letras que tiene)
let longitud = palabra.length;


// declaro una variable para imprimir los guiones, si no sale undefined
let texto = "";
for (let indice = 0; indice < longitud; indice++) {

    //guardo un guion por cada 
    texto += "_";
}
// imprimir la palabra en pantalla
// = texto; con esto elegimos de que manera se muestra. en texto, con guiones. ocultando la palabra del juego
displayPalabra.innerHTML = texto;



// BOTONES
// vamos asignar el evento click a cada boton desde js
// asi nos ahorramos tener que escribir en cada boton de HTML un "onclick"

// con clases
// seleccionamos todos los elementos que tengan una clase
// al guardar elementos por clases me los devuelde en un ARRAY
// const botones = document.getElementsByClassName('btn');

// selecionamos los hijos del div "tablero"
// los hijos son todos los botones que contiene el div.----ESTO ES PARA NO TENER QUE PONER UNA CLASE A CADA LETRA
const botones = document.getElementById('tablero').childNodes;

// vamos a añadir un Event Listener a cada botón
// even Listener es asignarle un tipo de evento al elemento HTML que ejecutara un bloque de codigo cuando el evento se cumpla
// por ejemplo, al hacer click en un boton o cuando pasemos el boton o cuando pasemos el cursor por encima (hover)

for (let i = 0; i < botones.length; i++) {
    botones[i].addEventListener("click", juego)
}

// declaramos un array en el que iremos guardando los aciertos
let aciertos = [];
// contador aciertos
let contador = 0;
// vidas del usuario, si se agotan pierde la partida
let vidas = 5;


// digamos que tenemos la palabra perro y pulsamos la o. queremos guardar aquellas letras que hemos acertado
let ejemplo = [
    "_",    //p
    "_",    //e
    "_",    //r
    "_",    //r
    "o"
]
// entonces seguidamente mostramos al usuario el cambio en pantalla, podemos imprimir el contendo del array
// "_ _ _ _ o"

// si luego pulsamos la "r" el resultado quedaria:
ejemplo = [
    "_",    //p
    "_",    //e
    "r",
    "r",
    "o"
]
// y si imprimimos el resultado en pantalla sería "- - r r o"

function juego() {
    console.log("Has pulsado un botón");

    // Tomamos el contexto del botón
    // guardamos la letra que contiene el boton en una variable
    let letra = this.innerHTML;
    // transforma la letra en minúsculas
    letra = letra.toLowerCase();

    // contamos los exitos cada vez que pulsamos un boton
    let exitos = 0;

    // recogemos la palabra, caracter a caracter, en busca de coincidencias con la letra pulsada
    for (let i = 0; i < palabra.length; i++) {
        console.log(palabra[i]);

        // comprobamos si la letra de la palabra coincide con la letra del btn
        if (palabra[i] == letra) {
            console.log("¡Hay una coincidencia!");
            // guardamos la letra acertada en el array de aciertos en la misma posicion que teine en la palabra
            aciertos[i] = letra;

            // cada vez que hay un acierto, el contador aumenta
            contador++;
            exitos++;
        } else if (!aciertos[i]) {
            //si entra en el else, es que no han habido coincidencias
            // la condicion if() solo se cumple cuando la posicion i del array no tiene ningun valor 
            aciertos[i] = "_";
        }
        console.log(texto);
        console.log(aciertos);
    }

    // si no hay exitos al pulsar un boton me resto una vida
    if (exitos == 0) {
        vidas--;
        this.style.backgroundColor = 'red';
    } else {
        this.style.backgroundColor = 'green';
    }

    // creamos el string para imprimir en pantalla y le quitamos las comas del array
    // sin el join la palabra conejo se veria "c,o,n,e,j,o"
    texto = aciertos.join("")
    displayPalabra.innerHTML = texto;

    console.log(letra);

    // al final comprobamos si hemos ganado
    ganar();
}


// cramos una funcion donde comprobemos si hemos ganado la partida y en este caso, mostrar un mensaje
function ganar() {
    // comprobar que el numero de aciertos es igual a la longitud de la palabra
    if (contador == palabra.length) {
        // mensaje de as ganado
        setTimeout(function () {
            // le ponemos un retardo para que se pueda visualizar el resultado
            //    window.alert('Has ganado');
            //    location.reload();
        }, 1000);
    }


    // comprobar que ya no hay errores en el array aciertos
    // contador de los guiones
    let guiones = 0;

    // recorremos el array de aciertos en busca de guiones
    for (let i = 0; i < aciertos.length; i++) {

        if (aciertos[i] == "_") {
            guiones++;
        }
    }

    // si hemos contado los guiones y no hay, es porque la palabra esta cmpleta y, por lo tanto, hemos ganado
    if (guiones == 0) {
        setTimeout(function () {
            window.alert('Has ganado');
            location.reload();
        }, 1000);
    }

}