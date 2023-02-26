
// Modulos necessarios
const mysql = require('mysql2');
const conf = require('dotenv').config().parsed;

const conn = mysql.createPool({
  host: "eyw6324oty5fsovx.cbetxkdyhwsb.us-east-1.rds.amazonaws.com",
  user: "ccsoc33936pri06k",
  password: "t7e8zbtnprkhbx5a",
  database: "a8lzgywbc4gzr889",
  port: "3306"
}).promise();

// Exporta o módulo de conexão com o MySQL.
module.exports = conn;
