// QUESTAO 07
export class AplicacaoError extends Error {
    constructor(message: string) {
        super(message)
    }
}

export class ContaInexistenteError extends AplicacaoError {
    constructor(message: string) {
        super(message)
    }
}

export class SaldoInsuficienteError extends AplicacaoError {
    constructor(message: string) {
        super(message)
    }
}

// QUESTAO 10
export class ValorInvalidoError extends AplicacaoError {
    constructor(message: string) {
        super(message)
    }
}

// QUESTAO 12
export class PoupancaInvalidaError extends AplicacaoError {
    constructor(message: string) {
        super(message)
    }
}