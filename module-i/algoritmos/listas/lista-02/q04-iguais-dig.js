const input = require('prompt-sync')()

function main(){

    // entrada
    const num = input("Digite um número de dois dígitos: ")

    // processamento
    const num1 = num[0]
    const num2 = num[1]

    parseInt(num1)
    parseInt(num2)

    if(num1 === num2){
        console.log(`Os dígitos ${num1} e ${num2} são iguais`)
    }else{
        console.log("Os dígitos não são iguais")
    }
}

main()