-- Apagar o banco de dados se existir
DROP DATABASE IF EXISTS banco_de_dados_sobre;
-- Criar banco de dados
CREATE DATABASE banco_de_dados_sobre CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci;
USE banco_de_dados_sobre;

-- Criar tabela
CREATE TABLE sobre (
	sobre_id INT PRIMARY KEY AUTO_INCREMENT NOT NULL,
	sobre_titulo VARCHAR(255) NOT NULL,
	sobre_descricao VARCHAR(255) NOT NULL
);

-- Inserir dados na tabela
INSERT INTO sobre (sobre_titulo, sobre_descricao) 
VALUES 
('Titulo 1','Descrição 1'),
('Titulo 2','Descrição 2'),
('Titulo 3','Descrição 3'),
('Titulo 4','Descrição 4');