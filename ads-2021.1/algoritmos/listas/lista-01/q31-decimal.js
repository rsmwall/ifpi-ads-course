const input = require('prompt-sync')()

//  Receber valores
const binario = input('Digite o binário de 4 dígitos: ')

//  Processamento
const decimal = parseInt(binario, 2)

//  Saída
console.log('\n> Resultado: \n', binario, 'em decimal é', decimal, '!')