const input = require('prompt-sync')()

//  Receber valores
const celcius = Number(input('Digite os graus em °C: '))

//  Processamento
const fahrenheit = (9 * celcius + 160) / 5

//  Saída
console.log('\n> Resultado: \n', celcius, '°C em Fahrenheit são', fahrenheit.toFixed(2), '°F!')