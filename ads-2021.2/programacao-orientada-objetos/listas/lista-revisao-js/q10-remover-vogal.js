/* Escreva um programa que leia um texto pelo teclado e remova todas as suas vogais.
Exiba a string resultante */

const input = require('prompt-sync')()

function main(){
    const s = input("Digite uma string: ")

    let nova = ''

    for (let i = 0; i < s.length; i++) {
        let caractere = s[i]
        
        if(eh_vogal(caractere)){
            caractere = ''
        }

        nova = nova + caractere
    }

    console.log(`String original: ${s} | String nova: ${nova}`)
}

function eh_vogal(caractere){
    const codigo = caractere.charCodeAt(0)
    if (codigo === 65 || codigo === 97 || codigo === 69 || codigo === 101 || codigo === 73 || codigo === 105 || codigo === 79 || codigo === 111 || codigo === 85 || codigo === 117){
        return true
    }else{
        return false
    }
}

main()