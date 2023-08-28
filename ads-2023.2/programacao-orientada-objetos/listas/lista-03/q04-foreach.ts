/*
4. Crie uma função que retorne os números de um array passados por parâmetro
   separados por traço (-) no formato string. Para isso, use o método forEach dos
   arrays.
*/

var arrayFormatado: string = ''

function imprimirArray(...num: number[]) {
    num.forEach(value => {
        arrayFormatado += value + '-'
    });
}

imprimirArray(2, 4, 5, 6, 2, 10, 36)
arrayFormatado = arrayFormatado.substring(0, arrayFormatado.length - 1)
console.log(arrayFormatado);
