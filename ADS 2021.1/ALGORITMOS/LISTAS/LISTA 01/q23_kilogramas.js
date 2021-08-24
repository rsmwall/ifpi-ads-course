const input = require('prompt-sync')()

//  Receber valores
const kilograma = Number(input('Digite a quantidade em Kg: '))

//  Processamento
const grama = kilograma * 1000

//  Saída
console.log('\n> Resultado: \n', kilograma, 'Kilogramas equivale a', grama, 'gramas!')