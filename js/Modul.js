export class Modul {
    constructor(cicle,modul_num, modul_nom, modul_hores) {
        this.cicle = cicle;
        this.modul_num = modul_num;
        this.modul_nom = modul_nom;
        this.modul_hores = modul_hores;
    }

    toString() {
        return `MP ${this.cicle}.${this.modul_num}. ${this.modul_nom}.(${this.modul_hores}h`;
    }
}

