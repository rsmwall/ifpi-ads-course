const input = require('prompt-sync')()

function main(){
    
     // entrada
     const num1 = Number(input("Digite o primeiro número: "))
     const num2 = Number(input("Digite o segundo número: "))
     const num3 = Number(input("Digite o terceiro número: "))

     // processamento
    const maior = Math.max(num1, num2, num3)

    // saida
    console.log(`O maior número é ${maior}`)
}

main()