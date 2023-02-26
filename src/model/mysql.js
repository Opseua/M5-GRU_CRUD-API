// Modulos necessários
const mysql = require('mysql2');

const conf = require('dotenv').config().parsed;

const conn = mysql.createPool({
  host: conf.HOSTNAME,
  user: conf.USERNAME,
  password: conf.PASSWORD,
  database: conf.DATABASE,
  port: conf.HOSTPORT
}).promise();

// Exporta o módulo de conexão com o MySQL.
module.exports = conn;