const input = require('prompt-sync')()

//  Receber valores
const segundo = Number(input('Digite a quantidade de segundos: '))

//  Processamento
const minuto_tot = segundo / 60
const segundos = segundo % 60

const horas = minuto_tot / 60
const minutos = minuto_tot % 60

//  Saída
console.log('\n> Resultado: \nO resultado é', parseInt(horas), 'horas,', 
            parseInt(minutos), 'minutos e', parseInt(segundos), 'segundos!')