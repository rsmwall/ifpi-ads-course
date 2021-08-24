const input = require('prompt-sync')()

function main(){

    // entrada
    const nota1 = Number(input("Digite a nota da Avaliação 01: "))
    const nota2 = Number(input("Digite a nota da Avaliação 02: "))
    const nota3 = Number(input("Digite a nota das Atividades: "))

    // processamento
    const media = media_ponderada(nota1, nota2, nota3)

    const situacao_final = situacao(media)

    // saida
    console.log(`Situação do aluno é ${situacao_final}`)
}

function media_ponderada(nota1, nota2, nota3){

    // cálculo de média ponderada
    const media_calc = ((nota1 * 2) + (nota2 * 3) + (nota3 * 1)) / 6

    return media_calc

}

function situacao(media){

    let situacao_verif

    if(media >= 7){
        situacao_verif = `Aprovado com média ${media}`
    }else if(media <= 4){
        situacao_verif = `Reprovado com média ${media}`
    }else{
        const media_final = prova_final(media)

        if(media_pos_pf >= 6){
            situacao_verif = `Aprovado Pós-Prova Final com média ${media_pos_pf}`
        }else{
            situacao_verif = `Reprovado Pós-Prova Final com média ${media_pos_pf}`
        }
    }

    return situacao_verif

}

function prova_final(media){

    const prova_final = Number(input("Digite a nota da Prova Final: "))

    media_pos_pf = (media + prova_final) / 2

    return media_pos_pf

}

main()