// El código numérico del roder-radius
const outputcode = document.querySelector('.output-code');

// Array con los sliders
const sliders = document.querySelectorAll('input[type="range"]');

// los slider son los puntitos

// Recorremos el array para asignar un evento a cada slider
sliders.forEach(function(slider) {
    slider.addEventListener('change', createBlob);
    

});

// Array con los input numéricos
const inputs = document.querySelectorAll('input[type="number"]');

// Asignamos eventos a los input
inputs.forEach(function(input) {
    input.addEventListener('change', createBlob);
});

// Función que crea un blob nuevo cada vez que alteramos un slider o input
function createBlob() {
    // recogemos los valores de ca slider
    let radiusOne = sliders[0].value;
    let radiusTwo = sliders[1].value;
    let radiusthree = sliders[2].value;
    let radiusFour = sliders[3].value;

    // recogemos los valores numéricos de altura y aanchura
    let blobHeight = inputs[0].value;
    let blobWidth = inputs[1].value;

    // Creamos una variable que reuna todos estos valores
    
    let borderRadius =  ` ${radiusOne}% ${100 - radiusOne}% ${100 - radiusthree}% ${radiusthree}% / ${radiusFour}% ${radiusTwo}% ${100 - radiusTwo}% ${100 - radiusFour}% `

    document.querySelector('.output').style.cssText = 
    `border-radius:${borderRadius};
    height:${blobHeight}px;
    width:${blobWidth}px; `;

    // Imprimimos en pantalla el valor del border-radius
    outputcode.innerHTML = `${borderRadius}`;
}

// 
function copy() {
    var r = document.createRange();
    r.selectNode(outputcode);
    window.getSelection().removeAllRanges();
    window.getSelection().addRange(r);
    document.execCommand('copy');
    window.getSelection().removeAllRanges();
}