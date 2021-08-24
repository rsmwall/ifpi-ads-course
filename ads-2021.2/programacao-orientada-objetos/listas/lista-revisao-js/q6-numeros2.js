const input = require('prompt-sync')()

function main(){
    let num = Number(input("Digite um número: "))
    let num1 = 0

    if(num != -1){
        for (num; num != -1;) {
            num1 += num
            num = Number(input("Digite um número: "))         
        }

        console.log(`O valor da soma é ${num1}`)
    }else{
        console.log("Seu primeiro número foi -1")
    }
}

main()