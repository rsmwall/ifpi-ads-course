// Leia um valor em horas e um valor em minutos, calcule e escreva o equivalente em minutos

#include <stdio.h>

int main(){
    int horas, minutos, qtd_minutos;

    printf("Digite a quantidade de horas: ");
    scanf("%d", &horas);

    printf("Digite a quantidade de minutos: ");
    scanf("%d", &minutos);

    qtd_minutos = (horas * 60) + minutos;

    printf("Quantidade de minutos = %d minutos\n\n", qtd_minutos);
}