const express = require("express");
const fetch = require("node-fetch");

const app = express();

const PORT = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.send("Hola, Mundo");
});

app.get("/ping", (req, res) => {
  const fullName = req.query.name + "" + req.query.lastName;

  return res.send(`Nombre ${fullName}`);
});

app.get("/user/:usuarioId", async (req, res, next) => {
  try {
    const userId = req.params.usuarioId;

    const fetchResponse = await fetch(`https://api.github.com/users/${userId}`);

    const response = await fetchResponse.json();

    return res.send({ success: true, user: response });
  } catch (error) {
    return next(error);
  }
});

app.get("/repositorios/:userId", async (req, res, next) => {
  try {
    const userId = req.params.userId;

    const fetchResponse = await fetch(`https://api.github.com/users/${userId}`);
    const user = await fetchResponse.json();

    const reposUrl = user.repos_url;

    const fetchRepos = await fetch(reposUrl);

    const repos = await fetchRepos.json();

    const repoName = [];

    repos.forEach((r) => {
      repoName.push(r.name);
    });

    return res.send({ success: true, repositorios: repoName });
  } catch (error) {
    return next(error);
  }
});

app.listen(PORT, () => console.log(`Escuchando en el puerto ${PORT}`));
