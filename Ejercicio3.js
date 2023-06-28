function mostrarRecorrido(pueblos) {
    var recorridoIda = "Recorrido: ";
    var recorridoVuelta = "Regreso: ";
    
    for (var i = 0; i < pueblos.length; i++) {
      recorridoIda += pueblos[i];
      
      if (i !== pueblos.length - 1) {
        recorridoIda += " → ";
      }
    }
    
    for (var j = pueblos.length - 1; j >= 0; j--) {
      recorridoVuelta += pueblos[j];
      
      if (j !== 0) {
        recorridoVuelta += " → ";
      }
    }
    
    console.log(recorridoIda);
    console.log(recorridoVuelta);
  }
  
  var pueblos = ["Pueblo Origen", "pueblo 1", "pueblo 2", "destino"];
  mostrarRecorrido(pueblos);
  