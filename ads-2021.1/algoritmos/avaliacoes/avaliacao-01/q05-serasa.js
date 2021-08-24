const input = require('prompt-sync')()

function main(){

    // entrada
    const c_posi = Number(input("Digite os pontos dos dados positivos (0-100): "))
    const c_nega = Number(input("Digite os pontos dos dados de dívidas (0-100): "))
    const c_cons = Number(input("Digite os pontos para consulta de crédito (0-100): "))

    // processamento
    const score_1 = score_01(c_posi, c_nega, c_cons)
    const score_2 = score_02(c_posi, c_nega, c_cons)

    // saida
    console.log(`Score 1.0: ${score_1}\nScore 2.0: ${score_2}`)

}

function score_01(posi, nega, cons){

    let categoria

    const positivo = posi * 2.6
    const negativo = nega * 5.7
    const consulta = cons * 1.7

    const score = positivo + negativo + consulta

    if(score < 400){
        categoria = `${score} - Baixo`
    }else if(score >= 400 && score < 600){
        categoria = `${score} - Regular`
    }else if(score >= 600 && score < 800){
        categoria = `${score} - Bom`
    }else{
        categoria = `${score} - Muito Bom`
    }

    return categoria

}

function score_02(posi, nega, cons){

    let categoria

    const positivo = posi * 6.2
    const negativo = nega * 1.9
    const consulta = cons * 1.9

    const score = positivo + negativo + consulta

    if(score <= 300){
        categoria = `${score} - Baixo`
    }else if(score >= 301 && score <= 400){
        categoria = `${score} - Regular`
    }else if(score >= 501 && score <= 700){
        categoria = `${score} - Bom`
    }else{
        categoria = `${score} - Muito Bom`
    }

    return categoria

}

main()