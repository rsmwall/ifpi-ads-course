/*
8. Dado método filter dos arrays, crie uma implementação usando arrow function que
   filtre todos os elementos pares do array abaixo:

   const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
*/
const array1: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];

const arrayPares: number[] = array1.filter((elemento: number): boolean => elemento % 2 == 0);

console.log(arrayPares); // Output: [2, 4, 6, 8, 10, 12, 14]
