"use strict";
/*
3. Crie uma classe chamada CalculadoraCientifica que herda da classe Calculadora
do exercício passado e:
    a. Implemente um método chamado exponenciar que retorne o primeiro
    operando elevado ao segundo;
    b. Teste a classe;
    c. Foi necessária alguma modificação em Calculadora para o acesso aos
    atributos?

    - Foi necessario utilizar o metodo get
*/
Object.defineProperty(exports, "__esModule", { value: true });
const q02_calculadora_1 = require("./q02-calculadora");
class CalculadoraCientifica extends q02_calculadora_1.Calculadora {
    exponencial() {
        return this.operando1 ** this.operando2;
    }
}
let calcC = new CalculadoraCientifica(2, 4);
console.log(calcC.exponencial());
