const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Variables globales para las vocales acentuadas y letras finales
const acentuadas = ['á', 'é', 'í', 'ó', 'ú'];
const letrasFinales = ['n', 's', 'a', 'e', 'i', 'o', 'u'];

// Función para analizar la palabra y encontrar vocales y acentos
function analizarPalabra(palabra) {
  const encontradas = [];
  const todasLasVocales = ['a', 'e', 'i', 'o', 'u', 'á', 'é', 'í', 'ó', 'ú'];
  let contadorAcentuadas = 0; // Contador para las vocales acentuadas

  // Recorre cada letra de la palabra
  for (let i = 0; i < palabra.length; i++) {
    const letra = palabra[i];
    if (todasLasVocales.includes(letra)) {
      encontradas.push(letra);
      if (letra === 'á' || letra === 'é' || letra === 'í' || letra === 'ó' || letra === 'ú') {
        contadorAcentuadas++;
      }
    }
  }

  // Si hay más de una vocal acentuada, la palabra está mal escrita
  if (contadorAcentuadas > 1) {
    console.log(`La palabra está mal escrita, tiene más de una vocal acentuada.`);
    return false; // Indica que la palabra está mal escrita
  }

  return encontradas; // Retorna las vocales encontradas
}

// Función para verificar si la palabra es esdrújula
function esEsdrujula(vocalesEncontradas) {
  if (vocalesEncontradas.length >= 3) {
    const antepenultimaVocal = vocalesEncontradas[vocalesEncontradas.length - 3];

    // Verifica si la antepenúltima vocal es acentuada
    if (acentuadas.includes(antepenultimaVocal)) {
      console.log(`La palabra es esdrújula y lleva tilde.`);
      return true; // Indica que la palabra es esdrújula
    } else {
      console.log(`La palabra no es esdrújula.`);
      return false; // Indica que la palabra no es esdrújula
    }
  } else {
    console.log(`La palabra no tiene suficientes silabas para ser esdrújula.`);
    return false; // Indica que la palabra no tiene suficientes sílabas
  }
}

// Función para verificar si la palabra es sobreesdrújula
function esSobreesdrujula(vocalesEncontradas) {
  if (vocalesEncontradas.length >= 4) {
    const antesAntepenultimaVocal = vocalesEncontradas[vocalesEncontradas.length - 4];
    const antesAntepenultimaVocal2 = vocalesEncontradas[vocalesEncontradas.length - 5];

    // Verifica si la antes antepenúltima vocal es acentuada
    if (acentuadas.includes(antesAntepenultimaVocal) || acentuadas.includes(antesAntepenultimaVocal2)) {
      console.log(`La palabra es sobreesdrújula.`);
      return true; // Indica que la palabra es sobreesdrújula
    } else {
      console.log(`La palabra no es sobreesdrújula.`);
      return false; // Indica que la palabra no es sobreesdrújula
    }
  } else {
    console.log(`La palabra no tiene suficientes silabas para ser sobreesdrújula.`);
    return false; // Indica que la palabra no tiene suficientes sílabas
  }
}

// Función para verificar si la palabra es grave
function esGrave(vocalesEncontradas, palabra) {
  if (vocalesEncontradas.length >= 2) {
    const penultimaVocal = vocalesEncontradas[vocalesEncontradas.length - 2];

    // Verifica si la penúltima vocal es acentuada
    if (acentuadas.includes(penultimaVocal)) {
      // Verifica si la última letra no es una letra final
      if (!letrasFinales.includes(palabra[palabra.length - 1])) {
        console.log(`La palabra es grave y lleva tilde.`);
      } else {
        console.log(`La palabra es grave y no lleva tilde.`);
      }
      return true; // Indica que la palabra es grave
    } else {
      console.log(`La palabra no es grave.`);
      return false; // Indica que la palabra no es grave
    }
  } else {
    console.log(`La palabra no puede ser grave.`);
    return false; // Indica que la palabra no puede ser grave
  }
}

// Función para verificar si la palabra es aguda
function esAguda(vocalesEncontradas, palabra) {
  if (vocalesEncontradas.length >= 1) {
    const ultimaVocal = vocalesEncontradas[vocalesEncontradas.length - 1];

    // Verifica si la última vocal es acentuada o si la última letra es una letra final
    if (acentuadas.includes(ultimaVocal) || letrasFinales.includes(palabra[palabra.length - 1])) {
      console.log(`La palabra es aguda y lleva tilde.`);
    } else {
      console.log(`La palabra es aguda pero no lleva tilde.`);
    }
  } else {
    console.log(`La palabra no puede ser aguda.`);
  }
}

// Función principal para procesar la entrada de palabras
function procesarEntrada(palabra) {
  if (palabra === 'EXIT') {
    console.log('Saliendo del programa...');
    rl.close();
  } else {
    const encontradas = analizarPalabra(palabra);

    if (encontradas !== false) {
      const esSobreesdrujulaResult = esSobreesdrujula(encontradas);

      if (esSobreesdrujulaResult) {
        pedirEntrada(); // Pide una nueva palabra
        return; // Sale de la función sin continuar con las otras validaciones
      } else {
        const esEsdrujulaResult = esEsdrujula(encontradas);

        if (esEsdrujulaResult) {
          pedirEntrada(); // Pide una nueva palabra
          return; // Sale de la función sin continuar con las otras validaciones
        } else {
          const esGraveResult = esGrave(encontradas, palabra);

          if (esGraveResult) {
            pedirEntrada(); // Pide una nueva palabra
            return; // Sale de la función sin continuar con las otras validaciones
          } else {
            esAguda(encontradas, palabra); // Verifica si es aguda
          }
        }
      }
    }
    pedirEntrada(); // Pide una nueva palabra independientemente del resultado
  }
}

// Función para solicitar la entrada de palabras al usuario
function pedirEntrada() {
  rl.question('Ingresa una palabra (escribe EXIT para salir): ', (input) => {
    procesarEntrada(input); // Procesa la entrada en minúsculas
  });
}

pedirEntrada(); // Inicia el programa solicitando la primera palabra
