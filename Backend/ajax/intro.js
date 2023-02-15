$(document).ready(function () {
    $('.search-box input[type="text"]').on("change", function ()  {
        // change 
        // cada vez que el value del input cambie, lo recogemos
        let text = $(this).val();

        // Guardamos el div donde mostraremos los resultados en una variable
        let resultList = $(this).siblings(".display");//Buscamos a los hermanos del input (this) con clase .display

        if (text.length > 0) {
            // Si el valor de input no está vacío, llamadmos al php
            $.get("search.php", {term: text}).done(function (data) {
                resultList.html(data);
                $('.search-box input[type="text"]').css("borderColor", data);
            });
        } else {
            // Se vacia la lista
            resultList.empy();
        }
    })
});