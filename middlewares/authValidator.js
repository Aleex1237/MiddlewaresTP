const { check } = require('express-validator');

const register = [
  check('name')
    .notEmpty()
    .withMessage('Debe ingresar su nombre')
    .bail()
    .isLength({
      min: 3,
      max: 30
    })
    .withMessage('El nombre debe tener un mínimo de 3 caracteres'),

  check('email')
    .notEmpty()
    .withMessage('Debe ingresar su email')
    .bail()
    .isEmail()
    .withMessage('Debe ser un email valido!'),

  check('password')
    .notEmpty()
    .withMessage('Debe ingresar una contraseña')
    .bail()
    .isLength({ min: 8, max: 12 })
    .withMessage('La contraseña debe tener entre 8 y 12 caracteres')
    .bail()
];

module.exports = { register };
