const input = require('prompt-sync')()

//  Receber valores
const metro = Number(input('Digite a quantidade em metros: '))

//  Processamento
const km = metro / 1000
const m = metro % 1000

//  Saída
console.log('\n> Resultado: \nO resultado é', parseInt(km), 'Km e', m, 'metros!')