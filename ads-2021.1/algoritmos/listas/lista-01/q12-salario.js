const input = require('prompt-sync')()

//  Receber valores
const salario = Number(input('Digite seu salário: '))

//  Processamento
const aumento = 0.25 * salario
const final = salario + aumento

//  Saída
console.log('\n> Resultado: \nSeu salário agora é de R$', 
            final.toFixed(2).toString().replace(".", ","), '!')