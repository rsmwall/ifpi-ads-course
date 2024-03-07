/*
1. As classes Carro, Veiculo e CarroEletrico são bem semelhantes. Reescreva as
    classes usando herança para que os atributos duplicados não sejam mais
    necessários.
*/

class Veiculo {
    placa: string
    ano: number

    constructor(placa: string, ano: number) {
        this.placa = placa
        this.ano = ano
    }
}

class Carro extends Veiculo {
    modelo: string

    constructor(placa: string, ano: number, modelo: string) {
        super(placa, ano)
        this.modelo = modelo
    }
}

class CarroEletrico extends Carro {
    autonomiaBateria: number

    constructor(placa: string, ano: number, modelo: string, autonomiaBateria: number) {
        super(placa, ano, modelo)
        this.autonomiaBateria = autonomiaBateria
    }
}
