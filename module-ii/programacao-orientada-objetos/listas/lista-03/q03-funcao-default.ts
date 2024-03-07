/*
3. Crie uma função que receba como parâmetros um nome e um pronome de
   tratamento opcional. Caso esse último não seja fornecido, deve ser considerado o
   valor “Sr”. Ao final, imprima uma saudação semelhante a “Sra. Sávia”.
*/

function nomeCompleto(nome:string, sobrenome:string = "Silva"):string {
    return nome + " " + sobrenome;
}

console.log(nomeCompleto('Rafael'));
