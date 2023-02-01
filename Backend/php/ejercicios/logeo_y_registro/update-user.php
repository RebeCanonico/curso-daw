<?php

include 'conexion.php';
$user = $_POST['user'];
$password = $_POST['password'];

// creamos la query para guardar los datos
$sql = "UPDATE usuarios SET nombre = '$user', password = '$password'
WHERE nombre = '$user'";

// Ejecutamos la query y comprobamos si ha sido exitosa.
if ($conn->query($sql) === TRUE) {
    echo 'Datos guardados con éxito';
} else {
    echo "Error: " . $sql . "<br>" . $conn->error;
}

// Cerramos la conexión con la BD
$conn->close();
