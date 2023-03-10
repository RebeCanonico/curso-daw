<?php
session_start();
include 'conexion.php';

if (isset($_SESSION['logged']) && $_SESSION['usertype'] =='admin') {
    $sql = "SELECT * FROM seguridad WHERE tipo_usuario = 'colaborador'";
} elseif ($_SESSION['usertype'] == 'empleado') {
    $id = $_SESSION['id'];
    $sql = "SELECT * FROM seguridad WHERE id = '$id'";
} elseif ($_SESSION['usertype'] == 'colaborador') {
    $sql = "SELECT * FROM seguridad WHERE tipo_usuario = 'empleado'";
}
$result = $conn->query($sql);
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Seguridad empleados</title>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.2/css/all.min.css" integrity="sha512-1sCRPdkRXhBV2PBLUdRb4tMg1w2YPf37qatUFeS7zlBy7jJI8Lf4VHwWfZZfpXtYSLy85pkm9GaYVYMfw5BC1A==" crossorigin="anonymous" referrerpolicy="no-referrer" />
    <link rel="stylesheet" href="styles.css" />
    <script src="https://code.jquery.com/jquery-3.6.3.min.js"></script>
</head>
<body>
        <div class="contenedor-header">
            <header> 
                <div class="logo">
                    <a href="#">Seguridad empleados</a>
                </div>
                <nav id="nav">
                    <ul>
                        <li>
                            <form action='form-login.php' method='post'>
                                <button class='buttonheader' type='submit' value='' name='logout'>Cerrar sesión</button>
                            </form> 
                        </li>
                    </ul>
                </nav> 
                <div class="nav-responsive" onclick="mostrarOcultarMenu()">
                    <i class="fa-solid fa-bars"></i>
                </div>
            </header>
        </div>

        <div class="tabla">
            <div class="contenido-tabla">
                <table>
                <?php
                if ($result->num_rows > 0) {
                    if(isset($_SESSION['logged']) && $_SESSION['usertype'] =='admin'){
                        echo "<tr>
                        <th>Nombre</th>
                        <th>Tipo de usuario</th>";
                        echo "<th>Eliminar</th>";
                        echo "</tr>";
                        while ($row = $result->fetch_assoc()) {
                            echo "<tr> <td>" . $row['nombre'] . "</td>" .
                                "<td>" . $row['tipo_usuario'] . "</td>
                                <input type='hidden' name='idSel' value='" . $row["id"] . "'>";
                                if (isset($_SESSION['logged']) && $_SESSION['usertype'] =='admin') {
                                    echo "<form action='form-delete.php' method='post'>
                                            <td>
                                            <input type='hidden' name='idDel' value='" . $row["id"] . "'>
                                            <button type='submit'>
                                            <i class='fa fa-trash fa-2x' aria-hidden='true'></i>
                                            </button>
                                            </tr>
                                            </td>
                                        </form>";
                                }
                        }
                    } else if ((isset($_SESSION['logged']) && $_SESSION['usertype'] !='admin')) {
                        echo "<tr>
                        <th>Nombre</th>
                        <th>DNI</th>
                        <th>Color de ojos</th>
                        <th>Numeración MAC</th>";
                        echo "<th>Validar</th>";
                        echo "</tr>";
                        while ($row = $result->fetch_assoc()) {
                            if($row['verificado'] == '0'){ //si no esta verificado, color blanco.
                                $color = '';
                            }else if($row['documento_intro'] == $row['documento']
                                    && $row['bio_intro'] == $row['bio']
                                    && $row['mac_intro'] == $row['mac']){//si si esta verificado y los tres campos coinciden, color verde.
                                    $color = 'verde';
                            }else {//si si esta verificado y algun campo no coincide.
                                if($row['documento_intro'] == ''
                                    && $row['bio_intro'] == ''
                                    && $row['mac_intro'] == ''){//si si esta verificado y los tres campos estan vacios, color rojo.
                                    $color = 'rojo';
                                }else{
                                    $color = 'amarillo';//si si esta verificado y algun campo estan relleno, color amarillo.
                                }   
                            }
                            if($_SESSION['usertype'] =='empleado'){
                                echo "<form action='update-user.php' method='post'>";
                                echo "<tr> <td class='$color'>" . $row['nombre'] . "</td>" .
                                "<td><input type='text' name='documento' value='" . $row['documento_intro'] . "'></td>" .
                                "<td><input type='text' name='bio' value='" . $row['bio_intro'] . "'></td>" .
                                "<td><input type='text' name='mac' value='" . $row['mac_intro'] . "'></td>
                                <input type='hidden' name='idSel' value='" . $row["id"] . "'>";
                                echo "<td>
                                        <input type='hidden' name='idSel' value='" . $row["id"] . "'>
                                        <button type='submit'>
                                            <i class='fa fa-check-square fa-2x' aria-hidden='true'></i>
                                        </button>
                                        </tr>
                                        </td>";
                                    echo "</form>";
                            }else if($_SESSION['usertype'] =='colaborador'){
                                echo "<form action='verificar.php' method='post'>";
                                echo "<tr><td class='$color'>" . $row['nombre'] . "</td>" .
                                "<td>". $row['documento_intro'] . "</td>" .
                                "<td>" . $row['bio_intro'] . "</td>" .
                                "<td>". $row['mac_intro'] . "</td>
                                <input type='hidden' name='idSel' value='" . $row["id"] . "'>";
                                echo "<td>
                                        <input type='hidden' name='idSel' value='" . $row["id"] . "'>
                                        <button type='submit'>
                                        <i class='fa fa-check-square fa-2x' aria-hidden='true'></i>
                                        </button>
                                        </tr>
                                        </td>";
                                echo "</form>";
                            }    
                        } 
                    }
                }
                $conn->close();
                ?>
                </table>
                <br>
                
            </div>
            <?php
            
                    if (isset($_SESSION['logged']) && $_SESSION['usertype'] =='admin') {
                    echo "<div class='contenido-newcolab'>
                            <br>
                            <h3>Nuevo colaborador</h3>
                            
                            <form action='insert-user.php' method='post'>
                                <div>
                                    <label for='user'>Nombre</label>
                                    <input class='inpPanel' type='text' maxlength='45' name='user' required>
                                </div>
                                <div>
                                    <label for='password'>Contraseña</label>
                                    <input class='inpPanel' type='text' maxlength='20' name='password' required>
                                </div>
                                <div>
                                    <button class='btn' type='submit'>Añadir</button>
                                </div>
                        </form>
                    </div>";
                    } 
                    ?>
        </div> 
</body>
<script src="script.js"></script>
</html>