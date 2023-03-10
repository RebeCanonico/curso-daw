<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title></title>

    <link rel="stylesheet" href="styles.css" />
</head>
<body>
    

<?php
session_start();
include 'conexion.php';
$idSel = $_POST['idSel'];   
$documento = $_POST['documento']; 
$bio = $_POST['bio']; 
$mac = $_POST['mac']; 
if(isset($_POST['documento'])
 && isset($_POST['bio'])
  && isset($_POST['mac'])){
    
    $sql = "UPDATE seguridad SET documento_intro = '$documento', bio_intro = '$bio', mac_intro = '$mac', verificado = '0'
    WHERE id = '$idSel'";
}

if ($conn->query($sql) === TRUE) {
    echo "<div class='bienvenido'>
    <div><p>Datos guardados con éxito.</p></div>";
    echo "<br> <div><a href='panel-user.php'>
            <button>Panel de usuario
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