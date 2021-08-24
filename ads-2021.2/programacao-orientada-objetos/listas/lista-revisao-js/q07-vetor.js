const input = require('prompt-sync')()

function main(){
    let vetor = []

    for (let i = 0; i < 5; i++) {
        vetor[i] = input("Digite o elemento: ")     
    }

    console.log(`O vetor é [${vetor}]`)
}

main()