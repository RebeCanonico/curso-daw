// 1-crear el array
const palabras = [
    "perro",
    "conejo",
    "gato",
    "oso",
    "pollo",
    "langostino",
    "murcielago"
]
// declarar y guardar donde se muestra
let displayPalabra = document.getElementById('palabra');

// declarar que escoga una palabra aleatoria que sera un numero
let random = Math.random();
// palabra aleatoria * el largo de las palabras
random = Math.random() * palabras.length;
//math floor para quitarle los decimales
random = Math.floor(Math.random() * palabras.length);

// declaro que palabra es una palabra aleatoria
let palabra = palabras[random];
// declaro que longitud es el largo de la palabra
let longitud = palabra.length;

// declaro que texto son guiones
let texto = "";
// declaro una variable para imprimir los guiones 
for (let indice = 0; indice < longitud; indice++) {

    texto += "_";
}
// como quiero que se muestre en pantalla, en este caso en modo texto, si pongo palabra me la muestra entera
displayPalabra.innerHTML = texto;


// para hacer los botones, selecionamos todos los hijos del div con childNodes
// 'tablero' es la id que le hemos dado al div.
const botones = document.getElementById('tablero').childNodes;


for (let i = 0; i < botones.length; i++) {
    botones[i].addEventListener("click", juego);
    
}

let aciertos = [];



// let ejemplo = [
//     "_",    //p
//     "_",    //e
//     "_",    //r
//     "_",    //r
//     "o"
// ]



function juego() {
    // para que aparezca en la consola
    console.log("Has pulsado un botón");

    let letra = this.innerHTML;
    // transformar la letra a minusculas
    letra = letra.toLowerCase();

   

    

    for (let i = 0; i < palabra.length; i++) {
        console.log(palabra[i]);

        if (palabra[i] == letra) {
            console-log("¡Hay una coincidencia!");
            aciertos[i] = letra;

           
        }else if (!aciertos[i]) {
            aciertos[i] = "_";
        }
        console.log(texto);
        console.log(aciertos);

       
    displayPalabra.innerHTML = texto;

    console.log(letra);
    
    ganar();


}
}