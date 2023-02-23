<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>tabla-getuser</title>
    <style>
        body {
            font-family: Arial, Helvetica, sans-serif;
        }

        table {
            border: 3px solid black;
            border-collapse: collapse;
        }

        th {
            background-color: #aabbcc;
            border: 2px solid black;
            padding: 2px 5px;
        }

        td {
            border: 1px solid black;
            padding: 2px 5px;
            user-select: none;
        }

        tr:hover {
            background-color: lightblue;
        }
    </style>
</head>

<body>

    <?php
    // recogemos la variable enviada por GET
    $q = "%" . $_GET['q'] . "%";

    // realizamos la conexión a la BD
    $conn = mysqli_connect('localhost', 'root', '1234');

    mysqli_select_db($conn, 'web');
    $sql = "SELECT * FROM usuarios WHERE tipo_usuario LIKE '$q' ORDER BY nombre ASC";
    $result = mysqli_query($conn, $sql);

    // Imprimimos los datos en una tabla
    echo "<table>
        <tr>
            <th>Nombre de usuario</th>
            <th>Permisos</th>
        </tr>";
    // Contenido de la tabla
    while ($row = mysqli_fetch_array($result)) {
        echo "<tr>";
        echo "<td>" . $row['nombre'] . "</td>";
        echo "<td>" . $row['tipo_usuario'] . "</td>";
        echo "</tr>";
    }

    echo "</table>";

    mysqli_close($conn);
    ?>
</body>

</html>