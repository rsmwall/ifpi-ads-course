/*
Leia um vetor A com N elementos e escreva um vetor B com N elementos, conforme a
seguinte condição: se índice de A[índice] é par então B[índice] = 0, caso contrário B[índice]
= 1
*/

#include <stdio.h>
#define n 5

int main(){
    int a[n], b[n];

    for(int i = 0; i < n; i++){
        printf("Digite um número: ");
        scanf("%d", &a[i]);
        
        if(a[i] % 2 == 0){
            b[i] = 0;
        }else{
            b[i] = 1;
        }
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
