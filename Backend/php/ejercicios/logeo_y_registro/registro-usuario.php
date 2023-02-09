<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Usuario registrado</title>
    <link rel="stylesheet" href="styles.css" />
</head>
<body>

<?php
include 'conexion.php';
$user = $_POST['user'];
$password = $_POST['password'];

// creamos la query para guardar los datos en la base de datos.
$sql = "INSERT INTO usuarios (nombre, password)
VALUES ('$user', '$password')";

// Ejecutamos la query y comprobamos si ha sido exitosa. Mostramos los botones login y página principal.
if ($conn->query($sql) === TRUE) {
    echo "<div class='container'>
        <div><p>Datos guardados con éxito.</p></div>";
    echo "<br> <div><a href='form-login.php'>
            <button class='btn'>Iniciar sesión</button>
        </a></div>
        <br> <div><a href='pag-principal.php'>
            <button class='btn'>Página principal</button>
        </a></div>
        </div>";
} else {
    echo "Error: " . $sql . "<br>" . $conn->error;
}

// Cerramos la conexión con la BD
$conn->close();
?>
</body>
</html>