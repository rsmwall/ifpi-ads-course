const input = require('prompt-sync')()

//  Receber valores
const valor_carro = Number(input('Digite o valor do carro (R$): '))

//  Processamento
const distribuidor = 0.25 * valor_carro
const impostos = 0.45 * valor_carro
const total = valor_carro + distribuidor + impostos

//  Saída
console.log('\n> Resultado: \nO valor final do carro é R$', 
            total.toFixed(2).toString().replace(".", ","), '!')