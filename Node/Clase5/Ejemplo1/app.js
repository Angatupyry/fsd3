const { listarUsuarios } = require("./user");

// user.listarUsuarios().then(
//   function (users) {
//     console.log(users);
//   },
//   function (error) {
//     console.log(error);
//   }
// );

// listarUsuarios()
//   .then((res) => console.log(res))
//   .then((res) => {})
//   .then((res) => {})
//   .catch((error) => console.log(error));

const usersResponse = async () => {
  try {
    const resultUsers = await listarUsuarios();

    const usersOne = resultUsers[0].nombre;

    console.log(usersOne);
  } catch (error) {
    console.log(error);
  }
};

usersResponse();
