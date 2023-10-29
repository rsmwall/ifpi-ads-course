/*
1. Atualize a implementação da classe Banco apresentada em sala de acordo com as
   seguintes instruções:
    a. Altere o método inserir para que não seja possível contas com mesmo
       número;
    b. sacar(numero: string, valor: number): pesquisa uma conta e realiza uma
       operação de debito com o valor passado;
    c. transferir(numeroCredito: string, numeroDebito: string, valor: number):
       realiza uma procura por ambas as contas e chama o método transferir de
       uma delas passando a conta de débito e o valor como parâmetros;
    d. Crie 3 métodos: um que retorne a quantidade de contas, outro que retorne
       o total de dinheiro depositado em todas as contas. Por fim, crie um método
       que retorne a média do saldo das contas chamando os dois métodos
       anteriores.
*/

import { Conta } from "./conta";

export class Banco {
    contas: Conta[] = []

    inserir(conta: Conta): boolean {
        if (!this.consultar(conta.numero)) {
            this.contas.push(conta)
            return true
        }
        return false
    } 

    consultar(numero: string): Conta {
        let contaProcurada!: Conta
        for (let c of this.contas) {
            if (c.numero == numero) {
                contaProcurada = c
                break
            }
        }
        return contaProcurada
    }

    consultarIndice(numero: string): number {
        let indiceProcurado: number = -1
        for (let i: number = 0; i < this.contas.length; i++) {
            if (this.contas[i]. numero == numero) {
                indiceProcurado = i
                break
            }
        }
        return indiceProcurado
    }

    alterar(conta: Conta): void {
        let indice = this.consultarIndice(conta.numero)
        if (indice != -1) {
            this.contas[indice] = conta
        }
    }

    excluir(numero: string): void {
        let indice: number = this.consultarIndice(numero)
        if (indice != -1) {
            for (let i: number = 0; i < this.contas.length; i++) {
                this.contas[i] = this.contas[i + 1]
            }
        } this.contas.pop()
    }

    // metodos de conta

    depositar(numero: string, valor: number): void {
        let conta: Conta = this.consultar(numero)
        if (conta != null) {
            conta.depositar(valor)
        }
    }

    sacar(numero: string, valor: number): void {
        let conta: Conta = this.consultar(numero)
        if (conta != null) {
            conta.sacar(valor)
        }
    }

    transferir(numCredito: string, numDebito: string, valor: number): void {
        let cDebito: Conta = this.consultar(numDebito)
        let cCredito: Conta = this.consultar(numCredito)

        if (cDebito && cCredito) {
            cDebito.transferir(cCredito, valor)
        }
    }

    totalContas(): number {
        let total: number = 0
        for (let conta of this.contas) {
            total++
        }
        return total
    }

    totalSaldo(): number {
        let total: number = 0
        for (let conta of this.contas) {
            total += conta.saldo
        }
        return total
    }

    mediaSaldo(): number {
        let totalContas = this.totalContas()
        let totalSaldo = this.totalSaldo()

        return totalSaldo / totalContas
    }
}


let b: Banco = new Banco();
b.inserir(new Conta("11111-2", "ely", 100));
//console.log(b.consultar("11111-2"));
//console.log(b.consultar("22222-2"));

let contaAlterada:  Conta | null= b.consultar("11111-2");

contaAlterada.nome = "ely da silva miranda";

b.alterar(contaAlterada)
//console.log(b.consultar("11111-2"));

b.inserir(new Conta("22222-2", "joao", 200));
b.inserir(new Conta("33333-3", "maria", 300));
b.inserir(new Conta("11111-2", "gabriel", 20))

//console.log(b.contas);
//b.excluir("11111-2");
b.sacar("33333-3", 50)
console.log(b.consultar("555"));

console.log(b.consultarIndice("555"))
console.log(b);
console.log(b.totalContas())
console.log(b.totalSaldo());
console.log(b.mediaSaldo());

