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
        $usertype = $row['tipo_usuario'];

        // echo "<tr>
        //     <th>nombre</th>
        //     <th>contraseña</th>
        //     <th>tipo de usuario</th>
        //     <th>modificar</th>
        //     </tr>";
        echo "<form action='update-user.php' method='post'>
                <input type='hidden' name='userOld' value='$user'>
                <tr>
                    <td>
                    <label for='user'>Nombre</label>
                    <input type='text' name='user' value='$nombre'></td>
                    <td>
                    <label for='password'>Contraseña</label>
                    <input type='text' name='password' value='$pass'></td>";
                if ($_SESSION['usertype'] == 'admin') {
                    echo "<td>
                    <label for='tipo_usuario'>Tipo de usuario</label>
                        <select name='tipo_usuario' >
                            <option value='admin'>Admin</option>
                            <option selected value='user'>User</option>
                        </select>
                    </td>";
                }    
                echo "<td><input type='submit' value='Actualizar datos'></td>
                </tr>
             </form>";
    }

    ?>
<label for=""></label>

</body>
</html>