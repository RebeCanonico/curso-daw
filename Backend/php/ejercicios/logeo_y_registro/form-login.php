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
    

<style>
* {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
}

</style>

</head>
<body class="cuerpo" id="body">
<div id="background"></div>

    <div class="big-container">

        <div class="container-form signup">

            <h2>Registro de usuario</h2>

            <form action="registro-usuario.php" method="post">
                <input class="inp" type="text" maxlength="45"
                placeholder="Usuario" name="user"
                required>
                <input class="inp" type="password" maxlength="20"
                placeholder="Contraseña" name="password"
                required>
                <input class="submit" type="submit" value="Enviar">
            </form>
            <!-- <button class="cambioForm">Iniciar sesión</button> -->

        <a class="decoration cambioForm cambiar">Iniciar sesión</a>
        <!-- <a class="decoration" href="form-login.php">Iniciar sesión</a> -->
        </div>

        <div class="container-form login">

            <h2>Iniciar sesión</h2>

            <form action="login-usuario.php" class="login" method="post">
                <input class="inp" type="text" maxlength="45" 
                placeholder="Usuario" name="user" 
                required>
                <br>
                <input class="inp" type="password" maxlength="20" 
                placeholder="Contraseña" name="password" 
                required>
                <br>
                <input class="submit" type="submit" value="Acceder">
            </form>
            <!-- <button class="cambioForm cambiar">Registrate ahora</button> -->

            <a class="decoration cambioForm cambiar">Registrate ahora</a>
        </div>



    </div>

</body>
</html>