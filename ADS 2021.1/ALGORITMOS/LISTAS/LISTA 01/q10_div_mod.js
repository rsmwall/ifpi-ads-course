const input = require('prompt-sync')()

//  Receber valores
const num1 = Number(input('Digite o primeiro número: '))
const num2 = Number(input('Digite o segundo número: '))

//  Processamento
const divisao = num1 / num2
const modulo = num1 % num2

//  Saída
console.log('\n> Resultado: \nO quociente de', num1, 'dividido por', num2, 'é', 
            divisao.toFixed(2), 'e o resto é', modulo, '!')