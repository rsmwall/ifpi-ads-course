/*
3. Crie uma subclasse de Pessoa, chamada Funcionario que deve possuir:
    a. Os atributos privados _matricula do tipo string e _salario do tipo number,
    com seus respectivos métodos para leitura.
    b. O salário de um funcionário jamais poderá ser negativo. Todo funcionário
    recebe seu salário em duas parcelas, sendo 60% na primeira parcela e
    40% na segunda parcela. Assim, escreva os métodos
    calcularSalarioPrimeiraParcela que retornam o valor da primeira parcela do
    salário (60%) e calcularSalarioSegundaParcela que retorna o valor da
    segunda parcela do salário (40%).
*/

import { Pessoa } from "./q02-pessoa"

export class Funcionario extends Pessoa {
    private _matricula: string
    private _salario: number

    constructor (nome: string, sobrenome: string, matricula: string, salario: number) {
        super(nome, sobrenome)
        this._matricula = matricula
        this._salario = salario
    }

    public calcularSalarioPrimeiraParcela(): number {
        return this._salario * 0.6
    }

    public calcularSalarioSegundaParcela(): number {
        //return this._salario * 0.4
        return this._salario - this.calcularSalarioPrimeiraParcela()
    }

    get matricula() {
        return this._matricula
    }

    get salario() {
        return this._salario
    }
}

let func: Funcionario = new Funcionario("Rafael", "Silva", "2021111", 1320)
console.log(`Funcionario: ${func.nomeCompleto}
Matricula: ${func.matricula}
Salario: ${func.salario}
Salario (primeira parcela): ${func.calcularSalarioPrimeiraParcela()}
Salario (segunda parcela): ${func.calcularSalarioSegundaParcela()}`);
