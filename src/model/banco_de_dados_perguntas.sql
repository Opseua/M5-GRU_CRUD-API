-- Apagar o banco de dados se existir
DROP DATABASE IF EXISTS banco_de_dados_perguntas;
-- Criar banco de dados
CREATE DATABASE banco_de_dados_perguntas CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci;
USE banco_de_dados_perguntas;

-- Criar tabela
CREATE TABLE perguntas (
    pergunta_id INT PRIMARY KEY AUTO_INCREMENT NOT NULL, 
    pergunta_pergunta VARCHAR(255) NOT NULL
);

-- Inserir dados na tabela
INSERT INTO perguntas (pergunta_pergunta) 
VALUES 
('Qual seu peso?'),
('Qual sua altura?'),
('Qual seu tipo sanguineo?');
