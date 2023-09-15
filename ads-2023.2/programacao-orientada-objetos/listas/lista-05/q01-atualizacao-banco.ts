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

import {Conta} from './conta';
/*
let conta1: Conta = new Conta("1", 0);
let banco: Conta[] = [];
banco[0] = conta1;

banco.push(new Conta("2", 100));
console.log(banco[1].consultarSaldo());

console.log(banco[10].saldo);
*/

class Banco {
    contas: Conta[] = []

    inserir(conta: Conta): void {

        // 1.a - alterar para impedir cadastro duplicado
        let numeroBuscado = this.consultar(conta.numero);
        if (numeroBuscado == undefined) {
            this.contas.push(conta);
        } else {
            console.log("A conta ja existe!");
        }
    }

    // 1.d - criar 3 metodos: qtdContas, totalSaldo, mediaSaldo
    qtdContas(): number {
        return this.contas.length
    }

    totalSaldo(): number {
        let saldoTot: number = 0;
        for (let i: number = 0; i < this.contas.length; i++) {
            saldoTot += this.contas[i].saldo
        }
        return saldoTot
    }

    mediaSaldo(): number {
        return this.totalSaldo() / this.qtdContas()
    }

    // ------------------------------------------------------

    consultar(numero: string): Conta {
        let contaProcurada!: Conta;

        for (let i: number = 0; i < this.contas.length; i++) {
            if (this.contas[i].numero == numero) {
                contaProcurada = this.contas[i];
                break;
            }
        }

        return contaProcurada;
    }

    consultarPorIndice(numero: string): number {
        let indiceProcurado: number = -1;

        for (let i: number = 0; i < this.contas.length; i++) {
            if (this.contas[i].numero == numero) {
                indiceProcurado = i;
                break;
            }
        }

        return indiceProcurado;
    }

    alterar(conta: Conta): void {
        let indiceProcurado: number =
                this.consultarPorIndice(conta.numero);
        
        if (indiceProcurado != -1) {
            this.contas[indiceProcurado] = conta;
        }
    }

    excluir(numero: string): void {
        let indiceProcurado = this.consultarPorIndice(numero);

        if (indiceProcurado != -1) {
            for (let i = indiceProcurado; i < this.contas.length; i++) {
                this.contas[i] = this.contas[i+1];
            }
            this.contas.pop();
            
        }
    }

    // 1.b - debitar da conta
    sacar(numero: string, valor: number): void {
        let indiceProcurado: number = this.consultarPorIndice(numero);

        if (indiceProcurado != -1) {
            let conta: Conta = this.contas[indiceProcurado];
            conta.sacar(valor);
        }
    }

    // 1.c - metodo transferir
    transferir(numeroPagador: string, numeroRecebedor: string, valor: number) {
        let indicePagador: number = this.consultarPorIndice(numeroPagador)
        let indiceRecebedor: number = this.consultarPorIndice(numeroRecebedor)
        
        if (indicePagador != -1 && indiceRecebedor != -1) {
            let contaPag: Conta = this.contas[indicePagador]
            let contaRec: Conta = this.contas[indiceRecebedor]

            contaPag.transferir(contaRec, 20)
        }
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

console.log(b.consultarPorIndice("555"))
console.log(b);
console.log(b.qtdContas())
console.log(b.totalSaldo());
console.log(b.mediaSaldo());

