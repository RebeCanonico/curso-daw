// 1.declaramos constantes con los elementos a utilizar
const input = document.getElementById('input');
const numbers = document.querySelectorAll('.numbers button');
const operators = document.querySelectorAll('.operators button');
const result = document.getElementById('equal');
const clear = document.getElementById('clear');

// 3mostramos un valor por defecto
input.value = 0;
// variables para guardar los valores y los resultados
let value1, value2 = 0;
let operator = '';

// 2asignamos un event listener a los botones de numeros
// hacemos un buble que recorra el array entero y asigne el evento a cada botón
for (let i = 0; i < numbers.length; i++) {
    numbers[i].addEventListener('click', write);
}

function write() {
    console.log(this.innerHTML);

    // 5 limpiar la pantalla si solo hay un cero
    if (input.value == 0) {
        input.value = '';
    }


    input.value += this.innerHTML;
}

// 4 limpiar la pantalla al pulsar el boton C
clear.onclick = () => {
    input.value = 0;
    value1, value2 = 0;
    operator = '';
}

//6 asignamos eventos a los operadores
for (let i = 0; i < operators.length; i++) {
    operators[i].addEventListener('click', operate)

}

function operate() {
    // 7 lo primero es identificar el operador que hemos identificado
    operator = this.innerHTML;
    value1 = parseFloat(input.value); //un float es un numero con decimales
    input.value = '';
    console.log(operator);




    // switch (operator) {
    //     case '+':

    //         console.log('has pulsado la suma');

    //         break;
    //     case '-':

    //         break;
    //     case '×':

    //         break;
    //     case '÷':

    //         break;

    //     default:

    //         break;
    // }
}
result.onclick = () => {
    value2 = parseInt(input.value);

    switch (operator) {
        case '+':
            // se suma
            console.log('has pulsado la suma');
            console.log(value1)
            console.log(value2)
            input.value = value1 + value2;
            break;
        case '-':
            // se resta
            console.log('has pulsado una resta')
            input.value = value1 - value2;
            break;
        case '×':
            // se multiplica
            console.log('has pulsado una multiplicación')
            input.value = value1 * value2;
            break;
        case '÷':
            console.log('has pulsado una división')
            input.value = value1 / value2;
            break;

        default:
            console.log('el operador ha fallado');
            break;
    }
}