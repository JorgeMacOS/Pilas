function obtenerElementos(pila, numero) {
    var resultado = [];
    
    for (var i = 0; i < numero; i++) {
      if (pila.length > 0) {
        resultado.push(pila.pop());
      } else {
        break;
      }
    }
    
    return resultado;
  }
  
  var pila = ['Manzana', 'Cebolla', 'Apio', 'Naranja', 'Papaya', 'Sandía', 'Melón'];
  var elementos = obtenerElementos(pila, 4);
  console.log(elementos); 