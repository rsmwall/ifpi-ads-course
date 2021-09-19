/*
Leia um vetor A com N elementos e escreva um vetor B, com os mesmos elementos de A,
sendo que estes deverão estar invertidos, ou seja, o 1o elemento de A deve ser o último
elemento de B; o 2o elemento de A deve ser o penúltimo elemento de B e assim por diante
*/

#include <stdio.h>
#define n 5

int main(){
    int a[n], b[n];

    for(int i = 0; i < n; i++){
        printf("Digite um número: ");
        scanf("%d", &a[i]);
        int j = n - i - 1;
        b[j] = a[i];
    }

    printf("\nA: ");

    for(int i = 0; i < n; i++){
        printf("%d ", a[i]);
    }

    printf("\nB: ");

    for(int i = 0; i < n; i++){
        printf("%d ", b[i]);
    }
}
