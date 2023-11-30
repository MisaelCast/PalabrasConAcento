const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function contarSilabas(palabra) {
  palabra = palabra.toLowerCase();
  const vocal= /[aeiouyáéíóú]/gi;
  const vocales = palabra.match(vocal);

  if (!vocales) {
    return 0;
  }

  return vocales.length;
}

function esAguda(palabra) {
  palabra = palabra.toLowerCase().trim();
  const ultimaLetra = palabra[palabra.length - 1];
  const vocales = 'aeiouáéíóú';
  return (
    vocales.includes(ultimaLetra) ||
    ultimaLetra === 'n' ||
    ultimaLetra === 's'
  );
}

function procesarEntrada(palabra) {
  if (palabra === 'EXIT') {
    console.log('Saliendo del programa...');
    rl.close();
  } else {
    const numeroSilabas = contarSilabas(palabra);
    const esPalabraAguda = esAguda(palabra);
    
    console.log(`La palabra '${palabra}' tiene ${numeroSilabas} sílabas.`);
    if (esPalabraAguda) {
      console.log(`La palabra '${palabra}' es aguda.`);
    } else {
      console.log(`La palabra '${palabra}' no es aguda.`);
    }

    pedirEntrada();
  }
}

function pedirEntrada() {
  rl.question('Ingresa una palabra (escribe EXIT para salir): ', (input) => {
    procesarEntrada(input);
  });
}

pedirEntrada();
