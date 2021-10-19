const router = require("express").Router();

router.get("/", (req, res) => {
  res.send({
    tareas: listaDeTareas,
  });
});

router.post("/", (req, res) => {
  const titulo = req.body.titulo;
  const prioridad = req.body.prioridad;

  const nuevaTarea = {
    titulo: titulo,
    prioridad,
    autor: "Usuario",
  };

  listaDeTareas.push(nuevaTarea);

  res.send({
    tareas: listaDeTareas,
    tareaNueva: nuevaTarea,
  });
});

const listaDeTareas = [
  {
    titulo: "Prueba 1",
    prioridad: "prioridad-baja",
    autor: "Sistema",
  },
];

module.exports = router;
