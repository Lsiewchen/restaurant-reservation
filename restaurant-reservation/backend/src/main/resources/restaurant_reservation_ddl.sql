DROP DATABASE IF EXISTS restaurant_reservation1;
CREATE DATABASE restaurant_reservation1;

USE restaurant_reservation1;

DROP TABLE IF EXISTS operation;
DROP TABLE IF EXISTS restaurant_menu;
DROP TABLE IF EXISTS restaurant_image;
DROP TABLE IF EXISTS image_type;
DROP TABLE IF EXISTS reservation;
DROP TABLE IF EXISTS `status`;
DROP TABLE IF EXISTS restaurant_cuisine;
DROP TABLE IF EXISTS restaurant;
DROP TABLE IF EXISTS cuisine;
DROP TABLE IF EXISTS customer;

CREATE TABLE cuisine (
  cs_id int(11) NOT NULL AUTO_INCREMENT,
  `type` varchar(255) NOT NULL,
  PRIMARY KEY (cs_id)
);

CREATE TABLE restaurant (
  rt_id int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  phone varchar(255) NOT NULL,
  email varchar(255) NOT NULL,
  intro varchar(255) NOT NULL,
  `description` longtext NOT NULL,
  street_address1 varchar(255) NOT NULL,
  street_address2 varchar(255) DEFAULT NULL,
  unit_number varchar(255) DEFAULT NULL,
  postal_code varchar(255) NOT NULL,
  capacity int(11) NOT NULL,
  date_created date NOT NULL,
  PRIMARY KEY (rt_id)
);

CREATE TABLE restaurant_cuisine (
  cs_id int(11) NOT NULL,
  rt_id int(11) NOT NULL,
  FOREIGN KEY (cs_id) REFERENCES cuisine (cs_id),
  FOREIGN KEY (rt_id) REFERENCES restaurant (rt_id)
);

CREATE TABLE operation (
  rt_id int(11) NOT NULL,
  `day` enum('FRI','MON','SAT','SUN','THU','TUE','WED') NOT NULL,
  closing_time int(11) NOT NULL CHECK (closing_time >= 0 and closing_time <= 23),
  opening_time int(11) NOT NULL CHECK (opening_time >= 0 and opening_time <= 23),
  PRIMARY KEY (rt_id,`day`),
  FOREIGN KEY (rt_id) REFERENCES restaurant (rt_id) ON DELETE CASCADE
);

CREATE TABLE restaurant_menu (
  m_id int(11) NOT NULL AUTO_INCREMENT,
  rt_id int(11) NOT NULL,
  file_url varchar(255) NOT NULL,
  image_url varchar(255) NOT NULL,
  `type` varchar(255) DEFAULT NULL,
  PRIMARY KEY (m_id),
  FOREIGN KEY (rt_id) REFERENCES restaurant (rt_id) ON DELETE CASCADE
);

CREATE TABLE image_type (
  it_id int(11) NOT NULL AUTO_INCREMENT,
  `type` varchar(255) NOT NULL,
  PRIMARY KEY (it_id)
);

CREATE TABLE restaurant_image (
  i_id int(11) NOT NULL AUTO_INCREMENT,
  it_id int(11) NOT NULL,
  rt_id int(11) NOT NULL,
  image_url varchar(255) NOT NULL,
  PRIMARY KEY (i_id),
  FOREIGN KEY (rt_id) REFERENCES restaurant (rt_id) ON DELETE CASCADE,
  FOREIGN KEY (it_id) REFERENCES image_type (it_id) ON DELETE CASCADE
);

CREATE TABLE customer (
  c_id int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  phone varchar(255) NOT NULL UNIQUE,
  email varchar(255) NOT NULL UNIQUE,
  PRIMARY KEY (c_id)
);

CREATE TABLE `status` (
  s_id int(11) NOT NULL AUTO_INCREMENT,
  `type` varchar(255) NOT NULL,
  PRIMARY KEY (s_id)
);

CREATE TABLE reservation (
  c_id int(11) NOT NULL,
  `date` date NOT NULL,
  pax int(11) NOT NULL,
  rs_id int(11) NOT NULL AUTO_INCREMENT,
  rt_id int(11) NOT NULL,
  s_id int(11) NOT NULL,
  `time` int(11) NOT NULL CHECK (`time` >= 0 and `time` <= 23),
  PRIMARY KEY (rs_id),
  FOREIGN KEY (c_id) REFERENCES customer (c_id) ON DELETE CASCADE,
  FOREIGN KEY (s_id) REFERENCES `status` (s_id) ON DELETE CASCADE,
  FOREIGN KEY (rt_id) REFERENCES restaurant (rt_id) ON DELETE CASCADE
);
