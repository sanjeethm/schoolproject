
-- Dumping database structure for schooldb
CREATE DATABASE
IF NOT EXISTS `schooldb` ;
USE `schooldb`;

-- Dumping structure for table schooldb.student
CREATE TABLE STUDENT
(
  student_id smallint
  unsigned not null auto_increment, student_name varchar
  (50) not null, student_email varchar
  (50) not null, teacher_name varchar
  (50) not null, teacher_email varchar
  (50) not null, constraint pk_example primary key
  (id) );

  INSERT INTO STUDENT
    ( student_id, student_name, student_email, teacher_name, teacher_email)
  VALUES
    ( null, 'Aashrith', 'aashirth@gmail.com', 'Sanjeeth', 'sanjeethm@gmail.com' );
