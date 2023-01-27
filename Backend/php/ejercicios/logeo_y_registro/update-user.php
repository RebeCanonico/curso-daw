<?php
include 'conexion.php';
$user = $_POST['user'];
$password = $_POST['password'];

// creamos la query para guardar los datos
$sql = "INSERT INTO usuarios (nombre, password);
VALUES ('$user', '$password')";

// Ejecutamos la query y comprobamos si ha sido exitosa. Mostrmos los botones login y página principal
if ($conn->query($sql) === TRUE) {
    echo 'Datos guardados con éxito';
    echo '<br> <a href="login-usuario.php">
            <button>Login</button>
        </a>
        <br> <a href="pag-principal.php">
            <button>Página principal</button>
        </a>';
} else {
    echo "Error: " . $sql . "<br>" . $conn->error;
}

// Cerramos la conexión con la BD
$conn->close();
?>