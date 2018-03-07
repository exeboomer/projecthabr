module.exports = function (app, db) {

  app.get('/register', (req, res) => {
    res.render('register.ejs');
  });

  app.post('/register', (req, res) => {
    console.log(req.body);
    res.send('Добро пожаловать в регистрацию');
  });
};
