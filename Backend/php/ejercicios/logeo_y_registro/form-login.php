<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Formulario login</title>
    
    <link rel="stylesheet" href="styles.css" />
<style>
    * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    font-family: "Poppins", sans-serif;
}
</style>
</head>
<body class="bgc">

<div class="container-form">
    <h2>Login</h2>

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

    <a href="form-registro.php">Registrate ahora</a>
</div>
</body>
</html>