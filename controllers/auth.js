const { validationResult } = require('express-validator');

const registerView = async (req, res) => {
  try {
    res.render('form');
  } catch (error) {
    console.log(error);
  }
};

const register = async (req, res) => {
  try {
    const errors = validationResult(req);
    console.log(errors.mapped());
    if (errors.isEmpty()) {
      res.send('registrado');
    } else {
      res.render('form', {
        errors: errors.mapped(),
        old: req.body
      });
    }
  } catch (error) {
    console.log(error);
  }
};

module.exports = { registerView, register };
