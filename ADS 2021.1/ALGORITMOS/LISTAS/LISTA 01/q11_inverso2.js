const input = require('prompt-sync')()

//  Receber valores
const int = input('Digite um número de 3 dígitos: ')

//  Processamento
var inteiro = int.split('').reverse().join('')

//  Saída
console.log("\n> Resultado: \nOs dígitos invertidos é'", inteiro, "'!")