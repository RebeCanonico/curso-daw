

function calcular() {
    // declaramos fechaNAciemiento y edad
    const fechaNacimientoInput = document.getElementById("fechaNacimiento");
    const edad = document.getElementById("edad");
    let resultado = "";
    if (fechaNacimientoInput.value === ""){
        resultado = "Debes introducir una fecha valida";
    } else {
        const fechaNacimiento = new Date(fechaNacimientoInput.value);
        const hoy = new Date();
        const resta = hoy.getTime() - fechaNacimiento.getTime();
        resultado = "Tienes " + Math.floor(resta/ (1000*60*60*24*365)) + " años.";
    }
    edad.innerText = resultado;
    
}
function calcular2050() {
    // declaramos fechaNAciemiento y edad
    const fechaNacimientoInput = document.getElementById("fechaNacimiento");
    const edad = document.getElementById("edad");
    let resultado = "";
    if (fechaNacimientoInput.value === ""){
        resultado = "Debes introducir una fecha valida";
    } else {
        const fechaNacimiento = new Date(fechaNacimientoInput.value);
        const hoy2050 = new Date("01-01-2050");
        const resta = hoy2050.getTime() - fechaNacimiento.getTime();
        resultado = "en 2050 tendrás " + Math.floor(resta/ (1000*60*60*24*365)) + " años.";
    }
    edad.innerText = resultado;
    
}