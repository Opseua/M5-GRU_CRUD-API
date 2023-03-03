-- Apagar o banco de dados se existir
DROP DATABASE IF EXISTS a8lzgywbc4gzr889;
-- Criar banco de dados
CREATE DATABASE a8lzgywbc4gzr889 CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci;
USE a8lzgywbc4gzr889;

-- ###########################################################################################

-- Criar tabela (Feito por: ORLANDO)
CREATE TABLE usuarios (
	usuario_id INT PRIMARY KEY AUTO_INCREMENT NOT NULL,
	usuario_nome VARCHAR(255) NOT NULL,
	usuario_genero ENUM('Feminino', 'Masculino', 'Outros') NOT NULL,
	usuario_nascimento DATE NOT NULL,
	usuario_peso DECIMAL(3,1) NOT NULL,
	usuario_altura DECIMAL(3,2) NOT NULL,
	usuario_tipo_sanguineo VARCHAR(30) NOT NULL,
	usuario_imc DECIMAL(4,2) NOT NULL,
    usuario_email VARCHAR(255) NOT NULL,
    usuario_senha VARCHAR(255) NOT NULL,
    usuario_reset_pergunta VARCHAR(255) NOT NULL,
    usuario_reset_resposta VARCHAR(255) NOT NULL,
    usuario_extra TEXT DEFAULT NULL,
    usuario_status ENUM('on', 'off', 'del') DEFAULT 'on'
);

-- Inserir dados na tabela (Feito por: ORLANDO)
INSERT INTO usuarios 
(usuario_nome, usuario_genero, usuario_nascimento, usuario_peso, usuario_altura, usuario_tipo_sanguineo, usuario_imc, usuario_email, usuario_senha, usuario_reset_pergunta, usuario_reset_resposta, usuario_extra, usuario_status) 
VALUES
('Orlando','Masculino','2001-01-01','75.2','1.85','A+','25.41','orlando@gmail.com',SHA1('senha_@_user_1'),'Comida favorita?','maça', '{\"inf_1\":\"Essa é a informação adicional 1\",\"inf_2\":\"Essa é a informação adicional 2\",\"inf_3\":\"Essa é a informação adicional 3\"}', 'on'),
('Thiago','Masculino','2002-02-02','80.6','1.73','O-','35.61','thiago@gmail.com',SHA1('senha_@_user_2'),'Cor favorita?','azul', '{\"inf_1\":\"Essa é a informação adicional 1\",\"inf_2\":\"Essa é a informação adicional 2\",\"inf_3\":\"Essa é a informação adicional 3\"}', 'on'),
('Matheus','Masculino','2003-03-03','50.7','1.65','O-','24.72','matheus@gmail.com',SHA1('senha_@_user_3'),'Filme favorito?','Avatar', '{\"inf_1\":\"Essa é a informação adicional 1\",\"inf_2\":\"Essa é a informação adicional 2\",\"inf_3\":\"Essa é a informação adicional 3\"}', 'on'),
('Gabrielly','Feminino','2004-04-04','90.5','1.75','O-','19.83','gabrielly@gmail.com',SHA1('senha_@_user_4'),'Prefere calor ou frio?','Frio', '{\"inf_1\":\"Essa é a informação adicional 1\",\"inf_2\":\"Essa é a informação adicional 2\",\"inf_3\":\"Essa é a informação adicional 3\"}', 'on'),
('Priscila','Feminino','2005-05-05','72.3','1.84','AB-','17.94','priscila@gmail.com',SHA1('senha_@_user_5'),'Nome do pai?','Rogerio', '{\"inf_1\":\"Essa é a informação adicional 1\",\"inf_2\":\"Essa é a informação adicional 2\",\"inf_3\":\"Essa é a informação adicional 3\"}', 'on'),
('Yasmim','Feminino','2006-06-06','83.2','1.77','A+','29.55','yasmim@gmail.com',SHA1('senha_@_user_6'),'Música favorita?','Anita - tal tal tal ', '{\"inf_1\":\"Essa é a informação adicional 1\",\"inf_2\":\"Essa é a informação adicional 2\",\"inf_3\":\"Essa é a informação adicional 3\"}', 'on'),
('Juliano','Masculino','2007-07-07','59.2','1.61','AB-','30.56','juliano@gmail.com',SHA1('senha_@_user_7'),'Comida favorita?','Morango', '{\"inf_1\":\"Essa é a informação adicional 1\",\"inf_2\":\"Essa é a informação adicional 2\",\"inf_3\":\"Essa é a informação adicional 3\"}', 'off'),
('Marcos','Masculino','2008-08-08','74.3','1.99','O-','27.47','marcos@gmail.com',SHA1('senha_@_user_8'),'Cor favorita?','Vermelho', '{\"inf_1\":\"Essa é a informação adicional 1\",\"inf_2\":\"Essa é a informação adicional 2\",\"inf_3\":\"Essa é a informação adicional 3\"}', 'off'),
('Mariana','Feminino','2009-09-09','61.8','1.74','A+','22.28','mariana@gmail.com',SHA1('senha_@_user_9'),'Comida favorita?','Arroz', '{\"inf_1\":\"Essa é a informação adicional 1\",\"inf_2\":\"Essa é a informação adicional 2\",\"inf_3\":\"Essa é a informação adicional 3\"}', 'del'),
('Juliana','Feminino','2010-10-10','73.4','1.88','AB-','18.89','juliana@gmail.com',SHA1('senha_@_user_10'),'Filme favorito?','Velozes e furiosos', '{\"inf_1\":\"Essa é a informação adicional 1\",\"inf_2\":\"Essa é a informação adicional 2\",\"inf_3\":\"Essa é a informação adicional 3\"}', 'del');

