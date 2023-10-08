const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("Express is working");
});

app.get("/usingSendStatus", (req, res) => {
  res.sendStatus(400);
});

app.get("/usingStatus-send", (req, res) => {
  res.status(500).send("Sending status 500");
});

app.listen(3000);

console.log("server.js created");
