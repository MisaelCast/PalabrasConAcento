const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});



function analizarPalabra(palabra) {
  const encontradas = [];
  const todasLasVocales = ['a', 'e', 'i', 'o', 'u', 'á', 'é', 'í', 'ó', 'ú'];

  for (let i = 0; i < palabra.length; i++) {
    const letra = palabra[i];
    if (todasLasVocales.includes(letra)) {
      encontradas.push(letra);
    }
  }

  console.log(`Vocales encontradas en '${palabra}': ${encontradas}`);
  return encontradas;
}

function esEsdrujula(vocalesEncontradas) {
  if (vocalesEncontradas.length >= 3) {
    const antepenultimaVocal = vocalesEncontradas[vocalesEncontradas.length - 3];
    const acentuadas = ['á', 'é', 'í', 'ó', 'ú'];
    
    if (acentuadas.includes(antepenultimaVocal)) {
      console.log(`La palabra es esdrújula.`);
    } else {
      console.log(`La palabra no es esdrújula.`);
    }
  } else {
    console.log(`La palabra no tiene suficientes vocales para ser esdrújula.`);
  }
}


function esSobreesdrujula(vocalesEncontradas) {
  if (vocalesEncontradas.length >= 4) {
    const antesAntepenultimaVocal = vocalesEncontradas[vocalesEncontradas.length - 4];
    const acentuadas = ['á', 'é', 'í', 'ó', 'ú'];
    
    if (acentuadas.includes(antesAntepenultimaVocal)) {
      console.log(`La palabra es sobreesdrújula.`);
    } else {
      console.log(`La palabra no es sobreesdrújula.`);
    }
  } else {
    console.log(`La palabra no tiene suficientes vocales para ser sobreesdrújula.`);
  }
}



function procesarEntrada(palabra) {
  if (palabra === 'EXIT') {
    console.log('Saliendo del programa...');
    rl.close();
  } else {
    const encontradas = analizarPalabra(palabra);
    const esdr = esEsdrujula(encontradas);
    if (!esdr) {
      esSobreesdrujula(encontradas);
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
