const input = require('prompt-sync')()

function main(){

    // entrada
    const nota1 = Number(input("Digite a primeira nota: "))
    const nota2 = Number(input("Digite a segunda nota: "))

    // processamento
    const media = (nota1 + nota2) / 2

    if(media >= 7){
        console.log(`Sua média foi ${media} e você foi APROVADO`)
    }else{
        const nota_final = Number(input("Sua média foi inferior a 7.0, digite a nota da prova final: "))
        const media_final = (nota1 + nota2 + nota_final) / 3

        if(media_final >= 5){
            console.log(`Sua média foi ${media_final} e você foi APROVADO`)
        }else{
            console.log(`Sua média foi ${media} e você foi REPROVADO`)
        }
    }

}

main()