let variable = 5;

const variableDos = "hola";

var variableTres = ["hola", "chau"];
console.log(variable);
console.log(variableDos);

let persona = {
  nombre: "César",
  edad: 26,
  hobbies: {
    futbol: true,
    leer: true,
    correr: true,
    cantar: false,
    bailar: false,
    programar: true,
  },
};

console.log(persona.nombre);
console.log(persona.hobbies.cantar);

let array = [1, 2, "hola", true, false];

//console.log(array.length);
//console.log(array[1]);

for (let i = 0; i <= array.length; i++) {
  console.log(array[i]);
}
