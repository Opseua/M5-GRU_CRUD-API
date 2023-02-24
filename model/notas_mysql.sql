DROP DATABASE IF EXISTS banco_de_dados;
CREATE DATABASE banco_de_dados CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci;
USE banco_de_dados;

-- Criar entidade (tabela)
CREATE TABLE notas (
    nota_id INT PRIMARY KEY      AUTO_INCREMENT NOT NULL,
    nota_titulo VARCHAR(255) NOT NULL,
    nota_informacao VARCHAR(255) NOT NULL,
    notas_ultima_edicao DATE NOT NULL
);

INSERT INTO notas (nota_titulo, nota_informacao, notas_ultima_edicao) VALUES 
( 'Consultas marcadas', '15/02/2023 consulta no Centro do RJ com o Dr Marcelo, para checar a minha coluna', '01/01/2001 12:27'),
( 'Remédios para tomar', 'Tomar o remédio para diabetes nesses horários 12:00, 22:00, 04:00', '02/02/2002 13:12'),
('Próximas vacinas', '01/07/2023 vacina de COVID em Madureira, chegar 8h no local', '03/03/2003 14:09'),
('Dicas de bem estar', 'Beba água. Durma bem. Cultive boas relações sociais. Preserve o autocuidado. Conheça seus limites.', '04/04/2004 15:03'),
('Alimentos saudáveis', 'Arroz, feijão com beterraba, granola, frutas', '05/05/2005 16:09'),
('Telefone dos médicos', '21 9 9080-7060 Dr Júlio do hospital Rocha Faria', '06/06/2006 17:21'),
('Contatos de emergência', '21 9 9050-4030 Marta vizinha (pode ligar a cobrar)', '07/07/2007 18:14'),
('Hospitais próximos', 'Rocha Faria Av. Cesário de Melo, nº 3215 - Campo Grande, Rio de Janeiro - RJ, 23050-101', '08/08/2008 19:58'),
('Telefone clínica da família', 'Clínica da Família Maicon Siqueira (21) 3523-8645', '09/09/2009 20:42'),
('Remédios do Pedro (meu neto)', 'Paracetamol (tomar sempre que ficar com dor de cabeça), remédio para tosse Tal Tal Tal', '10/10/2010 21:34');



