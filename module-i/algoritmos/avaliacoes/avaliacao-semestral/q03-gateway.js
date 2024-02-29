const { obter_numero, obter_inteiro, taxas } = require("./utils")

function main(){

    const valor_compra = obter_numero("Digite o valor da compra (R$): ")
    const dias = obter_inteiro("Digite o número de dias para receber (2-31): ")
    const pagamento = obter_inteiro("Digite 1 para à vista ou 2 até 12 para parcelas: ")

    valores = taxas(valor_compra, dias, pagamento)
    const taxa = valores[0]
    const liquido = valores[1]
    const forma_pagamento = valores[2]

    console.log(`\n----- GATEWAY -----\n\nValor da compra: R$${valor_compra}\nForma de pagamento: ${forma_pagamento}\nValor taxa: R$${taxa.toFixed(2)}\nValor líquido: R$${liquido.toFixed(2)}\nQtd. de dias: ${dias} dias`)
}

main()