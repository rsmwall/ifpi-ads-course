/* 
2. Crie uma classe Hora que tenha:
    a. Três atributos privados e definidos no construtor chamados hora, minutos e
    segundos;
    b. Métodos públicos para ler hora, minuto e segundo de forma individual;
    c. Um método público para retorne a hora no formato “hh:mm:ss”.
*/

class Hora {
    private _hora:number;
    private _minutos:number;
    private _segundos:number;

    constructor (hora:number, minutos:number, segundos:number) {
        this._hora = hora;
        this._minutos = minutos;
        this._segundos = segundos;
    }

    get hora() {
        return this._hora;
    }

    get minutos() {
        return this._minutos;
    }

    get segundos() {
        return this.segundos;
    }

    public exibirHoraFormatada():string {
        let horaStr = (this._hora + "")
        let minutosStr = (this._minutos + "")
        let segundosStr = (this._segundos + "")

        return `${horaStr}:${minutosStr}:${segundosStr}`;
    }
}

let hora1:Hora = new Hora(0, 0, 0);
console.log(hora1.exibirHoraFormatada());

let hora2:Hora = new Hora(7, 30, 8);
console.log(hora2.exibirHoraFormatada());

