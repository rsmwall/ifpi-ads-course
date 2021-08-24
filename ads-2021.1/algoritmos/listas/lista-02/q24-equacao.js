const input = require('prompt-sync')()

function main(){

    // entrada
    const a = Number(input("Digite o valor de A (diferente de 0): "))
    const b = Number(input("Digite o valor de B: "))
    const c = Number(input("Digite o valor de C: "))

    // processamento

    const delta = (b * b) - 4 * a * c

    if(a === 0){
        console.log("A tem que ser diferente de 0")
    }else if(delta < 0){
        console.log("Sem raiz real")
    }else{
        let x1 = (-b + Math.sqrt(delta)) / (2 * a)
        let x2 = (-b - Math.sqrt(delta)) / (2 * a)

        console.log(`X1 = ${x1} e X2 = ${x2}`)
    }
}

main()