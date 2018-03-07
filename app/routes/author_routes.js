module.exports = function (app, db) {

  app.get('/author/:id', (req, res) => {
    var id = req.params.id;
    res.render('author.ejs', { id });
  });
};
