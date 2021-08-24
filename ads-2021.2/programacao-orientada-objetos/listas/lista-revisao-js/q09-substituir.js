/* Construir um programa que leia uma string s, e dois caracteres a e b. Em seguida, o
programa deve substituir todas as ocorrências do caractere a na string s pelo caractere
b */

const input = require('prompt-sync')()

function main(){
    const s = input("Digite uma string: ")
    const a = input("Digite o caractere de (a): ")
    const b = input("Digite o caractere de (b): ")

    let nova = ''

    for (let i = 0; i < s.length; i++) {
        let caractere = s[i]
        
        if(caractere === a){
            caractere = b
        }

        nova = nova + caractere
    }

    console.log(`String original: ${s} | String nova: ${nova}`)
}

main()