const input = require('prompt-sync')()

//  Receber valores
const nota1 = Number(input('Digite a primeira nota: '))
const peso1 = Number(input('Digite o primeiro peso: '))
const nota2 = Number(input('Digite a segunda nota: '))
const peso2 = Number(input('Digite o segundo peso: '))
const nota3 = Number(input('Digite a terceira nota: '))
const peso3 = Number(input('Digite o terceiro peso: '))

//  Processamento
const media_pond = ((nota1 * peso1) + (nota2 * peso2) + (nota3 * peso3)) / (peso1 + peso2 + peso3)

//  Saída
console.log('\n> Resultado: \nA média ponderada é', media_pond.toFixed(1), '!')