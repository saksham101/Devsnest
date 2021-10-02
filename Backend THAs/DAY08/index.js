
const express = require('express');
const app = express();

app.use(express.json())

const checkadmin = (req, res, next) => {
  console.log("1st middleware");
  if (req.query.role !== "admin") {
    res.status(401).send("Not autorized");
  }
  next();
};

app.use(checkadmin);

app.get("/", (req, res, next) => {
  console.log(req.body);
});

app.post("/product", (req, res) => {
  console.log(req.query);
  res.send("Post request accepted");
});

app.listen(5000);





