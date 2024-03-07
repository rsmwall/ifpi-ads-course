/* Leia o preço de três produtos e informe qual produto deve ser comprado, sabendo que a decisão é
sempre pelo mais barato. */

#include <stdio.h>

int main(){
    float preco1, preco2, preco3, menor;

    printf("Digite o preço do primeiro produto: ");
    scanf("%f", &preco1);

    printf("Digite o preço do segundo produto: ");
    scanf("%f", &preco2);

    printf("Digite o preço do terceiro produto: ");
    scanf("%f", &preco3);

    menor = preco1;

    if(preco2 > menor){
        menor = preco2;
    }if(preco3 > menor){
        menor = preco3;
    }

    printf("O produto que deve ser comprado é o de valor: R$ %0.2f\n\n", menor);
}