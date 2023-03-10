<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Usuario Validado</title>

    <link rel="stylesheet" href="styles.css" />
</head>
<body>
    

<?php
session_start();
include 'conexion.php';
$idSel = $_POST['idSel'];   
if(isset($_POST['idSel'])){
    $sql = "UPDATE seguridad SET verificado = '1'
    WHERE id = '$idSel'";
}

if ($conn->query($sql) === TRUE) {
    echo "<div class='bienvenido'>
    <div><p>Datos verificados con éxito.</p></div>";
    echo "<br> <div><a href='panel-user.php'>
            <button>Volver
            <span class='overlay'></span>
            </button>
        </a></div>
        </div>";
} else {
    echo "Error: " . $sql . "<br>" . $conn->error;
}

$conn->close();
?>

</body>
</html>