function analizarPalabra(palabra) {
  // Obtener la última letra de la palabra
  const ultimaLetra = palabra[palabra.length - 1];

  // Verificar si la palabra es aguda
  if (ultimaLetra === "a" || ultimaLetra === "e" || ultimaLetra === "i" || ultimaLetra === "o" || ultimaLetra === "u" || ultimaLetra === "n" || ultimaLetra === "s") {
    return {
      llevaAcento: true,
      tipo: "Aguda"
    };
  }

  // Verificar si la palabra es llana o grave
  if (ultimaLetra === "a" || ultimaLetra === "e" || ultimaLetra === "i" || ultimaLetra === "o" || ultimaLetra === "u") {
    return {
      llevaAcento: false,
      tipo: "Llana"
    };
  }

  // Verificar si la palabra es esdrújula
  return {
    llevaAcento: true,
    tipo: "Esdrújula"
  };
}

// Bucle principal
while (true) {
  // Solicitar la palabra al usuario
  const palabra = prompt("Ingrese una palabra: ");

  // Analizar la palabra
  const resultado = analizarPalabra(palabra);

  // Imprimir el resultado
  console.log("La palabra \"" + palabra + "\" " + (resultado.llevaAcento ? "lleva" : "no lleva") + " tilde y es de tipo " + resultado.tipo);

  // Si la palabra es "EXIT", salir del programa
  if (palabra === "EXIT") {
    break;
  }
}
