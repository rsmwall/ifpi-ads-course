const input = require('prompt-sync')()

function main(){

    // entrada
    const num = Number(input("Digite um número: "))

    // processamento
    if(num % 2 == 0){
        console.log("É par")
    }else{
        console.log("É ímpar")
    }
}

main()