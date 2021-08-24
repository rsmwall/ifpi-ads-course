const input = require('prompt-sync')()

//  Receber valores
const real = Number(input('Digite o valor em real: '))

//  Processamento
const porcentagem = 0.70 * real

//  Saída
console.log('\n> Resultado: \n70% de R$', real.toString().replace(".", ","), 
            'são R$', porcentagem.toFixed(2).toString().replace(".", ","), '!')