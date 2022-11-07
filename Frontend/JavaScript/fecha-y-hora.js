let fecha = new Date();
document.getElementById('testDate').innerHTML = fecha;

// creando objetos fechaç
// con un string:
let fechaString = new Date('February 07, 1999 04:15:00');
let fechaStringShort = new Date('1999-02-07 04:15:00');

document.getElementById('dateString').innerHTML = fechaStringShort;

// con numeros:
let fechaNum = new Date(2001, 00, 23);

document.getElementById('dateNumber').innerHTML = fechaNum;

// con milisegundos:
setInterval(() => {
    document.getElementById('fechaMS').innerHTML = new Date().getTime();
}, 1);

document.getElementById('fechaMS2').innerHTML = new Date('1965-07-04').getTime();


// Imprimir fechas
// con DateString
document.getElementById('fechaDateString').
innerHTML = new Date().toDateString();