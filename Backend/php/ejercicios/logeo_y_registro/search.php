<?php

require('conexion.php');

$text = $_REQUEST['term'];

// voy a hacer la búsqueda de todos los usuarios
$sql = "SELECT nombre FROM usuarios WHERE nombre = '$text'";
$result = $conn->query($sql);

// declaro un array en el que guardar la lista de los usuarios
$array[] = '';

if ($result->num_rows > 0) {
    echo "red";
} else echo "green";

?>