-- ###########################################################################################

-- Criar tabela (Feito por: YASMIM/PRISCILA)
CREATE TABLE notas (
    nota_id INT PRIMARY KEY AUTO_INCREMENT NOT NULL,
    nota_titulo VARCHAR(50) NOT NULL,
	nota_informacao VARCHAR(255) NOT NULL,
	nota_ultima_edicao DATETIME NOT NULL,
    usuario_id INT NOT NULL,
    FOREIGN KEY (usuario_id) REFERENCES usuarios (usuario_id)
);

-- Inserir dados na tabela (Feito por: YASMIM/PRISCILA)
INSERT INTO notas 
(nota_titulo, nota_informacao,nota_ultima_edicao,usuario_id)  
VALUES
('Consultas marcadas', '15/02/2023 consulta no Centro do RJ com o Dr Marcelo, para checar a minha coluna', '2001-01-01 12:27:00','1'),
('Remédios para tomar', 'Tomar o remédio para diabetes nesses horários 12:00, 22:00, 04:00', '2002-02-02 13:12:00','1'),
('Próximas vacinas', '01/07/2023 vacina de COVID em Madureira, chegar 8h no local', '2003-03-03 14:09:00','6'),
('Dicas de bem estar', 'Beba água. Durma bem. Cultive boas relações sociais. Preserve o autocuidado. Conheça seus limites.', '2004-04-04 15:03:00','6'),
('Alimentos saudáveis', 'Arroz, feijão com beterraba, granola, frutas', '2005-05-05 16:09:00','2'),
('Telefone dos médicos', '21 9 9080-7060 Dr Júlio do hospital Rocha Faria', '2006-06-06 17:21:00','2'),
('Contatos de emergência', '21 9 9050-4030 Marta vizinha (pode ligar a cobrar)', '2007-07-07 18:14:00','4'),
('Hospitais próximos', 'Rocha Faria Av. Cesário de Melo, nº 3215 - Campo Grande, Rio de Janeiro - RJ, 23050-101', '2008-08-08 19:58:00','9'),
('Telefone clínica da família', 'Clínica da Família Maicon Siqueira (21) 3523-8645', '2009-09-09 20:42:00','5'),
('Remédios do Pedro (meu neto)', 'Paracetamol (tomar sempre que ficar com dor de cabeça), remédio para tosse Tal Tal Tal', '2010-10-10 21:34:00','8');

-- ###########################################################################################

