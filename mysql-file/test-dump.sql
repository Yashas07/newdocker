DROP TABLE IF EXISTS `states`;

CREATE TABLE `states` (
  `id` INT(11) NOT NULL,
  `name` varchar(255) NOT NULL,
  `cases` int NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

LOCK TABLES `states` WRITE;
INSERT INTO `states` VALUES (1,'Karnataka',11521);
INSERT INTO `states` VALUES (2,'Maharashtra',100000);
INSERT INTO `states` VALUES (3,'TamilNadu',75000);

UNLOCK TABLES;