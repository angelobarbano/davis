const express = require("express");
const app = express();
const fs = require("fs");
const port = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/static/index.html");
});

app.listen(port, () => console.log("Yea im listening"));
