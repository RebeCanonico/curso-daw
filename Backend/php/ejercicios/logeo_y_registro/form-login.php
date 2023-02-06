<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Formulario login</title>
    
    <link rel="stylesheet" href="styles.css" />

</head>
<body>

<div class="container">
    <h2>Login</h2>

    <form action="login-usuario.php" class="login" method="post">
        <input type="text" maxlength="45" 
        placeholder="Usuario" name="user" 
        required>
        <br>
        <input type="password" maxlength="20" 
        placeholder="Contraseña" name="password" 
        required>
        <br>
        <input id="submit" type="submit" value="Acceder">
    </form>

    <a href="form-registro.php">Registrate ahora</a>
</div>
</body>
</html>