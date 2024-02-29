const input = require('prompt-sync')()

function main(){

    // entrada
    const opcao = Number(input("Digite a opção (1, 2 ou 3): "))
    const num1 = Number(input("Digite o número 1: "))
    const num2 = Number(input("Digite o número 2: "))
    const num3 = Number(input("Digite o número 3: "))

    // processamento
    if(opcao === 1){
        console.log(`A opção escolhida é ${num1}`)
    }else if(opcao === 2){
        console.log(`A opção escolhida é ${num2}`)
    }else if(opcao === 3){
        console.log(`A opção escolhida é ${num3}`)
    }
}

main()