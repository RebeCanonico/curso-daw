-- esto es un comentario (ctrl + /)

-- seleccionar o extraer datos de una tabla
SELECT * FROM world.country;

-- actualizar o modificar datros existentes de una tabla
UPDATE academia.alumnos SET poblacion = 'Barakaldo' WHERE dni = '12345678F';
-- es impotante recordar integrar un WHERE al usar UPDATE. Ya que sin este, se actualizaran TODOS los datos de la tabla.

-- borrar datos de una tabla
DELETE FROM nombre_de_tabla WHERE condicion;
-- sin el WHERE, se borraran TODOS los datos de la tabla!

-- añadir datos a una tabla
INSERT INTO academia.alumnos (dni, nombre, apellido1, apellido2, tlf)
VALUES ('21436587M', 'Vistoria', 'Perez', 'Garcia', 666333999);
-- una query puede contener tantas lineas como sean necesarias, pero al final siempre deben llevar ;
-- si se van a agregar valores para todas las columnas de una tabla, no es necesario indicar las columnas:
INSERT INTO academia.alumnos
VALUES ('09876543K', 'Armando', 'Casas', 'Rodriguez', '944327634', 'Portugalete', 42521);

