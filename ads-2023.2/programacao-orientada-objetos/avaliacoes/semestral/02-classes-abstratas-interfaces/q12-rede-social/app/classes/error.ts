export class AplicacaoError extends Error {
    constructor(message: string) {
        super(message)
    }
}

export class PerfilInexistenteError extends AplicacaoError {
    constructor(message: string) {
        super(message)
    }
}

export class SeguirError extends AplicacaoError {
    constructor(message: string) {
        super(message)
    }
}

export class BloquearError extends AplicacaoError {
    constructor(message: string) {
        super(message)
    }
}
