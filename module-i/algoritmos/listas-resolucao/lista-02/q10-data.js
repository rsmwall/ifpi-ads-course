const input = require('prompt-sync')()

function main(){

    // entrada
    const dia = Number(input("Digite o dia: "))
    const mes = Number(input("Digite o mês: "))
    const ano = Number(input("Digite o ano: "))

    // processamento
    let bissexto
    let mes_val
    let dia_val
    let data_val

    // saber se é bissexto ------------------- >

    if(ano % 4 == 0){
        if(ano % 100 == 0){
            if(ano % 400 == 0){
                bissexto = true
            }else{
                bissexto = false
            }
        }else{
            bissexto = true
        }
    }else{
        bissexto = false
    }

    // verificar se mes é valido

    if(mes <= 12){
        mes_val = true
    }else{
        mes_val = false
    }

    // verificar dias

    if(bissexto === true && mes === 2){
        if(dia <= 29){
            dia_val = true
        }else{
            dia_val = false
        }
    }else if (bissexto === false && mes === 2){
        if(dia <= 28){
            dia_val = true
        }else{
            dia_val = false
        }
    }else if(mes === 4 || mes === 6 || mes === 9 || mes === 11){
        if(dia <= 30){
            dia_val = true
        }else{
            dia_val = false
        }
    }else if(dia <= 31){
        dia_val = true
    }else{
        dia_val = false
    }

    if(mes_val === true && dia_val === true){
        data_val = 'é válida'
    }else{
        data_val = 'não é válida'
    }

    // saida
    console.log(`A data informada: ${dia}/${mes}/${ano} ${data_val}`)
}

main()