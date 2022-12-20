
// Create a "close" button and append it to each list item
let myNodelist = document.getElementsByTagName("li");
let j;
for (j = 0; i < myNodelist.length; j++) {
  let span = document.createElement("SPAN");
  let txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  myNodelist[j].appendChild(span);
}

// Click on a close button to hide the current list item
let cruces = document.getElementsByClassName("eliminar");
let i;
for (i = 0; i < cruces.length; i++) {
    cruces[i].onclick = function() {
        let div = this.parentElement;
        div.style.display = "none";
    }
}

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
  
    let span = document.createElement("span");
    let cruz = document.createTextNode("\u00D7");
    span.className = "eliminar";
    span.appendChild(cruz);
    li.appendChild(span);
  
    for (i = 0; i < close.length; i++) {
      close[i].onclick = function() {
        let div = this.parentElement;
        div.style.display = "none";
      }
    }
}