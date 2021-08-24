const input = require('prompt-sync')()

//  Receber valores
const base = Number(input('Digite a base do retângulo: '))
const altura = Number(input('Digite a altura do retângulo: '))

//  Processamento
const area = base * altura

//  Saída
console.log('\n> Resultado: \nA área do retângulo é', area, '!')