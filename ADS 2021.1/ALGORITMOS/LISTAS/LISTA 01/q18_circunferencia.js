const input = require('prompt-sync')()

//  Receber valores
const raio = Number(input('Digite o raio da circunferência: '))

//  Processamento
const circ = 2 * Math.PI * raio

//  Saída
console.log('\n> Resultado: \nA circunferência é', circ.toFixed(2), '!')