

// funcion que se ejecuta en el evento onclick del boton calcular
function calcular() {
    // 1 declarar las variables de los elementos que tengo en el html (input y h1) y la que va contener el resultado a mostrar
    const fechaNacimiento = document.getElementById('fechaNacimiento');
    const edad = document.getElementById('edad');
    let resultado = '';
    // 2 compruebo que la fecha introducida sea valida 
    if(fechaNacimiento.value === '') {
        // si la fecha no es valida
        resultado = 'La fecha introducida no es valida';
    } else {
        // si la fecha si es valida
        // 3 recojo el valor introducido en el input y creo un objeto tipo Date()
        let fecha = new Date(fechaNacimiento.value);
        // 4 creo otro objeto tipo Date con la fecha de hoy para comparar con la fecha de nacimiento
        let hoy = new Date();
        // resto la fecha de hoy menos la de nacimiento para saber el tiempo que ha pasado entre ellas
        let resta = hoy.getTime() - fecha.getTime();
        // ahora tengo en la variable resta la cantidad de milisegundos que han pasado entre las dos fechas
        // voy a redondear esta cantidad de milisegundos a años
        let anios = Math.floor(resta / (1000 * 60 * 60 * 24 * 365));
        // definimos el formato del texto que vamos a devolver 
        resultado = 'Tienes ' + anios + ' años';
    }
    edad.innerHTML = resultado;
    

}
