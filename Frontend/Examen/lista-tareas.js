
// AQUI INICIA LA EJECUCION CUANDO LLEGO A LA PAGINA
// Create a "close" button and append it to each list item
let miListaTareas = document.getElementsByTagName("li");
let j;
for (j = 0; j < miListaTareas.length; j++) {
  let span = document.createElement("span");
  let txt = document.createTextNode("\u00D7");
  span.className = "eliminar";
  span.appendChild(txt);
  miListaTareas[j].appendChild(span);
}
  

// se ejecuta la primera vez cuando carga la pagina para poner el onclick a la X de cerrar
cargarTareas();


function cargarTareas(){
  // Click on a close button to hide the current list item
  let cruces = document.getElementsByClassName("eliminar");
  let i;
  for (i = 0; i < cruces.length; i++) {
      cruces[i].onclick = function() {
          let listItem = this.parentElement;
          listItem.style.display = "none";
      }
  }
  // Add a "checked" symbol when clicking on a list item
  let list = document.querySelector('ul');
  list.addEventListener('click', function(ev) {
    if (ev.target.tagName === 'LI') {
      ev.target.classList.toggle('checked');
    }
  }, false);
}
// Crear un nuevo elemento de lista al hacer clic en el botón "Agregar"
function nuevaTarea() {
    
    let li = document.createElement("li");
    let inputValue = document.getElementById("tarea").value;
    let texto = document.createTextNode(inputValue);
    li.appendChild(texto);
    if (inputValue === '') {
      alert("¡Tienes que escribir algo!");
    } else {
      document.getElementById("miListaTareas").appendChild(li);
    }
    document.getElementById("tarea").value = "";
    let span = document.createElement("SPAN");
    let txt = document.createTextNode("\u00D7");
    span.className = "eliminar";
    span.appendChild(txt);
    li.appendChild(span);

    cargarTareas();
}
