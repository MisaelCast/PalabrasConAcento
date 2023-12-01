const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let esEsdrujulaa = false; // Variable para controlar si la palabra es esdrújula

function analizarPalabra(palabra) {
  const encontradas = [];
  const todasLasVocales = ['a', 'e', 'i', 'o', 'u', 'á', 'é', 'í', 'ó', 'ú'];

  for (let i = 0; i < palabra.length; i++) {
    const letra = palabra[i];
    if (todasLasVocales.includes(letra)) {
      encontradas.push(letra);
    }
  }

  return encontradas;
}

function esEsdrujula(vocalesEncontradas) {
  if (vocalesEncontradas.length >= 3) {
    const antepenultimaVocal = vocalesEncontradas[vocalesEncontradas.length - 3];
    const acentuadas = ['á', 'é', 'í', 'ó', 'ú'];
    
    if (acentuadas.includes(antepenultimaVocal)) {
      console.log(`La palabra es esdrújula y lleva tilde.`);
      esEsdrújula = true; // Marca la palabra como esdrújula
    } else {
      console.log(`La palabra no es esdrújula.`);
    }
  } else {
    console.log(`La palabra no tiene suficientes silabas para ser esdrújula.`);
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
    console.log(`La palabra no tiene suficientes silabas para ser sobreesdrújula.`);
  }
}

function esAguda(vocalesEncontradas, palabra) {
  if (esEsdrújulaa=== true && vocalesEncontradas.length >= 1) { // Verifica si no es esdrújula
    const ultimaVocal = vocalesEncontradas[vocalesEncontradas.length - 1];
    const acentuadas = ['á', 'é', 'í', 'ó', 'ú'];
    const letrasFinales = ['n', 's','a','e','i','o','u'];

    if (acentuadas.includes(ultimaVocal) || letrasFinales.includes(palabra[palabra.length - 1])) {
      console.log(`La palabra es aguda y lleva tilde.`);
    } else {
      console.log(`La palabra es aguda pero no lleva tilde.`);
    }
  } else {
    console.log(`La palabra no puede ser aguda.`);
  }
}

function procesarEntrada(palabra) {
  if (palabra === 'EXIT') {
    console.log('Saliendo del programa...');
    rl.close();
  } else {
    const encontradas = analizarPalabra(palabra);
    esEsdrujula(encontradas);
    esSobreesdrujula(encontradas);
    esAguda(encontradas, palabra); // Agregar verificación de aguda
    pedirEntrada();
  }
}

function pedirEntrada() {
  rl.question('Ingresa una palabra (escribe EXIT para salir): ', (input) => {
    esEsdrújulaa = false; // Reinicia la variable para la nueva palabra
    procesarEntrada(input);
  });
}

pedirEntrada();
