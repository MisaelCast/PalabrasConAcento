const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function analizarPalabra(palabra) {
  const encontradas = [];
  const todasLasVocales = ['a', 'e', 'i', 'o', 'u', 'á', 'é', 'í', 'ó', 'ú'];
  let contadorAcentuadas = 0; // Contador para las vocales acentuadas

  for (let i = 0; i < palabra.length; i++) {
    const letra = palabra[i];
    if (todasLasVocales.includes(letra)) {
      encontradas.push(letra);
      if (letra === 'á' || letra === 'é' || letra === 'í' || letra === 'ó' || letra === 'ú') {
        contadorAcentuadas++;
      }
    }
  }

  if (contadorAcentuadas > 1) {
    console.log(`La palabra está mal escrita, tiene más de una vocal acentuada.`);
    return false; // Indica que la palabra está mal escrita
  }

  return encontradas;
}


function esEsdrujula(vocalesEncontradas) {
  if (vocalesEncontradas.length >= 3) {
    const antepenultimaVocal = vocalesEncontradas[vocalesEncontradas.length - 3];
    const acentuadas = ['á', 'é', 'í', 'ó', 'ú'];

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

function esSobreesdrujula(vocalesEncontradas) {
  if (vocalesEncontradas.length >= 4) {
    const antesAntepenultimaVocal = vocalesEncontradas[vocalesEncontradas.length - 4];
    const antesAntepenultimaVocal2 = vocalesEncontradas[vocalesEncontradas.length - 5];
    const acentuadas = ['á', 'é', 'í', 'ó', 'ú'];

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



function esGrave(vocalesEncontradas, palabra) {
  if (vocalesEncontradas.length >= 2) {
    const penultimaVocal = vocalesEncontradas[vocalesEncontradas.length - 2];
    const acentuadas = ['á', 'é', 'í', 'ó', 'ú'];
    const letrasFinales = ['n', 's', 'a', 'e', 'i', 'o', 'u'];


    if (acentuadas.includes(penultimaVocal)){

        if (!letrasFinales.includes(palabra[palabra.length - 1])) {
        console.log(`La palabra es grave y lleva tilde.`);
        }else{
         console.log(`La palabra es grave y no lleva tilde.`);
        }
        return true;
    } else {
      console.log(`La palabra no es grave.`);
      return false;
    }
  } else {
    console.log(`La palabra no puede ser grave.`);
    return false;
  }
}



function esAguda(vocalesEncontradas, palabra) {
  if (vocalesEncontradas.length >= 1) {
    const ultimaVocal = vocalesEncontradas[vocalesEncontradas.length - 1];
    const acentuadas = ['á', 'é', 'í', 'ó', 'ú'];
    const letrasFinales = ['n', 's', 'a', 'e', 'i', 'o', 'u'];

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

    if (encontradas !== false) {
      const esSobreesdrujulaResult = esSobreesdrujula(encontradas);

      if (esSobreesdrujulaResult) {
        pedirEntrada(); // Pedir una nueva palabra
        return; // Salir de la función sin continuar con las otras validaciones
      } else {
        const esEsdrujulaResult = esEsdrujula(encontradas);

        if (esEsdrujulaResult) {
          pedirEntrada(); // Pedir una nueva palabra
          return; // Salir de la función sin continuar con las otras validaciones
        } else {
          const esGraveResult = esGrave(encontradas, palabra);

          if (esGraveResult) {
            pedirEntrada(); // Pedir una nueva palabra
            return; // Salir de la función sin continuar con las otras validaciones
          } else {
            esAguda(encontradas, palabra);
          }
        }
      }
    }
    pedirEntrada(); // Pedir una nueva palabra independientemente del resultado
  }
}

////////////////////////////PALABRAS PRUEBAS  GRAVE fácil,  café AGUDA  ESDRUJULA teléfono, SOBRE académicamente.



function pedirEntrada() {
  rl.question('Ingresa una palabra (escribe EXIT para salir): ', (input) => {
    procesarEntrada(input);
  });
}

pedirEntrada();


