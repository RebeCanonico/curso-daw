//
const coche = {
    marca: "Renault",
    modelo: "Megane",
    color: "gris"
}

// definicion y creacion de un objeto
// crear objeto
const persona = {
    nombre: "Dafne",
    apellido: "Ribera",
    edad: 21,
    nombreCompleto: function() {
        return this.nombre + ' ' + this.apellido;
    }
}
// acceso a las propiedades
document.querySelector('#pNombre').innerHTML = persona.nombre + ' ' + persona.apellido;
document.querySelector('#pEdad').innerHTML = 'Dafne' + ' ' + 'tiene' + ' ' + persona.edad

// metodos
document.querySelector('#pMetodo').innerHTML = persona.nombreCompleto();