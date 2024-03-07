/*
Leia 2 vetores A e B com N elementos, escreva um vetor C, sendo este a junção das vetores
A e B. Desta forma, a vetor C deverá ter 2*N elementos.
*/

#include <stdio.h>
#define n 3

int main(){
    int a[n], b[n], c[2*n], i, j;

    printf("\nVETOR A:\n");

    for(i = 0; i < n; i++){
        printf("Digite um número: ");
        scanf("%d", &a[i]);
        c[i] = a[i];
    }

    printf("\nVETOR B:\n");

    for(int l = 0; l < n; l++){
        j = i;
        printf("Digite um número: ");
        scanf("%d", &b[l]);
        c[j] = b[l];
        i++;
    }

    printf("\nA: ");

    for(int l = 0; l < n; l++){
        printf("%d ", a[l]);
    }

    printf("\nB: ");

    for(int l = 0; l < n; l++){
        printf("%d ", b[l]);
    }

    printf("\nC: ");

    for(int l = 0; l < 2*n; l++){
        printf("%d ", c[l]);
    }
}
