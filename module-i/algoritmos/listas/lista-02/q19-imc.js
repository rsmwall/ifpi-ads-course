const input = require('prompt-sync')()

function main(){

    // entrada
    const altura = Number(input("Digite a altura (m): "))
    const peso = Number(input("Digite o peso (Kg): "))

    // processamento
    const situacao = imc_calc(peso, altura)

    // saida
    console.log(situacao)
}

function imc_calc(peso, altura){

    const imc = peso / (altura * altura)
    let situacao

    if(imc < 25){
        situacao = `IMC: ${imc} - Normal`
    }else if(imc >= 25 && imc <= 30){
        situacao = `IMC: ${imc} - Obesidade`
    }else{
        situacao = `IMC: ${imc} - Obesidade Mórbida`
    }

    return situacao
}

main()