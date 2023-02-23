DROP DATABASE IF EXISTS banco_de_dados;
CREATE DATABASE banco_de_dados CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci;
USE banco_de_dados;

-- Criar entidade (tabela)
CREATE TABLE usuarios (
	usuario_id INT PRIMARY KEY AUTO_INCREMENT NOT NULL,
	usuario_nome VARCHAR(255) NOT NULL,
	usuario_genero ENUM('F', 'M') NOT NULL,
	usuario_nascimento DATE NOT NULL,
	usuario_peso DECIMAL(3,1) NOT NULL,
	usuario_altura DECIMAL(3,2) NOT NULL,
	usuario_tipo_sanguineo VARCHAR(30) NOT NULL,
	usuario_imc DECIMAL(4,2) NOT NULL,
    usuario_email VARCHAR(255) NOT NULL,
    usuario_senha VARCHAR(255) NOT NULL,
    usuario_reset_pergunta VARCHAR(255) NOT NULL,
    usuario_reset_resposta VARCHAR(255) NOT NULL
);

INSERT INTO usuarios (usuario_nome, usuario_genero, usuario_nascimento, usuario_peso, usuario_altura, usuario_tipo_sanguineo, usuario_imc, usuario_email, usuario_senha, usuario_reset_pergunta, usuario_reset_resposta) 
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



CREATE TABLE notas (
    nota_id INT PRIMARY KEY AUTO_INCREMENT,
    nota_titulo VARCHAR(50),
	nota_informacao VARCHAR(255),
	nota_ultima_edicao DATETIME  ,
    usuario_id INT,
    FOREIGN KEY (usuario_id) REFERENCES usuarios (usuario_id)
);

INSERT INTO notas (nota_titulo, nota_informacao,nota_ultima_edicao,usuario_id)  VALUES 

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
