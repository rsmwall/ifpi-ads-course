const input = require('prompt-sync')()

//  Receber valores
const a = Number(input('Digite o valor de A: '))
const b = Number(input('Digite o valor de B: '))
const c = Number(input('Digite o valor de C: '))

//  Processamento
const r = (a + b) * (a + b)
const s = (b + c) * (b + c)
const d = (r + s) / 2

//  Saída
console.log('\n> Resultado: \nO valor de D é', d.toFixed(2), '!')