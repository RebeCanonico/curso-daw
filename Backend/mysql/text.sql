SELECT * FROM world.country;
SELECT * FROM world.city;

SELECT name, population, CountryCode FROM world.city WHERE countrycode = 'ARG' ORDER BY population DESC;