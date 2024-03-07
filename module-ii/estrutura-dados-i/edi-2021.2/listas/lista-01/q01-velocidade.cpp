// Leia uma velocidade em m/s, calcule e escreva esta velocidade em km/h. (Vkm/h = Vm/s * 3.6)

#include <stdio.h>

int main(){
    float vel_metro, vel_kilo;

    printf("Digite a velocidade em m/s: ");
    scanf("%f", &vel_metro);

    vel_kilo = vel_metro * 3.6;

    printf("Velocidade = %0.2f Km/h\n\n", vel_kilo);
}
