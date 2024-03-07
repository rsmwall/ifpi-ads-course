/*
3. Leia duas strings e compare, se elas forem iguais, imprima “São iguais”, senão imprima “São
   diferentes!!”:
    A) As duas strings devem ser definidas como char[10], conforme abaixo:
*/

#include <stdio.h>
#include <string.h>

int main() {
    char f1[10];
    char f2[10];
    bool diferentes = false;

    printf("Digite a primeira frase: ");
    scanf("%s", f1);

    printf("Digite a segunda frase: ");
    scanf("%s", f2);

    int qtd_carac = strlen(f1);

    if (strlen(f1) != strlen(f2)) {
        printf("Sao diferentes!\n");
    } else {
        for (int i = 0; i < qtd_carac; i++) {
            if (f1[i] != f2[i]) {
                diferentes = true;
                break;
            } else {
                diferentes = false;
            }
        }
    }

    if (!diferentes) {
        printf("Sao iguais!\n");
    } else {
        printf("Sao diferentes!\n");
    }
}