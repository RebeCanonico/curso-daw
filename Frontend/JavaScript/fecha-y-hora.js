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

// método GET
// construir un string para imprimir la fecha como queramos


function getFecha() {
    let fecha = new Date();
    let diaSemana = fecha.getDay();
    let mes = fecha.getMonth();
    let diaMes = fecha.getDate();
    let year = fecha.getFullYear();

    let texto = '';
    // me va dar el dia de 0 a 6 
    // si hoy martes, nos dara un 2, ya que cuenta desde el domingo
    // if (diaSemana = 0) {
    //     diaSemana = 'Domingo';
    // }
    // if (diaSemana = 1) {
    //     diaSemana = 'Lunes';
    // }
    // if (diaSemana = 2) {
    //     diaSemana = 'Martes';
    // }
    
    // esto no es recomendable porque habria que poner un if por cada dia de la semana
    // el metodo ideal para hacer esto es usando array[] un array es un tipo especial de variable que puede guardar varios tipos de datos y que los clasifica usando un indice
    // vamos a crear un array con los dias de la semana:



    const dias = [
        "Domingo",
        "Lunes",
        "Martes",
        "Miércoles",
        "Jueves",
        "Viernes",
        "Sabado"
    ]
    const meses = [
        'enero',
        'febrero',
        'marzo',
        'abril',
        'mayo',
        'junio',
        'julio',
        'agosto',
        'septiembre',
        'octubre',
        'noviembre',
        'diciembre'
    ]
// cada elemento de array, pertenece a una posicion del indice
// los indices de los array empiezan a contar desde 0

// construimos el string 'hoy es lunes, 07 de noviembre del año 2022':
texto = 'Hoy es ' + dias[diaSemana] + ', ' + diaMes + ' de '
 + meses[mes] + ' del año ' + year;

    document.getElementById('fechaGet').innerHTML = texto;
   
}
getFecha();







