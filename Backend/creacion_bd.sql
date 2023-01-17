-- crear una bd llamada 'tienda' y comenzas a usarla
CREATE DATABASE tienda;
USE tienda;

-- crear una tabla 'productos'
    -- clave primaria: codigo con tres caracteres
    -- nombe
    -- precio con dos decimales 
    -- fechaalta de tipo fecha
CREATE TABLE productos (
codigo VARCHAR(3),
nombre VARCHAR(45),
precio INT,
fecha_alta DATE);

-- Corregimos añadimos restricciones a la tabla:
ALTER TABLE productos
    MODIFY COLUMN fecha_alta DATETIME DEFAULT CURRENT_TIMESTAMP,
    MODIFY COLUMN precio DECIMAL(6,2), 
    ADD CONSTRAINT pk_productos PRIMARY KEY (codigo);

-- Insertar datos en la tabla 
INSERT INTO productos (codigo, nombre, precio) VALUES ('a01', 'Afilador', 2.50);
INSERT INTO productos (codigo, nombre, precio) VALUES ('s01', 'Silla mod. ZAZ', 20);
INSERT INTO productos (codigo, nombre, precio) VALUES ('s02', 'Silla mod. XAX', 25);
 
-- Comprobamos que los datos se han introducido correctamente
SELECT * FROM productos;

-- Añadir una nueva columna con la categoría de los productos
ALTER TABLE productos ADD COLUMN categoria VARCHAR(15);

-- Ahora mismo, todas las categorias tienen un valor NULL. Vamos a corregir esto añadiendo un valor a todos los productos
UPDATE productos SET categoria = 'herramienta' WHERE categoria IS NULL;

-- Modificamos la categoria de las sillas a un termino correcto
UPDATE productos SET categoria = 'silla' WHERE codigo LIKE 's%';
-- otra manera de hacerlo
-- UPDATE productos SET categoria = 'silla' WHERE LEFT (nombre, 4) = 'Silla';

-- Ejercicios de repaso:

    -- 1.Datos del producto 'Afilador'
    -- 2.Productos cuyo nombre empieza por S
    -- 3.Nombre y precio de los productos con valor superior a 22
    -- 4.Precio medio de las sillas 
    -- 5.Lista de categorías sin duplicados
    -- 6.Cantidad de productos por categoría
    -- 7.Productos cuyo valor es inferior a la media del precio de las sillas


-- 1.Datos del producto 'Afilador'
SELECT * FROM productos
WHERE nombre = 'Afilador';

-- 2.Productos cuyo nombre empieza por S
SELECT * FROM productos
WHERE nombre LIKE 's%';

-- 3.Nombre y precio de los productos con valor superior a 22
SELECT nombre, precio 
FROM productos
WHERE precio > 22;

-- 4.Precio medio de las sillas 
SELECT AVG(precio) AS 'Precio medio' FROM productos WHERE categoria = 'silla';


-- 5.Lista de categorías sin duplicados
SELECT DISTINCT(categoria) FROM productos;

-- 6.Cantidad de productos por categoría
SELECT COUNT(*), categoria FROM productos
    GROUP BY categoria;

-- 7.Productos cuyo valor es inferior a la media del precio de las sillas (sub-query)
SELECT nombre, precio
FROM productos
WHERE precio < (SELECT AVG(precio) FROM productos WHERE categoria = 'silla');