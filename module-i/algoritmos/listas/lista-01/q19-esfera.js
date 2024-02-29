const input = require('prompt-sync')()

//  Receber valores
const raio = Number(input('Digite o raio da esfera: '))

//  Processamento
const volume = (4 * Math.PI * Math.pow(raio, 3))

// Saída
console.log('\n> Resultado: \nO volume da esfera é', volume.toFixed(2), '!')