/*
2. Crie uma classe Calculadora com:
    a. Dois tributos privados chamados representando dois operandos;
    b. Crie um construtor que inicializa os atributos;
    c. Crie um método que retorna a soma dos dois atributos;
    d. Teste a classe.
*/

export class Calculadora {
    private _operando1: number
    private _operando2: number

    constructor (operando1: number, operando2: number) {
        this._operando1 = operando1
        this._operando2 = operando2
    }
    
    public get operando1() : number {
        return this._operando1
    }
    
    public get operando2() : number {
        return this._operando2
    }
    
    public somar() {
        return this._operando1 + this._operando2
    }
}

let calc1: Calculadora = new Calculadora(2, 5)
console.log(calc1.somar())
