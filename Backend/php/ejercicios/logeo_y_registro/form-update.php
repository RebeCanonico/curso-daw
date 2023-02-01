<?php
session_start();
include 'conexion.php';

// Cargamos los datos del usuario
// $user = $_SESSION['username'];
$user = $_POST['nombreSel'];
$sql = "SELECT * FROM usuarios WHERE nombre = '$user'";
$result = $conn->query($sql);
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Modificar datos</title>
</head>
<body>
    <?php
    while ($row = $result->fetch_assoc()) {
        $nombre = $row['nombre'];
        $pass = $row['password'];

        echo "<form action='update-user.php' method='post'>
                <tr>
                    <td><input type='text' name='user' value='$nombre'></td>
                    <td><input type='text' name='password' value='$pass'></td>
                    <td><input type='submit' value='Actualizar datos'></td>
                </tr>
             </form>";
    }

    ?>

    
</body>
</html>