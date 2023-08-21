/*
7. Reescreva o exemplo abaixo, mantendo a quebra de linhas usando template
   strings e os valores Ely, 120.56 e TypeScript venham de variáveis declaradas
   separadamente e “interpoladas” na string:
    Ely
    My payment time is 120.56
    and
    my preffered language is TypeScript
*/

var nome: string = "Ely"
var payTime: number = 120.56
var language: string = "Typescript"

var text: string = `${nome}
My payment time is ${payTime}
and
my preffered language is ${language}`

console.log(text)