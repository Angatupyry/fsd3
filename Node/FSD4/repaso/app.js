const express = require("express");
const app = express();
const PORT = 3000;

const { coins } = require("./coin");

app.use(express.json());
app.use(
  express.urlencoded({
    extended: true,
  })
);

app.get("/", coins);

app.listen(PORT, () => {
  console.log(`Escuchando en el puerto ${PORT}`);
});
