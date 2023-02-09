<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Bienvenido</title>

    <link rel="stylesheet" href="styles.css" />
   
</head>
<body>
<?php
session_start();

if ($_SERVER['REQUEST_METHOD'] = 'POST') {
    include 'conexion.php';

    // Recibimos las variables del formulario
    $user = $_POST['user'];
    $password = $_POST['password'];

    // Hacemos la query para buscar si existe un usuario con estos datos
    $sql = "SELECT * FROM usuarios WHERE nombre = '$user' AND password = '$password'";
    $result = $conn->query($sql);

if ($result->num_rows > 0) {

echo "<div class='container'>
<div><p>Has iniciado sesión con éxito</p></div>";
echo "<div><p>Bienvenido $user.</p></div>";

$_SESSION['logged'] = true; 
while ($row = $result->fetch_assoc()) {
  // creamos un array $row con los resultados de la query del usuario
  $_SESSION['id'] = $row['id'];//Primary key
  $_SESSION['username'] = $row['nombre']; 
  $_SESSION['usertype'] = $row['tipo_usuario'];
}
//    redirigir 
echo "<br> <div><a href='panel-user.php'>
             <button class='btn'>Panel de usuario</button>
          </a></div>
   </div>";
} else {
  echo "<div class='container'><div><p>Contraseña incorrecta.</p></div>";
  echo "<div><a href='form-login.php'>
            <button class='btn'>Iniciar sesión</button>
            </a></div>
            </div>";
}

$conn->close();
}
?>

</body>
</html>