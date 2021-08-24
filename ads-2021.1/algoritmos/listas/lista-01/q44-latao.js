const input = require('prompt-sync')()

//  Receber valores
const kg_latao = Number(input('Digite a quantidade de latão (Kg): '))

//  Processamento
const cobre = 0.70 * kg_latao
const zinco = 0.30 * kg_latao

//  Saída
console.log('\n> Resultado: \n', kg_latao, 'Kg de latão contêm: ', 
            cobre.toFixed(2), 'Kg de cobre e', zinco.toFixed(2), 'Kg de zinco!')