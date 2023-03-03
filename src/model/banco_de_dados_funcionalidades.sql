-- Apagar o banco de dados se existir
DROP DATABASE IF EXISTS banco_de_dados_funcionalidades;
-- Criar banco de dados
CREATE DATABASE banco_de_dados_funcionalidades CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci;
USE banco_de_dados_funcionalidades;

-- Criar tabela
CREATE TABLE funcionalidades (
	funcionalidade_id INT PRIMARY KEY AUTO_INCREMENT NOT NULL,
	funcionalidade_titulo VARCHAR(255) NOT NULL,
	funcionalidade_descricao VARCHAR(255) NOT NULL
);

-- Inserir dados na tabela
INSERT INTO funcionalidades (funcionalidade_titulo, funcionalidade_descricao) 
VALUES 
('Cadastrar notas','Com a nossa aplicação você pode cadastrar quantas notas quiser.'),
('Visualizar','Todas as suas notas ficam registradas e podem ser lidas a qualquer momento!'),
('Editar','Precisa editar alguma nota? Isso também é possível!'),
('Remover','Não precisa mais da nota... sem problemas no Caderno de Saúde você pode apagar um nota sempre que precisar.');