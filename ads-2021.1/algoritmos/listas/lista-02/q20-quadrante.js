const input = require('prompt-sync')()

function main(){

    // entrada
    const angulo = Number(input("Digite o ângulo: "))

    // processamento
    const quadrante =quad_angulo(angulo)

    // saida
    console.log(quadrante)
}

function quad_angulo(angulo){

    let quadrante

    if(angulo > 0 && angulo <= 90){
        quadrante = `Primeiro quadrante`
    }else if(angulo > 90 && angulo <= 180){
        quadrante = `Segundo quadrante`
    }else if(angulo > 180 && angulo <= 270){
        quadrante = `Terceiro quadrante`
    }else if(angulo > 270 && angulo <= 360){
        quadrante = `Quarto quadrante`
    }else{
        quadrante = `Valor inválido`
    }

    return quadrante
}

main()