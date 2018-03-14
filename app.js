const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const {sequelize} = require('./models');
const port = 8000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

require('./app/routes')(app, {});


sequelize.sync()
  .then(() => {
    app.listen(port)
    console.log(`сервер работает на ` + port + ` порту`)
  });
