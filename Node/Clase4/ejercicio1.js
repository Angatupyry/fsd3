function multiplicar(num1, num2) {
  const promise = new Promise(function (okCallback, errorCallback) {
    setTimeout(() => {
      if (num1 > 0 && num2 > 0) {
        const result = num1 * num2;
        okCallback(result);
      } else {
        errorCallback("Uno de los números es negativo");
      }
    }, 2000);
  });

  return promise;
}

// Sin el .then(), la promesa no será ejecutada
//console.log(multiplicar(1, 2));

// Ejecución de la promesa
//multiplicar(2, 10).then((result) => result);

/**
 * 1 promesa. Multiplicar num1 con num2
 *    con el .then(), ejecuto esa promesa, se resuelve y...
 *    con el resultado de la promesa vuelvo a llamar a la promesa
 *     multiplicar(result, num2) y nuevamente hago el .then
 *
 */
multiplicar(2, 10).then(
  function (resultado) {
    multiplicar(resultado, 2).then(
      function (resultado2) {
        console.log(
          "Resultado de multiplicar es: " + resultado + "/" + resultado2
        );
      },
      function (error) {
        console.log("Ocurrió un error: " + error);
      }
    );
  },
  function (error) {
    console.log("Ocurrió un error: " + error);
  }
);

async function main() {
  try {
    //código
    const resultUno = await multiplicar(2, 3);
    const resultDos = await multiplicar(resultUno, 10);
    console.log(resultDos);
  } catch (error) {
    console.log(error);
  }
}

main();
