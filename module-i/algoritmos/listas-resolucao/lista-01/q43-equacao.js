const input = require('prompt-sync')()

//  Receber valores
const a = Number(input('Digite o valor de A: '))
const b = Number(input('Digite o valor de B: '))
const c = Number(input('Digite o valor de C: '))
const d = Number(input('Digite o valor de D: '))
const e = Number(input('Digite o valor de E: '))
const f = Number(input('Digite o valor de F: '))

//  Processamento
const x = ((c * e) - (b * f)) / ((a * e) - (b * d))
const y = ((a * f) - (c * d)) / ((a * e) - (b * d))

//  Saída
console.log('\n> Resultado: \nO valores de x e y são respectivamente:', 
            x.toFixed(2), 'e', y.toFixed(2), '!')