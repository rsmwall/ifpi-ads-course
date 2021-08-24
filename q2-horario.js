const { obter_texto } = require("./utils")

function main(){

    const horario = obter_texto("Digite o horário (hh:mm:ss): ")

    console.log(tempo(horario))

}

function tempo(horario){
    const horario_split = horario.split(':')

    const hora = horario_split[0]
    const minuto = horario_split[1]
    const segundo = horario_split[2]

    const horario_final = `\nHorário: ${hora} hora(s), ${minuto} minuto(s) e ${segundo} segundo(s)`

    return horario_final
}

main()