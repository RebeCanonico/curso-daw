$(document).ready(function () {
    let contador = 0;
    let pos = 'login';
    $('.cambioForm').click(function () { 
        if (pos == 'login') {
            $('.container-form').slideToggle(300);
              contador++;
              pos = 'signup';
        } else {
            $('.container-form').slideToggle();
              contador--;
              pos = 'login';
        }
        
        $('div#background').fadeToggle(1000);
        
    });

    $('.search-box input[type="text"]').on("change", function ()  {
        // change 
        // cada vez que el value del input cambie, lo recogemos
        let text = $(this).val();

        // Guardamos el div donde mostraremos los resultados en una variable
        let resultList = $(this).siblings(".display");//Buscamos a los hermanos del input (this) con clase .display

        if (text.length > 0) {
            // Si el valor de input no está vacío, llamadmos al php
            $.get("search.php", {term: text}).done(function (data) {
                // resultList.html(data);//así no muestra el nombre del color
                $('.search-box input[type="text"]').css("borderColor", data);
            });
        } else {
            // Se vacia la lista
            resultList.empy();
        }
    });
    
});