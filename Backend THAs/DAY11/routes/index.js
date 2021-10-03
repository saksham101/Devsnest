var express = require('express');
var router = express.Router();
var registerInitialCheck = require('../middlewares/registerChecks');
var register  = require('../controllers/register');
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
/**
 * @requires {email, password, confirmPassword} - req.body
 * @description
 * Security, performance, and edge cases
 * email validation
 * password validation
 * password == confirmPassword
 * JS/SQL
 * check if email already exists
 * password hashing
 * email lowercasing
 * save
 */
router.post('/register', registerInitialCheck, register )
module.exports = router;
