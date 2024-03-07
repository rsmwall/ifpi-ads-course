#include <stdio.h>

int main(){
    
    float base, altura, area;

    printf("Digite a base: ");
    scanf("%f", &base);

    printf("Digite a altura: ");
    scanf("%f", &altura);

    area = (base * altura) / 2;

    printf("A área é %f", area);

}
