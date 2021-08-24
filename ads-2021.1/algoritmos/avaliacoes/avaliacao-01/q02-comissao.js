const input = require('prompt-sync')()

function main(){

    // entrada
    const nome = input("Digite o nome do funcionário: ")
    const valor_vendas = Number(input("Digite o valor das vendas do funcionário (R$): "))
    const salario = 1100

    // processamento
    const salario_final = salario_calc(valor_vendas, salario) 

    // saida
    console.log(`Nome: ${nome}\n${salario_final}`)

}

function salario_calc(vendas, fixo){

    let final
    let valor_comissao
    let comissao
    let sal_final

    if(vendas < 5000){
        // sem comissão
        final = fixo
    }else if(vendas >= 5000 && vendas < 10000){
        valor_comissao = vendas - 5000
        comissao = valor_comissao * 0.05

        sal_final = comissao + fixo

        final = `Salário: R$ ${fixo}\nComissão: R$ ${comissao.toFixed(2)}\nSalário Final: R$ ${sal_final.toFixed(2)}`
    }else if(vendas >= 10000 && vendas < 30000){
        valor_comissao = vendas - 10000
        comissao = (valor_comissao * 0.10) + (5000 * 0.05)

        sal_final = comissao + fixo

        final = `Salário: R$ ${fixo}\nComissão: R$ ${comissao.toFixed(2)}\nSalário Final: R$ ${sal_final.toFixed(2)}`
    }else{
        comissao = vendas * 0.20

        sal_final = comissao + fixo

        final = `Salário: R$ ${fixo}\nComissão: R$ ${comissao.toFixed(2)}\nSalário Final: R$ ${sal_final.toFixed(2)}`
    }

    return final
}

main()