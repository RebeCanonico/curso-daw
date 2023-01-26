<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Variables Globales</title>
</head>
<body>
    <h1>Variables superglobales</h1>
    <p>
        Son variables accesibles desde cualquier punto del codigó, funcion, archivo... sin necesidad de hacer
        nada particular.
    </p>
    
    <h2>$GLOBALS</h2>
    <p>
        Es una array donde podemos almacenar variables que queremos que tengan propiedad global.
        Se puede acceder a estas mediante <code>$GLOBALS[index]</code>
    </p>

    <?php

    $x = 75;
    $y = 25;

    function suma() {
            $GLOBALS['z'] = $GLOBALS['x'] + $GLOBALS ['y'];
    }

    suma();
    echo $z;
    // echo $z2;

    ?>

    <hr>

    <h2>$_SESSION</h2>
    <P>
        Array global que se una para guardar información que vamos a utilizar en multiples paginas.
        No guarda información en el navegador a diferencia de las cookies.
    </P>
    <p>
        Por lo tanto estas variables se perderan al cerrar el navegador.
    </p>

    <?php

    // REQUEST METHOD   pregunta si venimos de un formulario con el 'method = post'
    if ($_SERVER['REQUEST_METHOD' == "POST"]) {
        $_SESSION['username'] = $_POST['user'];
    }
    ?>

</body>
</html>