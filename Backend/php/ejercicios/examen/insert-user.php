<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Nuevo Colaborador</title>

    <link rel="stylesheet" href="styles.css" />
</head>
<body>

<?php
session_start();
include 'conexion.php';
$user = $_POST['user'];
$password = $_POST['password']; 

// creamos la query para actualizar los datos
$sql = "INSERT INTO seguridad SET nombre = '$user', password = '$password', tipo_usuario = 'colaborador'";

// Ejecutamos la query y comprobamos si ha sido exitosa.
if ($conn->query($sql) === true) {
    echo "<div class='bienvenido'>
    <div><p>Colaborador guardado con éxito.</p></div>";
    echo "<br> <div><a href='panel-user.php'>
            <button>Volver
            <span class='overlay'></span>
            </button>
        </a></div>
        </div>";
} else {
    echo "Error: " . $sql . "<br>" . $conn->error;
}

$conn->close();
?>

</body>
</html>