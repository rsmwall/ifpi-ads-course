/*
Leia 2 vetores A e B com N elementos, escreva o conjunto união entre os vetores A e B; e o
conjunto interseção entre os vetores A e B
*/

#include <stdio.h>
#define n 3

int main(){
    int a[n], b[n], uniao[2*n], inter[n], tamV = 0, i;

    printf("\nVETOR A:\n");

    for(i = 0; i < n; i++){
        printf("Digite um número: ");
        scanf("%d", &a[i]);
        uniao[i] = a[i];
    }

    printf("\nVETOR B:\n");

    for(int l = 0; l < n; l++){
        int j = i;
        printf("Digite um número: ");
        scanf("%d", &b[l]);
        uniao[j] = b[l];
        i++;
    }

    for(int k = 0; k < n; k++){
        for(int m = 0; m < n; m++){
            if(a[k] == b[m]){
                inter[tamV] = a[k];
                tamV++;
                break;
            }
        }
    }

    printf("\nA: ");

    for(int l = 0; l < n; l++){
        printf("%d ", a[l]);
    }

    printf("\nB: ");

    for(int l = 0; l < n; l++){
        printf("%d ", b[l]);
    }

    printf("\nUNIÃO: ");

    for(int l = 0; l < 2*n; l++){
        printf("%d ", uniao[l]);
    }

    printf("\nINTERSECÇÃO: ");

    for(int l = 0; l < tamV; l++){
        printf("%d ", inter[l]);
    }
}