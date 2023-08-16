/*
1. No programa abaixo, complete o código calculando e imprimindo qual o tamanho do cadeia de
   caracteres que foi incluída pelo usuário.
*/

#include <stdio.h>
#include <string.h>

int main() {
    char frase[20];
    int qtd_carac;

    printf("Digite o valor: ");
    scanf("%s", frase);

    qtd_carac = strlen(frase);

    printf("A frase digitada: %s, possui %d caracteres!\n", frase, qtd_carac);
}