const input = require('prompt-sync')()

function main(){

     // entrada
     const num = Number(input("Digite um número entre 0 e 100: "))

     // processamento
     if(num === 2 || num % 2 !== 0){
        if(num === 3 || num % 3 !== 0){
            if(num === 5 || num % 5 !== 0){
                if(num === 7 || num % 7 !== 0){
                    console.log("É primo")         
                }else{
                    console.log("Não é primo")
                }         
            }else{
                console.log("Não é primo")
            }        
        }else{
            console.log("Não é primo")
        }
     }else{
         console.log("Não é primo")
     }
}

main()