const input = require('prompt-sync')()

function main(){
    const valor_dolar = Number(input('Valor atual do dólar: '))
    const quant_dolar = Number(input('Quantidade de dólares: '))

    const real = valor_dolar * quant_dolar;

    console.log('O valor é R$', real.toFixed(2).toString().replace(".",","), 'na cotação atual!')
}

main()