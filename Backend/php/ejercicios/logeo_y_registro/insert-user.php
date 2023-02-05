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
    echo 'Datos guardados con éxito';
    echo '<br> <a href="panel-user.php">
            <button>Tabla usuarios</button>
        </a>
        <br> <a href="pag-principal.php">
            <button>Página principal</button>
        </a>';
} else {
    echo "Error: " . $sql . "<br>" . $conn->error;
}

// Cerramos la conexión con la BD
$conn->close();
