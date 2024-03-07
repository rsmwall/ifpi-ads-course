/* Escreva um programa que leia e mostre um vetor de 20 elementos inteiros. A seguir,
conte quantos valores pares existem
no vetor */

const input = require('prompt-sync')()

function main(){
    let vetor = []
    let pares = 0

    for (let i = 0; i < 20; i++) {
        vetor[i] = Number(input("Digite o elemento: "))     
    }

    for (let j = 0; j < vetor.length; j++){
        if(vetor[j] % 2 === 0){
            pares++
        }
    }

    console.log(`A quantidade de valores pares é ${pares}`)
}

main()