const input = require('prompt-sync')()

//  Receber valores
const inteiro = input('Digite um número de 4 algarismos: ')

//  Processamento
const num1 = parseInt(inteiro[0])
const num2 = parseInt(inteiro[1])
const num3 = parseInt(inteiro[2])
const num4 = parseInt(inteiro[3])
const soma = num1 + num2 + num3 + num4

//  Saída
console.log("\n> Resultado: \nA soma dos dígitos de '", inteiro, "' é", soma, "!")