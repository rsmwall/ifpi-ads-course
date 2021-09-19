/*
Leia um número e divida-o por dois (sucessivamente) até que o resultado seja menor que 1.
Escreva o resultado da última divisão efetuada
*/

#include <stdio.h>

int main(){
    float num, resultado;

    printf("Digite um número: ");
    scanf("%f", &num);

    resultado = num;
    for( ; resultado >= 1; ){
        resultado = resultado / 2;
        
    }

    printf("Número: %.1f | Resultado da última divisão: %.1f\n", num, resultado);

}