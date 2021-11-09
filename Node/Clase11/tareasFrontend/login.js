const button = document.getElementById("login");

const mailElement = document.getElementById("mail");
const passwordElement = document.getElementById("password");

button.addEventListener("click", () => {
  const mail = mailElement.value;
  const password = passwordElement.value;

  if (mail && password) {
    //Voy a hacer login

    const objetoBody = {
      mail: mail,
      password: password,
      fecha: "24/06/2021",
    };

    fetch("http://localhost:3000/auth/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(objetoBody),
    })
      .then(function (response) {
        return response.json();
      })
      .then(function (response) {
        debugger;

        if (!response.error) {
          localStorage.setItem("token", response.token);
          //const token = localStorage.getItem('token');
          // Ejemplo
          // localStorage.setItem('user', JSON.stringify(usuario));
          // const stringifiedObjet = localStorage.getItem('user');
          // const user = JSON.parse(stringifiedObjet);

          alert("Login exitoso");
        } else {
          alert("Login fallido");
        }
      });
  } else {
    alert("Falta completar campos");
  }
});
