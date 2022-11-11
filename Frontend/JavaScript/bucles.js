const display = document.getElementById('display')
const displayLetras = document.getElementById('displayLetras')

//1º for
let texto = '';
// 1º y 3º for
let arrayNumeros = [];

// queremos imprimir los numeros del 1 al 100 de 3 en 3 
// 1º for
for (let i = 3; i <= 100; i = i + 3) {
    // en cada vuelta me agrega el valor de i
    // lo que va entre las comillas se muestra entre los numeros
    texto += i + ", ";
    
}



// se muestra
// 1º for
display.innerHTML = texto;

console.log(arrayNumeros)



// imprimir letras
const letras = [
    "a",
    "e",
    "i",
    "o",
    "u"
]

// delcaro texto vacio
// 2º for
texto = '';
// 2º for
for (let i = 0; i < letras.length; i++) {
   texto += letras[i] + " ";
}
// se muestra. join() lo que pongas dentro se muestra entre las letras
displayLetras.innerHTML = letras.join(' ');

// 3º for
texto = '';
// 3º for
// queremos imprimir los numeros del 100 al 0 en multiplos de 3
// le estamos diciendo que empieza en 99 (i = 99). que es mayor o = a 3 y que la constante i va ser menos 3
for (let i = 99; i >= 3; i = i - 3) {
    texto += i + ", "; 
    
}
// 3º for
// lo mostramos en forma de texto
display.innerHTML = texto;

//numeros pares hasta el 100, y que cada vez que salga un multipo de 5 vaya en negrita

// 4º for
let txt = '';
// 4º for
for (let i = 2; i <= 100; i = i + 2) {
    
    // si se divide i entre 5 y no hay residuo(decimales), entra en el if
    if (i % 5 == 0) {
        txt += "<b>" + i + "</b></br>";
    } else {
        txt += i + "<br>";
    }
    
}
// 4º for
display.innerHTML = txt;

// cuenta atras en un array

let countdown = [];

for (let i = 0; i <= 100; i++) {
    for (let j = 100; j >= 0; j--) {
        
        countdown[i] = j;
        i++;
        
    }
    
}

console.log(countdown)
display.innerHTML = countdown.join('<br>')


countdown = [];

for (let i = 2; i <= 98; ) {
    for (let j = 98; j >= 2; j--) {
        countdown[i] = j;
        i++;
        
    }
    
}
display.innerHTML = countdown.join('<br>')