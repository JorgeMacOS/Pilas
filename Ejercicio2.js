function reemplazar(pila, nuevo, viejo) {
    var indice = pila.lastIndexOf(viejo);
    
    if (indice !== -1) {
      pila.splice(indice, 1, nuevo);
      pila.length = indice + 1; 
    }s
    
    return pila;
  }
  
  var pila = [3, 2, 3, 4, 6, 8, 1, 2, 5, 5];
  var nuevaPila = reemplazar(pila, 7, 2);
  console.log(nuevaPila); 
  