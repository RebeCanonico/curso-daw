<?php
include 'registro-usuario.php';
$user = $_POST['user'];
$password = $_POST['password'];

// creamos la query para guardar los datos
$sql = "INSERT INTO usuarios (user, password)
VALUES ('$user', '$password')";

// Ejecutamos la query y comprobamos si ha sido exitosa
if ($conn->query($sql) === TRUE) {
    echo 'Datos guardados con éxito';
} else {
    echo "Error: " . $sql . "<br>" . $conn->error;
}

// Cerramos la conexión con la BD
$conn->close();
?>