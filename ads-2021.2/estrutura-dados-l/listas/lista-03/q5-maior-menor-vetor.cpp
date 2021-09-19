/*
Leia um vetor com N elementos, encontre e escreva o maior e o menor elemento e suas
respectivas posições no vetor
*/

#include <stdio.h>
#define n 5

int main(){
    int a[n], maior, menor;

    for(int i = 0; i < n; i++){
        printf("Digite um número: ");
        scanf("%d", &a[i]);
    }

    maior = a[0];
    menor = a[0];

    for(int i = 0; i < n; i++){
        if(a[i] > maior){
            maior = a[i];
        }else if(a[i] < menor){
            menor = a[i];
        }
    }

    printf("\nA: ");

    for(int i = 0; i < n; i++){
        printf("%d ", a[i]);
    }

    printf("\nMaior = %d | Menor = %d", maior, menor);
}