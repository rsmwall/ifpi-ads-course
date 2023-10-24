/**
5. Crie uma classe chamada Folha de pagamento que no construtor receba um array
    de Pessoa e inicialize um atributo do mesmo tipo. Crie um método chamado
    calcularPagamentos() que retorna um valor que represente o total de salários dos
    elementos do array. Note que você deve considerar o salário apenas de
    funcionários e professores.
*/

import { Pessoa } from "./q02-pessoa";
import { Funcionario } from "./q03-pessoa-funcionario";
import { Professor } from "./q04-pessoa-funcionario-professor";

class FolhaPagamento {
    constructor (private _pessoas: Pessoa[]) {}

    calcularPagamentos(): number {
        let total: number = 0
        for (let pessoa of this._pessoas) {
            if (pessoa instanceof Funcionario || pessoa instanceof Professor) {
                total += (pessoa.salario)
            }
        }
        return total
    }
}
let pessoa: Pessoa = new Pessoa("Rafael", "Silva")
let func: Funcionario = new Funcionario("Rafael", "Silva", "2021111", 1320)
let prof: Professor = new Professor("Rafael", "Silva", "2021111", 1320, "Dr.")

let pessoas: Pessoa[] = []
pessoas.push(pessoa)
pessoas.push(func)
pessoas.push(prof)

console.log(pessoas)
