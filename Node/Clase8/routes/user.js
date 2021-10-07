const express = require("express");
const router = express.Router();

router.get("/", (req, res, next) => {
  res.send({ success: true, users: users });
});

router.post("/", (req, res, next) => {
  const newUser = req.body;
  if (newUser.id && newUser.id.name && newUser.age) {
    users.push(newUser);
    res.send({ success: true, user: newUser });
  } else {
    res.send({ success: false, error: "No se han enviado todos los datos" });
  }
});

router.put("/:id", (req, res, next) => {
  const idUser = parseInt(req.params.id, 10);
  const newName = req.body.name;
  const newAge = req.body.age;

  const userIndex = users.findIndex((i) => i.id === idUser);

  if (userIndex >= 0) {
    users[userIndex].name = newName;
    users[userIndex].age = newAge;

    return res.send({ success: true, user: users[userIndex] });
  } else {
    return res.send({ success: false, message: "No se encontró el usuario" });
  }
});

module.exports = router;

const users = [
  {
    id: 1,
    name: "Juan Perez",
    age: 30,
  },
  {
    id: 2,
    name: "Matias Gonzalez",
    age: 27,
  },
  {
    id: 3,
    name: "Pedro Corso",
    age: 23,
  },
  {
    id: 4,
    name: "Pablo Ventura",
    age: 33,
  },
];
