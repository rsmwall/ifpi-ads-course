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

import { Calculadora } from "./q02-calculadora"

class CalculadoraCientifica extends Calculadora{
    public exponenciar() {
        return this.operando1 ** this.operando2
    }
}

let calcC: CalculadoraCientifica = new CalculadoraCientifica(4, 5)
console.log(calcC.exponenciar())
