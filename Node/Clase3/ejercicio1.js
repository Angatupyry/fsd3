const fetch = require("node-fetch");

// fetch("https://api.github.com/users/angatupyry")
//   .then(function (response) {
//     return response.json();
//   })
//   .then(function (response) {
//     console.log("Github respondio:", response);
//   });

async function main() {
  try {
    const fetchResponse = await fetch(
      "https://api.github.com/users/angatupyry"
    );

    const response = await fetchResponse.json();

    console.log("Github respondio:", response);
  } catch (exception) {
    console.log("Fallo la request:", exception);
  }
}

main();
