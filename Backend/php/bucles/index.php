<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
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
    
</body>
</html>

<?php

echo "<h3>1. Crea un bucle que imprima los números del 1 al 10.</h3>";
for ($i = 1; $i <= 10; $i++){
    echo $i;
}
echo "<br>";
// 1.1
// 1-2-3-4-5-6-7-8-9-10
for ($i = 1; $i <= 10; $i++){
    if ($i == 10) {
        echo $i;
    } else {
        echo $i . "-";
    }
}



echo "<h3>2. Crea un bucle que sume los números del 0 al 30.</h3>";
$suma = 0;
for ($i=0; $i <= 30; $i++){
    $suma += $i;
}
echo $suma;


echo "<h3>3. Crea un script que imprima el siguiente patrón:</h3>";
// *
// * *
// * * *
// * * * *
// * * * * *
$num_asteriscos = 5;
for ($i = 1; $i <= $num_asteriscos; $i++) {
    for ($j = 0; $j < $i; $j++) echo "* ";
    echo "<br>";
}
echo "<hr>";
$tamaño =5;
for ($i = 1; $i <= $tamaño; $i++) {
    echo str_repeat("* ", $i) . "<br>";
}
echo "<hr>";

// 3.1
// * * * * *
// * * * *
// * * *
// * *
// *
for ($i = $num_asteriscos; $i > 0; $i--) {
    for ($j = 1; $j < $i; $j++) echo "* ";
    echo "<br>";
}

// 4. Crear un script que imprima el siguiente patrón:
// *
// * *
// * * *
// * * * *
// * * * * *
// * * * *
// * * *
// * *
// *
for ($i = 1; $i <= $num_asteriscos; $i++) {
    for ($j = 0; $j < $i; $j++) echo "* ";
    echo "<br>";
}
for ($i = $num_asteriscos; $i > 0; $i--) {
    for ($j = 1; $j < $i; $j++) echo "* ";
    echo "<br>";
}
echo "<h3>5. Crear un bucle que calcule el factorial de un número dado. El factorial de un número 
es el producto de todos los naturales hasta llegar a dicho número
4! = 4*3*2*1 = 24</h3>";
$producto = 1;
$factorial = 4;
for ($i = $factorial; $i > 0; $i--) {
    $producto *= $i;
}
echo $producto;

echo "<h3>6. Crear un programa que muestre todas las potenciales combinaciones de dos dígitos decimales, 
impresos separados por coma.</h3>";
for ($i=0; $i < 10; $i++) {
    for ($j=0; $j < 10; $j++) {
        echo $i . $j;
        if ($i != 9 || $j != 9) echo ", ";
    }
}


echo "<h3>7. Escribir un programa que cuente el número de 'r' de un string dado.</h3>";
// $rest = substr("rebeca", 0, 1);
// echo "$rest";
$text = "rarito";
$contador = 0;
for ($i=0; $i < strlen($text); $i++) {
    if (substr($text, $i, 1) == 'r') $contador++;
}
echo "El string '$text' contiene $contador r";

echo "<h3>8. Escribir un programa que cree automaticamente una tabla con las letras de multiplicar con
el alcance que nosotros le indiquemos. Ejemplo: Alcance 6. Primera fila de la tabla.</h3>";
// | 1 * 1 = 1 | 1 * 2 = 2 | 1 * 3 = 3... | 1 * 6 = 6 |
// ...
// | 6 * 1 = 6 | 6 * 2 = 12 | 6 * 3 = 18... | 6 * 6 = 36 |
// $multiplicador = 1;
// $multiplicado = '';
// for ($multiplicado=1; $multiplicado <= 6 ; $multiplicado++) { 
// 	echo "$multiplicador" . " X " . $multiplicado . " = " . $multiplicador * $multiplicado;
// }

$alcance = 6;
$producto = 1;
echo "<table><tr>";
for ($i = 1; $i <= $alcance; $i++) {
    echo "<td>";
    echo "$producto * $i = " . $producto*$i;
    echo "</td>";
}
echo "</tr>";
echo "</table>";

echo "<hr>";

echo "<h3>9. Crear un programa de PHP que imprima un tablero de ajedrez
Pista: Usar una tabla con 270px de ancho y 30px como medida para las celdas.</h3>";

echo "<table width='270px'>";
for($i = 0; $i < 9; $i++){
    echo "<tr>";
    for($j = 0; $j < 9; $j++){
        if(($i + $j) %2){ // si es par pinto negro si no blanco
            echo "<td height='30px' width='30px' bgcolor='black'></td>";
        }
        else{
            echo "<td height='30px' width='30px' bgcolor='white'></td>";
        }
    }
    echo "</tr>";
}
echo "</table>";

echo "<hr>";

echo "<h3>10. Crear un script que imprima la siguiente tabla.</h3>";

echo "<table>";
$alcance = 10;
for ($fila = 1; $fila <= $alcance; $fila++) {
    echo "<tr>";
    for ($celda = 1; $celda <= $alcance; $celda++) {
        echo "<td>";
        echo $fila * $celda;
        echo "</td>";
    }
    echo "</tr>";
}
echo "</table>";

echo "<hr>";

echo "<h3>11. Escribir un programa de PHP que itere los números del 1 al 50. Al imprimirlos, los multiplos de 3
que se sustituiran por 'Fizz', los multiplos de 5 por 'Buzz' y los que sean múltiplos de 3 
y 5 por 'FizzBuzz'.</h3>";

for ($i=1; $i <= 50; $i++) {

    if ($i % 3 == 0 && $i % 5 == 0){
        echo "FizzBuzz";
    } elseif ($i % 3 == 0) {
        echo "Fizz";
    } elseif ($i % 5 == 0) {
        echo "Buzz";
    } else echo "$i";

    echo "<br>";  
}

echo "<hr>";

echo "<h3>12. Escribir un programa capaz de imprimir un triangulo de Floyd con tantas filas
como le indiquemos.</h3>";

$alcance = 12;
$contador = 1;
$espacio = "&nbsp;&nbsp;";

for ($fila = 1; $fila <= $alcance; $fila++) {
    
    for ($columna = 1; $columna <= $fila; $columna++) {
        if ($contador < 10) echo "0";
        echo "$contador";
        echo "$espacio";
        $contador++;
    }
    echo "<br>";   
}

echo "<hr>";

echo "<h3>13. Escribir un bucle de PHP que imprima una A. 
Ejemplo:
     * * *
   *       *
   *       *
   * * * * *
   *       *
   *       *
   *       *
   *       *
</h3>";


echo "<hr>";
echo "<h3>14. Escribir un bucle de PHP que sea capaz de imprimir este patrón:
<br>
// 1 5 9 
<br> 
// 2 6 10
<br>
// 3 7 11
<br>
// 4 8 12
</h3>";