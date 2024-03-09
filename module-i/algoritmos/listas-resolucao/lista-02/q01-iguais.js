const input = require('prompt-sync')()

function main(){

    // entrada
    const num1 = Number(input("Digite o primeiro número: "))
    const num2 = Number(input("Digite o segundo número: "))
    const num3 = Number(input("Digite o terceiro número: "))

    // processamento
    if (num1 === num2 && num2 === num3){
        console.log("Os 3 números são iguais:", num1, num2, num3)
    }else if (num1 === num2){
        console.log("2 números são iguais:", num1, num2)
    }else if (num1 === num3){
        console.log("2 números são iguais:", num1, num3)
    }else if (num2 === num3){
        console.log("2 números são iguais:", num2, num3)
    }
}

main()
