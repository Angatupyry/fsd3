const express = require("express");
const cors = require("cors");
const app = express();
const PORT = 3000;

const tareas = require("../backend/routes/tareas");

app.use(express.json());
app.use(
  express.urlencoded({
    extended: true,
  })
);

app.use(cors());

app.use("/tareas", tareas);

app.listen(PORT, () => {
  console.log(`Escuchando en el puerto ${PORT}`);
});
