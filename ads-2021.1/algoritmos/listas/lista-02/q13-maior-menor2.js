const input = require('prompt-sync')()

function main(){

    // entrada
    const num1 = Number(input("Digite o primeiro número: "))
    const num2 = Number(input("Digite o segundo número: "))
    const num3 = Number(input("Digite o terceiro número: "))
    const num4 = Number(input("Digite o quarto número: "))
    const num5 = Number(input("Digite o quinto número: "))

    // processamento
    let maior = num1
    let menor = num1

    if (num2 > maior){
        maior = num2
    }else if (num2 < menor){
        menor = num2
    }

    if (num3 > maior){
        maior = num3
    }else if (num3 < menor){
        menor = num3
    }
    
    if (num4 > maior){
        maior = num4
    }else if (num4 < menor){
        menor = num4
    }

    if (num5 > maior){
        maior = num5
    }else if (num5 < menor){
        menor = num5
    }

    // saida
    console.log(`O maior número é ${maior}`)
    console.log(`O menor número é ${menor}`)

}

main()