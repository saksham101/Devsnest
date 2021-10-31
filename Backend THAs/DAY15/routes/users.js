var express = require("express");
var router = express.Router();
const Pool = require("pg").Pool;

const pool = new Pool({
  user: "postgres",
  host: "localhost",
  database: "postgres",
  password: "12345678",
  port: "5432",
});

/* GET users listing. */
let data;

router.get("/data", function (req, res, next) {
  pool.query('SELECT email FROM "Users"', (err, res) => {
    if (err) {
      throw err;
    } else {
      data = res;
    }
  });
  res.send(data);
});

module.exports = router;
