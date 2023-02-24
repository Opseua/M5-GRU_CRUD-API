-- Apagar o banco de dados se existir
DROP DATABASE IF EXISTS banco_de_dados_comunicados;
-- Criar banco de dados
CREATE DATABASE banco_de_dados_comunicados CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci;
USE banco_de_dados_comunicados;

-- Criar tabela
CREATE TABLE comunicados (
    comunicado_id INT PRIMARY KEY AUTO_INCREMENT NOT NULL,
    comunicado_genero ENUM('Feminino', 'Masculino', 'Outros') NOT NULL,
    comunicado_informacao VARCHAR(255) NOT NULL,
    comunicado_feedback VARCHAR(255) NOT NULL,
    comunicado_link VARCHAR(255) NOT NULL
);

-- Inserir dados na tabela
INSERT INTO comunicados (comunicado_genero, comunicado_informacao, comunicado_feedback, comunicado_link)
VALUES 
('Feminino','você sabe fazer o auto exame?','beleza!é isso aí, mantenha a saúde em dia!','https://www.inca.gov.br/noticias/confira-recomendacoes-do-ministerio-da-saude-para-o-rastreamento-do-cancer-de-mama'),
('Feminino','Gostaria de fazer mais sobre o câncer de mama','Tudo bem! quem sabe no futuro!?','https://www.gov.br/inca/pt-br/assuntos/gestor-e-profissional-de-saude/controle-do-cancer-de-mama/dados-e-numeros/mamografias-no-sus'),
('Feminino','Seu preventivo está em dia','é isso aí, mandou bem!','https://www.gov.br/saude/pt-br/assuntos/noticias/2022/setembro/cancer-do-colo-do-utero-exame-para-deteccao-e-oferecido-no-sus'),
('Masculino','Quer saber mais sobre o exame de próstata?','Tudo bem quem sabe no futuro!?','https://www.gov.br/saude/pt-br/assuntos/saude-de-a-a-z/c/cancer-de-prostata'),
('Masculino','já sabe oque é hipertensão?','show! Mostrou que está por dentro do assunto.','https://www.gov.br/saude/pt-br/assuntos/saude-de-a-a-z/h/hipertensao'),
('Masculino','Sabe como evitar diabetes','uhuuul, você é top!','https://www.gov.br/saude/pt-br/assuntos/saude-de-a-a-z/d/diabetes');
