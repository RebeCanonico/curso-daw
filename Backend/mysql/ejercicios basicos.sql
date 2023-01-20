-- Crear base de datos
DROP SCHEMA IF EXISTS ejercicios;
CREATE DATABASE ejercicios;
-- La misma orden pero evitando errores
CREATE DATABASE IF NOT EXISTS ejercicios;

-- Seleccionar base de datos
USE ejercicios;

-- Crear una tabla
DROP TABLE IF EXISTS usuarios;
CREATE TABLE usuarios (
	usuario VARCHAR(15), 
    contraseÃ±a VARCHAR(15)
    );
    -- entre paréntesis van separadas por comas las columnas, cada una seguida del tipo de dato

-- Modificar una tabla
	-- Añadir una restricción
ALTER TABLE usuarios ADD PRIMARY KEY (usuario);
	-- AÃ±adir una columna
ALTER TABLE usuarios ADD email VARCHAR(15);
	-- Modificar una columna
ALTER TABLE usuarios MODIFY email TEXT(15);
	-- Eliminar una columna
ALTER TABLE usuarios DROP COLUMN email;


-- Insertar datos en una tabla
INSERT INTO usuarios VALUES 
	('Torta16', 'papapa'),
    ('Pancake13', 'tetete');
    
-- Extraer datos de una tabla
SELECT * FROM usuarios;    