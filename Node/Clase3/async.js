const fetch = require("node-fetch");

async function main() {
  try {
    const githubResponse = await fetch(
      "https://api.github.com/users/angatupyry"
    );

    const response = await githubResponse.json();

    console.log(response);
  } catch (error) {}
}
