const express = require("express");
const { listarUsuarios } = require("./user");
const app = express();
const PORT = 8080;

app.use((req, res, next) => {
  console.log("Soy un middleware");
  next();
});

app.get("/users", async (req, res) => {
  const resultUsers = await listarUsuarios();
  res.send(resultUsers);
});

app.listen(PORT, () => console.log(`Emitiendo en... localhost:${PORT}`));
