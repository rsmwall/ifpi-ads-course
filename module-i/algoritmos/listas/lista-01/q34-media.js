const input = require('prompt-sync')()

//  Receber valores
const num1 = Number(input('Digite o primeiro número: '))
const num2 = Number(input('Digite o segundo número: '))
const num3 = Number(input('Digite o terceiro número: '))

//  Processamento
const media = (num1 + num2 + num3) / 3

//  Saída
console.log('\n> Resultado: \nA média é', media.toFixed(2))