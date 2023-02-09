<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Registro</title>

    <link rel="stylesheet" href="styles.css" />
    <style>
    * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
}
</style>
</head>
<body class="bgc">

<div class="container-form">
    <h2>Registro de usuario</h2>

    <form action="registro-usuario.php" method="post">
        <input class="inp" type="text" maxlength="45"
        placeholder="Usuario" name="user"
        required>
        <br>
        <input class="inp" type="password" maxlength="20"
        placeholder="Contraseña" name="password"
        required>
        <br>
        <input class="submit" type="submit" value="Enviar">
    </form>

    <a class="decoration" href="form-login.php">Iniciar sesión</a>
</div>
</body>
</html>