const input = require('prompt-sync')()

//  Receber valores
const dia = Number(input('Digite a quantidade de dias: '))

//  Processamento
const meses_tot = dia / 30
const dias = dia % 30

const anos = meses_tot / 12
const meses = meses_tot % 12

//  Saída
console.log('\n> Resultado: \nA idade é', parseInt(anos), 'anos,', 
            parseInt(meses), 'meses e', parseInt(dias), 'dias!')