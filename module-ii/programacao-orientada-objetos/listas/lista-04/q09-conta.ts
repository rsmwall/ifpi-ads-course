class Conta {
    numero: string
    saldo: number

    constructor(numero: string, saldo: number) {
        this.numero = numero
        this.saldo = saldo
    }

    sacar(valor: number): boolean {
        if (this.saldo >= valor) {
            this.saldo -= valor
            return true
        }
        return false
    }

    depositar(valor: number): void {
        this.saldo += valor
    }

    consultar(): number {
        return this.saldo
    }

    transferir(contaDest: Conta, valor: number): boolean {
        if (this.sacar(valor)) {
            contaDest.depositar(valor)
            return true
        }
        return false
    }
}

let conta: Conta = new Conta("111", 456)
let conta2: Conta = new Conta("222", 300)
conta.transferir(conta2, 200)