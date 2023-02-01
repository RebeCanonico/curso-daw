-- Active: 1673602456718@@127.0.0.1@3306@web
DROP TABLE IF EXISTS audit;

DROP TRIGGER IF EXISTS after_usuarios_update;
DROP TRIGGER IF EXISTS before_usuarios_delete ;
-- Creamos una tabla para auditar los cambios en los datos de la tabla'usuarios'
CREATE TABLE IF NOT EXISTS audit(  
    id_audit INT PRIMARY KEY AUTO_INCREMENT COMMENT 'Primary Key',
    create_time TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    id_user INT,
    old_user VARCHAR(50),
    new_user VARCHAR(50),
    old_tipousuario VARCHAR(50),
    new_tipousuario VARCHAR(50),
    query_type VARCHAR(20) DEFAULT 'AFTER_UPDATE'
);


-- ALTER TABLE audit ADD CONSTRAINT fk_audit FOREIGN KEY (id_user) REFERENCES usuarios (id);

-- ALTER TABLE audit ADD COLUMN query_type VARCHAR(20) DEFAULT 'AFTER_UPDATE' ;


-- El delimitador es el caracter que completa una sentencia (por defecto el ';')
DELIMITER $$
-- cambiamos el delimitador con el fin de que el trigger se ejecute como un solo bloque
-- Creamos un trigger que almacenará los datos viejos cuando hay una modificación
CREATE TRIGGER IF NOT EXISTS after_usuarios_update
AFTER UPDATE
ON usuarios FOR EACH ROW
BEGIN
-- sin el delimitador, esta sentencia se ejecutaria al momento
    INSERT INTO audit (id_user, old_user, new_user, old_tipousuario, new_tipousuario)
    VALUES (old.id, old.nombre, new.nombre, old.tipo_usuario, new.tipo_usuario);
END $$


-- DELIMITER ;
-- DELIMITER $$

-- Este trigger guarda los datos de las filas borradas
CREATE TRIGGER IF NOT EXISTS before_usuarios_delete
BEFORE DELETE
ON usuarios FOR EACH ROW
BEGIN
    INSERT INTO audit (id_user, old_user, old_tipousuario, query_type)
    VALUES (old.id, old.nombre, old.tipo_usuario, 'BEFORE_DELETE');
END $$

-- una vez hemos terminado de crear los triggers, restauramos el  delimitador
DELIMITER ;


SHOW TRIGGERS ;

-- UPDATE usuarios SET nombre = 'rebe' WHERE nombre = 'rebeca';