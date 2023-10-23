/*
4. Uma subclasse de Funcionario, chamada Professor tendo:
    a. Um atributo _titulacao (string) com seus métodos de leitura
    b. Todo professor recebe seu salário em uma única parcela. Assim, deve-se
    sobrescrever os métodos calcularSalarioPrimeiraParcela e
    calcularSalarioSegundaParcela. O método calcularSalarioPrimeiraParcela
    da classe Professor deve retornar o valor integral do salário do professor e
    o método calcularSalarioSegundaParcela do professor deve retornar o valor
    zero.
*/

import { Funcionario } from "./q03-pessoa-funcionario"

export class Professor extends Funcionario {
    private _titulacao: string

    constructor (nome: string, sobrenome: string, matricula: string, salario: number, titulacao: string) {
        super(nome, sobrenome, matricula, salario)
        this._titulacao = titulacao
    }

    public calcularSalarioPrimeiraParcela(): number {
        return this.salario
    }

    public calcularSalarioSegundaParcela(): number {
        return 0
    }

    get titulacao() {
        return this._titulacao
    }
}

let prof: Professor = new Professor("Rafael", "Silva", "2021111", 1320, "TI")
console.log(`Funcionario: ${prof.nomeCompleto}
Matricula: ${prof.matricula}
Salario: ${prof.salario}
Salario (primeira parcela): ${prof.calcularSalarioPrimeiraParcela()}
Salario (segunda parcela): ${prof.calcularSalarioSegundaParcela()}`);