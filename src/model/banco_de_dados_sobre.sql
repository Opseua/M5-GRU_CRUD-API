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
('O Caderno da Saúde é uma ferramenta online gratuita para que você possa acompanhar sua saúde de forma fácil e organizada.','• Medicamentos que está tomando,
 • Resultados de exames médicos
 • Consultas médicas
 • Alimentação e exercícios físicos,
 • Outras observações sobre sua saúde,'),
('O melhor guia de saúde','O Bloco de Notas da Saúde foi criado para ajudar você a cuidar melhor da sua saúde e a ter mais controle sobre suas informações médicas.'),
('gratuito','acesse sem custos apenas com anúncios'),
('novas atualizações','sempre haverá atualizações constantes');
