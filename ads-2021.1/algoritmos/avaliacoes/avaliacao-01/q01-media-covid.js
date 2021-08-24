const input = require('prompt-sync')()

function main(){

    // entrada
    const media_anterior = Number(input("Digite a Média de Casos à 14 dias (%): "))
    const media_hoje = Number(input("Digite a Média de Casos hoje (%): "))

    // processamento
    const situacao = situacao_media(media_anterior, media_hoje)

    // saida
    console.log(situacao)
}

function situacao_media(anterior, atual){

    const media_geral = atual - anterior
    let situacao

    if(media_geral < -15){
        situacao = `Variação de ${media_geral}\nSituação: Em queda`
    }else if(media_geral <= 15){
        situacao = `Variação de ${media_geral}\nSituação: Em estabilidade`
    }else{
        situacao = `Variação de ${media_geral}\nSituação: Em alta`
    }

    return situacao
    
}

main()
