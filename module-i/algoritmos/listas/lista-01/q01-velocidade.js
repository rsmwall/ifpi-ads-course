const input = require('prompt-sync')()

//  Receber valores
const vel_ms = Number(input('Velocidade (m/s): '))

//  Processamento
const vel_kmh = vel_ms * 3.6

//  Saída
console.log('\n> Resultado: \n', vel_ms, 'm/s em Km/h são', vel_kmh, 'Km/h!')
