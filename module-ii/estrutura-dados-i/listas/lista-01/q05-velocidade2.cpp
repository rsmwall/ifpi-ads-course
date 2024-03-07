// Leia uma velocidade em km/h, calcule e escreva esta velocidade em m/s. (Vm/s = Vkm/h / 3.6)

#include <stdio.h>

int main(){
    float vel_metro, vel_kilo;

    printf("Digite a velocidade em Km/h: ");
    scanf("%f", &vel_kilo);

    vel_metro = vel_kilo / 3.6;

    printf("Velocidade = %0.2f m/s\n\n", vel_metro);
}