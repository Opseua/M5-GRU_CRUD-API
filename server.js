const express = require('express');
const app = express();
const conf = require('dotenv').config().parsed;
const port = conf.HTTPPORT || 3000;
const appRouter = require('./src/control/routes');

app.use(appRouter);

app.listen(port, () => {
  console.log(`Executando servidor em http://localhost:${port}`);
});
