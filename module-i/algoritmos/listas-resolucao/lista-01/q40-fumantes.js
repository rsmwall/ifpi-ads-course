const input = require('prompt-sync')()

//  Receber valores
const anos = Number(input('Digite quanto tempo fuma (anos): '))
const cig_dia = Number(input('Digite quantos cigarros fuma por dia: '))
const preco = Number(input('Digite o valor da carteira de cigarro (R$): '))

//  Processamento
const dias = anos * 365
const cig_tot = dias * cig_dia
const carteiras = cig_tot / 20
const valor_final = carteiras * preco

//  Saída
console.log('\n> Resultado: \nA quantidade de dinheiro gasta foi R$', 
            valor_final.toFixed(2).toString().replace(".", ","), '!')