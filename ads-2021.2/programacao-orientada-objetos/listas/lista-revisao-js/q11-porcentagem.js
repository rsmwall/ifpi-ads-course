/* Escreva uma função que dados 2 valores reais p e x calcule e retorne quanto vale p
por cento de x */

const input = require('prompt-sync')()

function main(){
    const p = Number(input("Digite o valor de p: "))
    const x = Number(input("Digite o valor de x: "))

    const porcentagem = (p/100) * x

    console.log(`${p}% de ${x} é igual a ${porcentagem}`)
}

main()