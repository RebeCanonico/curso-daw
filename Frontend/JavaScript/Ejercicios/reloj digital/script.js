// queremos tomar la hora actual y para ello nos vamos a servir del objeto fecha Date()
// Date() es un objeto predefinido en JavaScript que contiene todos los datos de fecha y hora actualizados. 
// De este objeto podemos obtener, por ejemplo, la hora actual de cualquier zona horaria y el día de la semana en que estamos, etc.


function clock() {

    // creamos una copia del objeto fecha 
    let fecha = new Date();

    // Obtenemos la hora actual
    // esto nos dara un resultado de 0 - 23
    let hora = fecha.getHours();
    // 0 - 59
    let minutos = fecha.getMinutes();
    // 0 - 59
    let segundos = fecha.getSeconds();
    let contexto = "AM";


    let reloj = document.getElementById('pantallaReloj');
  


    // damos formato a los numeros
        // formato 12h
    if (hora > 12) {
        // si la hora es 13 cambiara a 1
     hora = hora - 12;
     contexto = "PM";
    }
    if (hora < 10) {
        hora = "0" + hora;
    }
    if (minutos < 10) {
        minutos = "0" + minutos;
    }
    if (segundos < 10) {
        segundos = "0" + segundos;
    }

    // creamos el string para imprimir la hora actual
    let texto = hora + ":" + minutos + ":" + segundos + " " + contexto;

    reloj.innerHTML = texto;

    // le damos a la funcion la posibilidad de que se ejecute en bucle 
    setTimeout(clock, 1000);
    // el timeout ejecuta la funcion indicada, despues de una pausa de los milisegundos indicados
    // al final de la funcion, clock() se va a ejecutar a si misma tras una pausa de 1 seg (1000 ms). creando así un bucle.

}


function getFecha() {
    let fecha = new Date();
    let diaSemana = fecha.getDay();
    let mes = fecha.getMonth();
    let diaMes = fecha.getDate();
    let year = fecha.getFullYear();

    let texto = '';

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

texto = dias[diaSemana] + ', ' + diaMes + ' de '
 + meses[mes] + ' de ' + year;

    let calendario = document.getElementById('pantallaFecha');
    calendario.innerHTML = texto;
   
}

// inicializar la función 
clock();
getFecha();