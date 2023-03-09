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

    $nombre = $_POST['nombre'];
    $password = $_POST['password'];

    // Hacemos la query para buscar si existe un usuario con estos datos
    $sql = "SELECT * FROM seguridad WHERE nombre = '$nombre' AND password = '$password'";
    $result = $conn->query($sql);

      if ($result->num_rows > 0) {
      echo "<div class='bienvenido'>

      <div><p>Has iniciado sesión con éxito</p></div>";
      echo "<div><p>Bienvenido $nombre.</p></div>";

      $_SESSION['logged'] = true; 
      while ($row = $result->fetch_assoc()) {
        // creamos un array $row con los resultados de la query del usuario
        $_SESSION['id'] = $row['id'];//Primary key
        $_SESSION['username'] = $row['nombre']; 
        $_SESSION['usertype'] = $row['tipo_usuario'];
      }
      //redirigir 
      echo "<br> <div><a href='panel-user.php'>
                  <button>Acceder
                  <span class='overlay'></span>
                  </button>
                </a></div>
        </div>";
      } else {
        echo "<div class='bienvenido'><div><p>Contraseña incorrecta.</p></div>";
        echo "<div><a href='form-login.php'>
                  <button>Iniciar sesión
                  <span class='overlay'></span>
                  </button>
                  </a></div>
                  </div>";
}

$conn->close();
}
?>

</body>
</html>