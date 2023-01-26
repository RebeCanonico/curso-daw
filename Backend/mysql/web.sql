-- ----------------------------------------------------------------------------
-- MySQL Workbench Migration
-- Migrated Schemata: web
-- Source Schemata: web
-- Created: Wed Jan 25 13:39:07 2023
-- Workbench Version: 8.0.31
-- ----------------------------------------------------------------------------

SET FOREIGN_KEY_CHECKS = 0;

-- ----------------------------------------------------------------------------
-- Schema web
-- ----------------------------------------------------------------------------
DROP SCHEMA IF EXISTS `web` ;
CREATE SCHEMA IF NOT EXISTS `web` ;

-- ----------------------------------------------------------------------------
-- Table web.usuarios
-- ----------------------------------------------------------------------------
CREATE TABLE IF NOT EXISTS `web`.`usuarios` (
  `nombre` VARCHAR(45) NOT NULL,
  `password` VARCHAR(20) NULL DEFAULT NULL,
  PRIMARY KEY (`nombre`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;
SET FOREIGN_KEY_CHECKS = 1;
