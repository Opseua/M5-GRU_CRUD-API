
// Modulos necessarios
const mysql = require('mysql2');
const conf = require('dotenv').config().parsed;

const conn = mysql.createPool({
  host: "localhost",
  user: "root",
  password:"",
  database: "banco_de_dados",
  port: "3306"
}).promise();

// Exporta o módulo de conexão com o MySQL.
module.exports = conn;
