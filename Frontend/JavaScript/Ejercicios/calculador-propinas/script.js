//para obtener la propina hay que multiplicar el gasto por la calidad del servicio para obtener el correspondiente porcentaje y, por lo tanto, la propina total. 
//Seguidamente dividir las propinas entre el numero de comensales para obtener lo que debe pagar cada uno
function calcular() {
    // tomamos los datos del elemento con id cuentaTotal
    var cuenta = document.getElementById('cuentaTotal').value;
    var calidad = document.getElementById('calidadServ').value;
    var comensales = document.getElementById('numPersonas').value;
    //accedo al elemento(en este caso un parrafo) donde quiero imprimir el resultado en pantalla
    var pResultado = document.getElementById('pResultado');

    // imprimimos por consola
    // console.log(cuenta + " €");
    // console.log("propina : " + cuenta * calidad + " €");
    // console.log(comensales + " Personas");
    // console.log("propina por persona : " + (cuenta * calidad ) / comensales + " €");

    // calculo la propina que debe pagar cada uno y lo guardo en una variable
    var resultadoObtenido = (cuenta * calidad) / comensales;
    // asigno el resultado obtenido al contenido que va tener el parrafo y cambio la propiedad display para que se muestre
    pResultado.innerHTML = "Propina por persona: " + resultadoObtenido + " €";
    pResultado.style.display = "block";
}

