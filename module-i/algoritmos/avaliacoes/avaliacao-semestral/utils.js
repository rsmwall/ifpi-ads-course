const prompt = require("prompt-sync")()

function obter_texto(desc){
    return prompt(desc)
}

function obter_numero(desc){
    return Number(prompt(desc))
}

function obter_inteiro(desc){
    return Math.trunc(obter_numero(desc))
}

function taxas(compra, dias, parcelas){
    let taxa = 0
    let liquido = 0
    let pag_forma = ''

    if(dias === 2){
        if(parcelas === 1){
            taxa = (0.0439 * compra) + 0.40
            liquido = compra - taxa
            pag_forma = `à vista`

            return [taxa, liquido, pag_forma]
        }else if(parcelas > 1){
            taxa = (0.0499 * compra) + 0.40 + (0.01 * parcelas)
            liquido = compra - taxa
            pag_forma = `parcelado em ${parcelas} vezes`

            return [taxa, liquido, pag_forma]
        }
    }else if(dias > 2 && dias <= 14){
        if(parcelas === 1){
            taxa = (0.0349 * compra) + 0.40
            liquido = compra - taxa
            pag_forma = `à vista`

            return [taxa, liquido, pag_forma]
        }else if(parcelas > 1){
            taxa = (0.0399 * compra) + 0.40 + (0.01 * parcelas)
            liquido = compra - taxa
            pag_forma = `parcelado em ${parcelas} vezes`

            return [taxa, liquido, pag_forma]
        }
    }else if(dias > 12 && dias <= 31){
        if(parcelas === 1){
            taxa = (0.0299 * compra) + 0.40
            liquido = compra - taxa
            pag_forma = `à vista`

            return [taxa, liquido, pag_forma]
        }else if(parcelas > 1){
            taxa = (0.0349 * compra) + 0.40 + (0.01 * parcelas)
            liquido = compra - taxa
            pag_forma = `parcelado em ${parcelas} vezes`

            return [taxa, liquido, pag_forma]
        }
    }
}

function codigoASCII(caractere){
    return caractere.charCodeAt(0)
}

function ascii_para_caractere(codigo){
    return String.fromCharCode(codigo)
}

function dividir_frase(frase){
    const metade = Math.trunc(frase.length / 2)

    let nova_frase = ''
    let parte1 = ''
    let parte2 = ''

    for(let i = metade -1; i >= 0; i--){
        parte1 += frase[i]
    }

    for(let i = frase.length - 1; i >= metade; i--){
        parte2 += frase[i]
    }

    nova_frase = parte1 + parte2

    return nova_frase
}

function eh_letra(caractere){
    const codigo = codigoASCII(caractere)
    if ((codigo >= 65 && codigo <= 90) || (codigo >= 97 && codigo <= 122)){
        return true
    }else{
        return false
    }
}

function eh_vogal(caractere){
    if (eh_letra(caractere)){
        const codigo = codigoASCII(caractere)
        if (codigo === 65 || codigo === 97 || codigo === 69 || codigo === 101 || codigo === 73 || codigo === 105 || codigo === 79 || codigo === 111 || codigo === 85 || codigo === 117){
            return true
        }else{
            return false
        }
    }else{
        return false
    }
}

function eh_consoante(caractere){
    if (eh_letra(caractere) && !eh_vogal(caractere)){
        return true
    }else{
        return false
    }
}

function substituir_vogais(frase){
    let nova_frase = ''
    let caractere = ''
    for (let i = 0; i < frase.length; i++){
        caractere = frase[i]
        if (eh_vogal(caractere)){
            if(caractere === 'a' || caractere === 'A'){
                nova_frase = nova_frase + '1'
            }else if(caractere === 'e' || caractere === 'E'){
                nova_frase = nova_frase + '2'
            }else if(caractere === 'i' || caractere === 'I'){
                nova_frase = nova_frase + '3'
            }else if(caractere === 'o' || caractere === 'O'){
                nova_frase = nova_frase + '4'
            }else if(caractere === 'u' || caractere === 'U'){
                nova_frase = nova_frase + '5'
            }
        }else{
            nova_frase = nova_frase + caractere
        }
    }
    return nova_frase
}

