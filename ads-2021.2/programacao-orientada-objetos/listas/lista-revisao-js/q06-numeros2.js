/* Escreva um programa que leia uma sequência de números inteiros terminada por –1 e
imprima na tela a soma e a média aritmética destes números. Obs: o valor –1 é
somente um terminador e não deve ser considerado nos cálculos */

const input = require('prompt-sync')()

function main(){
    let num = Number(input("Digite um número: "))
    let num1 = 0

    if(num != -1){
        for (num; num != -1;) {
            num1 += num
            num = Number(input("Digite um número: "))         
        }

        console.log(`O valor da soma é ${num1}`)
    }else{
        console.log("Seu primeiro número foi -1")
    }
}

main()