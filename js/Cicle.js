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
    let modulsInfo = "Mòduls: ";
    if (this.moduls.length > 0) {
      // Ordena els mòduls pel seu número
      const modulsOrdenats = this.moduls.sort((a, b) => a.numero - b.numero);
      modulsInfo += modulsOrdenats.map(modul => `${modul.nom} (${modul.hores} h)`).join(", ");
    } else {
      modulsInfo += "Cap mòdul afegit";
    }

    return `Cicle: ${this.nom}, Durada: ${this.durada} anys, Edicions: ${this.numEdicions}, Última Edició: ${this.ultimaEdicio}, ${modulsInfo}`;
  }

  afegirModul(modul) {
    this.moduls.push(modul);
  }

  calcularHores() {
    let hores = 0;
    for (const modul of this.moduls) {
      hores += modul.hores;
    }
    return hores;
  }
  setNumEdicions() {
    this.numEdicions++;
    this.ultimaEdicio = new Date();
  }
}
export class Modul {
  constructor(numero, nom, hores) {
    this.numero = numero;
    this.nom = nom;
    this.hores = hores;
  }
}
