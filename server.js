const express = require("express");
const dotenv = require("dotenv");
const nodemon = require("nodemon");

dotenv.config();

const conf = dotenv.config().parsed;
const routes = require("./src/routes.js");
const server = express();
const PORT = conf.PORT || 3000;

server.use(routes);

server.get("/", (req, res) => {
  res.send("Bem-vindo ao Caderno de Saúde");
});

server.listen(PORT, () => {
  console.log(`Servidor rodando em: http://localhost:${PORT}`);
});

