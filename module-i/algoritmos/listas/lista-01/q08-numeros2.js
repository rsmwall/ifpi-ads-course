const input = require('prompt-sync')()

//  Receber valores
const num1 = Number(input('Digite o primeiro número: '))
const num2 = Number(input('Digite o segundo número: '))

//  Processamento
const divisao = (num1 + num2) / (num1 - num2)

//  Saída
console.log('\n> Resultado: \n A divisão da soma de', num1, 'e', num2, 
            'por sua subtração é', divisao.toFixed(2), '!')