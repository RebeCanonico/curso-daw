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
    echo 'Datos guardados con éxito';
    echo '<br> <a href="panel-user.php">
            <button>Tabla usuarios</button>
        </a>
        <br> <a href="pag-principal.php">
            <button>Página principal</button>
        </a>';
    if(!isset($_POST['tipo_usuario'])){
        $_SESSION['username'] = $user;
    }
} else {
    echo "Error: " . $sql . "<br>" . $conn->error;
}

// Cerramos la conexión con la BD
$conn->close();
