/*
Leia dois números X e N. A seguir, escreva o resultado das divisões de X por N onde, após
cada divisão, X passa a ter como conteúdo o resultado da divisão anterior e N é decrementado
de 1 em 1, até chegar a 2
*/

#include <stdio.h>

int main(){
    float x, n, resultado;

    printf("Digite um número para X: ");
    scanf("%f", &x);

    printf("Digite um número para N: ");
    scanf("%f", &n);

    for( ; n >= 2; ){
        resultado = x / n;
        printf("\nX: %f | N: %.0f | Divisão: %f", x, n, resultado);

        x = resultado;
        n--;
    }

}
