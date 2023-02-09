<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Nuevo usuario</title>

    <link rel="stylesheet" href="styles.css" />
</head>
<body>

<?php
session_start();
include 'conexion.php';
$user = $_POST['user']; // nombre nuevo del user 
$password = $_POST['password']; // password nueva del user
$usertype = $_POST['tipo_usuario'] ;// tipo_usuario nueva del user

// creamos la query para actualizar los datos
$sql = "INSERT INTO usuarios SET nombre = '$user', password = '$password', tipo_usuario = '$usertype'";

// Ejecutamos la query y comprobamos si ha sido exitosa.
if ($conn->query($sql) === TRUE) {
    echo "<div class='container'>
    <div><p>Usuario guardado con éxito.</p></div>";
    echo "<br> <div><a href='panel-user.php'>
            <button class='btn'>Panel de usuario</button>
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