<?php
session_start();
include 'conexion.php';


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

    }

    ?>

    <form action="update-user.php" method="post">
        <input type="text">
    </form>
</body>
</html>