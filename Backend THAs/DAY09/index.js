const express = require("express");
const app = express();
const path = require("path");
console.log(__dirname);

app.set("view engine", "jade");
app.set("views", "views");

app.use(express.json());
app.use(express.static(path.join(__dirname, "public")));
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname,'public','test.json'));
    res.download(path.join(__dirname,'public','test.json'),'hello.json')
    res.render("index", { title: "Express" });
  console.log(Date.now());
  res
    .status(200)
    .cookie("token", "test", {
      expire: new Date(Date.now() + 3600000),
    })
    .cookie("hello", "hello").send("Admin")
    .redirect(301, "/admin");
});

app.get("/admin", (req, res, next) => {
  res.status(200).send("Admin");
});

app.listen(5050, () => {
  console.log("Connected");
});


