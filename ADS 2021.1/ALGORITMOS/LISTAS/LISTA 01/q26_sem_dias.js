const input = require('prompt-sync')()

//  Receber valores
const dia = Number(input('Digite a quantidade de dias: '))

//  Processamento
const semana = dia / 7
const dias = dia % 7

//  Saída
console.log('\n> Resultado: \nO resultado é', parseInt(semana), 'semanas e', dias, 'dias!')