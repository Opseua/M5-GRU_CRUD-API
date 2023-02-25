
// Modulos necessarios
const mysql = require('mysql2');
const conf = require('dotenv').config().parsed;

const conn = mysql.createPool({
  host: "sql.freedb.tech",
  database: "freedb_M5-GRU_CRUD-API",
  user: "freedb_Usuario_M5-GRU_CRUD-API",
  password: "AN*57mHa8qXzaS#",
  port: "3306"
}).promise();

// Exporta o módulo de conexão com o MySQL.
module.exports = conn;
