module.exports = function (app, db) {

  app.get('/auth', (req, res) => {
    res.render('auth.ejs');
  });

  app.post('/auth', (req, res) => {
    console.log(req.body);
    res.send('Авторизуйтесь');
  });
};
