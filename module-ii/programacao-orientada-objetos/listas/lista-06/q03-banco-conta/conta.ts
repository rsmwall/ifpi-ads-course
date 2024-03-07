export class Conta {
    private _numero: string
    private _saldo: number

    constructor(numero: string, saldo: number) {
        this._numero = numero
        this._saldo = saldo
    }

    get numero(): string {
        return this._numero
    }

    get saldo(): number {
        return this._saldo
    }

    public sacar(valor: number): boolean {
        if (this.saldo >= valor) {
            this._saldo -= valor
            return true
        }
        return false
    }

    public depositar(valor: number): void {
        this._saldo += valor
    }

    public consultar(): number {
        return this.saldo
    }

    public transferir(contaDest: Conta, valor: number): boolean {
        if (this.sacar(valor)) {
            contaDest.depositar(valor)
            return true
        }
        return false
    }
}

// let conta: Conta = new Conta("111", 456)
// let conta2: Conta = new Conta("222", 300)
// conta.transferir(conta2, 200)