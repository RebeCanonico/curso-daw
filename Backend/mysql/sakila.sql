-- Active: 1673602456718@@127.0.0.1@3306@sakila

USE sakila;

-- 1. Actores que tienen de primer nombre ‘Scarlett’
SELECT * FROM actor
    WHERE first_name = 'scarlett';

-- 2. Actores que tienen de apellido ‘Johansson’
SELECT * FROM actor
    WHERE last_name = 'Johansson';

-- 3. Actores que contengan una ‘O’ en su nombre
SELECT * FROM actor
    WHERE first_name LIKE '%o%';

-- 4. Actores que contengan una ‘O’ en su nombre y en una ‘A’ en su apellido
SELECT * FROM actor
    WHERE first_name LIKE '%o%' AND last_name LIKE '%a%';

-- 5. Actores que contengan dos ‘O’ en su nombre y en una ‘A’ en su apellido
SELECT * FROM actor
    WHERE first_name LIKE '%o%o%' AND last_name LIKE '%a%';

-- 6. Actores donde su tercera letra sea ‘B’
SELECT * FROM actor
    WHERE first_name LIKE '__b%';

-- 7. Ciudades que empiezan por ‘a’
SELECT * FROM city
    WHERE city LIKE 'a%';

-- 8. Ciudades que acaban por ‘s’
SELECT * FROM city
    WHERE city LIKE '%s';

-- 9. Ciudades del country 61
SELECT * FROM city
    WHERE country_id = '61';

-- 10. Ciudades del country ‘Spain’
SELECT * FROM city
    WHERE country_id = (SELECT country_id FROM country WHERE country = 'spain');

-- 11. Ciudades con nombres compuestos
SELECT * FROM city
    WHERE city LIKE '% %';

-- 12. Películas con una duración entre 80 y 100
SELECT * FROM film
    WHERE length between 80 and 100;

SELECT * FROM film 
WHERE length >= 80 and length <= 100;

-- 13. Peliculas con un rental_rate entre 1 y 3
SELECT * FROM film
    WHERE rental_rate >= 1 AND rental_rate <= 3;

-- 14. Películas con un titulo de más de 12 letras
SELECT title, length(title)
FROM film
    WHERE length(title) >= 12;

-- 15. Peliculas con un rating de PG o G
SELECT * FROM film
    WHERE rating = 'pg' OR rating = 'g';

-- 16. Peliculas que no tengan un rating de NC-17
SELECT * FROM film
    WHERE NOT rating = 'NC-17';

SELECT * 
FROM film 
WHERE rating <> 'NC-17';

-- 17. Peliculas con un rating PG y duracion de más de 120
SELECT * FROM film
    WHERE rating = 'PG' AND length >= 120;

-- 18. ¿Cuantos actores hay?
SELECT COUNT(*) AS 'Numero de actores'
FROM actor;

-- 19. ¿Cuántas ciudades tiene el country ‘Spain’?
SELECT COUNT(*) AS 'Número de ciudades España'
FROM city
    WHERE country_id = (SELECT country_id from country where country = 'spain');

-- 20. ¿Cuántos countries hay que empiezan por ‘a’?
SELECT COUNT(*) AS 'Ciudades que empiezan por ‘a’'
FROM country
    WHERE country LIKE 'a%';

-- 21. Media de duración de peliculas con PG
SELECT AVG(length) AS 'Media de duración', rating
FROM film
     WHERE  rating = 'pg';

-- 22. Suma de rental_rate de todas las peliculas
SELECT SUM(rental_rate) AS 'Suma de peliculas rental_rate'
FROM film;

-- 23. Pelicula con mayor duración
SELECT MAX(LENGTH) AS 'Pelicula con mayor duración'
FROM film;

-- 24. Película con menor duración
SELECT MIN(LENGTH) AS 'Pelicula con menor duración'
FROM film;

-- 25. Mostrar las ciudades y paises (multitabla)
SELECT co.country, c.city
FROM city c, country co
WHERE c.country_id = co.country_id;

-- 26. Mostrar el nombre de la película y el nombre de los actores
