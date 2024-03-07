#include <iostream>
#include <string.h>

typedef struct elemento {
    int mat;
    char nome[20];
    elemento *prox;
} Elemento;

int main(void) {
    Elemento *novo;
    Elemento *inicio = NULL;
    Elemento *fim = NULL;

    novo = new Elemento;
    novo->mat = 1;
    strcpy(novo->nome, "Joao");
    novo->prox = NULL;

    Elemento *novo2;

    novo2 = new Elemento;
    novo2->mat = 2;
    strcpy(novo2->nome, "Maria");
    novo2->prox = NULL;

    // Incluir elementos

    if (inicio == NULL) {
        inicio = novo;
        fim = novo;
    } else {
        fim->prox = novo2;
        fim = fim->prox;
    }

    Elemento *atual = inicio;

    // Mostrar elementos

    while (atual != NULL) {
        std::cout << "Matricula: " << atual->mat << std::endl;
        std::cout << "Nome: " << atual->nome << std::endl;
        atual = atual->prox;
    }


}