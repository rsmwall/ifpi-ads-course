/*
2. Crie uma função que recebe como parâmetro um número e retorna true se o
   número for primo e false caso contrário.
*/

function primo(num:number) {
   let resultado:boolean
   resultado = false
   if (num == 2 || num % 2 != 0) {
      if (num == 3 || num % 3 != 0) {
         if (num == 5 || num % 5 != 0) {
            if (num == 7 || num % 7 != 0) {
               resultado = true
            }
         } 
      } 
   } 
   return resultado
}

console.log(primo(5));