<?php
session_start();
include 'conexion.php';

// Aqui busca saber si es usuario admin o user 
if (isset($_SESSION['logged']) && $_SESSION['usertype'] =='admin') {
    $sql = 'SELECT * FROM usuarios';
} elseif ($_SESSION['usertype'] == 'user') {
    $user = $_SESSION['username'];
    $sql = "SELECT * FROM usuarios WHERE nombre = '$user'";
}
$result = $conn->query($sql);
// $conn->close();
?>

<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Tabla con base de datos</title>

    <link rel="stylesheet" href="styles.css" />

    <style>
        
        body {
            font-family: Arial, Helvetica, sans-serif;
        }

        table {
            border: 2px solid black;
            border-collapse: collapse;
        }

        th {
            background-color: #180148;
            color: #f8f8f8;
            border: 2px solid black;
            padding: 2px 5px;
        }

        td {
            border: 1px solid black;
            padding: 2px 5px;
        }
    </style>
</head>

<body>
    <div class="container">
    <h1>Tabla de usuarios</h1>

    <table>

        <?php
        if ($result->num_rows > 0) {
            echo "<tr>
            <th>Nombre</th>
            <th>Contraseña</th>
            <th>Tipo de usuario</th>
            <th>Modificar</th>";
            if (isset($_SESSION['logged']) && $_SESSION['usertype'] =='admin') {
                echo "<th>Eliminar</th>";
                
            }

            echo "</tr>";
            // imprimir los datos de cada fila. 
            // (while) mientras encuentre una linea en la variable result ejecutara el codigo de dentro del bucle.
            while ($row = $result->fetch_assoc()) {
                echo "<form action='form-update.php' method='post'>
                <tr> <td>" . $row['nombre'] . "</td>" .
                    "<td>" . $row['password'] . "</td>" .
                    "<td>" . $row['tipo_usuario'] . "</td> 
                    <td>
                    <input type='hidden' name='idSel' value='" . $row["id"] . "'>
                    <button type='submit'>
                    <svg xmlns='http://www.w3.org/2000/svg' x='0px' y='0px'
                        width='24' height='24'
                        viewBox='0 0 24 24'>
                        <path d='M 19.171875 2 C 18.448125 2 17.724375 2.275625 17.171875 2.828125 L 16 4 L 20 8 L 21.171875 6.828125 C 22.275875 5.724125 22.275875 3.933125 21.171875 2.828125 C 20.619375 2.275625 19.895625 2 19.171875 2 z M 14.5 5.5 L 3 17 L 3 21 L 7 21 L 18.5 9.5 L 14.5 5.5 z'></path>
                    </svg>
                    </button>
                    </td> 
                    
                    </form>";
                    if (isset($_SESSION['logged']) && $_SESSION['usertype'] =='admin') {
                        echo "<form action='form-delete.php' method='post'>
                        
                            <td>
                            <input type='hidden' name='idDel' value='" . $row["id"] . "'>
                            <button type='submit'>
                            <svg xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' version='1.1' id='Capa_1' x='0px' y='0px' viewBox='0 0 512 512' style='enable-background:new 0 0 512 512;' xml:space='preserve' width='24' height='24'>
                            <g>
                            <path d='M448,85.333h-66.133C371.66,35.703,328.002,0.064,277.333,0h-42.667c-50.669,0.064-94.327,35.703-104.533,85.333H64   c-11.782,0-21.333,9.551-21.333,21.333S52.218,128,64,128h21.333v277.333C85.404,464.214,133.119,511.93,192,512h128   c58.881-0.07,106.596-47.786,106.667-106.667V128H448c11.782,0,21.333-9.551,21.333-21.333S459.782,85.333,448,85.333z    M234.667,362.667c0,11.782-9.551,21.333-21.333,21.333C201.551,384,192,374.449,192,362.667v-128   c0-11.782,9.551-21.333,21.333-21.333c11.782,0,21.333,9.551,21.333,21.333V362.667z M320,362.667   c0,11.782-9.551,21.333-21.333,21.333c-11.782,0-21.333-9.551-21.333-21.333v-128c0-11.782,9.551-21.333,21.333-21.333   c11.782,0,21.333,9.551,21.333,21.333V362.667z M174.315,85.333c9.074-25.551,33.238-42.634,60.352-42.667h42.667   c27.114,0.033,51.278,17.116,60.352,42.667H174.315z'/>
                            </g>
                            </svg>
                            </button>
                            </tr>
                            </td>
                            </form>";
                        
                    }
                    
            }
            
        }
        $conn->close();
        ?>
        
    </table>
    <br>
    <?php
    
    if (isset($_SESSION['logged']) && $_SESSION['usertype'] =='admin') {
    echo "  <h3>Nuevo usuario</h3>
            <br>
            <form action='insert-user.php' method='post'>
            <label for='user'>Nombre</label>
            <input type='text' name='user'></td>
            <td>
            <label for='password'>Contraseña</label>
            <input type='text' name='password'></td>
            
            <label for='tipo_usuario'>Tipo de usuario</label>
            <select name='tipo_usuario' >
                <option value='admin'>Admin</option>
                <option selected value='user'>User</option>
            </select>
            <button class='btn' type='submit'>Nuevo usuario</button>
        </form>";

    }
    ?>
    <br>
    <a href="pag-principal.php">
                    <button class="btn">Pagina principal</button>
                 </a>
</div>
</body>

</html>