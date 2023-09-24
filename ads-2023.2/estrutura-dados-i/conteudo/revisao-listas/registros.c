#include <stdio.h>
#include <string.h>
#include <stdlib.h>

typedef struct no {
    int mat;
    char *nome;
    struct no *prox;
} Aluno;

Aluno *no(int mat, char *nome) {
    Aluno *novo = (Aluno*)malloc(sizeof(Aluno));
    novo->mat = mat;
    novo->nome = nome;
    novo->prox = NULL;

    return novo;
}

void incluirInicio(Aluno *n, Aluno **inicio, Aluno **fim) {
    Aluno *novo = n;

    if (*inicio == NULL) {
        *inicio = novo;
        *fim = novo;
    } else {
        novo->prox = *inicio;
        *inicio = novo;
    }
}

int main(void) {
    Aluno *inicio = NULL;
    Aluno *fim = NULL;

    Aluno *al1 = no(1, "Maria");
    incluirInicio(al1, &inicio, &fim);

    Aluno *auxiliar = inicio;

    printf("%d\n", inicio->mat);
    while (auxiliar != NULL) {
        printf("%d\n", auxiliar->mat);
        printf("%s\n", auxiliar->nome);
        auxiliar = auxiliar->prox;
    }

    return 0;    
}
