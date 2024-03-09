const input = require('prompt-sync')()

function main(){

    // entrada
    const hora1 = Number(input("Digite a primeira quantidade de horas: "))
    const val1 = Number(input("Digite o primeio valor por hora: "))
    const hora2 = Number(input("Digite a segunda quantidade de horas: "))
    const val2 = Number(input("Digite o segundo valor por hora: "))

    // processamento
    const prof1 = hora1 * val1
    const prof2 = hora2 * val2

    if (prof1 > prof2){
        console.log(`O professor 01 tem um salário maior de R$ ${prof1}`)
    }else{
        console.log(`O professor 02 tem um salário maior de R$ ${prof2}`)
    }

}

main()