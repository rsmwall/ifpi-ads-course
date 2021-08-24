/* Escrever um programa que leia três valores inteiros e apresente o menor dos valores
lidos */

const input = require('prompt-sync')()

function main(){
    const num1 = Number(input("Digite o primeiro número: "))
    const num2 = Number(input("Digite o segundo número: "))
    const num3 = Number(input("Digite o terceiro número: "))

    let menor = num1

    if (num2 < num1){
        menor = num2
    }else if (num3 < num1){
        menor = num3
    }

    console.log(`O número menor é ${menor}`)
}

main()