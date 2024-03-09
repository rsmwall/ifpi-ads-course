const input = require('prompt-sync')()

//  Receber valores
const fahrenheit = Number(input('Digite os graus em °F: '))

//  Processamento
const celcius = (5 * fahrenheit - 160) / 9

//  Saída
console.log('\n> Resultado: \n', fahrenheit, '°F em Celcius são', celcius.toFixed(2), '°C!')