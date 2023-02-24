// Modulos necessários
const express = require('express');
const conf = require('dotenv').config().parsed;
const app = express();

// Definir a porta caso NÃO exista
const port = conf.HTTPPORT || 3000;

// Importa as listas de rotas
const appRouter = require('./src/control/routes');

// Inicia monitoramento das rotas
app.use(appRouter);

// Executa o servidor HTTP.
app.listen(port, () => {
  console.log(`Executando servidor em http://localhost:${port}`);
});
