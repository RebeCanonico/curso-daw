<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Formulario de registro</title>

    <link rel="stylesheet" href="styles.css" />
    
</head>
<body>

<div class="container">
    <h2>Registro de usuario</h2>

    <form action="registro-usuario.php" method="post">
        <input type="text" maxlength="45"
        placeholder="Usuario" name="user"
        required>
        <br>
        <input type="password" maxlength="20"
        placeholder="Contraseña" name="password"
        required>
        <br>
        <input id="submit" type="submit" value="Enviar">
    </form>

    <a href="form-login.php">Iniciar sesión</a>
</div>
</body>
</html>