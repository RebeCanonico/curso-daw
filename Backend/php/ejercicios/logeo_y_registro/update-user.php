<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link rel="stylesheet" href="styles.css" />
</head>
<body>
    

<?php
session_start();
include 'conexion.php';
$userId = $_POST['userId']; // id del user    
$user = $_POST['user']; // nombre nuevo del user 
$password = $_POST['password']; // password nueva del user
if(isset($_POST['tipo_usuario'])){
    $usertype = $_POST['tipo_usuario'] ; //REVISAR
    // creamos la query para actualizar los datos
    $sql = "UPDATE usuarios SET nombre = '$user', password = '$password', tipo_usuario = '$usertype'
    WHERE id = '$userId'";
}else{
    // si soy user solo modifico nombre y password
    // creamos la query para actualizar los datos
    $sql = "UPDATE usuarios SET nombre = '$user', password = '$password'
    WHERE id = '$userId'";
}


// Ejecutamos la query y comprobamos si ha sido exitosa.
if ($conn->query($sql) === TRUE) {
    echo "<div class='container'>
    <div><p>Datos guardados con éxito</p></div>";
    echo "<br> <div><a href='panel-user.php'>
            <button class='btn'>Tabla usuarios</button>
        </a></div>
        <br> <div><a href='pag-principal.php'>
            <button class='btn'>Página principal</button>
        </a></div>
        </div>";
    if(!isset($_POST['tipo_usuario'])){
        $_SESSION['username'] = $user;
    }
} else {
    echo "Error: " . $sql . "<br>" . $conn->error;
}

// Cerramos la conexión con la BD
$conn->close();
?>
</body>
</html>