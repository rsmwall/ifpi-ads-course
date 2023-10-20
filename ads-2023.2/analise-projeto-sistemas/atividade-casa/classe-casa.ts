/*
Rafael Ribeiro da Silva
2021111TADS0189
*/

class Endereco {
    private _rua: string;
    private _cidade: string;
    private _estado: string;

    constructor(rua: string, cidade: string, estado: string) {
        this._rua = rua;
        this._cidade = cidade;
        this._estado = estado;
    }

    public get rua(): string {
        return this._rua;
    }

    public get cidade(): string {
        return this._cidade;
    }

    public get estado(): string {
        return this._estado;
    }
}

class TipoVidro {
    private _nome: string;

    constructor(nome: string) {
        this._nome = nome;
    }

    public get nome(): string {
        return this._nome;
    }
}

class Acabamento {
    private _tipo: string;

    constructor(tipo: string) {
        this._tipo = tipo;
    }

    public get tipo(): string {
        return this._tipo;
    }
}

class TipoTelha {
    private _nome: string;

    constructor(nome: string) {
        this._nome = nome;
    }

    public get nome(): string {
        return this._nome;
    }
}

class Moradia {
    private _area: number;
    private _endereco: Endereco;

    constructor(area: number, endereco: Endereco) {
        this._area = area;
        this._endereco = endereco;
    }

    public get area(): number {
        return this._area;
    }

    public get endereco(): Endereco {
        return this._endereco;
    }
}

class Espelho {
    private _tipoVidro: TipoVidro;
    private _altura: number;
    private _largura: number;

    constructor(tipoVidro: TipoVidro, altura: number, largura: number) {
        this._tipoVidro = tipoVidro;
        this._altura = altura;
        this._largura = largura;
    }

    public get tipoVidro(): TipoVidro {
        return this._tipoVidro;
    }

    public get altura(): number {
        return this._altura;
    }

    public get largura(): number {
        return this._largura;
    }
}

class Parede {
    private _altura: number;
    private _largura: number;
    private _acabamento: Acabamento;

    constructor(altura: number, largura: number, acabamento: Acabamento) {
        this._altura = altura;
        this._largura = largura;
        this._acabamento = acabamento;
    }

    public get altura(): number {
        return this._altura;
    }

    public get largura(): number {
        return this._largura;
    }

    public get acabamento(): Acabamento {
        return this._acabamento;
    }
}

class Telhado {
    private _tipoTelha: TipoTelha;
    private _area: number;

    constructor(tipoTelha: TipoTelha, area: number) {
        this._tipoTelha = tipoTelha;
        this._area = area;
    }

    public get tipoTelha(): TipoTelha {
        return this._tipoTelha;
    }

    public get area(): number {
        return this._area;
    }
}

class Casa extends Moradia {
    private _telhadoAreaExterna: Telhado;
    private _telhadoAreaInterna: Telhado;
    private _paredeQuarto: Parede;
    private _paredeBanheiro: Parede;
    private _paredeCozinha: Parede;
    private _espelhoCorredor: Espelho;

    constructor(
        area: number,
        endereco: Endereco,
        telhadoAreaExterna: Telhado,
        telhadoAreaInterna: Telhado,
        paredeQuarto: Parede,
        paredeBanheiro: Parede,
        paredeCozinha: Parede,
        espelhoCorredor: Espelho
    ) {
        super(area, endereco);

        this._telhadoAreaExterna = telhadoAreaExterna;
        this._telhadoAreaInterna = telhadoAreaInterna;
        this._paredeQuarto = paredeQuarto;
        this._paredeBanheiro = paredeBanheiro;
        this._paredeCozinha = paredeCozinha;
        this._espelhoCorredor = espelhoCorredor;
    }

    public get telhadoAreaExterna(): Telhado {
        return this._telhadoAreaExterna;
    }

    public get telhadoAreaInterna(): Telhado {
        return this._telhadoAreaInterna;
    }

    public get paredeQuarto(): Parede {
        return this._paredeQuarto;
    }

    public get paredeBanheiro(): Parede {
        return this._paredeBanheiro;
    }

    public get paredeCozinha(): Parede {
        return this._paredeCozinha;
    }

    public get espelhoCorredor(): Espelho {
        return this._espelhoCorredor;
    }
}
