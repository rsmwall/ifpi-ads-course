/*
1. As classes Carro, Veiculo e CarroEletrico são bem semelhantes. Reescreva as
    classes usando herança para que os atributos duplicados não sejam mais
    necessários.
*/

class Veiculo {
    placa: string
    ano: number
}

class Carro extends Veiculo {
    modelo: string
}

class CarroEletrico extends Carro {
    autonomiaBateria: number
}