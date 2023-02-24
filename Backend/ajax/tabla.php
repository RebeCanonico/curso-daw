<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Tabla con Ajax</title>
    <?php
    require 'tabla-style.php';
    ?>
</head>
<body>
    <div class="container">
        <form action="">
            <!-- <select name="" id=""></select> -->
            <input type="text" name="users" onkeyup="showUser(this.value, 'nombre')" placeholder="Buscar usuario o correo...">
            <select onchange="showUser(this.value, 'tipo_usuario')">
                <option value="" disabled selected>Filtrar por permisos</option>
                <option value="admin">Mostrar administradores</option>
                <option value="user">Mostrar usuarios</option>
            </select>
        </form>
        <div id="display">Los datos de la persona se mostrarán aquí...</div>
    </div>
</body>
<script>
    function showUser(text, filtro) {
        let display = document.getElementById('display');


        // Si el input está vacío, el div tb se vacía
        if (text == '' || !text) {
            text = 'all';
        }

        let ajax = new XMLHttpRequest();
            ajax.onreadystatechange = function() {
                if (this.readyState == 4 && this.status == 200) {

                    display.innerHTML = this.responseText;
                }
            };
            ajax.open('GET', 'tabla-get.php?value=' + text 
            + '&filtro=' + filtro, true);
            ajax.send();
    }

    // Si llamamos a la funcion. La tabla se muestra al cargar la página
    showUser("");
</script>
</html>