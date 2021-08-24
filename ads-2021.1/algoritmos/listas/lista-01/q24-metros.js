const input = require('prompt-sync')()

//  Receber valores
const metro = Number(input('Digite a quantidade em metros: '))

//  Processamento
const centimetro = metro * 100

//  Saída
console.log('\n> Resultado: \n', metro, 'metros equivale a', centimetro, 'centímetros!')