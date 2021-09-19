/*
Leia uma lista de números e que para cada número lido, escreva o próprio número e a relação
de seus divisores. (flag número = 0)
*/

#include <stdio.h>

int main(){

    int num;

    for( ; num != 0; ){
        printf("DIgite um número: ");
        scanf("%d", &num);

        printf("Número: %d\n", num);
    }
}
