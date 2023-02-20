const express = require('express')
const app = express()
const conf = require('dotenv').config().parsed;
const bodyParser = require('body-parser').json();
const mysql = require('mysql2');

// Fazer a conexão com servidor
const conn = mysql.createPool({
  host: conf.HOSTNAME,
  user: conf.USERNAME,
  database: conf.DATABASE,
  password: conf.PASSWORD,
  port: conf.HOSTPORT
}).promise();

// Definir porta
const port = conf.HTTPPORT;

// Objeto que será executado quando houver uma requisição.
const api_rest = {
  post: async (req, res) => {
    const parametros = req.params[0];
    const body = req.body;

    // Separar parametros por '='
    if ((parametros.match(/=/)) && ((parametros.match(/GET/)) || (parametros.match(/POST/)) || (parametros.match(/PUT/)) || (parametros.match(/DELETE/)))) {
      var inf = parametros.split("=");
      inf[2] = (inf.length < 3) ? "" : inf[2];
      inf[2] = (inf.length > 2) ? inf[2] : inf[2];
    }
    else {
      var inf = ["", "", ""];
    }

    // ########## INICIO ##########

    // ######################## Solicitação 'GET' ########################
    if ((inf[0] == "GET") && !((inf[1] == ""))) {
      try {
        // Definir o nome do atributo a ser buscado (removendo o último caractere [por causa do plural])
        const buscar = inf[1].substring(0, inf[1].length - 1).concat('_id');
        // Requisição MySQL (obter TUDO)
        var sql = (inf[2] == "") ? `SELECT * FROM ${inf[1]}` : sql;
        // Requisição MySQL (obter somente do ID)
        var sql = !(inf[2] == "") ? `SELECT * FROM ${inf[1]} where ${buscar} = ${inf[2]}` : sql;
        const [rows] = await conn.query(sql);

        // Visualizar os dados JSON
        res.json({
          "status": "ok",
          "parametros": parametros,
          "req": req.method,
          "entidade": inf[1],
          "id": inf[2],
          "data": rows
        })
      }
      catch (error) {
        // Exibir mensagem de erro
        res.json({
          "status": "error",
          "parametros": parametros,
          "req": req.method,
          "entidade": inf[1],
          "id": inf[2],
          "data": error
        })
      }
    }

    else {

      // ######################## Solicitação 'POST' ########################
      if ((inf[0] == "POST") && !((inf[1] == ""))) {
        try {
          // Requisição MySQL (inserir dados na tabela)
          const { usuario_nome, usuario_genero, usuario_nascimento, usuario_resposta_1, usuario_resposta_2, usuario_resposta_3, usuario_imc } = req.body;
          var sql = `INSERT INTO ${inf[1]} (usuario_nome, usuario_genero, usuario_nascimento, usuario_resposta_1, usuario_resposta_2, usuario_resposta_3, usuario_imc) VALUES (?, ?, ?, ?, ?, ?, ?)`
          const [rows] = await conn.query(sql, [usuario_nome, usuario_genero, usuario_nascimento, usuario_resposta_1, usuario_resposta_2, usuario_resposta_3, usuario_imc]);

          // Visualizar os dados JSON
          res.json({
            "status": "ok",
            "parametros": parametros,
            "req": req.method,
            "entidade": inf[1],
            "id_gerado": rows.insertId
          })
        }
        catch (error) {
          // Exibir mensagem de erro
          res.json({
            "status": "error",
            "parametros": parametros,
            "req": req.method,
            "entidade": inf[1],
            "id": inf[2],
            "data": error
          })
        }
      }

      else {

        // ######################## Solicitação 'PUT' ########################
        if ((inf[0] == "PUT") && !((inf[1] == "")) && !((inf[2] == ""))) {
          try {
            // Definir o nome do atributo a ser buscado (removendo o último caractere [por causa do plural])
            const buscar = inf[1].substring(0, inf[1].length - 1).concat('_id');
            // Requisição MySQL
            const { usuario_nome, usuario_genero, usuario_nascimento, usuario_resposta_1, usuario_resposta_2, usuario_resposta_3, usuario_imc } = req.body;
            const sql = `UPDATE ${inf[1]} SET usuario_nome = ?, usuario_genero = ?, usuario_nascimento = ?, usuario_resposta_1 = ?, usuario_resposta_2 = ?, usuario_resposta_3 = ?, usuario_imc = ? WHERE ${buscar} = '${inf[2]}'`;
            const [rows] = await conn.query(sql, [usuario_nome, usuario_genero, usuario_nascimento, usuario_resposta_1, usuario_resposta_2, usuario_resposta_3, usuario_imc]);

            // Visualizar os dados JSON
            res.json({
              "status": "ok",
              "parametros": parametros,
              "req": req.method,
              "entidade": inf[1],
              "id": inf[2],
              "data": rows
            })
          }
          catch (error) {
            // Exibir mensagem de erro
            res.json({
              "status": "error",
              "parametros": parametros,
              "req": req.method,
              "entidade": inf[1],
              "id": inf[2],
              "data": error
            })
          }
        }

        else {

          // ######################## Solicitação 'DELETE' ########################
          if ((inf[0] == "DELETE") && !((inf[1] == "")) && !((inf[2] == ""))) {
            try {
              // Definir o nome do atributo a ser buscado (removendo o último caractere [por causa do plural])
              const buscar = inf[1].substring(0, inf[1].length - 1).concat('_id');
              // Requisição MySQL
              const sql = `DELETE FROM ${inf[1]} WHERE ${buscar} = ${inf[2]}`;
              const [rows] = await conn.query(sql);

              // Visualizar os dados JSON
              res.json({
                "status": "ok",
                "parametros": parametros,
                "req": req.method,
                "entidade": inf[1],
                "id": inf[2],
                "data": rows
              })
            }
            catch (error) {
              // Exibir mensagem de erro
              res.json({
                "status": "error",
                "parametros": parametros,
                "req": req.method,
                "entidade": inf[1],
                "id": inf[2],
                "data": error
              })
            }
          }

          // ######################## Solicitação VAZIA ou ERRADA ########################
          else {
            res.json({
              "status": "error",
              "parametros": parametros,
              "req": req.method,
              "aviso": "Solicitação incorreta! Exemplo: 'localhost:3000/GET=CARROS': para obter TODOS os dados da entidade 'CARROS'   |   'localhost:3000/GET=CARROS=1' para obter SOMENTE os dados do ID 1 da entidade 'CARROS'   |   'localhost:3000/POST=CARROS' para inserir dados na entidade 'CARROS'   |   'localhost:3000/PUT=CARROS=1' para editar os dados do ID 1 da entidade 'CARROS'"
            })
          }

        }
      }
    }
  },
  // ########## FIM ##########

  getAll: async (req, res) => {
    res.json({
      "status": "error",
      "parametro": req.params[0],
      "req": req.method,
      "aviso": "Usar o metodo 'POST'! Exemplo: 'localhost:3000/GET=CARROS': para obter TODOS os dados da entidade 'CARROS'   |   'localhost:3000/GET=CARROS=1' para obter SOMENTE os dados do ID 1 da entidade 'CARROS'   |   'localhost:3000/POST=CARROS' para inserir dados na entidade 'CARROS'   |   'localhost:3000/PUT=CARROS=1' para editar os dados do ID 1 da entidade 'CARROS'"
    });
  },

  put: async (req, res) => {
    res.json({
      "status": "error",
      "parametro": req.params[0],
      "req": req.method,
      "aviso": "Usar o metodo 'POST'! Exemplo: 'localhost:3000/GET=CARROS': para obter TODOS os dados da entidade 'CARROS'   |   'localhost:3000/GET=CARROS=1' para obter SOMENTE os dados do ID 1 da entidade 'CARROS'   |   'localhost:3000/POST=CARROS' para inserir dados na entidade 'CARROS'   |   'localhost:3000/PUT=CARROS=1' para editar os dados do ID 1 da entidade 'CARROS'"
    });
  },

  delete: async (req, res) => {
    res.json({
      "status": "error",
      "parametro": req.params[0],
      "req": req.method,
      "aviso": "Usar o metodo 'POST'! Exemplo: 'localhost:3000/GET=CARROS': para obter TODOS os dados da entidade 'CARROS'   |   'localhost:3000/GET=CARROS=1' para obter SOMENTE os dados do ID 1 da entidade 'CARROS'   |   'localhost:3000/POST=CARROS' para inserir dados na entidade 'CARROS'   |   'localhost:3000/PUT=CARROS=1' para editar os dados do ID 1 da entidade 'CARROS'"
    });
  }

}

// Objeto que trata requisições para o 'user'.
const user = {
  getOne: async (req, res) => { },
  post: async (req, res) => { },
  put: async (req, res) => { },
  delete: async (req, res) => { }
}

// Rota para GET → getAll() → Recebe, por exemplo, todos os registros.
app.get('/*', api_rest.getAll);

// Rota para POST → bodyParser (no hook) é usado para garantir a chegada de um JSON.
app.post('/*', bodyParser, api_rest.post);

// Rota para PUT → bodyParser (no hook) é usado para garantir a chegada de um JSON.
app.put('/*', bodyParser, api_rest.put);

// Rota para DELETE.
app.delete('/*', api_rest.delete);

app.listen(port, () => {
  console.log(`Rodando na porta: ${port}`)
})