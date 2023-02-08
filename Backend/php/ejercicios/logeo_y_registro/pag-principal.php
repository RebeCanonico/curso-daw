<?php
session_start();



if(isset($_POST['logout'])){
    unset($_SESSION['logged']);
    // unset destruye esta sesión en concreto
    // session_destroy() destruye todas las sesiones
session_destroy();
}



?>
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>

    <link rel="stylesheet" href="styles.css" />
</head>

<body>
    <!-- panel de usuario -->
    <div class="container">
        
        <?php
        // este if pregunta si el usuario está logeado
        if (isset($_SESSION['logged'])) {
            // aquí va el panel/botón/contenido del usuario
            echo "<div><a href='panel-user.php'><button class='btn'>Ir a mi cuenta</button></a></div>";
            echo "<div><form action='pag-principal.php' method='post'>
            <input class='btn' type='submit' value='Cerrar sesión' name='logout'>
            </form></div>";
        } else {
            // Si no está logeado, mostramos el botón de iniciar sesión
            echo "<div><a href='form-login.php'>
            <button class='btn'>Iniciar sesión</button>
            </a></div>";
        }
        ?>
    </div>
    
</body>
</html>