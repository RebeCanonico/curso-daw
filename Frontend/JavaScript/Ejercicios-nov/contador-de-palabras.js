// declaramos las variables
let inputTextArea = document.getElementById("input-textarea");
let characCount = document.getElementById("charad-count");
let wordCount = document.getElementById("word-count");

inputTextArea.addEventListener("input", () => {
    // en la constante guardamos el numero de letras
    characCount.textContent = inputTextArea.value.length;
    // console.log(characCount.textContent, 'hola')
    // le decimos que a la constante inputTextArea le guarde el numero de letras pero sin espacios. con trim().
    let txt = inputTextArea.value.trim();
    // la constante wordCount utiliza la varia txt y slipt lo combierte en un array y con filter filtro cada palabra y la suma
    wordCount.textContent = txt.split(/\s+/).filter((item) => item).length;
});