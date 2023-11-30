// Try-catch

try {
    let result = 10 / 0
    console.log(result)
} catch (error) {
    console.log('Ocorreu um erro: ', error)
}

// Throw

function verificaIdade(idade: number) {
    if (idade <= 0) {
        throw new Error('A idade deve ser maior que zero.')
    }
    return `A idade eh ${idade} anos.`
}

try {
    console.log(verificaIdade(-5))
} catch (error: any) {
    console.log('Erro: ', error.message)
}

// Type Guard

interface Cachorro {
    nome: string
    latir(): void
}

interface Gato {
    nome: string
    miar(): void
}

function ehCachorro(animal: Cachorro | Gato): animal is Cachorro {
    return 'latir' in animal
}

let animal: Cachorro | Gato = {
    nome: 'Rex',
    latir() {
        console.log('au au')
    }
}

if (ehCachorro(animal)) {
    animal.latir()
} else {
    console.log('Este animal nao eh um cachorro')    
}