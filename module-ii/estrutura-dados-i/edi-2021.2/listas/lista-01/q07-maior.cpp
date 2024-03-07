// Leia 3 (três) números, verifique e escreva o maior entre os números lidos

#include <stdio.h>

int main(){
    int num1, num2, num3, maior;

    printf("Digite o primeiro numero: ");
    scanf("%d", &num1);

    printf("Digite o segundo numero: ");
    scanf("%d", &num2);

    printf("Digite o terceiro numero: ");
    scanf("%d", &num3);

    maior = num1;

    if(num2 > maior){
        maior = num2;
    }if(num3 > maior){
        maior = num3;
    }

    printf("Maior = %d\n\n", maior);
}