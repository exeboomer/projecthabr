const express = require('express')
const router = express.Router()
const Joi = require('joi');

// validation schema
const userSchema = Joi.object().keys({
  email: Joi.string().email().required(),
  username: Joi.string().required(),
  password: Joi.string().required().regex(/^[a-zA-Z0-9]{3,30}$/).required(),
  confirmationPassword: Joi.any().valid(Joi.ref('password')).required(),
})

module.exports = function(app, db) {
  app.get('/register', (req, res) => {
        res.render('./register/register.ejs');
      })

  app.post('/register', (req, res) => {
    const result = Joi.validate(req.body, userSchema)
    console.log('result', result)
    if (result.error) {
      req.flash('error', 'Вы ввели разные пароли, попробуйте еще раз');
      res.redirect('/register');
      return;
    }
  });
};
