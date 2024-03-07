/*
1. Crie uma classe Calculadora que tenha:
    a. Dois atributos privados (operando1 e 2) do tipo number;
    b. Dois métodos públicos, cada um representando uma operação básica;
    c. Um construtor onde são passados os operandos e que esses inicializam os
    atributos;
    Teste a classe calculadora e seus métodos. Tente acessar os atributos
    diretamente e verifique o que acontece.
*/

class Calculadora {
    private operando1:number;
    private operando2:number;

    constructor (operando1:number, operando2:number) {
        this.operando1 = operando1;
        this.operando2 = operando2;
    } 

    public somar():number {
        return this.operando1 + this.operando2;
    }

    public subtrair():number{
        return this.operando1 - this.operando2;
    }
}

let calculadora:Calculadora = new Calculadora(2, 4);
console.log(`Soma: ${calculadora.somar()}`);
console.log(`Subtrair: ${calculadora.subtrair()}`);