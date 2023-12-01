const readline = require('readline');

// Crear una interfaz para leer la entrada del usuario
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Función para analizar las vocales presentes en una palabra
function analizarPalabra(palabra) {
  const encontradas = []; // Almacena las vocales encontradas
  const todasLasVocales = ['a', 'e', 'i', 'o', 'u', 'á', 'é', 'í', 'ó', 'ú'];

  // Recorre cada letra de la palabra
  for (let i = 0; i < palabra.length; i++) {
    const letra = palabra[i];
    // Si la letra es una vocal, la agrega al array de encontradas
    if (todasLasVocales.includes(letra)) {
      encontradas.push(letra);
    }
  }

  // Imprime las vocales encontradas y devuelve el array
  console.log(`Vocales encontradas en '${palabra}': ${encontradas}`);
  return encontradas;
}

// Función para determinar si una palabra es esdrújula
function esEsdrujula(vocalesEncontradas) {
  if (vocalesEncontradas.length >= 3) { // Verifica si hay al menos tres vocales
    const antepenultimaVocal = vocalesEncontradas[vocalesEncontradas.length - 3];
    const acentuadas = ['á', 'é', 'í', 'ó', 'ú'];

    // Verifica si la antepenúltima vocal es acentuada
    if (acentuadas.includes(antepenultimaVocal)) {
      console.log(`La palabra es esdrújula.`);
    } else {
      console.log(`La palabra no es esdrújula.`);
    }
  } else {
    console.log(`La palabra no tiene suficientes vocales para ser esdrújula.`);
  }
}

// Función para determinar si una palabra es sobreesdrújula
function esSobreesdrujula(vocalesEncontradas) {
  if (vocalesEncontradas.length >= 4) { // Verifica si hay al menos cuatro vocales
    const antesAntepenultimaVocal = vocalesEncontradas[vocalesEncontradas.length - 4];
    const acentuadas = ['á', 'é', 'í', 'ó', 'ú'];

    // Verifica si la vocal antes de la antepenúltima vocal es acentuada
    if (acentuadas.includes(antesAntepenultimaVocal)) {
      console.log(`La palabra es sobreesdrújula.`);
    } else {
      console.log(`La palabra no es sobreesdrújula.`);
    }
  } else {
    console.log(`La palabra no tiene suficientes vocales para ser sobreesdrújula.`);
  }
}

// Función principal para procesar la entrada del usuario
function procesarEntrada(palabra) {
  if (palabra === 'EXIT') { // Verifica si se ingresa 'EXIT' para salir
    console.log('Saliendo del programa...');
    rl.close(); // Cierra la interfaz de lectura
  } else {
    const encontradas = analizarPalabra(palabra); // Analiza las vocales de la palabra
    esEsdrujula(encontradas); // Verifica si es esdrújula
    if (!esEsdrujula) {
      esSobreesdrujula(encontradas); // Verifica si es sobreesdrújula
    }
    pedirEntrada(); // Pide más entrada al usuario
  }
}

// Función para pedir al usuario que ingrese una palabra
function pedirEntrada() {
  rl.question('Ingresa una palabra (escribe EXIT para salir): ', (input) => {
    procesarEntrada(input); // Procesa la entrada del usuario
  });
}

// Inicia el proceso pidiendo la primera entrada
pedirEntrada();
