const express = require("express");
const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  res.send("hello from simple server :)");
  console.log(req.url);
});

app.get("/product", (req, res) => {
  console.log(req.query);
  res.send("Post request accepted");
});

//b is optional
app.get("/ab?cd", (req, res) => {
  res.send("abcd");
});

//b can be any number of times
app.get("/ab+cd", (req, res) => {
  console.log("+");
});

//anything between ab and cd
app.get("/ab*cd", (req, res) => {
  console.log("*");
});

//cd is optional now
app.get("/ab(cd)?e", (req, res) => {
  console.log("cd is optional");
});

app.get(/a/, (req, res) => {
  console.log("anythign after a");
});

app.get(/.*fly$/, (req, res) => {
  console.log("anything ending with fly");
});

app.get("/users/:userId/books/:bookId", (req, res) => {
  res.send(`${req.params.userId} ${req.params.bookId}`);
});

app.listen(5050);

