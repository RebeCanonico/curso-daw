<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Eliminar Colaborador</title>

    <link rel="stylesheet" href="styles.css" />
</head>
<body>

<?php
session_start();
include 'conexion.php';

// Cargamos los datos del usuario
$user = $_POST['idDel'];
$sql = "DELETE FROM seguridad WHERE id = '$user'";

  echo "<div class='bienvenido'>";

  if($conn->query($sql)) {
      echo '<div><p>Usuario borrado con éxito.</p></div>';
    } else {
      echo '<div><p>Hubo un error al borrar el contaco: ' . $conn->error . '</p></div>';
    }
?>
    <br>
    <div><a href="panel-user.php">
          <button>Volver
            <span class='overlay'></span>
          </button>
        </a>
    </div>

</div>

</body>
</html>