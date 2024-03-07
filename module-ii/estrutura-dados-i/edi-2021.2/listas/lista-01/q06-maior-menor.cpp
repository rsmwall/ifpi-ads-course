// Leia 2 (dois) números, verifique e escreva o menor e o maior entre os números lidos

#include <stdio.h>

int main(){
    int num1, num2;

    printf("Digite o primeiro numero: ");
    scanf("%d", &num1);

    printf("Digite o segundo numero: ");
    scanf("%d", &num2);

    if(num1 > num2){
        printf("Maior = %d | Menor = %d\n\n", num1, num2);
    }else{
        printf("Maior = %d | Menor = %d\n\n", num2, num1);
    }
}