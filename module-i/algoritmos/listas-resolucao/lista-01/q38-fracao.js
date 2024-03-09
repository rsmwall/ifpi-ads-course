const input = require('prompt-sync')()

//  Receber valores
const fracao1 = input('Digite a primeira fração (a/b): ')
const fracao2 = input('Digite a segunda fração (a/b): ')

//  Processamento
const num1 = fracao1[0]
const den1 = fracao1[2]
const num2 = fracao2[0]
const den2 = fracao2[2]

const den_total = parseInt(den1) * parseInt(den2)
const num_tot1 = parseInt(den1) * parseInt(num2)
const num_tot2 = parseInt(den2) * parseInt(num1)
const num_total = num_tot1 + num_tot2

//  Saída
console.log('\n> Resultado: \nA soma das frações', 
            fracao1, 'e', fracao2, 'é', num_total, '/', den_total, '!')