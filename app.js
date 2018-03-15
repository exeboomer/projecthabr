const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const {sequelize} = require('./models');
const password = require('password');
const flash = require('connect-flash');
const session = require('express-session');
const port = 8000;


app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(session({ cookie: { maxAge: 60000 },
                  secret: 'woot',
                  resave: false,
                  saveUninitialized: false}));

app.use(flash());

app.use((req, res, next) => {
  res.locals.success_msg = req.flash('success')
  console.log('SU!!!')
  res.locals.error_msg = req.flash('error')
  console.log('noSU!!!')
  next()
})

require('./app/routes')(app, {});

sequelize.sync()
  .then(() => {
    app.listen(port)
    console.log(`сервер работает на ` + port + ` порту`)

  });
