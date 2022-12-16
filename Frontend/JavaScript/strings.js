// para obtener la longitud del string con el metodo length()
// en una variable recogemos la palabra, en otra donde lo vamos a guargar y en otra para poderlo imprimir.
let txt = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
let longitud = txt.length;
let pLong = document.getElementById('pLong');
pLong.innerHTML = longitud;
// console.log(longitud);

// para obtener la parte del texto que tu quieres con el metodo
let corte = txt.slice(15, 19);
let pCorte = document.getElementById('pCorte');
pCorte.innerHTML = corte;

let str = 'Tere "Terere" Herrera'
let longTere = str.slice(6, 12) + str.substr(13, 8);
let tereRe = document.getElementById('tereRe');
tereRe.innerHTML = longTere

let frase = 'La mejor alumna de clase es Rebeca';
// El primer parámetro es lo que buscamos y el segundo es el reemplazo
let replaced = frase.replace(/rebeca/i, "Angela");
let pRep = document.querySelector('#pReplace');
pRep.innerHTML = replaced;


let string = 'Hoy es Viernes, Bitches!';

let minus = string.toLocaleLowerCase();
let pMinus = document.querySelector('#pMinus');

let mayus = string.toUpperCase();
let pMayus = document.querySelector('#pMayus');

pMinus.innerHTML = minus;
pMayus.innerHTML = mayus;


// concatenar strings
// si tengo un str nombre = "Roman"
// si tengo otro str apellido = "Gómez"
// y quiero escribir "Roman Gómez"
let nombre = 'Roman';
let apellido = 'Gomez';
let pConcat = document.querySelector('#pConcat');
// pConcat.innerHTML = nombre.concat(" ", apellido);

// pConcat.innerHTML = nombre.charAt(0);

// charAt()
let pChar = document.querySelector('#pCharAt');
pChar.innerHTML = apellido.charAt(3);

// combinando las anteriores
let texto = 'santi';
pChar.innerHTML = texto.charAt(0).toUpperCase() + texto.slice(1);

// transformar array
let strLista = 'German,Román,Angela,Tere,Santi,Rebeca,Dafne';
let arrayLista = strLista.split(',');
console.log(arrayLista);
let pSplit = document.querySelector("#split");
pSplit.innerHTML = arrayLista.join("<br>");