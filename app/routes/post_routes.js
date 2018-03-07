module.exports = function (app, db) {

  app.get('/post/:id', (req, res) => {
    var id = req.params.id;
    res.render('post.ejs', { id });
  });

  app.get('/post/:id/edit', (req, res) => {
    var id = req.params.id;
    res.render('edit.ejs', { id });
  });

  app.post('/post/:id', (req, res) => {
    console.log(req.body);
    var id = req.params.id;
    res.send('редактируем пост ' + id);
  });

  app.get('/post/:id/delete', (req, res) => {
    var id = req.params.id;
    res.render('delete.ejs', { id });
  });
};
