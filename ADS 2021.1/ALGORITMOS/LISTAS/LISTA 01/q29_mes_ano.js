const input = require('prompt-sync')()

//  Receber valores
const mes = Number(input('Digite a quantidade de meses: '))

//  Processamento
const anos = mes / 12
const meses = mes % 12

//  Saída
console.log('\n> Resultado: \nO resultado é', parseInt(anos), 'anos e', 
            parseInt(meses), 'meses!')