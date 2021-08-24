const input = require('prompt-sync')()

//  Receber valores
const minuto = Number(input('Digite a quantidade de minutos: '))

//  Processamento
const horas_tot = minuto / 60
const minutos = minuto % 60

const dias = horas_tot / 24
const horas = horas_tot % 24

//  Saída
console.log('\n> Resultado: \nO resultado é', parseInt(dias), 'dias,', 
            parseInt(horas), 'horas e', parseInt(minutos), 'minutos!')