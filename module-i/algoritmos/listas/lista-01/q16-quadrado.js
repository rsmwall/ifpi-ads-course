const input = require('prompt-sync')()

//  Receber valores
const lado = Number(input('Digite o lado do quadrado: '))

//  Processamento
const area = lado * lado

//  Saída
console.log('\n> Resultado: \nA área do quadrado é', area, '!')