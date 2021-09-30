// Paso 1 Requerir la librería express
const express = require("express");

// Paso 2 Instanciar express para poder utilizar sus funcionalidades
const app = express();

// Paso 3 Levantar el servidor
//   3.1 Crear una constante
const PORT = 8080;

//Paso 4 Utilizar la ruta inicial
app.get("/", (req, res, next) => {
  setTimeout(() => {
    try {
      objetoNoDefinido.x = 100;
    } catch (error) {
      next(error);
    }
  }, 1000);
});

//  3.2 Hacer escuchar nuestro servidor en el puerto de nuestra constante
app.listen(PORT);
