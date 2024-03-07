/* Leia dois valores e uma das seguintes operações a serem executadas (codificadas da seguinte forma: 1 –
Adição, 2 – Subtração, 3 – Multiplicação e 4 – Divisão). Calcule e escreva o resultado dessa operação
sobre os dois valores lidos */

#include <stdio.h>

int main(){

    float val1, val2;
    int opt;
    
    printf("Digite o primeiro valor: ");
    scanf("%f", &val1);

    printf("Digite o segundo valor: ");
    scanf("%f", &val2);

    printf("\nOPERAÇÕES ------>");
    printf("\n\n1. Adição");
    printf("\n2. Subtração");
    printf("\n3. Multiplicação");
    printf("\n4. Divisão");
    printf("\n\nDigite a opção desejada: ");
    scanf("%d", &opt);

    switch (opt)
    {
    case 1:
        printf("\nADIÇÃO ------>");
        printf("\nA soma de %0.1f + %0.1f = %0.1f\n\n", val1, val2, val1 + val2);
        break;
    
    case 2:
        printf("\nSUBTRAÇÃO ------>");
        printf("\nA subtração de %0.1f - %0.1f = %0.1f\n\n", val1, val2, val1 - val2);
        break;

    case 3:
        printf("\nMULTIPLICAÇÃO ------>");
        printf("\nA multiplicação de %0.1f * %0.1f = %0.1f\n\n", val1, val2, val1 * val2);
        break;

    case 4:
        printf("\nDIVISÃO ------>");
        printf("\nA divisão de %0.1f / %0.1f = %0.1f\n\n", val1, val2, val1 / val2);
        break;

    default:
        printf("Opção inválida\n\n");
        break;
    }

}