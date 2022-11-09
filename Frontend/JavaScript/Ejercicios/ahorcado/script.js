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

// imprimir la palabra en pantalla
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


// declaro una variable para imprimir los guiones
let texto = "";
for (let indice = 0; indice < longitud; indice++) {
    
    //guardo un guion por cada 
    texto += "_";   
}
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

// vamos a añadir un Event Listener a cada boton
// even Listener es asignarle un tipo de evento al elemento HTML que ejecutara un bloque de codigo cuando el evento se cumpla
// por ejemplo, al hacer click en un boton o cuando pasemos el boton o cuando pasemos el cursor por encima (hover)

for (let i = 0; i < botones.length; i++) {
    botones[i].addEventListener("click", test)
}

function test() {
    console.log("Has pulsado un botón");

    // Tomamos el contexto del botón
    // guardamos la letra que contiene el boton en una variable
    let letra = this.innerHTML;
    // transforma la letra en minúsculas
    letra = letra.toLowerCase();

    // recogemos la palabra, caracter a caracter, en busca de coincidencias con la letra pulsada
    for (let i = 0; i < palabra.length; i++) {
        console.log(palabra[i]);

        if (palabra[i] == letra) {
            //si coincide, se rellena la letra en vez del _
            console.log("¡Hay una coincidencia!");
            texto += letra;    
        }else{
            //si entra en el else, es que no han habido coincidencias
            texto += "_";  
        }
        
    }
    displayPalabra.innerHTML = texto;

    console.log(letra);
}