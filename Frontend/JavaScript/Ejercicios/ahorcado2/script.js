// 1-crear el array de las palabras
const palabras = [
    "perro",
    "conejo",
    "gato",
    "oso",
    "pollo",
    "langostino",
    "murcielago"
]
// 2-declaro variable que apunta a donde se imprime la palabra
let displayPalabra = document.getElementById('palabra');

// 3-declaro una variable en la cual tenga un numero entero aleatorio, que es el 
// que nos va decir que palabra del array palabras es la selecionada en cada recarga
// con math.floor redondeamos el valor de random para eliminar los decimales
let random = Math.floor(Math.random() * palabras.length);

// declaro una variable para que cada vez que carga la pagina, se selecciona un item del array con la posicion aleatoria de 0 -6
let palabra = palabras[random];

// declaro una variable para contar el numero de letras que tiene la palabra
let longitud = palabra.length;


// declaro una variable para imprimir los giones
let texto = "";
// cuando ya tengo la palabra aleatoria creo un bucle para imprimirla
for (let indice = 0; indice < longitud; indice++) {

    //guarda un guion por cada letra
    texto += "_";
}
// imprimir la palabra en pantalla con el resultado de la variable texto
displayPalabra.innerHTML = texto;