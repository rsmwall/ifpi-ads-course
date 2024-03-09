const input = require('prompt-sync')()

//  Receber valores
const base = Number(input('Digite a base do triângulo: '))
const altura = Number(input('Digite a altura do triângulo: '))

//  Processamento
const area = (base * altura) / 2

//  Saída
console.log('\n> Resultado: \nA área do triângulo é', area.toFixed(2), '!')