/* 2023-01-13 11:34:47 [3 ms] */ 
USE sakila;
/* 2023-01-13 11:35:22 [21 ms] */ 
SELECT * FROM actor;
/* 2023-01-13 11:36:52 [5 ms] */ 
SELECT * FROM actor
WHERE first_name LIKE '%o%';
/* 2023-01-13 11:37:53 [2 ms] */ 
SELECT * FROM actor
WHERE first_name = 'scarlett';
/* 2023-01-13 11:41:46 [8 ms] */ 
SELECT * FROM actor
    WHERE last_name = 'Johansson';
/* 2023-01-13 11:44:39 [4 ms] */ 
SELECT * FROM actor
    WHERE first_name LIKE '%o%';
/* 2023-01-13 11:47:52 [4 ms] */ 
SELECT * FROM actor
    WHERE first_name LIKE '%o%' AND last_name LIKE '%a%';
/* 2023-01-13 11:49:44 [3 ms] */ 
SELECT * FROM actor
    WHERE first_name LIKE '%o%o%' AND last_name LIKE '%a%';
/* 2023-01-13 11:51:38 [3 ms] */ 
SELECT * FROM actor
    WHERE first_name LIKE '__b%';
/* 2023-01-13 11:53:06 [66 ms] */ 
SELECT * FROM city
    WHERE city LIKE 'a%';
/* 2023-01-13 11:54:23 [7 ms] */ 
SELECT * FROM city
    WHERE city LIKE '%s';
/* 2023-01-13 11:56:29 [6 ms] */ 
SELECT * FROM city
    WHERE country_id = '61';
/* 2023-01-13 11:58:12 [5 ms] */ 
SELECT * FROM city
    WHERE city = 'spain';
/* 2023-01-13 11:59:09 [25 ms] */ 
SELECT * FROM city
    WHERE country_id = (SELECT country_id FROM country WHERE country = 'spain');
/* 2023-01-13 12:04:00 [6 ms] */ 
SELECT * FROM city
    WHERE city LIKE '% %';
/* 2023-01-13 12:06:40 [33 ms] */ 
SELECT * FROM film
    WHERE film_id LIMIT 100;
/* 2023-01-13 12:09:40 [15 ms] */ 
SELECT * FROM film
    WHERE length between 80 and 100;
/* 2023-01-13 12:11:31 [11 ms] */ 
SELECT * 
FROM film 
WHERE length >= 80 and length <= 100;
/* 2023-01-13 12:11:40 [10 ms] */ 
SELECT * FROM film
    WHERE length between 80 and 100;
/* 2023-01-13 12:11:48 [9 ms] */ 
SELECT * 
FROM film 
WHERE length >= 80 and length <= 100;
/* 2023-01-13 12:27:25 [15 ms] */ 
SELECT * FROM film
    WHERE rental_rate >= 1 AND rental_rate <= 3;
/* 2023-01-13 12:35:31 [13 ms] */ 
SELECT title, length(title) AS longitud
FROM film
    WHERE length(title) >= 12;
/* 2023-01-13 12:35:55 [12 ms] */ 
SELECT title, length(title)
FROM film
    WHERE length(title) >= 12;
/* 2023-01-13 12:36:20 [7 ms] */ 
SELECT title
FROM film
    WHERE length(title) >= 12;
/* 2023-01-13 13:00:03 [16 ms] */ 
SELECT * FROM film
    WHERE rental_rate >= 1 AND rental_rate <= 3;
/* 2023-01-13 13:05:09 [6 ms] */ 
SELECT * FROM film
    WHERE rating = 'pg' AND rating = 'g';
/* 2023-01-13 13:05:26 [15 ms] */ 
SELECT * FROM film
    WHERE rating = 'pg' OR rating = 'g';
/* 2023-01-13 13:09:04 [26 ms] */ 
SELECT * FROM film
    WHERE NOT rating = 'NC-17';
/* 2023-01-13 13:18:47 [11 ms] */ 
SELECT * FROM film
    WHERE rating = 'PG' AND length >= 120;
/* 2023-01-13 13:19:56 [8 ms] */ 
SELECT * FROM actor;
/* 2023-01-13 13:20:49 [6 ms] */ 
SELECT COUNT(*) FROM actor;
/* 2023-01-13 13:21:41 [4 ms] */ 
SELECT COUNT(*) AS 'Numero de actores'
FROM actor;
/* 2023-01-13 13:32:35 [5 ms] */ 
SELECT COUNT(*) AS 'Número de ciudades'
FROM city
    WHERE country_id = (SELECT country_id from country where country = 'spain');
/* 2023-01-13 13:32:59 [3 ms] */ 
SELECT COUNT(*) AS 'Número de ciudades España'
FROM city
    WHERE country_id = (SELECT country_id from country where country = 'spain');
/* 2023-01-13 13:38:09 [5 ms] */ 
SELECT COUNT(*) AS 'Ciudades que empiezan por ‘a’'
FROM city
    WHERE city LIKE 'a%';
/* 2023-01-13 13:38:44 [3 ms] */ 
SELECT COUNT(*) AS 'Ciudades que empiezan por ‘a’'
FROM city
    WHERE city LIKE 'A%';
/* 2023-01-13 13:39:37 [3 ms] */ 
SELECT COUNT(*) AS 'Ciudades que empiezan por ‘a’'
FROM country
    WHERE country LIKE 'a%';
/* 2023-01-13 13:44:29 [7 ms] */ 
SELECT AVG(length) AS 'Media de duración'
FROM film
     WHERE  rating = 'pg';
/* 2023-01-13 13:44:49 [6 ms] */ 
SELECT AVG(length) AS 'Media de duración peliculas con PG'
FROM film
     WHERE  rating = 'pg';
/* 2023-01-13 13:45:18 [4 ms] */ 
SELECT AVG(length) AS 'Media de duración peliculas con PG', rating
FROM film
     WHERE  rating = 'pg';
/* 2023-01-13 13:45:30 [5 ms] */ 
SELECT AVG(length) AS 'Media de duración', rating
FROM film
     WHERE  rating = 'pg';
/* 2023-01-13 13:48:09 [5 ms] */ 
SELECT SUM(rental_rate)
FROM film;
/* 2023-01-13 13:49:17 [5 ms] */ 
SELECT SUM(rental_rate) AS 'Suma de peliculas rental_rate'
FROM film;
/* 2023-01-13 13:50:48 [3 ms] */ 
SELECT * FROM city
    WHERE country_id = (SELECT country_id FROM country WHERE country = 'spain');
/* 2023-01-13 13:51:44 [3 ms] */ 
SELECT * FROM city
    WHERE country_id = '87';
/* 2023-01-13 13:51:55 [3 ms] */ 
SELECT * FROM city
    WHERE country_id = '61';
/* 2023-01-13 13:52:28 [13 ms] */ 
SELECT co.country, c.city
FROM city c, country co
WHERE c.country_id = co.country_id;
/* 2023-01-13 13:55:28 [4 ms] */ 
SELECT MAX(LENGTH) AS 'Pelicula con mayor duración'
FROM film;
/* 2023-01-13 13:56:45 [4 ms] */ 
SELECT MIN(LENGTH) AS 'Pelicula con mayor duración'
FROM film;
/* 2023-01-13 13:56:53 [4 ms] */ 
SELECT MIN(LENGTH) AS 'Pelicula con menor duración'
FROM film;
/* 2023-01-13 13:57:40 [9 ms] */ 
SELECT co.country, c.city
FROM city c, country co
WHERE c.country_id = co.country_id;