-- Criar tabela (Feito por: GABRIELLY)
CREATE TABLE perguntas (
    pergunta_id INT PRIMARY KEY AUTO_INCREMENT NOT NULL, 
    pergunta_pergunta VARCHAR(255) NOT NULL
);

-- Inserir dados na tabela (Feito por: GABRIELLY)
INSERT INTO perguntas 
(pergunta_pergunta) 
VALUES
('Qual seu peso?'),
('Qual sua altura?'),
('Qual seu tipo sanguineo?');

-- ###########################################################################################

-- Criar tabela (Feito por: MATHEUS)
CREATE TABLE comunicados (
    comunicado_id INT PRIMARY KEY AUTO_INCREMENT NOT NULL,
    comunicado_genero ENUM('Feminino', 'Masculino', 'Outros') NOT NULL,
    comunicado_informacao VARCHAR(255) NOT NULL,
    comunicado_feedback VARCHAR(255) NOT NULL,
    comunicado_link VARCHAR(255) NOT NULL
);

-- Inserir dados na tabela (Feito por: MATHEUS)
INSERT INTO comunicados 
(comunicado_genero, comunicado_informacao, comunicado_feedback, comunicado_link)
VALUES
('Feminino','você sabe fazer o auto exame?','beleza!é isso aí, mantenha a saúde em dia!','https://www.inca.gov.br/noticias/confira-recomendacoes-do-ministerio-da-saude-para-o-rastreamento-do-cancer-de-mama'),
('Feminino','Gostaria de fazer mais sobre o câncer de mama','Tudo bem! quem sabe no futuro!?','https://www.gov.br/inca/pt-br/assuntos/gestor-e-profissional-de-saude/controle-do-cancer-de-mama/dados-e-numeros/mamografias-no-sus'),
('Feminino','Seu preventivo está em dia','é isso aí, mandou bem!','https://www.gov.br/saude/pt-br/assuntos/noticias/2022/setembro/cancer-do-colo-do-utero-exame-para-deteccao-e-oferecido-no-sus'),
('Masculino','Quer saber mais sobre o exame de próstata?','Tudo bem quem sabe no futuro!?','https://www.gov.br/saude/pt-br/assuntos/saude-de-a-a-z/c/cancer-de-prostata'),
('Masculino','já sabe oque é hipertensão?','show! Mostrou que está por dentro do assunto.','https://www.gov.br/saude/pt-br/assuntos/saude-de-a-a-z/h/hipertensao'),
('Masculino','Sabe como evitar diabetes','uhuuul, você é top!','https://www.gov.br/saude/pt-br/assuntos/saude-de-a-a-z/d/diabetes');

-- ###########################################################################################

-- Criar tabela (Feito por: ORLANDO)
CREATE TABLE sobre (
	sobre_id INT PRIMARY KEY AUTO_INCREMENT NOT NULL,
	sobre_titulo VARCHAR(255) NOT NULL,
	sobre_descricao VARCHAR(255) NOT NULL
);

-- Inserir dados na tabela (Feito por: ORLANDO)
INSERT INTO sobre 
(sobre_titulo, sobre_descricao) 
VALUES 
('Titulo 1','Descrição 1'),
('Titulo 2','Descrição 2'),
('Titulo 3','Descrição 3'),
('Titulo 4','Descrição 4');

-- ###########################################################################################

-- Criar tabela (Feito por: ORLANDO)
CREATE TABLE funcionalidades (
	funcionalidade_id INT PRIMARY KEY AUTO_INCREMENT NOT NULL,
	funcionalidade_titulo VARCHAR(255) NOT NULL,
	funcionalidade_descricao VARCHAR(255) NOT NULL
);

-- Inserir dados na tabela (Feito por: ORLANDO)
INSERT INTO funcionalidades 
(funcionalidade_titulo, funcionalidade_descricao) 
VALUES 
('Cadastrar notas','Com a nossa aplicação você pode cadastrar quantas notas quiser.'),
('Visualizar','Todas as suas notas ficam registradas e podem ser lidas a qualquer momento!'),
('Editar','Precisa editar alguma nota? Isso também é possível!'),
('Remover','Não precisa mais da nota... sem problemas no Caderno de Saúde você pode apagar um nota sempre que precisar.');

