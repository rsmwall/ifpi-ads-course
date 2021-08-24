const input = require('prompt-sync')()

//  Receber valores
const num = input('Digite um número de 3 dígitos: ')

//  Processamento
const inverso = num.split('').reverse().join('')
const diferenca = parseInt(num) - parseInt(inverso)

//  Saída
console.log('\n> Resultado: \nA diferença entre', num, 'e', inverso, 'é', diferenca, '!')