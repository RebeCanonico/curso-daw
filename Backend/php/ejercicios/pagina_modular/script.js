//Mostrar y ocultar el menú
let menuVisible = false;
function mostrarOcultarMenu(){
    if(menuVisible){
        document.getElementById("nav").classList ="";
        menuVisible = false;
    }else{
        document.getElementById("nav").classList ="responsive";
        menuVisible = true;
    }
}

//Ocultar el menu cuando selecciono una opción
function seleccionar(){
    document.getElementById("nav").classList = "";
    menuVisible = false;
}