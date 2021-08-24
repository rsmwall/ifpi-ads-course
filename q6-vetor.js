const { obter_numero, maior_menor, media_calc, positivo_negativo, repetidos } = require("./utils")

function main(){
    const n = obter_numero('Quantos números: ')

    const vetor = unir_numeros(n)
    const media = media_calc(vetor, n)
    const maior_e_menor = maior_menor(vetor, n)
    const pos_neg = positivo_negativo(vetor, n)
    const repet = repetidos(vetor)

    console.log('\n', media,'\n', maior_e_menor,'\n', pos_neg, '\n', repet)
}

function unir_numeros(n) {
    const vetor = Array(n)

    for (let i = 0; i < n; i++){
        vetor[i] = obter_numero(`Elemento ${i}: `)
    }

    return vetor
}


main()