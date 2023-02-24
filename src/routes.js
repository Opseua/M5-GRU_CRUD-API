const express = require('express');
const router = express.Router();

const bodyParser = require('body-parser').json();

const PerguntasController = require('./controller/PerguntasController.js')

router.get("/perguntas", PerguntasController.getAll);
router.get("/perguntas/:id", PerguntasController.getOne);
router.post("/perguntas", bodyParser, PerguntasController.post);
router.put("/perguntas/:id", bodyParser, PerguntasController.put);
router.delete("/perguntas/:id", PerguntasController.delete);

module.exports = router;