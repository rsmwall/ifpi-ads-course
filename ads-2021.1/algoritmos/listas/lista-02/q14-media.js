const input = require('prompt-sync')()

function main(){

    // entrada
    const num1 = Number(input("Digite o primeiro número: "))
    const num2 = Number(input("Digite o segundo número: "))
    const num3 = Number(input("Digite o terceiro número: "))
    const num4 = Number(input("Digite o quarto número: "))
    const num5 = Number(input("Digite o quinto número: "))

    // processamento
    let maior

    const media = (num1 + num2 + num3 + num4 + num5) / 5

    console.log(`O média dos números é ${media}`)

    if (num1 > media){
        console.log(`${num1} é maior que a média`)
    }

    if (num2 > media){
        console.log(`${num2} é maior que a média`)
    }

    if (num3 > media){
        console.log(`${num3} é maior que a média`)
    }

    if (num4 > media){
        console.log(`${num4} é maior que a média`)
    }

    if (num5 > media){
        console.log(`${num5} é maior que a média`)
    }

}

main()