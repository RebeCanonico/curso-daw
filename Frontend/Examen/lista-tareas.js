// Agregar un símbolo de "marcado" al hacer clic en un elemento de la lista
let list = document.querySelector('ul');
list.addEventListener('click', function(ev) {
  if (ev.target.tagName === 'LI') {
    ev.target.classList.toggle('checked');
  }
}, false);

// Crear un nuevo elemento de lista al hacer clic en el botón "+"
function nuevaTarea() {
    
    let li = document.createElement("li");
    let inputValue = document.getElementById("tarea").value;
    let spanTexto = document.createElement("SPAN");
    let texto = document.createTextNode(inputValue);
    spanTexto.classList.add('mx-4')
    spanTexto.appendChild(texto);
    li.appendChild(spanTexto);
    if (inputValue === '') {
      alert("¡Tienes que escribir algo!");
    } else {
      document.getElementById("miListaTareas").appendChild(li);
    }
    document.getElementById("tarea").value = "";

    // Crea un icono "eliminar"
    let icon = document.createElement('img');
    icon.src = 'eliminar.png';
    icon.classList.add('img-fluid');

    // Añadir icono dentro de span
    let span = document.createElement("SPAN");
    span.className = "eliminar";
    span.appendChild(icon);

    // Añadir al evento onclick del span que contiene el icono la funcion que va ejecutar
    span.onclick = function() {
      // Se ejecuta al pinchar en el icono de eliminar
      let listItem = this.parentElement;
      listItem.classList.remove('d-flex');
      listItem.style.display = "none";
    }

    li.appendChild(span);
    li.classList.add('d-flex', 'justify-content-between', 'align-items-center', "my-1");
 
}
