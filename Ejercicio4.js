function retirarContenedor(pila, numero) {
    var contenedoresTemporales = [];
    var contenedorEncontrado = false;
    
    while (pila.length > 0) {
      var contenedor = pila.pop();
      
      if (contenedor === numero) {
        contenedorEncontrado = true;
        break;
      } else {
        contenedoresTemporales.push(contenedor);
      }
    }
    
    while (contenedoresTemporales.length > 0) {
      pila.push(contenedoresTemporales.pop());
    }
    
    return contenedorEncontrado ? pila : null;
  }
  
  var pilaContenedores = [1, 2, 3, 4, 5, 6, 7];
  var nuevaPilaContenedores = retirarContenedor(pilaContenedores, 4);
  console.log(nuevaPilaContenedores);