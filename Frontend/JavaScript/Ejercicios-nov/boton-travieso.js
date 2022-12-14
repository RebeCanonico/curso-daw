/*
    /^[a-zA-Z][a-zA-Z0-9]{3,32}/gi
    /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/gm
*/
let usernameRef = document.getElementById("username");
let passwordRef = document.getElementById("password");
let submitBtn = document.getElementById("submit");
let messageRef = document.getElementById("message-ref");

let isUsernameValid = () => {
  /* El nombre de usuario debe contener más de 3 caracteres. Debe comenzar con un carácter alfabético Puede contener números */
  const usernameRegex = /^[a-zA-Z][a-zA-Z0-9]{3,32}/gi;
  return usernameRegex.test(usernameRef.value);
};

let isPasswordValid = () => {
  /* La contraseña debe tener al menos 8 caracteres. Debe contener al menos 1 número, 1 símbolo especial, 1 minúscula y 1 mayúscula */
  const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/gm;
  return passwordRegex.test(passwordRef.value);
};

// si el nombre de ususario cumple los requisitos de isUsernameValid, se cambiaran los estilos de borde y fondo a color verde. si no lo cumple, se cambiara el color del borde y fondo a rojo 
usernameRef.addEventListener("input", () => {
  if (!isUsernameValid()) {
    messageRef.style.visibility = "hidden";
    usernameRef.style.cssText =
      "border-color: #fe2e2e; background-color: #ffc2c2";
  } else {
    usernameRef.style.cssText =
      "border-color: #34bd34; background-color: #c2ffc2";
  }
});

// si la contraseña cumple los requisitos de isPasswordValid, se cambiaran los estilos de borde y fondo a color verde. si no lo cumple, se cambiara el color del borde y fondo a rojo 
passwordRef.addEventListener("input", () => {
  if (!isPasswordValid()) {
    messageRef.style.visibility = "hidden";
    passwordRef.style.cssText =
      "border-color: #fe2e2e; background-color: #ffc2c2";
  } else {
    passwordRef.style.cssText =
      "border-color: #34bd34; background-color: #c2ffc2";
  }
});

submitBtn.addEventListener("mouseover", () => {
  //Si la contraseña o el nombre de usuario no son válidos, haga esto..
  if (!isUsernameValid() || !isPasswordValid()) {
    //Obtener la posición actual de enviar btn

    let containerRect = document
      .querySelector(".container")
      .getBoundingClientRect();
    let submitRect = submitBtn.getBoundingClientRect();
    let offset = submitRect.left - containerRect.left;
    console.log(offset);
    //Si el botón está en el lado izquierdo... muévalo al lado derecho
    if (offset <= 100) {
      submitBtn.style.transform = "translateX(16.25em)";
    }
    //Viceversa
    else {
      submitBtn.style.transform = "translateX(0)";
    }
  }
});
// cuando se puede hacer click se mostrata el mensaje. al hacer click ira a messageRef y lo ara visible
submitBtn.addEventListener("click", () => {
  messageRef.style.visibility = "visible";
});