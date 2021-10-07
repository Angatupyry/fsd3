// En index.js => Punto de entrada a nuestro servidor
const express = require("express");
const path = require("path");

const userRoutes = require("./routes/user");
const productsRoutes = require("./routes/products");

const app = express();

app.use(express.json());
app.use(
  express.urlencoded({
    extended: true,
  })
);

app.use(express.static(path.join(__dirname, "public")));

//Este middleware se llama cada vez que la app recibe un request
app.use((req, res, next) => {
  console.log("Hora:", Date.now());
  next();
});

app.use("/user", userRoutes);
//app.use("/product", productsRoutes);

app.listen(3000, function () {
  console.log("App corriendo en el puerto 3000");
});
