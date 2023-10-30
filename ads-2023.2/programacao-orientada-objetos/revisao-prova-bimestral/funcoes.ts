function saudacao(): void {
    console.log("ola mundo")
}

function saudacao2(nome: string): void {
    console.log(`Ola, ${nome}`)
}

function add(x: number, y: number): number {
    return x + y
}

let a = function sub(x: number, y: number) {
    return x - y
}

saudacao()
saudacao2("Rafael")
console.log(add(2, 5))
console.log(a(5, 3))

function nomeCompleto(nome: string, sobrenome: string = "Silva"): string {
    return nome + " " + sobrenome
}

console.log(nomeCompleto("Rafael"))

function nomeComp(nome: string, sobrenome?: string): string {
    if (sobrenome) {
        return nome + " " + sobrenome
    }
    return nome
}

console.log(nomeComp("Rafael"))

function rest(...numeros: number[]): number {
    let soma: number = 0
    for (let numero of numeros) {
        soma += numero
    }
    return soma
}

console.log(rest(3, 6, 7, 2, 7))
