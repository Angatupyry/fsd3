const express = require("express");
const path = require("path");

//CREATE EXPRESS APP
const app = express();

//MIDDLEWARE GLOBAL
app.use(function (request, response, next) {
  request.now = new Date();
  console.log(request.now);
  next();
});

//PATH /TIENDA
app.get("/", function (request, response) {
  response.send("Home");
});

//PATH /TIENDA
app.get("/tienda", (req, res, next) => {
  setTimeout(function () {
    try {
      miOBjQueNOexiste.name = "Ooops!";
      res.send("No estas autorizado!");
    } catch (error) {
      next(error);
    }
  }, 1000);
});

//MIDDLEWARE GLOBAL ERROR MANAGER
app.use((req, res, next) => {
  res.status(400);
  res.sendFile(__dirname + "/public/404.html");
});

//START LISTEN
app.listen(4000);
