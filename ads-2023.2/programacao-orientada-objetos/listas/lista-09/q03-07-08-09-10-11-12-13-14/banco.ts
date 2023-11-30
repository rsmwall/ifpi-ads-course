import { Conta, Poupanca } from "./conta";
import { ContaInexistenteError, PoupancaInvalidaError } from "./error";

export class Banco {
    private _contas: Conta[] = []

    get contas(): Conta[] {
        return this._contas
    }

    public inserir(conta: Conta): void {

        // QUESTAO 13
        try {
            let contaProcurada = this.consultar(conta.numero)
            console.log(`Conta ${conta.numero}, ja existe.`)
        } catch (error: any) {
            if (conta instanceof Poupanca) {
                this._contas.push(<Poupanca> conta)
            }

            this._contas.push(conta)
        }
    } 

    public consultar(numero: string): Conta {
        let contaProcurada!: Conta
        for (let c of this.contas) {
            if (c.numero == numero) {
                contaProcurada = c
                break
            }
        }

        // QUESTAO 08
        if (!contaProcurada) {
            throw new ContaInexistenteError('Conta Inexistente.')
        }

        return contaProcurada
    }

    private consultarIndice(numero: string): number {
        let indiceProcurado: number = -1
        for (let i: number = 0; i < this.contas.length; i++) {
            if (this.contas[i]. numero == numero) {
                indiceProcurado = i
                break
            }
        }

        // QUESTAO 08
        if (indiceProcurado == undefined) {
            throw new ContaInexistenteError('Conta Inexistente.')
        }

        return indiceProcurado
    }

    public alterar(conta: Conta): void {
        let indice = this.consultarIndice(conta.numero)
        this.contas[indice] = conta
    }

    public excluir(numero: string): void {
        let indice: number = this.consultarIndice(numero)
        if (indice != -1) {
            for (let i: number = 0; i < this.contas.length; i++) {
                this.contas[i] = this.contas[i + 1]
            }
        } this.contas.pop()
    }

    // metodos de conta

    public depositar(numero: string, valor: number): void {
        let conta: Conta = this.consultar(numero)
        conta.depositar(valor)
    }

    public sacar(numero: string, valor: number): void {
        let conta: Conta = this.consultar(numero)
        conta.sacar(valor)
    }

    public transferir(numCredito: string, numDebito: string, valor: number): void {
        let cDebito: Conta = this.consultar(numDebito)
        let cCredito: Conta = this.consultar(numCredito)

        cDebito.transferir(cCredito, valor)
    }

    public totalContas(): number {
        let total: number = 0
        for (let conta of this.contas) {
            total++
        }
        return total
    }

    public totalSaldo(): number {
        let total: number = 0
        for (let conta of this.contas) {
            total += conta.saldo
        }
        return total
    }

    public mediaSaldo(): number {
        let totalContas = this.totalContas()
        let totalSaldo = this.totalSaldo()

        return totalSaldo / totalContas
    }

    public renderJuros(numero: string): void {
        let conta: Conta = this.consultar(numero)

        // QUESTAO 12
        if (!(conta instanceof Poupanca)) {
            throw new PoupancaInvalidaError('Esta conta nao eh do tipo poupanca.')
        }

        (<Poupanca> conta).renderJuros()
    }
}

// let banco: Banco = new Banco()
// banco.inserir(new Conta("1", 200))
// banco.inserir(new Conta("2", 300))
// console.log(banco.consultar("2").saldo)
// banco.excluir("1")
// banco.inserir(new Conta("1", 400))
// banco.depositar("1", 100)
// console.log(banco.consultar("1").saldo)
