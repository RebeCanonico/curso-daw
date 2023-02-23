$(document).ready(function () {
    $('input.pass').on('keyup', function() {
        // quiero comparar los valores de los dos inputs

        // recogemos el valor de los inputs
        let valor1 = $('input[name="pass"]').val();
        let valor2 = $('input[name="confirm"]').val();

        $('input[type="submit"]').attr('disabled', true);

        // sólo se ejecutará cuando los inputs tengan la misma longitud
        if (valor1.length == valor2.length) {
            if (valor1 == valor2) {
                // si los valores coinciden:
    
                // activamos el botón de registro
                $('input[type="submit"]').removeAttr('disabled');
            } else {
                alert('las contraseñas no coinciden');
                
            }
        }
    })

    $('#btnShow').click(function () { 
        $('.container').toggle();
    });
    $('#btnFade').click(function () { 
        $('.container').fadeToggle();
    });
    $('#btnSlide').click(function () { 
        $('.container').slideToggle(1500);
    });

    // $('.cambiar').click(function () { 
    //     $('.cambiar').slideToggle();
    // });

    let contador = 0;
    let pos = 'login';
    $('.cambioForm').click(function () { 
        if (contador < 1 || pos == 'login') {
            $('.login').slideToggle(300, function () {
                $('.signup').slideToggle(300);
              });
              contador++;
              pos = 'signup';
        } else {
            $('.signup').slideToggle(300, function () {
                $('.login').slideToggle(300);
              });
              contador--;
              pos = 'login';
        }
        $('div#background').fadeToggle(1000);
        
        // $('.container').slideToggle(700);
    });

    $('#btnClass').click(function () {
        $('body').toggleClass('cuerpo');
        console.log('funciona');
      });
    $('#btnBG').click(function () {
        $('div#background').fadeToggle(1000);
        console.log('funciona');
      });
});