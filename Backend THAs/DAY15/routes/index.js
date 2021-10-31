var express = require("express");
var router = express.Router();
let registerChecks = require("../middlewares/registerChecks");
let { register, registerSuperAdmin } = require("../controllers/register");
let check = require("../middlewares/checkSuperAdmin");

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index", { title: "Express" });
});

router.get("/home", (req, res) => {
  res.send("<h1>HOME SWEET HOME</h1>");
});

router.post("/register", registerChecks, register);

router.post("/register-super-admin", registerChecks, registerSuperAdmin);

router.get("/super", check);
module.exports = router;
