const input = require('prompt-sync')()

//  Receber valores
const vel_kmh = Number(input('Velocidade (Km/h): '))

//Processamento
const vel_ms = vel_kmh / 3.6

//  Saída
console.log('\n> Resultado: \n', vel_kmh, 'Km/h em m/s são', vel_ms.toFixed(2), 'm/s!')