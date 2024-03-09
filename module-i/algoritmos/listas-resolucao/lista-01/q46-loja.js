const input = require('prompt-sync')()

//  Receber valores
const preco = Number(input('Digite o valor total (R$): '))

//  Processamento
const valores = Math.trunc(preco / 3)

//  Saída
console.log('\n> Resultado: \nSerão 3 parcelas de R$', valores, '!')