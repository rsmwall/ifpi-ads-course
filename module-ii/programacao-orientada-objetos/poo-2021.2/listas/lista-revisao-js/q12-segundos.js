/* Faça uma função que recebe por parâmetro uma medida de tempo expressa em
segundos e retorna, também por parâmetro, esse tempo em horas, minutos e
segundos no formato: “hh:mm:ss” */

const input = require('prompt-sync')()

function main(){
    const segundo = Number(input('Digite a quantidade de segundos: '))

    const minuto_tot = segundo / 60
    const segundos = segundo % 60

    const horas = minuto_tot / 60
    const minutos = minuto_tot % 60

    console.log(`O resultado é ${parseInt(horas)}:${parseInt(minutos)}:${parseInt(segundos)}`)
}

main()