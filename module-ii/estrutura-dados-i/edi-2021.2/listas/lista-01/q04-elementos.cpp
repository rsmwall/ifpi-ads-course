// Leia um número inteiro (3 dígitos), calcule e escreva a soma de seus elementos (C + D + U)

#include <stdio.h>

int main(){
    int inteiro, c, d, u, soma;

    printf("Digite um numero inteiro de 3 algarismos: ");
    scanf("%d", &inteiro);

    c = inteiro / 100;
    d = (inteiro - (c * 100)) / 10;
    u = inteiro - ((d * 10) + (c * 100));

    soma = c + d + u;

    printf("A soma = %d\n\n", soma);
}