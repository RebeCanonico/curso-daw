$(document).ready(function () {
    $('input.pass').on('keyup', function() {
        // quiero comparar los valores de los dos inputs

        // recogemos el valor de los inputs
        valor1 = $('input[name="pass"]').val();
        valor2 = $('input[name="confirm"]').val();

        $('input[type="submit"]').attr('disabled', true);

        // sólo se ejecutará cuando los inputs tengan la misma longitud
        if (valor1.length == valor2.length) {
            if (valor1 == valor2) {
                // si los valores coinciden:
    
                // activamos el botón de registro
                $('input[type="submit"]').removeAttr('disabled');
            } else alert('las contraseñas no coinciden');
        }
    })
});