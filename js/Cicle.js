export class Cicle {
  constructor(nom, categoria,numAlumnes,abreviatura) {
    this.nom = nom;
    this.categoria = categoria;
    this.numAlumnes = numAlumnes;
    this.abreviatura = abreviatura;
    // Valor inicial de numEdicions = 0
    this.numEdicions = 0;
    this.ultimaEdicio = null;
    this.moduls = [];
  }
  toString() {
    // Imprime la información del ciclo y sus módulos
    let modulsInfo = "Mòduls: ";
    if (this.moduls.length > 0) {
      modulsInfo += this.moduls.map(modul => `${modul.nom} (${modul.hores} h)`).join(", ");
    } else {
      modulsInfo += "Cap mòdul afegit";
    }

    return `Cicle: ${this.nom}, Durada: ${this.durada} anys, Edicions: ${this.numEdicions}, Última Edició: ${this.ultimaEdicio}, ${modulsInfo}`;
  }

  AfegirModuls(){
    // Funcion para añadir modulo con un array 
    
  }
  CalculHores(){
    // Funcion para calcular las horas de cada modulo
  }
  setNumEdicions() {
    this.numEdicions++;
    this.ultimaEdicio = new Date();

  }
}

