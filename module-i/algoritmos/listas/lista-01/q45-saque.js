const input = require('prompt-sync')()

//  Receber valores
const saque = Number(input('Digite o valor de saque (R$): '))

//  Processamento
const n50 = Math.trunc(saque / 50)
const n10 = Math.trunc((saque % 50) / 10)
const n5 = Math.trunc((saque % 10) / 5)
const n1 = saque % 5

//  Saída
console.log('\n> Resultado: \nSerão entregues', n50, 'notas de R$50,', 
            n10, 'notas de R$10,', n5, 'notas de R$5 e', n1, 'notas de R$1!')