function substituir_numeros(frase){
    let nova_frase2 = ''
    let carac = ''
    for (let i = 0; i < frase.length; i++){
        carac = frase[i]
        if (!(eh_letra(carac))){
            if(carac === '1'){
                nova_frase2 = nova_frase2 + '*'
            }else if(carac === '2'){
                nova_frase2 = nova_frase2 + '**'
            }else if(carac === '3'){
                nova_frase2 = nova_frase2 + '***'
            }else if(carac === '4'){
                nova_frase2 = nova_frase2 + '****'
            }else if(carac === '5'){
                nova_frase2 = nova_frase2 + '*****'
            }else if(carac === '6'){
                nova_frase2 = nova_frase2 + '******'
            }else if(carac === '7'){
                nova_frase2 = nova_frase2 + '*******'
            }else if(carac === '8'){
                nova_frase2 = nova_frase2 + '********'
            }else if(carac === '9'){
                nova_frase2 = nova_frase2 + '*********'
            }else if(carac === '0'){
                nova_frase2 = nova_frase2 + '#'
            }
        }else{
            nova_frase2 = nova_frase2 + carac
        }
    }
    return nova_frase2
}

function substituir_consoantes(frase){
    let nova_frase = ''
    let caractere = ''
    let carac = ''
    let final = ''
    let teste
    for (let i = 0; i < frase.length; i++){
        caractere = frase[i]
        const codigo = codigoASCII(caractere)
        if (eh_consoante(caractere) && codigo >= 65 && codigo <= 90){
            let i
            let qtd = 0

            for(i = codigo; i < 90 && qtd < 10; i++){
                qtd++
                teste = qtd
            }
            if(qtd === 10){
                carac = ascii_para_caractere(i)
            }else{
                let falta = 10 - qtd
                final = 64 + falta
                carac = ascii_para_caractere(final)
            }
            
            nova_frase = nova_frase + carac
        }else if (eh_consoante(caractere) && codigo >= 97 && codigo <= 122){
            let i
            let qtd = 0

            for(i = codigo; i < 122 && qtd < 10; i++){
                qtd++
                teste = qtd
            }
            if(qtd === 10){
                carac = ascii_para_caractere(i)
            }else{
                let falta = 10 - qtd
                final = 96 + falta
                carac = ascii_para_caractere(final)
            }
            
            nova_frase = nova_frase + carac
        }else{
            nova_frase = nova_frase + caractere
        }
    }
    return nova_frase
}

function maior_menor(vetor, n) {
    
    let posicao_maior = 0
    let posicao_menor = 0

    for (let i = 1; i < n; i++){
        if (vetor[i] > vetor[posicao_maior]){
            posicao_maior = i
        }else if (vetor[i] < vetor[posicao_menor]){
            posicao_menor = i
        }
    }

    return `Maior valor: ${vetor[posicao_maior]} | Menor valor: ${vetor[posicao_menor]}`

}

function media_calc(vetor, n) {
    let soma = 0

    for (let i = 0; i < n; i++){
        soma += vetor[i]
    }

    let media = soma / n

    return `Média: ${media}`

}

function positivo_negativo(vetor, n) {
    
    let positivo = 0
    let negativo = 0

    for (let item of vetor){
        if (item < 0) negativo++
    }
    positivo = n - negativo

    return `São ${positivo} números positivos e ${negativo} números negativos`

}

function contar_elemento(vetor, elemento){
    let contador = 0
    for (let i = 0; i < vetor.length; i++){
        if (elemento === vetor[i]){
            contador++
        }
    }

    return contador
}


function repetidos(vetor){
    let elemento
    let contador
    let resultado =''
    for (let i = 0; i < vetor.length; i++){
        elemento = vetor[i]
        contador = contar_elemento(vetor, elemento)

        if (contador > 1){
            return `Existem elementos repetidos`
        }
    }

    return `Não existem elementos repetidos`
}



module.exports = {
    obter_texto, obter_numero, obter_inteiro, taxas, dividir_frase, substituir_vogais, substituir_numeros, substituir_consoantes, maior_menor, media_calc, positivo_negativo, repetidos
}