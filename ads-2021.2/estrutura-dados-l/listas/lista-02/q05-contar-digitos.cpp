/*
Escreva um programa para determinar o número de dígitos de um número informado
*/

#include <stdio.h>
#include <string>

using namespace std;

int main(){
    int num, numStr;

    printf("Digite um número interiro: ");
    scanf("%d", &num);

    numStr = to_string(num).length();

    printf("Quantidade de dígitos: %d", numStr);
}
