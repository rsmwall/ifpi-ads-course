// Leia o valor do dólar e um valor em dólar, calcule e escreva o equivalente em real (R$)

#include <stdio.h>

int main(){
    float qtd_dolar, val_dolar, real;

    printf("Digite o valor do dolar (R$): ");
    scanf("%f", &val_dolar);

    printf("Digite a quantidad de dolares: ");
    scanf("%f", &qtd_dolar);

    real = qtd_dolar * val_dolar;

    printf("O valor em reais = R$ %0.2f\n\n", real);
}