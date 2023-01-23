<?php
include 'conn.php';

$sql = 'SELECT * FROM usuarios';
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

    <style>
        body {
            font-family: Arial, Helvetica, sans-serif;
        }
        table {
            border: 2px solid black;
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
        }
    </style>
</head>
<body>
    <h1>Tabla de los usuarios de la BD</h1>
    <table>
        <tr>
            <th>id</th>
            <th>usuario</th>
            <th>email</th>
        </tr>
        <?php
        if ($result->num_rows > 0) {
            // imprimir datos de cada fila
            while ($row = $result->fetch_assoc()) {
                echo "<tr> <td>" . $row['id']. "</td>" . 
                          "<td>" . $row['user'] . "</td>" . 
                          "<td>" . $row['email'] . "</td> </tr>";
            }
        
        }
        ?>
    </table>
    
</body>
</html>