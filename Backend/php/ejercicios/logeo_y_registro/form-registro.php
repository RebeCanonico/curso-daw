<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Formulario de registro</title>

    <style>
    /* form {
    padding: 20px 20px;
    } */
    </style>
</head>
<body>
<div>
    <h2>Registro de usuario</h2>
    <form action="conexion.php" method="post">
        <input type="text"
        placeholder="Usuario" name="user"
        required>
        <br>
        <input type="password" 
        placeholder="Contraseña" name="password"
        required>
        <br>
        <input type="submit" value="Enviar">
    </form>
    <a href="form-login.php">Iniciar sesión</a>
</div>
</body>
</html>