const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 8000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.get('/', (req, res) => {
  res.render('index.ejs');
});

app.get('/register', (req, res) => {
  res.render('register.ejs');
});

app.get('/auth', (req, res) => {
  res.render('auth.ejs');
});

app.get('/page', (req, res) => {
  res.render('page.ejs');
});

app.get('/post', (req, res) => {
  res.render('post.ejs');
});

app.get('/author', (req, res) => {
  res.render('author.ejs');
});

app.listen(port, () => {
  console.log('работает на порту: ' + port);
});
