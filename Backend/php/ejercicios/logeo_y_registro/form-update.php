<?php
session_start();
include 'conexion.php';

// Cargamos los datos del usuario
// $user = $_SESSION['username'];
$user = $_POST['idSel'];
$sql = "SELECT * FROM usuarios WHERE id = '$user'";
$result = $conn->query($sql);
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Modificar datos</title>
    <link rel="stylesheet" href="styles.css" />
</head>
<body>

    <div class="container">
    <?php
    while ($row = $result->fetch_assoc()) {
        $nombre = $row['nombre'];
        $pass = $row['password'];
        $usertype = $row['tipo_usuario'];

        echo "<form action='update-user.php' method='post'>
                <input type='hidden' name='userId' value='$user'>
                <tr>
                    <td>
                    <label for='user'>Nombre</label>
                    <input class='inpPanel' type='text' maxlength='45' required name='user' value='$nombre'></td>
                    <td>
                    <label for='password'>Contraseña</label>
                    <input class='inpPanel' type='text' maxlength='20' required name='password' value='$pass'></td>";
                if ($_SESSION['usertype'] == 'admin') {
                    echo "<td>
                    <label for='tipo_usuario'>Tipo de usuario</label>
                        <select class='slct' name='tipo_usuario' >
                            <option value='admin'>Admin</option>
                            <option selected value='user'>User</option>
                        </select>
                    </td>";
                }    
                echo "<td><input class='btn' type='submit' value='Actualizar datos'></td>
                
                </tr>

             </form>";
    }
    ?>
    </div>

<label for=""></label>

</body>
</html>