const express = require("express");
const path = require("path");
const app = express();
app.use(express.static('public'))

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname + '/index.html'));
});

app.get("/dog", (req, res) => {
  res.sendFile(path.join(__dirname + '/dog.html'));
});

app.get("/about", (req, res) => {
  res.sendFile(path.join(__dirname + '/about.html'));
});

app.get("/cat", (req, res) => {
  res.sendFile(path.join(__dirname + '/cat.html'));
});

app.listen(3000);
console.log("Running at port 3000");