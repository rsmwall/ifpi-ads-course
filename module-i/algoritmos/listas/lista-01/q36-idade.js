const input = require('prompt-sync')()

//  Receber valores
const ano = Number(input('Digite a quantidade de anos: '))
const mes = Number(input('Digite a quantidade de meses: '))
const dia = Number(input('Digite a quantidade de dias: '))

//  Processamento
const meses = mes + (ano * 12)
const dias = dia + (meses * 30)

//  Saída
console.log('\n> Resultado: \nSão', dias, 'dias de idade!')