/* Escreva um programa que possua uma variável com um número inteiro e mostre seu
antecessor e sucessor */

const input = require('prompt-sync')()

function main(){
    const a = Number(input("Digite um número: "))

    console.log(`O antecessor de ${a} é ${a-1} e o sucessor é ${a+1}`)
}

main()
