const palabras = [
    "perro",
    "conejo",
    "gato",
    "oso",
    "pollo",
    "langostino",
    "murcielago"
]

let displayPalabra = document.getElementById('palabra')

let random = Math.random();
random = Math.random() * palabras.length;
random = Math.floor(Math.random() * palabras.length);

let palabra = palabras[random];

let longitud = palabra.length;

let texto = "";
for (let indice = 0; indice < longitud; indice++) {

    texto += "_";
}
displayPalabra.innerHTML = texto;


const botones = document.getElementById('tablero').childNodes;

for (let i = 0; i < botones.length; i++) {
    botones[i].addEventListener("click", juego)
    
}

let aciertos = [];



function juego() {
    console.log("Has pulsado un botón");
    let letra = this.innerHTML;
    letra = letra.toLowerCase();

    for (let i = 0; i < palabra.length; i++) {
        console.log(palabra[i]);
        if (palabra[i] == letra) {
            console-log("¡Hay una coincidencia");
            aciertos[i] = letra;
            // aciertos++;
        }else if (!aciertos[i]) {
            aciertos[i] = "_";
        }
        console.log(texto);
        console.log(aciertos);
        
    }






}

