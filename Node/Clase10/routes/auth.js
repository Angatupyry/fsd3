const express = require("express");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const router = express.Router();

const { TOKEN_SECRET, verifyToken } = require("../middlewares/jwt-validate");

router.get("/", (req, res) => {
  res.json({ success: true });
});

router.post("/register", async (req, res) => {
  if (req.body.mail && req.body.name && req.body.password) {
    if (/^\S+@\S+\.\S+$/.test(req.body.mail) === false) {
      res
        .status(400)
        .json({ success: false, message: "Formato de mail incorrecto" });
      return;
    }

    const existeUser = usuarios.find((u) => {
      return u.mail === req.body.mail;
    });

    if (existeUser) {
      res.status(400).json({ success: false, message: "Mail repetido" });
      return;
    }

    const salt = await bcrypt.genSalt(10);
    console.log("Salt", salt);
    const password = await bcrypt.hash(req.body.password, salt);

    const newUser = {
      name: req.body.name,
      mail: req.body.mail,
      password: password,
    };

    usuarios.push(newUser);

    return res.json({ success: true, newUser });
  } else {
    return res.status(400).json({
      success: false,
      message: "Faltan datos (requeridos: mail, name, password)",
    });
  }
});

router.post("/login", async (req, res, next) => {
  try {
    const user = usuarios.find((u) => u.mail === req.body.mail);

    if (!user) {
      return res.status(400).json({ error: "Usuario no encontrado" });
    }

    const validPassword = await bcrypt.compare(
      req.body.password,
      user.password
    );

    if (!validPassword) {
      return res.status(400).json({ error: "Contraseña no válida" });
    }

    const token = jwt.sign(
      {
        name: user.name,
        mail: user.mail,
      },
      TOKEN_SECRET
    );

    return res.json({ error: null, data: "Login exitoso", token });
  } catch (error) {
    return next(error);
  }
});

router.get("/usuarios", verifyToken, (req, res) => {
  return res.json({ error: null, usuarios });
});
module.exports = router;

const usuarios = [
  {
    name: "César",
    mail: "crolon@mail.com",
    password: "$2b$10$f/rpZSwm2YX7sQECj/6eduVGa58jRWGifgAfvsJWjlb1.8W3a5gYa",
  },
];
