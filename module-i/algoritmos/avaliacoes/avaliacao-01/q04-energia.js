const input = require('prompt-sync')()

function main(){

    // entrada
    const leit_anterior = Number(input("Digite a leitura anterior em KWh: "))
    const leit_atual = Number(input("Digite a leitura atual em KWh: "))

    // processamento
    const consumo = consumo_mensal(leit_anterior, leit_atual)
    valor_faixa(consumo)

}

function consumo_mensal(anterior, atual){

    const consumo = atual - anterior
    return consumo

}

function valor_faixa(consumo){

    let valor_imp
    let faixa
    let valor
    let ilum_publica
    let icms
    let pis
    let bandeira
    let valor_final

    if(consumo <= 30){
        
        valor = 0.00
        icms = 0.00
        pis = 0.00
        bandeira = 0.00
        ilum_publica = 0.00

        console.log("\n###### Talão de Energia ######\n\n",
                    "Consumo:", consumo, "KWh\n",
                    "Valor Faturado: R$", valor.toFixed(2), "\n",
                    "Bandeira: R$", bandeira.toFixed(2), "(Amarela 2)\n",
                    "ICMS: R$", icms.toFixed(2), "\n",
                    "PIS/CONFIS: R$", pis.toFixed(2), "\n",
                    "Taxa de Iluminação: R$", ilum_publica.toFixed(2))

    }else if(consumo <= 100){
        
        valor = consumo * 0.59
        icms = 0.25 * valor
        pis = 0.15 * valor
        valor_imp = valor + icms + pis
        bandeira = Math.trunc(consumo / 100) * 8 

        if(consumo <= 80){

            // Não paga taxa por iluminação pública
            ilum_publica = 0.00
            valor_final = valor_imp + bandeira

            console.log("\n###### Talão de Energia ######\n\n",
                    "Consumo:", consumo, "KWh\n",
                    "Valor Faturado: R$", valor_final.toFixed(2), "\n",
                    "Bandeira: R$", bandeira.toFixed(2), "(Amarela 2)\n",
                    "ICMS: R$", icms.toFixed(2), "\n",
                    "PIS/CONFIS: R$", pis.toFixed(2), "\n",
                    "Taxa de Iluminação: R$", ilum_publica.toFixed(2))
        }else{

            // Pagar taxa de iluminação pública
            ilum_publica = valor * 0.06
            valor_final = valor_imp + ilum_publica + bandeira
            
            console.log("\n###### Talão de Energia ######\n\n",
                    "Consumo:", consumo, "KWh\n",
                    "Valor Faturado: R$", valor_final.toFixed(2), "\n",
                    "Bandeira: R$", bandeira.toFixed(2), "(Amarela 2)\n",
                    "ICMS: R$", icms.toFixed(2), "\n",
                    "PIS/CONFIS: R$", pis.toFixed(2), "\n",
                    "Taxa de Iluminação: R$", ilum_publica.toFixed(2))
        }

    }else{
        
        valor = consumo * 0.75
        icms = 0.25 * valor
        pis = 0.15 * valor
        valor_imp = valor + icms + pis
        bandeira = Math.trunc(consumo / 100) * 8 

        // Pagar taxa de iluminação pública
        ilum_publica = valor * 0.06
        valor_final = valor_imp + ilum_publica + bandeira
        
        console.log("\n###### Talão de Energia ######\n\n",
                    "Consumo:", consumo, "KWh\n",
                    "Valor Faturado: R$", valor_final.toFixed(2), "\n",
                    "Bandeira: R$", bandeira.toFixed(2), "(Amarela 2)\n",
                    "ICMS: R$", icms.toFixed(2), "\n",
                    "PIS/CONFIS: R$", pis.toFixed(2), "\n",
                    "Taxa de Iluminação: R$", ilum_publica.toFixed(2))

    }

    return faixa

}

main()