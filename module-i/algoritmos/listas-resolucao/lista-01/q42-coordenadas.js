const input = require('prompt-sync')()

//  Receber valores
const x1 = Number(input('Digite o x1: '))
const y1 = Number(input('Digite o y1: '))
const x2 = Number(input('Digite o x2: '))
const y2 = Number(input('Digite o y2: '))

//  Processamento
const d = Math.sqrt(((x2 - x1) * (x2 - x1)) + ((y2 - y1) * (y2 - y1)))

//  Saída
console.log('\n> Resultado: \nO valor de D é', d.toFixed(2), '!')