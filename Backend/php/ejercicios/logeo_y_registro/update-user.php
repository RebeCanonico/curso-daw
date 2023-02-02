<?php
session_start();
include 'conexion.php';
$userOld = $_POST['userOld']; // nombre antiguo del user    
$user = $_POST['user']; // nombre nuevo del user 
$password = $_POST['password']; // password nueva del user
if(isset($_POST['tipo_usuario'])){
    $usertype = $_POST['tipo_usuario'] ; //REVISAR
    // creamos la query para actualizar los datos
    $sql = "UPDATE usuarios SET nombre = '$user', password = '$password', tipo_usuario = '$usertype'
    WHERE nombre = '$userOld'";
}else{
    // si soy user solo modifico nombre y password
    // creamos la query para actualizar los datos
    $sql = "UPDATE usuarios SET nombre = '$user', password = '$password'
    WHERE nombre = '$userOld'";
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
