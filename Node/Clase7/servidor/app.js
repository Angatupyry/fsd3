const express = require("express");
const fetch = require("node-fetch");
const cors = require("cors");

const app = express();

// Solo en desarrollo
app.use(cors());

const PORT = process.env.PORT || 8080;

app.get("/", function (req, res) {
  return res.send("Hola Mundo");
});

app.get("/ping", function (req, res) {
  // los query params llegan cuando invocan la ruta asi /ping?name=Juan&lastName=Perez
  const fullName = req.query.name + " " + req.query.lastName;

  return res.send("pong, fullName is " + fullName);
});

app.get("/user/:userId", async function (req, res) {
  const userId = req.params.userId;

  const fetchResponse = await fetch(`https://api.github.com/users/${userId}`);
  const response = await fetchResponse.json();

  // res.send("Llamaron con userId: " + JSON.stringify(response));
  return res.send({ sucess: true, user: response });
});

app.get("/repositorios/:userId", async function (req, res) {
  try {
    const userId = req.params.userId;

    const fetchResponse = await fetch(`https://api.github.com/users/${userId}`);
    const user = await fetchResponse.json();

    console.log("Respuesta user: ", user);

    const reposUrl = user.repos_url;

    if (user.public_repos === 0) {
      res.send({ sucess: false, repositorios: [] });
      return;
    }

    const fetchRepos = await fetch(reposUrl);
    const repos = await fetchRepos.json();

    const repoNames = [];

    repos.forEach((repo) => {
      console.log(repo.name);
      repoNames.push(repo.name);
    });

    return res.send({ sucess: true, repositorios: repoNames });
  } catch (exception) {
    return res.send({
      sucess: false,
      mensaje: "Ocurrió un error",
      error: exception,
    });
  }
});

app.listen(PORT, function () {
  console.log("El servidor quedo corriendo en el puerto " + PORT);
});
