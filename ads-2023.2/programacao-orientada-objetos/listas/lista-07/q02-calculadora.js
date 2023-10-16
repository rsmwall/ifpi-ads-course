"use strict";
/*
2. Crie uma classe Calculadora com:
    a. Dois tributos privados chamados representando dois operandos;
    b. Crie um construtor que inicializa os atributos;
    c. Crie um método que retorna a soma dos dois atributos;
    d. Teste a classe.
*/
Object.defineProperty(exports, "__esModule", { value: true });
exports.Calculadora = void 0;
class Calculadora {
    constructor(operando1, operando2) {
        this._operando1 = operando1;
        this._operando2 = operando2;
    }
    soma() {
        return this._operando1 + this._operando2;
    }
    get operando1() {
        return this._operando1;
    }
    get operando2() {
        return this._operando2;
    }
}
exports.Calculadora = Calculadora;
let calc1 = new Calculadora(2, 3);
let calc2 = new Calculadora(5, 20);
console.log(calc1.soma());
console.log(calc2.soma());
