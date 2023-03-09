<?php
session_start();

if(isset($_POST['logout'])){
    unset($_SESSION['logged']);
    session_destroy();
}
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Iniciar Sesión</title>

    <link rel="stylesheet" href="styles.css" />
    <script src="https://code.jquery.com/jquery-3.6.3.min.js"></script>
    <script src="script.js"></script>
</style>

</head>
<body>
    <div class="formulario">
        <div class='contenido-formulario'>
            <h2>Iniciar sesión</h2>
            <form action='login-usuario.php' method='post'>
                <input type='text' maxlength='45' 
                placeholder='Usuario' name='nombre' 
                required>
                <br>
                <input type='password' maxlength='20' 
                placeholder='Contraseña' name='password' 
                required>
                <br>
                <button class='submit' type='submit'>Acceder
                <span class="overlay"></span>
                </button>
            </form>
        </div>
    </div>
</body>
</html>