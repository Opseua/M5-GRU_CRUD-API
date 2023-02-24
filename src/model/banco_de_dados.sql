-- Apagar o banco de dados se existir
DROP DATABASE IF EXISTS banco_de_dados;
CREATE DATABASE banco_de_dados CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci;
USE banco_de_dados;

-- Criar entidade (tabela usuarios)
CREATE TABLE usuarios (
	id INT PRIMARY KEY AUTO_INCREMENT NOT NULL,
	nome VARCHAR(255) NOT NULL,
	genero ENUM('F', 'M') NOT NULL,
	data_nascimento DATE NOT NULL,
	peso DECIMAL(3,1) NOT NULL,
	altura DECIMAL(3,2) NOT NULL,
	tipo_sanguineo VARCHAR(30) NOT NULL,
	imc DECIMAL(4,2) NOT NULL,
	email VARCHAR(255) NOT NULL,
	senha VARCHAR(255) NOT NULL,
	reset_pergunta VARCHAR(255) NOT NULL,
	reset_resposta VARCHAR(255) NOT NULL
);

INSERT INTO usuarios (nome, genero, data_nascimento, peso, altura, tipo_sanguineo, imc, email, senha, reset_pergunta, reset_resposta) 
VALUES 
('Orlando','M','2001-01-01','75.2','1.85','A+','25.41','orlando@gmail.com','senha_12345678@','Comida favorita?','maça'),
('Thiago','M','2002-02-02','80.6','1.73','O-','35.61','thiago@gmail.com','senha_12345678@','Cor favorita?','azul'),
('Matheus','M','2003-03-03','50.7','1.65','O-','24.72','matheus@gmail.com','senha_12345678@','Filme favorito?','Avatar'),
('Gabrielly','F','2004-04-04','90.5','1.75','O-','19.83','gabrielly@gmail.com','senha_12345678@','Prefere calor ou frio?','Frio'),
('Priscila','F','2005-05-05','72.3','1.84','AB-','17.94','priscila@gmail.com','senha_12345678@','Nome do pai?','Rogerio'),
('Yasmim','F','2006-06-06','83.2','1.77','A+','29.55','yasmim@gmail.com','senha_12345678@','Música favorita?','Anita - tal tal tal '),
('Juliano','M','2007-07-07','59.2','1.61','AB-','30.56','juliano@gmail.com','senha_12345678@','Comida favorita?','Morango'),
('Marcos','M','2008-08-08','74.3','1.99','O-','27.47','marcos@gmail.com','senha_12345678@','Cor favorita?','Vermelho'),
('Mariana','F','2009-09-09','61.8','1.74','A+','22.28','mariana@gmail.com','senha_12345678@','Comida favorita?','Arroz'),
('Juliana','F','2010-10-10','73.4','1.88','AB-','18.89','juliana@gmail.com','senha_12345678@','Filme favorito?','Velozes e furiosos');

-- Criar entidade (tabela perguntas)
CREATE TABLE perguntas (
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    pergunta VARCHAR(255) NOT NULL
);

INSERT INTO perguntas (pergunta) 
VALUES 
('Qual seu peso?'),
('Qual sua altura?'),
('Qual seu tipo sanguineo?');
