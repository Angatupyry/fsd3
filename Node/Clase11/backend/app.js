const express = require("express");
const path = require("path");
const cors = require("cors");

const app = express();
const PORT = 3000;

app.use(express.static(path.join(__dirname, "public")));

app.use(express.json());
app.use(
  express.urlencoded({
    extended: true,
  })
);

app.use(cors());

app.get("/tareas", (req, res) => {
  res.send({
    tareas: listaDeTareas,
  });
});

app.post("/tareas", (req, res) => {
  const titulo = req.body.titulo;
  const prioridad = req.body.prioridad;

  const nuevaTarea = {
    titulo: titulo,
    prioridad,
    autor: req.user.name,
  };

  listaDeTareas.push(nuevaTarea);

  res.send({
    tareas: listaDeTareas,
    tareaNueva: nuevaTarea,
  });
});

app.listen(PORT, function () {
  console.log(`El servidor quedo corriendo en el puerto ${PORT}`);
});

const listaDeTareas = [
  {
    titulo: "Prueba 1",
    prioridad: "prioridad-baja",
    autor: "Sistema",
  },
];
