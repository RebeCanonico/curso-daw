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
   