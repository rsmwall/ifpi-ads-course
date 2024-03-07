/*
5. Dada a função soma abaixo, tente executar os scripts das alternativas e exiba os
   eventuais resultados:
*/

function soma(x: number, y?: any) {
    return x + y
}

// a
console.log(soma(1, 2)); // 3

// b
console.log(soma(1, "2")); // 12

// c
console.log(soma(1)); // NaN
