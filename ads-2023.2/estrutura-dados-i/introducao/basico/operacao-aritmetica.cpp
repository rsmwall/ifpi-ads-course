#include <stdio.h>
#include <stdlib.h>

int main(){
    float nota1;
    float nota2;
    float nota3;
    float media;

    printf("\nDigite a primeira nota: ");
    scanf("%f", &nota1);
    printf("\nDigite a segunda nota: ");
    scanf("%f", &nota2);
    printf("\nDigite a terceira nota: ");
    scanf("%f", &nota3);

    media = (nota1 + nota2 + nota3) / 3;

    printf("\n\nSua media .................: %.2f\n", media);
}