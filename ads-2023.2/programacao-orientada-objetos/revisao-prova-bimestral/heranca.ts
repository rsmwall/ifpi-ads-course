class Funcionario {
    private _nome: string
    private _cpf: string
    private _salario: number

    constructor(nome: string, cpf: string, salario: number) {
        this._nome = nome
        this._cpf = cpf
        this._salario = salario
    }

    get nome(): string {
        return this._nome
    }

    get cpf(): string {
        return this._cpf
    }

    get salario(): number {
        return this._salario
    }
}

class Gerente extends Funcionario {
    private _login: string
    private _senha: string

    constructor(nome: string, cpf: string, salario: number, login: string, senha: string) {
        super(nome, cpf, salario)
        this._login = login
        this._senha = senha
    }

    public autentica(login: string, senha: string): boolean {
        return (this._login == login && this._senha == senha)
    }
}