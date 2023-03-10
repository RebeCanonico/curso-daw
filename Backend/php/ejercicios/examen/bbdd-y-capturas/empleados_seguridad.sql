CREATE DATABASE  IF NOT EXISTS `empleados` /*!40100 DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci */ /*!80016 DEFAULT ENCRYPTION='N' */;
USE `empleados`;
-- MySQL dump 10.13  Distrib 8.0.31, for Win64 (x86_64)
--
-- Host: localhost    Database: empleados
-- ------------------------------------------------------
-- Server version	8.0.31

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `seguridad`
--

DROP TABLE IF EXISTS `seguridad`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `seguridad` (
  `id` int NOT NULL AUTO_INCREMENT COMMENT 'Primary Key',
  `nombre` varchar(255) DEFAULT NULL,
  `tipo_usuario` varchar(255) DEFAULT NULL,
  `documento` varchar(255) DEFAULT NULL,
  `mac` varchar(255) DEFAULT NULL,
  `bio` varchar(255) DEFAULT NULL,
  `documento_intro` varchar(255) DEFAULT NULL,
  `mac_intro` varchar(255) DEFAULT NULL,
  `bio_intro` varchar(255) DEFAULT NULL,
  `verificado` tinyint(1) DEFAULT '0',
  `password` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `nombre` (`nombre`)
) ENGINE=InnoDB AUTO_INCREMENT=28 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `seguridad`
--

LOCK TABLES `seguridad` WRITE;
/*!40000 ALTER TABLE `seguridad` DISABLE KEYS */;
INSERT INTO `seguridad` VALUES (1,'admin','admin',NULL,NULL,NULL,NULL,NULL,NULL,1,'1111'),(2,'colaborador','colaborador',NULL,NULL,NULL,NULL,NULL,NULL,1,'2222'),(3,'Jon','empleado','90875643L','00:3a:c2:9e:28:8b','azul','90875643L','qwsd45','azul',1,'1234'),(4,'Ander','empleado','70949938D','00:4a:c3:9e:26:6b','marron',NULL,NULL,NULL,1,'1234'),(5,'rebeca','colaborador',NULL,NULL,NULL,NULL,NULL,NULL,1,'2222'),(6,'Idurre','empleado','90876523V','00:5a:c5:9e:38:7b','verde','90876523V','00:5a:c5:9e:38:7b','verde',1,'1234'),(7,'Dafne','empleado','80234586A','00:7a:c6:9e:28:9b','azul',NULL,NULL,NULL,0,'1234'),(8,'Tere','empleado','45098215J','00:8a:c2:1e:28:6b','verde',NULL,NULL,NULL,0,'1234'),(9,'Angela','empleado','78560724S','00:9a:c2:9e:28:6b','marron','78560724S','00:9a:c2:9e:28:6b','marron',1,'1234'),(10,'German','empleado','08134906X','00:1a:c2:9e:28:6b','marron','08134906X','00:1a:c2:9e:28:6b','marron',1,'1234'),(11,'Roman','empleado','07421678Y','00:2a:c2:9e:28:6b','marron',NULL,NULL,NULL,1,'1234'),(12,'Santiago','empleado','34092356K','00:3a:c2:9e:28:6b','gris',NULL,NULL,NULL,0,'1234'),(13,'Pepito','empleado','50906324M','00:3a:c8:9e:32:6b','marron',NULL,NULL,NULL,1,'1234');
/*!40000 ALTER TABLE `seguridad` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2023-03-09 21:42:39
