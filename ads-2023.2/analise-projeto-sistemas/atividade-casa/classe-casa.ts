/*
Rafael Ribeiro da Silva
2021111TADS0189
*/

class Endereco {
    public rua: string
    public cidade: string
    public estado: string

    constructor (rua: string, cidade: string, estado: string) {
        this.rua = rua
        this.cidade = cidade
        this.estado = estado
    }
}

class TipoVidro {
    public nome: string

    constructor (nome: string) {
        this.nome = nome
    }
}

class Acabamento {
    public tipo: string

    constructor (tipo: string) {
        this.tipo = tipo
    }
}

class TipoTelha {
    public nome: string

    constructor (nome: string) {
        this.nome = nome
    }
}

// =================================

class Moradia {
    public area: number
    public endereco: Endereco

    constructor (area: number, endereco: Endereco) {
        this.area = area
        this.endereco = endereco
    }
}

class Espelho {
    public tipoVidro: TipoVidro
    public altura: number
    public largura: number

    constructor (tipoVidro: TipoVidro, altura: number, largura: number) {
        this.tipoVidro = tipoVidro
        this.altura = altura
        this.largura = largura
    }
}

class Parede {
    public altura: number
    public largura: number
    public acabamento: Acabamento

    constructor (altura: number, largura: number, acabamento: Acabamento) {
        this.altura = altura
        this.largura = largura
        this.acabamento = acabamento
    }
}

class Telhado {
    public tipoTelha: TipoTelha
    public area: number

    constructor (tipoTelha: TipoTelha, area: number) {
        this.tipoTelha = tipoTelha
        this.area = area
    }
}

class Casa extends Moradia {
    public telhadoAreaExterna: Telhado
    public telhadoAreaInterna: Telhado
    public paredeQuarto: Parede
    public paredeBanheiro: Parede
    public paredeCozinha: Parede
    public espelhoCorredor: Espelho

    constructor (area: number, endereco: Endereco, telhadoAreaExterna: Telhado, telhadoAreaInterna: Telhado, paredeQuarto: Parede, paredeBanheiro: Parede, paredeCozinha: Parede, espelhoCorredor: Espelho) {
        super(area, endereco)

        this.telhadoAreaExterna = telhadoAreaExterna
        this.telhadoAreaInterna = telhadoAreaInterna
        this.paredeQuarto = paredeQuarto
        this.paredeBanheiro = paredeBanheiro
        this.paredeCozinha = paredeCozinha
        this.espelhoCorredor = espelhoCorredor
    }
}