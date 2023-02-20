-- Apagar o banco de dados se existir
DROP DATABASE IF EXISTS banco_de_dados;
CREATE DATABASE banco_de_dados CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci;
USE banco_de_dados;

-- Criar entidade (tabela)
CREATE TABLE usuarios (
	usuario_id INT PRIMARY KEY AUTO_INCREMENT NOT NULL,
	usuario_nome VARCHAR(255) NOT NULL,
	usuario_genero ENUM('F', 'M') NOT NULL,
	usuario_nascimento DATE NOT NULL,
	usuario_resposta_1 DECIMAL(3,1) NOT NULL,
	usuario_resposta_2 DECIMAL(3,2) NOT NULL,
	usuario_resposta_3 VARCHAR(30) NOT NULL,
	usuario_imc DECIMAL(4,2) NOT NULL
);

INSERT INTO usuarios (usuario_nome, usuario_genero, usuario_nascimento, usuario_resposta_1, usuario_resposta_2, usuario_resposta_3, usuario_imc) 
VALUES 
('Orlando','M','2001-01-01','75.2','1.85','Tipo Sanguineo: A+','25.41'),
('Thiago','M','2002-02-02','80.6','1.73','Tipo Sanguineo: O-','35.61'),
('Matheus','M','2003-03-03','50.7','1.65','Tipo Sanguineo: O-','24.72'),
('Gabrielly','F','2004-04-04','90.5','1.75','Tipo Sanguineo: O-','19.83'),
('Priscila','F','2005-05-05','72.3','1.84','Tipo Sanguineo: AB-','17.94'),
('Yasmim','F','2006-06-06','83.2','1.77','Tipo Sanguineo: A+','29.55'),
('Juliano','M','2007-07-07','59.2','1.61','Tipo Sanguineo: AB-','30.56'),
('Marcos','M','2008-08-08','74.3','1.99','Tipo Sanguineo: O-','27.47'),
('Mariana','F','2009-09-09','61.8','1.74','Tipo Sanguineo: A+','22.28'),
('Juliana','F','2010-10-10','73.4','1.88','Tipo Sanguineo: AB-','18.89');

