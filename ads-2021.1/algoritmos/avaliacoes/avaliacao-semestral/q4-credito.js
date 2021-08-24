const prompt = require('prompt-sync')
const { obter_numero } = require('./utils')

function main(){

    let emp = obter_numero('Digite o valor do empréstimo (41000 , 60000 ou 81000): ')
    const par = obter_numero('Digite o valor da parcela (1000,1200 ou 1500): ')

    let t = 1
    let montante = par * Math.pow((1), t)

    if(montante <= emp){
        for(montante = par * Math.pow(1, t); montante < emp; t++){
            emp = ((emp-par) * 1.01)
            let juros = emp * 0.01

            console.log(`\n${t}° mês saldo devedor ${Math.round(emp)}`)
            console.log(`${juros} do mês ${t}°`)
        }
    }
}

main()