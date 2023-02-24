/**
 * control/routes.js
 * Arquivo de rotas do aplicativo.
 */

// Carrega o módulo "express.js".
const express = require('express');

// Cria um roteamento "Express".
const router = express.Router();

// Extrai os dados do cabeçalho da requisição usando "JSON".
const bodyParser = require('body-parser').json();

// Carrega o controller de 'things'.

// Rota raiz emite mensagem de erro.
router.get("/", (req, res) => {
    res.json({
        status: "error",
        message: "Bad request"
    });
});


// Carrega o controller de 'users'.
const comunicadosControl = require('./comunicadosControl');

// Rotas para as requisições de 'users'.
router.get("/comunicados/", comunicadosControl.getAll);
router.get("/comunicados/:id", comunicadosControl.getOne);
router.post("/comunicados/", bodyParser, comunicadosControl.post);
router.put("/comunicados/:id", bodyParser,comunicadosControl.put);
router.delete("/comunicados/:id", comunicadosControl.delete);

// Exporta o módulo.
module.exports = router;
