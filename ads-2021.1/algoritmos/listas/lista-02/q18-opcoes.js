const input = require('prompt-sync')()

function main(){

    // entrada
    console.log("##### ESCOLHA UMA OPÇÃO #####\n1. Adição\n2. Subtração\n3. Multiplicação\n4. Divisão\n")

    const opcao = Number(input("Opção: "))
    const num1 = Number(input("Digite o primeiro número: "))
    const num2 = Number(input("Digite o segundo número: "))

    // processamento
    if(opcao === 1){
        console.log(`Opção: ${opcao}, a soma é igual a ${num1 + num2}`)
    }else if(opcao === 2){
        console.log(`Opção: ${opcao}, a subtração é igual a ${num1 - num2}`)
    }else if(opcao === 3){
        console.log(`Opção: ${opcao}, a multiplicação é igual a ${num1 * num2}`)
    }else if(opcao === 4){
        console.log(`Opção: ${opcao}, a divisão é igual a ${num1/ num2}`)
    }else{
        console.log("Opção inválida")
    }
}

main()