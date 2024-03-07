// Leia um número e mostre na tela se o número é positivo ou negativo

#include <stdio.h>

int main(){
    int num;

    printf("Digite um número: ");
    scanf("%d", &num);

    if(num > 0){
        printf("%d é positivo\n\n", num);
    }else if(num < 0){
        printf("%d é negativo\n\n", num);
    }else if(num == 0){
        printf("%d é neutro\n\n", num);
    }
}