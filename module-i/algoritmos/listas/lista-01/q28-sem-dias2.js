const input = require('prompt-sync')()

//  Receber valores
const hora = Number(input('Digite a quantidade de horas: '))

//  Processamento
const dias_tot = hora / 24
const horas = hora % 24

const semanas = dias_tot / 7
const dias = dias_tot % 7

//  Saída
console.log('\n> Resultado: \nO resultado é', parseInt(semanas), 'semanas,', 
            parseInt(dias), 'dias e', parseInt(horas), 'horas!')