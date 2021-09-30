const express = require("express");
const path = require("path");

const app = express();

app.use(express.static(path.join(__dirname, "public")));

app.get("/api", function (request, response, next) {
  setTimeout(() => {
    try {
      objNoDefinido.x = 100;

      response.send("Llego a " + request.originalUrl);
    } catch (err) {
      next(err);
    }
  }, 100);
});

app.get("/user", function (request, response) {
  objNoDefinido.x = 100;
  response.send("Llego a " + request.originalUrl);
});

app.use("/api", function (err, req, res, next) {
  res.status(500);
  res.sendFile(__dirname + "/public/error.html");
});

app.use(function (err, req, res, next) {
  res.status(500);
  res.sendFile(__dirname + "/public/error-generic.html");
});

app.use((req, res) => {
  res.status(404);
  res.sendFile(__dirname + "/public/404.html");
});

app.listen(8000, function () {
  console.log("App corriendo en el puerto 3000");
});
