const input = require('prompt-sync')()

//  Receber valores
const valor_dolar = Number(input('Valor atual do dólar: '))
const quant_dolar = Number(input('Quantidade de dólares: '))

//  Processamento
const real = valor_dolar * quant_dolar;

//  Saída
console.log('\n> Resultado: \nUS$', quant_dolar.toFixed(2).toString().replace(".", ","), 
            ', são aproximadamente R$', real.toFixed(2).toString().replace(".",","), 'na cotação atual!')