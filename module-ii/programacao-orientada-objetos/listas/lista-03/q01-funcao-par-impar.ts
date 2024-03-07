/*
1. Crie uma função que recebe como parâmetro um número e retorna true se o
   número for par e false se for ímpar.
*/

function parImpar(num:number) {
    let resultado:boolean
    resultado = false
    if (num % 2 == 0) {
        resultado = true
    }
    return resultado
}

console.log(parImpar(7));
