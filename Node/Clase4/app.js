const express = require("express");

const app = express();

const port = 3000;

app.get("/", (req, res) => {
  res.send("Hola, mundo");
});

app.get("/user", (req, res) => {
  res.send("Usuarios");
});

app.listen(port, () => {
  console.log(`Corriendo en http://localhost:${port} ...`);
});
