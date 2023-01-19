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
-- Sirve para agrupar columnas calculadas AVG(), COUNT(), SUM(), MIN(), MAX()
SELECT COUNT(city.name), country.name FROM world.city
JOIN world.country ON city.countrycode = country.code
WHERE continent = 'africa'
GROUP BY country.name;

-- HAVING
-- Es el condicional para el GROUP BY ya que la cláusula WHERE no se puede usar despues de ésta
SELECT COUNT(city.name), country.name FROM world.city
JOIN world.country ON city.countrycode = country.code
WHERE continent = 'africa'
GROUP BY country.name
-- Si queremos añadir una condicion a qué grupos queremos visualizar, usamos el HAVING
HAVING COUNT(city.name) >=5;
-- Solo mostrar aquellos países con 5 ciudades o más

-- EXISTS
-- Se usa con el WHERE y una subquery cuyo resultado retorna TRUE o FALSE dependiendo de si se cumple o no
-- Sirve para filtrar datos con condiciones más avanzadas
SELECT c.name, CountryCode FROM world.city c
JOIN world.country p ON c.CountryCode = p.code
WHERE LifeExpectancy >= 75 AND Continent = 'asia';
 
SELECT name, CountryCode FROM world.city
WHERE EXISTS (SELECT lifeExpectancy FROM world.country WHERE city.CountryCode = country.code AND LifeExpectancy >=75 AND COntinent = 'asia')
ORDER BY countrycode;

-- ANY, ALL
SELECT name FROM world.country
WHERE code = ANY (
SELECT countrycode FROM city
WHERE Population > 20);
	-- ALL retorna false si no TODOS los resultados se cumplen
-- INSERT SELECT
-- Es un INSERT con una subquery, copia los resultados de esta y los  introduce en la tabla que indicamos

-- Creamos una tabla de ejemplo.
CREATE TABLE ejercicios.ciudades (
code CHAR(3) PRIMARY KEY,
Nombre VARCHAR(50),
Pais VARCHAR(50),
Continente VARCHAR(50));

ALTER TABLE ejercicios.ciudades
MODIFY COLUMN code CHAR(7);

-- Insertamos en la tabla las ciudades con su respectivo país y continente
INSERT INTO ejercicios.ciudades
	SELECT c.id, c.name, p.name, p.continent FROM world.city c
		JOIN world.country p ON c.CountryCode = p.code
		WHERE Continent IN ('south america', 'asia', 'oceania');
        
SELECT * FROM ejercicios.ciudades ORDER BY Pais;

-- CASE 
-- Es el if/false de MYSQL, retorna un dato que podemos mostrar en una columna 
SELECT name, lifeExpectancy,
	CASE 
		WHEN lifeExpectancy < 50 THEN 'Lo tienen jodido'
		WHEN lifeExpectancy BETWEEN 50 AND 70 THEN 'Es aceptable'
		WHEN lifeExpectancy > 70 THEN 'Viven muy bien'
		ELSE 'No hay información al respecto'
	END AS 'Calidad de vida'
	FROM world.country;

-- IFNULL(), COALESCE()
-- Sirven para manejar resultados cuando nos encontramos con un null
SELECT CONCAT(nombre , ' ' , apellido1, IFNULL(apellido2, '')) AS 'nombre completo' FROM academia.alumnos;
-- IF NULL retorna el segundo parametro cuando el primero es null
-- COALESCE retorna el primer valor de una lista que no sea nulo