CREATE DATABASE `banco_borges` ;
USE `banco_borges`;

DROP TABLE IF EXISTS `people`;
CREATE TABLE `people` (
  `peopleid` int NOT NULL AUTO_INCREMENT,
  `cep` varchar(8) NOT NULL,
  `creditlimit` int NOT NULL DEFAULT '0',
  `dateRegister` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `dateUpdate` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `comments` text CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci,
  PRIMARY KEY (`peopleid`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

DROP TABLE IF EXISTS `address`;
CREATE TABLE `address` (
  `addressid` int NOT NULL AUTO_INCREMENT,
  `cep` varchar(9) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `logradouro` varchar(255) DEFAULT NULL,
  `complemento` varchar(255) DEFAULT NULL,
  `bairro` varchar(255) NOT NULL,
  `cidade` varchar(255) NOT NULL,
  `estado` varchar(255) NOT NULL,
  `peopleid` int NOT NULL,
  PRIMARY KEY (`addressid`),
  KEY `peopleid` (`peopleid`),
  CONSTRAINT `address_ibfk_1` FOREIGN KEY (`peopleid`) REFERENCES `people` (`peopleid`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

DROP TABLE IF EXISTS `physical_people`;
CREATE TABLE `physical_people` (
  `physical_peopleid` int NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  `cpf` varchar(20) NOT NULL,
  `peopleid` int NOT NULL,
  PRIMARY KEY (`physical_peopleid`),
  KEY `peopleid` (`peopleid`),
  CONSTRAINT `physical_people_ibfk_1` FOREIGN KEY (`peopleid`) REFERENCES `people` (`peopleid`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;


DROP TABLE IF EXISTS `legal_people`;
CREATE TABLE `legal_people` (
  `legal_peopleid` int NOT NULL AUTO_INCREMENT,
  `socialReason` varchar(255) NOT NULL,
  `cnpj` varchar(14) NOT NULL,
  `peopleid` int NOT NULL,
  PRIMARY KEY (`legal_peopleid`),
  KEY `peopleid` (`peopleid`),
  CONSTRAINT `legal_people_ibfk_1` FOREIGN KEY (`peopleid`) REFERENCES `people` (`peopleid`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

DROP TABLE IF EXISTS `account`;
CREATE TABLE `account` (
    `accountid` int NOT NULL AUTO_INCREMENT,
    `agency` int NOT NULL,
    `accountnumber` int NOT NULL,
    `balance` double NOT NULL,
    `peopleid` int NOT NULL,
    PRIMARY KEY (`accountid`),
    KEY `peopleid` (`peopleid`),
    CONSTRAINT `account_ibfk_1` FOREIGN KEY (`peopleid`) REFERENCES `people` (`peopleid`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

DROP TABLE IF EXISTS `checking_account`;
CREATE TABLE `checking_account` (
   `checking_accountid` int NOT NULL AUTO_INCREMENT,
   `tax` float NOT NULL,
   `transferlimit` float NOT NULL, 
   `accountid` int NOT NULL,
   PRIMARY KEY (`checking_accountid`),
   KEY `accountid`(`accountid`),
   CONSTRAINT `checking_account_ibfk_1` FOREIGN KEY (`accountid`) REFERENCES `account` (`accountid`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

DROP TABLE IF EXISTS `saving_account`;
CREATE TABLE `saving_account` (
   `saving_accountid` int NOT NULL AUTO_INCREMENT,
   `income` float NOT NULL,
   `accountid` int NOT NULL,
   PRIMARY KEY (`saving_accountid`),
   KEY `accountid`(`accountid`),
   CONSTRAINT `saving_account_ibfk_1` FOREIGN KEY (`accountid`) REFERENCES `account` (`accountid`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;