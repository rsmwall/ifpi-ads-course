const input = require('prompt-sync')()

//  Receber valores
const hora = Number(input('Quantidade de horas: '))
const min = Number(input('Quantidade de minutos: '))

//  Processamento
const hora_min = hora * 60
const resultado = hora_min + min

//  Saída
console.log('\n> Resultado: \nA quantidade de Horas e minutos é', resultado, 'minutos!')