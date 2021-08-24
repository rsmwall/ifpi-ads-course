const input = require('prompt-sync')()

//  Receber valores
const num1 = Number(input('Digite o primeiro número: '))
const num2 = Number(input('Digite o segundo número: '))
const num3 = Number(input('Digite o terceiro número: '))

//  Processamento
const soma = num1 + num2
const dif = num2 - num3

//  Saída
console.log('\n> Resultado: \nA soma de', num1, 'e', num2, 'é', soma, 
            'e a diferença de', num2, 'e', num3, 'é', dif,'!')