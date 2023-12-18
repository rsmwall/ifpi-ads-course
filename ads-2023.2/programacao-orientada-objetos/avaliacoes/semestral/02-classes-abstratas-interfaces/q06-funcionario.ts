/**
6. Implemente as classes Funcionario, Gerente e Diretor conforme o diagrama
exposto em sala:
    a. A classe funcionário deve ser abstrata e o método getBonificacao()
    abstrato;
    b. Na classe gerente o método bonificação deve retornar 40% do salário;
    c. Em Diretor a bonificação deve ser 60% do salário.
    d. Por fim, na classe presidente o método deve retornar 100% do salário + R$
    1.000,00.
 */

abstract class Funcionario {
    constructor(private _salario: number) {}

    abstract getBonificacao(): number

    public getSalario(): number {
        return this._salario
    }
}

class Gerente extends Funcionario {
    constructor(salario: number) {super(salario)}
    public getBonificacao(): number {
        return this.getSalario() * 0.4
    }
}

class Diretor extends Funcionario {
    constructor(salario: number) {super(salario)}
    public getBonificacao(): number {
        return this.getSalario() * 0.6
    }
}

class Presidente extends Funcionario {
    constructor(salario: number) {super(salario)}
    public getBonificacao(): number {
        return this.getSalario() + 1000
    }
}