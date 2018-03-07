module.exports = function (app, db) {
  app.get('/post/new', (req, res) => {
    res.render('new.ejs');
  });

  app.post('/post/new', (req, res) => {
    console.log(req.body);
    res.send('создаем новый пост ');
  });
};
