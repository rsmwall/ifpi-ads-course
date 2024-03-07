/*
9. Crie um exemplo usando a função map para dobrar os elementos de um array e
   reduce para totalizar a soma dos elementos do array.
*/

var array2: number[] = [2, 3, 4, 5, 6, 7]
var arrayDobro: number[] = array2.map((elemento: number) => elemento * 2)
var arraySoma: number = array2.reduce(function(a, b) {return a + b})

console.log(arrayDobro);
console.log(arraySoma);
