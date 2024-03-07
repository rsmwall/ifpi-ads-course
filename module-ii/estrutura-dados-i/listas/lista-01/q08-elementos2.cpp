/* Leia 1 (um) número de 2 (dois) dígitos, verifique e escreva se o algarismo da dezena é igual ou diferente
do algarismo da unidade. */

#include <stdio.h>

int main(){
    int inteiro, d, u;

    printf("Digite um numero inteiro de 2 algarismos: ");
    scanf("%d", &inteiro);

    d = inteiro / 10;
    u = inteiro - (d * 10);

    if(d == u){
        printf("Sao iguais!\n\n");
    }else{
        printf("Sao diferentes!\n\n");
    }
}