/* Me guardo en variables los elementos necesarios */
const listaDeTareasUL = document.getElementById("lista-tareas");
const botonAgregar = document.getElementById("agregar");
const barrita = document.getElementById("tarea");
const listaDeBoton = document.getElementById("prioridad");

function crearNuevaTareaHTML(descripcion, prioridad, autor) {
  const nuevaTarea = document.createElement("li");
  nuevaTarea.textContent = `${descripcion} - Autor: ${autor}`;

  nuevaTarea.classList.add(prioridad);
  listaDeTareasUL.appendChild(nuevaTarea);
}

botonAgregar.addEventListener("click", function () {
  fetch("http://localhost:3000/tareas", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      titulo: barrita.value,
      prioridad: listaDeBoton.value,
    }),
  })
    .then((respuesta) => respuesta.json())
    .then((respuestaJSON) => {
      const tareaNueva = respuestaJSON.tareaNueva;

      crearNuevaTareaHTML(
        tareaNueva.titulo,
        tareaNueva.prioridad,
        tareaNueva.autor
      );
    });
});

// listaDeTareasUL.addEventListener("click", function (evento) {
//   evento.target.remove();
// });

/* Función para cargar tareas desde el servidor */
const cargarTareas = () => {
  fetch("http://localhost:3000/tareas", {
    method: "GET",
  })
    .then((respuesta) => respuesta.json())
    .then((respuestaJSON) => {
      console.log(respuestaJSON);
      const tareas = respuestaJSON.tareas;
      const cantidadDeTareas = tareas.length;

      for (i = 0; i < cantidadDeTareas; i++) {
        crearNuevaTareaHTML(
          tareas[i].titulo,
          tareas[i].prioridad,
          tareas[i].autor
        );
      }
    });
};

cargarTareas();
