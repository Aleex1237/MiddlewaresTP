var express = require('express');
var router = express.Router();

const authController = require('../controllers/auth');
const authValidator = require('../middlewares/authValidator');

/* GET home page. */
router.get('/register', authController.registerView);

router.post('/register', authValidator.register, authController.register);

module.exports = router;
