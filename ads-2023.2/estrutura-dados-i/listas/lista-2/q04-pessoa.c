#include <stdio.h>
#include <string.h>
#include <stdlib.h>

typedef struct pessoa {
    char cpf[5];
    char nome[11];
    struct pessoa* prox;
} Pessoa;

int main(void) {

    // 4.1 - criar um programa e definir dados

    Pessoa* p1 = (Pessoa*)malloc(sizeof(Pessoa));
    strcpy(p1 -> cpf, "1111");
    strcpy(p1 -> nome, "Fabio");
    p1 -> prox = NULL;

    Pessoa* p2 = (Pessoa*)malloc(sizeof(Pessoa));
    strcpy(p2 -> cpf, "2222");
    strcpy(p2 -> nome, "Katia");
    p2 -> prox = NULL;

    Pessoa* p3 = (Pessoa*)malloc(sizeof(Pessoa));
    strcpy(p3 -> cpf, "4444");
    strcpy(p3 -> nome, "Jonatas");
    p3 -> prox = NULL;

    // 4.2 - encadear para {4444, 1111, 2222}

    p3 -> prox = p1;
    p1 -> prox = p2;

    // 4.3 - percorrer os dados e imprimir o cpf 

    Pessoa* inicio = p3;

    while (inicio != NULL) {
        printf("%s", inicio -> cpf);
        inicio = inicio -> prox;
    }

    // liberar memoria alocada

    free(p1);
    free(p2);
    free(p3);

    return 0;
}