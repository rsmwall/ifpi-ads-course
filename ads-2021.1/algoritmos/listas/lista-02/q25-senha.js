const input = require('prompt-sync')()

function main(){

    // entrada
    const senha = Number(input("Digite a senha de 4 dígitos: "))

    // processamento
    if(senha === 1234){
        console.log("Acesso Liberado")
    }else{
        console.log("Acesso Negado")
    }
}

main ()