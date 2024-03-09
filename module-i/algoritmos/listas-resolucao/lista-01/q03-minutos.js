const input = require('prompt-sync')()

// Receber valores
const minutos = Number(input('Quantidade de minutos: '))

//  Processamento
const horas = minutos / 60
const min = minutos % 60

//  Saída
console.log('\n> Resultado: \n', minutos, 'minutos convertidos, são', 
            parseInt(horas), 'horas e', min, 'minutos!')