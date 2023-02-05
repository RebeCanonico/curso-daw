<?php
session_start();
include 'conexion.php';

// Cargamos los datos del usuario
$user = $_POST['nombreDel'];
$sql = "DELETE FROM usuarios WHERE nombre = '$user'";
if($conn->query($sql)) {
    echo '<p>Contacto borrado con éxito</p>';
  } else {
    echo '<p>Hubo un error al borrar el contaco: ' . $conn->error . '</p>';
  }
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Eliminar Usuario</title>
</head>
<body>
<br>
    <a href="panel-user.php">
        <button>Panel de usuario</button>
    </a>
    
<br>
    <a href="pag-principal.php">
        <button>Pagina principal</button>
    </a>

</body>
</html>