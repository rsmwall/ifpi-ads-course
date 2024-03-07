/* Escreva uma função que dados um inteiro n e um inteiro d, onde 0 < d ≤ 9, devolve
quantas vezes o dígito d aparece no número n. Por exemplo: se n = 7677 e d = 7, a
função deve retornar 3 */

const input = require('prompt-sync')()

function main(){
    const n = input("Digite um valor: ")
    const d = input("Digite um numero para contar que seja > 0 e <= 9: ")

    let final = 0

    for (let i = 0; i < n.length; i++) {
        let caractere = n[i]
        
        if(caractere === d){
            final++
        }
    }

    console.log(`A quantidade de números iguais é ${final}`)
}

main()