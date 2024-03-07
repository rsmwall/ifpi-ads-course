/*
Leia dois nomes e compare se os nomes são iguais. Se forem iguais imprima “São Iguais!”, senão
imprima “São Diferentes”.
OBSERVAÇÃO:
Faça usando:
char nome1[20];
char nome2[20];
USE A FUNÇÃO STRCMP () PARA COMPARAR AS STRINGS
*/

#include <stdio.h>
#include <string.h>

int main(){

    char nome1[20], nome2[20];
    int retorno;

    printf("Digite o primeiro nome: ");
    scanf("%s", nome1);

    printf("Digite o segundo nome: ");
    scanf("%s", nome2);

    retorno = strcmp(nome1, nome2);
    
    if(retorno == 0){
        printf("São iguais!");
    }else{
        printf("São diferentes!");
    }

}