-- Escribir una consulta SQL que muestre las columnas Id, Name, Population de la tabla city y que limite los resultados a 10 filas.
SELECT id, name, population FROM world.city LIMIT 10;

-- Escribir una consulta SQL que muestre las columnas Id, Name, Population de la tabla city y que limite los resultados a las filas 31-40.
SELECT id, name, population FROM world.city LIMIT 30, 10;

-- Escribir una consulta SQL que muestre las ciudades de la tabla city que tengan una población mayor a 2000000.
SELECT name, populaton FROM world.city WHERE population > 2000000;

-- Escribir una consulta SQL que muestre las ciudades de la tabla city cuyo nombre empiece por Be.
SELECT name FROM world.city WHERE name LIKE 'Be%';
-- en Be% el % indica el numero indeterminado de caracteres
-- ciudades que contengan z
SELECT name FROM world.city WHERE name LIKE '%z%';
-- ciudades que terminen en ao
SELECT name FROM world.city WHERE name LIKE '%ao';

-- Escribir una consulta SQL que muestre las ciudades de la tabla city cuya población se encuentre entre 500000-1000000.
SELECT name, populaton FROM world.city WHERE population BETWEEN 500000 AND 1000000;

-- Escribir una consulta SQL que muestre las ciudades de la tabla city ordenadas por nombre.
SELECT name FROM world.city ORDER BY name;
-- Escribir una consulta SQL que muestre la ciudad con la menor población.
SELECT name, population FROM world.city ORDER BY populaton LIMIT 1;
-- Escribir una consulta SQL que muestre la ciudad con la mayor población.
SELECT name, population FROM world.city ORDER BY populaton DESC LIMIT 1;
 
-- Escribir una consulta SQL que muestre la lista de todos los idiomas hablados en la región del Caribe.
SELECT DISTINCT(language), region FROM world.countrylanguage 
	JOIN world.country ON country.code = countrylanguage.countrycode
    WHERE region = 'Caribbean';
    -- DISTINCT() es un metodo para que los resultados no se repitan
-- Escribir una consulta SQL que muestre la capital de España.
SELECT country.name AS País, city.name AS capital FROM world.country
	JOIN world.city ON country.capital = city.id
    WHERE country.name = 'Spain';
-- AS indica un alias para la columna

-- Escribir una consulta SQL que muestre el país con mayor esperanza de vida.
SELECT name, lifeExpectanci
-- Escribir una consulta SQL que muestre todas las ciudades de Europa.
SELECT city.name, continent FROM world.country
	JOIN world.city on country.code = city.countrycode
    WHERE continent = 'Europe';
-- Escribir una consulta SQL que muestre las cidades de Sudameria con una población mayor a 500000
SELECT city.name, city.population, continent FROM world.country
   JOIN world.city ON country.code = city.countrycode
   WHERE continent = 'South America';
-- Escribir una consulta SQL que muestre la ciudad más poblada de la tabla city.
SELECT name, population FROM world.city

-- Escribir una consulta SQL que calcule el número de resultados de la tabla city.
SELECT COUNT(*) FROM world.city;
-- Escribir una consulta SQL que calcule el número de ciudades de China en la tabla city.
SELECT city.name, country.name FROM world.country
	JOIN world.city ON country.code = city.countrycode
    WHERE country.name = 'China';

