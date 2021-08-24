const { obter_texto, dividir_frase, substituir_vogais, substituir_numeros, substituir_consoantes } = require("./utils")

function main(){

    console.log("\n--- Criptografia do Roger ---\n\n")
    const frase = obter_texto("Digite a frase a ser criptografada: ")

    const frase_passo1 = dividir_frase(frase)
    const frase_passo2 = substituir_numeros(frase_passo1)
    const frase_passo3 = substituir_vogais(frase_passo2)
    const final = substituir_consoantes(frase_passo3)

    console.log(`\nSua frase criptografada é "${final}"`)
    
}

main()