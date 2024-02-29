const input = require('prompt-sync')()

function main(){

     // entrada
     const ang1 = Number(input("Digite o primeiro ângulo: "))
     const ang2 = Number(input("Digite o segundo ângulo: "))
     const ang3 = Number(input("Digite o terceiro ângulo: "))

     // processamento
     soma = ang1 + ang2 + ang3
     
     if(soma === 180){
        console.log("É Triângulo")

        if(ang1 < 90 && ang2 < 90 && ang3 < 90){
             console.log("É Acutuângulo")
        }else if(ang1 === 90 || ang2 === 90 || ang3 === 90){
            console.log("É Retângulo")
        }else if(ang1 > 90 || ang2 > 90 || ang3 > 90){
            console.log("É Obtusângulo")
        }
     } else{
        console.log("Não é Triângulo")
     }
}

main()