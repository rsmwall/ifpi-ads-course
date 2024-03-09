const input = require('prompt-sync')()

//  Receber valores
const inteiro = input('Digite um número de 3 algarismos: ')

//  Processamento
const num1 = parseInt(inteiro[0])
const num2 = parseInt(inteiro[1])
const num3 = parseInt(inteiro[2])
const soma = num1 + num2 + num3

//  Saída
console.log("\n> Resultado: \nA soma dos dígitos de '", inteiro, "' é", soma, "!")