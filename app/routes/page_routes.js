module.exports = function (app, db) {

  app.get('/', (req, res) => {
    res.render('page.ejs');
  });

  app.get('/page/:page', function (req, res) {
    var page = req.params.page;
    res.render('pagepage.ejs', { page });
  });
};
