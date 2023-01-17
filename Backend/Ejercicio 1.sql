-- Active: 1673602456718@@127.0.0.1@3306
CREATE DATABASE pubs
    DEFAULT CHARACTER SET = 'utf8mb4';

USE pubs;


-- Ejercicio 1: 
-- Disponemos de la siguiente Base de Datos para gestionar la información de los pubs de una determinada provincia.

-- Creación de las tablas:
CREATE TABLE pub (
    cod_pub VARCHAR(6) NOT NULL,
    nombre VARCHAR(50) NOT NULL,
    licencia_fiscal VARCHAR(50) NOT NULL,
    domicilio VARCHAR(50),
    fecha_apertura DATE NOT NULL,
    horario VARCHAR(50) NOT NULL,
    cod_localidad INTEGER NOT NULL);
CREATE TABLE titular (
    dni_titular VARCHAR(10) NOT NULL,
    nombre VARCHAR(50) NOT NULL,
    domicilio VARCHAR(50),
    cod_pub VARCHAR(6) NOT NULL);
CREATE TABLE empleado (
    dni_empleado VARCHAR(10) NOT NULL,
    nombre VARCHAR(50) NOT NULL,
    domicilio VARCHAR(50));
CREATE TABLE existencias (
    cod_articulo VARCHAR(10) NOT NULL,
    nombre VARCHAR(50) NOT NULL,
    cantidad INTEGER NOT NULL,
    precio DECIMAL NOT NULL,
    cod_pub VARCHAR(6) NOT NULL);
CREATE TABLE localidad (
    cod_localidad INTEGER NOT NULL,
    nombre VARCHAR(50) NOT NULL);
CREATE TABLE pub_empleado (
    cod_pub VARCHAR(6) NOT NULL,
    dni_empleado VARCHAR(10) NOT NULL,
    funcion VARCHAR(15) NOT NULL);


-- Creación de las restricciones:

-- PRIMARY KEY

ALTER TABLE pub ADD CONSTRAINT pk_pub PRIMARY KEY (cod_pub);
ALTER TABLE titular ADD CONSTRAINT pk_titular PRIMARY KEY (dni_titular);
ALTER TABLE empleado ADD CONSTRAINT pk_empleado PRIMARY KEY (dni_empleado);
ALTER TABLE existencias ADD CONSTRAINT pk_existencias PRIMARY KEY (cod_articulo);
ALTER TABLE localidad ADD CONSTRAINT pk_localidad PRIMARY KEY (cod_localidad);
ALTER TABLE pub_empleado ADD CONSTRAINT pk_pub_empleado PRIMARY KEY (cod_pub, dni_empleado, funcion);

-- FOREIGN KEY

ALTER TABLE pub ADD CONSTRAINT fk_pub_localidad
FOREIGN KEY (cod_localidad)
REFERENCES localidad (cod_localidad);
ALTER TABLE titular ADD CONSTRAINT fk_titular_pu
FOREIGN KEY (cod_pub)
REFERENCES pub (cod_pub);
ALTER TABLE existencias ADD CONSTRAINT fk_existencias_pub
FOREIGN KEY (cod_pub)
REFERENCES pub (cod_pub);
ALTER TABLE pub_empleado ADD CONSTRAINT fk_pubemple_pub
FOREIGN KEY (cod_pub)
REFERENCES pub(cod_pub);
ALTER TABLE pub_empleado ADD CONSTRAINT fk_pubemple_empleado
FOREIGN KEY (dni_empleado)
REFERENCES empleado (dni_empleado);

ALTER TABLE pub ADD CONSTRAINT ck_horario
CHECK (horario IN ('hor1', 'hor2', 'hor3'));
ALTER TABLE existencias ADD CONSTRAINT ck_precio
CHECK (precio <> 0);
ALTER TABLE pub_empleado ADD CONSTRAINT ck_funcion
CHECK (funcion IN ('camarero', 'seguridad', 'limpieza'));


-- Ejercicio 2:
-- La siguiente base de datos está pensada para almacenar la información necesaria para 
-- gestionar la venta automática de entradas para diferentes espectáculos desde múltiples 
-- puntos de venta, como pueden ser oficinas bancarias, terminales tipo Servicaixa, o las 
-- mismas taquillas de teatros u otros recintos.