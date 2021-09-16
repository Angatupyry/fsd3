const carrito = ["pan", "manzana", "naranja", "leche"];

const suma = (a, b) => a + b;

const retornarNombre = (nombre) => console.log(nombre);

const cowsay = require("cowsay");

console.log(
  cowsay.say({
    text: "Hola",
    e: "ou",
    T: "U",
  })
);

module.exports = { suma, carrito, retornarNombre };
