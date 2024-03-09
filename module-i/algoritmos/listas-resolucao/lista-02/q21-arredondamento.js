const input = require('prompt-sync')()

function main(){

    // entrada
    const num = Number(input("Digite o número: "))

    // processamento
    const inteiro = Math.round(num)

    // saida
    console.log(`O arredondamento fica: ${inteiro}`)
}

main()