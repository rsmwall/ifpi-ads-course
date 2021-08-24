const input = require('prompt-sync')()

function main(){

     // entrada
     const lado1 = Number(input("Digite o primeiro lado: "))
     const lado2 = Number(input("Digite o segundo lado: "))
     const lado3 = Number(input("Digite o terceiro lado: "))

     // processamento
     const som1 = lado1 + lado2
     const som2 = lado1 + lado3
     const som3 = lado2 + lado3
     if(som1 >= lado3 || som2 >= lado2 || som3 >= lado1){
         console.log("É Triângulo")

         if(lado1 === lado2 && lado2 === lado3){
            console.log("É Equilátero")
         }else if(lado1 === lado2 || lado2 === lado3 || lado1 === lado3){
            console.log("É Isórceles")
         }else if(lado1 !== lado2 && lado2 !== lado3 && lado1 !== lado3){
            console.log("É Escaleno")
         }
     }else{
         console.log("Não é Triângulo")
     }
}

main()