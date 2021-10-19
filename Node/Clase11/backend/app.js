const express = require("express");
const path = require("path");
const cors = require("cors");

const app = express();
const PORT = 3000;

const tareas = require("../backend/routes/tareas");

app.use(express.static(path.join(__dirname, "public")));

app.use(express.json());
app.use(
  express.urlencoded({
    extended: true,
  })
);

app.use(cors());

app.use("/tareas", tareas);

app.listen(PORT, function () {
  console.log(`El servidor quedo corriendo en el puerto ${PORT}`);
});
