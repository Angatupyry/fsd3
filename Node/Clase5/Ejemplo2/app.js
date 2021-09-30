const express = require("express");

const app = express();
const PORT = 8080;

app.use((req, res, next) => {
  console.log("Soy un middleware");
  next();
});

app.get("/users", (req, res) => {
  res.send("Hola");
});

app.listen(PORT, () => console.log(`Emitiendo en... localhost:${PORT}`));
