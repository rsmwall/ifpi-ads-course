class Conta {
    numero: string;
    nome: string
    saldo: number;

    constructor(numero: string, nome: string, saldo: number) {
        this.numero = numero;
        this.nome = nome;
        this.saldo = saldo;
    }

    depositar(valor: number): void {
        this.saldo = this.saldo + valor;
    }

    sacar(valor: number): boolean {
        if (this.saldo - valor < 0) {
            return false;
        }

        this.saldo = this.saldo - valor;
        return true;
    }

    consultarSaldo(): number {
        return this.saldo;
    }

    transferir(contaDestino: Conta, valor: number): boolean {
        if (!this.sacar(valor)) {
            return false;
        }

        contaDestino.depositar(valor);
        return true;
    }
}

export { Conta };