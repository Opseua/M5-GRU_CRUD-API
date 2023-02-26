
// Modulos necessarios
const mysql = require('mysql2');

const conn = mysql.createPool({
  host: process.env.DB_HOSTNAME,
  user: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE,
  port: process.env.DB_HOSTPORT
}).promise();




// Exporta o módulo de conexão com o MySQL.
module.exports = conn;

