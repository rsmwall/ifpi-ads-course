const input = require('prompt-sync')()

//  Receber valores
const kilometro = Number(input('Digite a quantidade em Km: '))

//  Processamento
const metro = kilometro * 1000

//  Saída
console.log('\n> Resultado: \n', kilometro, 'Kilometros equivale a', metro, 'metros!')