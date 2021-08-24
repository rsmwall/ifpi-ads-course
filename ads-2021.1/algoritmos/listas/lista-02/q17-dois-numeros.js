const input = require('prompt-sync')()

function main(){

    // entrada
    const num1 = Number(input("Digite o primeiro número: "))
    const num2 = Number(input("Digite o segundo número: "))

    // processamento
    const resto = mod_num(num1, num2)

    // saida
    console.log(resto)

}

function mod_num(num1, num2) {
    
    const resto = num1 % num2
    let resultado
    
    if(resto === 1){
        resultado = `Resto: ${resto}, soma: ${num1 + num2}`
    }else if(resto === 2){
        let n1
        let
         n2

        if(num1 % 2 == 0){
            n1 = 'par'
        }else{
            n1 = 'ímpar'
        }

        if(num2 % 2 == 0){
            n2 = 'par'
        }else{
            n2 = 'ímpar'
        }

        resultado = `Resto: ${resto}, número 1 é ${n1} e número 2 é ${n2}`
    }else if(resto === 3){
        resultado = `Resto: ${resto}, multiplição da soma pelo primeiro: ${(num1 + num2) * num1}`
    }else if(resto === 4){
        if(((num1 + num2) / num2) > 0){
            resultado = `Resto: ${resto}, divisão da soma pelo segundo: ${(num1 + num2) / num2}`
        }else{
            resultado = `Resto: ${resto}, divisão da soma pelo segundo é igual a 0`
        }
    }else{
        resultado = `Resto: ${resto}, ${num1} ao quadrado é ${num1 * num1} e ${num2} ao quadrado é ${num2 * num2}`
    }

    return resultado
}

main()