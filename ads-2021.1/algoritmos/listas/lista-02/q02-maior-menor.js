const input = require('prompt-sync')()

function main(){

    // entrada
    const num1 = Number(input("Digite o primeiro número: "))
    const num2 = Number(input("Digite o segundo número: "))

    // processamento
    let maior
    let menor

    if (num1 > num2){
        maior = num1
        menor = num2
    }else{
        maior = num2
        menor = num1
    }

    // saida
    console.log(`O número maior é ${maior} e o número menor é ${menor}`)
}

main()