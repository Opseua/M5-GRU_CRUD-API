const express = require("express");
const app = express();
const mysql = require('mysql2');
const conf = require('dotenv').config().parsed;
const bodyParser = require('body-parser').json();

const conn = mysql.createPool({
    host: conf.HOSTNAME,
    user: conf.USERNAME,
    database: conf.DATABASE,
    password: conf.PASSWORD,
    port: conf.HOSTPORT
  }).promise();



  
app.listen(8082, function(){
    console.log("servidor rodando na porta url https://localhost:8082");
});