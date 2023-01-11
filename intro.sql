-- Esto es un comentario (Ctrl + /)

-- Seleccionar o extraer datos de una tabla
SELECT * FROM world.country;

-- Actualizar o modificar datos existentes de una tabla;
UPDATE academia.alumnos SET poblacion = 'Barakaldo' WHERE dni = '12345678F';
-- Es importante recordar integrar un WHERE al usar UPDATE. Ya que sin este, se actualizarán TODOS los datos de la tabla

-- Borrar datos de una tabla
DELETE FROM nombre_de_tabla WHERE condicion;
-- Sin el WHERE, se borrarán TODOS los datos de la tabla!

-- Añadir datos a una tabla
INSERT INTO academia.alumnos (dni, nombre, apellido1, apellido2, tlf) 
	VALUES ('78945612A', 'Victoria', 'Pérez', 'García', 645781212);
-- Una query puede contener tantas líneas como sean necesarias, pero al final siempre deben llevar ;
-- Si se van a agregar valores para todas las columnas de una tabla, no es necesario indicar las columnas:
INSERT INTO academia.alumnos
	VALUES ('45678923B', 'Armando', 'Casas', 'Rodríguez', 963852741, 'Portugalete', 42521);
    
-- SELECT DISTINCT



-- MIN() Y MAX()
-- Funciones que recogen el mínimo y el máximo valor de una columna, respectivamente
SELECT MIN(population) FROM world.city;
SELECT MAX(population) FROM world.city;

-- COUNT(), AVG(), SUM()
-- COUNT() retorna el número de registros que coinciden con la query
SELECT COUNT(*) FROM world.city
WHERE population > 1500000;


-- AVG() retorna el promedio de los valores de una columna
SELECT AVG(city.population) 'media de habitantes de las ciudades de España' FROM world.city
JOIN world.country ON country.code = city.countryCode
WHERE country.name = 'spain';

-- SUM() retorna la suma de los valores de una columna
SELECT SUM(city.population) 'total de habitantes de las ciudades de España, de la base de datos' FROM world.city
JOIN world.country ON country.code = city.countryCode
WHERE country.name = 'spain';

-- IN y NOT IN
-- Se usa para indicar varias opciones 
SELECT language, name FROM world.country c
JOIN world.countrylanguage l ON c.code = l.countrycode 
WHERE name IN ('germany', 'france', 'belgium');

-- BETWEEN
-- Se usa para buscar resultados que estén contenidos entre dos valores
SELECT name, population FROM world.city
WHERE population BETWEEN 250000 AND 500000
OR population BETWEEN 750000 AND 850000;

-- ALIAS 
SELECT CONCAT(nombre , ' ' , apellido1) AS 'nombre completo' FROM academia.alumnos;

-- GROUP BY
SELECT COUNT(city.name), country.name FROM world.city
JOIN world.country ON city.countrycode = country.code
WHERE continent = 'africa'
GROUP BY country.name;