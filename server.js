const express = require('express')
const app = express()
const conf = require('dotenv').config().parsed;
// console.log(conf);

// Importa a biblioteca "MySQL".
const mysql = require('mysql2');

// Faz a conexão com o servidor.
const conn = mysql.createPool({
  host: conf.HOSTNAME,
  user: conf.USERNAME,
  database: conf.DATABASE,
  password: conf.PASSWORD,
  port: conf.HOSTPORT
}).promise();

const port = conf.HTTPPORT;

// Objeto que será executado quando houver uma requisição.
const banco_de_dados = {

  // ESSA PARTE PEGA TODO A INFORMAÇÃO
  getAll: async (req, res) => {
    try {
      // Executa query que obtém todos os registros.
      const sql = "SELECT *, DATE_FORMAT(tdate, '%d/%m/%Y às %H:%i') AS tdatebr FROM banco_de_dados WHERE tstatus = 'on' ORDER BY tdate DESC";
      const [rows] = await conn.query(sql);
      // View dos dados.
      res.json({ data: rows });
    }
    catch (error) {
      // Exibe mensagem de erro.
      res.json({ status: "error", message: error });
    }
  },

  // PEGA SOMENTE UMA INFORMAÇÃO EXPECÍFICA (com o ID por exemplo)
  getOne: async (req, res) => {
    try {
      // Id da requisição.
      const id = req.params.id;
      // Executa query que obtem um registro único.
      const sql = "SELECT *, DATE_FORMAT(tdate, '%d/%m/%Y às %H:%i') AS tdatebr FROM banco_de_dados WHERE tid = ? AND tstatus = 'on' ORDER BY tdate DESC";
      const [rows] = await conn.query(sql, [id]);
      // View dos dados.
      res.json({ coisa: rows });
    } catch (error) {
      // Exibe mensagem de erro.
      res.json({ status: "error", message: error });
    }
  },

  // ESSA PARTE INSERE/CADASTRAR DADOS NO BANCO DE DADOS
  post: async (req, res) => {
    try {
      // Extrai os campos do req.body.
      const { user, name, photo, description, location, options } = req.body;
      //////////////////////////////////////////////
      // A validação dos dados será feita aqui!!! //
      //////////////////////////////////////////////
      // Executa query de inserção do registro. Modifique aqui
      const sql = "INSERT INTO banco_de_dados (nota_titulo, nota_informacao, notas_ultima_edicao) VALUES (?, ?, ?)";
      const [rows] = await conn.query(sql, [nota_titulo, nota_informacao, notas_ultima_edicao, usuario_id]);
      // View do feedback.
      res.json({ id: rows.insertId, status: "success" });
    } catch (error) {
      // Exibe mensagem de erro.
      res.json({ status: "error", message: error });
    }
  },

  // ESSA PARTE EDITA UMA INFORMAÇÃO QUE JÁ EXISTE NO BANCO DE DADOS
  put: async (req, res) => {
    try {
      // Id da requisição.
      const id = req.params.id;
      // Extrai os campos do req.body.
      const { nota_titulo, nota_informacao, notas_ultima_edicao } = req.body;
      //////////////////////////////////////////////
      // A validação dos dados será feita aqui!!! //
      //////////////////////////////////////////////
      // Executa query de atualização do registro.
      const sql = "UPDATE banco_de_dados SET nota_titulo = ?, nota_informacao = ?, notas_ultima_edicao = ? WHERE tid = ? AND tstatus = 'on'";
      const [rows] = await conn.query(sql, [nota_titulo, nota_informacao, notas_ultima_edicao]);
      // View do feedback.
      res.json({ id: id, status: "success" });
    } catch (error) {
      // Exibe mensagem de erro.
      res.json({ status: "error", message: error });
    }
  },

  // ESSA PARTE APAGA ALGO DO BANCO DE DADOS (utilizar em caso)
  delete: async (req, res) => {
    try {
      // Id da requisição
      const id = req.params.id;
      //////////////////////////////////////////////
      // A confirmação da ação será feita aqui!!! //
      //////////////////////////////////////////////
      // Executa query de atualização do status do registro.
      const sql = "UPDATE banco_de_dados SET tstatus = 'del' WHERE tid = ?";
      const [rows] = await conn.query(sql, [id]);
      // View do feedback.
      res.json({ id: id, status: "success" });
    } catch (error) {
      // Exibe mensagem de erro.
      res.json({ status: "error", message: error });
    }
  }
}

// Objeto que trata requisições para o 'user'.
const user = {
  getOne: async (req, res) => { },
  post: async (req, res) => { },
  put: async (req, res) => { },
  delete: async (req, res) => { }
}

// Recebe os dados do body HTTP e valida em JSON → POST e PUT.
const bodyParser = require('body-parser').json();

// Rota para GET → getAll() → Recebe, por exemplo, todos os registros.
app.get('/', banco_de_dados.getAll);

// Rota para GET → get(id) → Recebe apenas o registro identificado.
app.get('/:id', banco_de_dados.getOne);

// Rota para DELETE.
app.delete('/:id', banco_de_dados.delete);

// Rota para POST → bodyParser (no hook) é usado para garantir a chegada de um JSON.
app.post('/', bodyParser, banco_de_dados.post);

// Rota para PUT → bodyParser (no hook) é usado para garantir a chegada de um JSON.
app.put('/:id', bodyParser, banco_de_dados.put);

// Rotas para o ususário
app.get('/user/:id', user.getOne);
app.put('/user/:id', user.put);
app.delete('/user/:id', user.delete);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})