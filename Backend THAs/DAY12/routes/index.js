var express = require('express');
//const register = require('../controller/register');
var router = express.Router();
var registerInitialCheck = require("../middlewares/registerChecks");
var register=require("../controller/register")
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post('/register',registerInitialCheck,register);
module.exports = router;