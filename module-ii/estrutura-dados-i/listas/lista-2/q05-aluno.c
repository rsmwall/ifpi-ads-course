#include <stdio.h>
#include <string.h>
#include <stdlib.h>

typedef struct aluno {
    int mat;

    // usar * cria um ponteiro para o primeiro caractere da string
    char *nome;
    struct aluno* prox;
} Aluno;

Aluno *no(int mat, const char *nome) {
    Aluno* novo = (Aluno*)malloc(sizeof(Aluno));

    // verifica se a alocacao de aluno deu certo
    if (novo == NULL) {
        perror("Erro na alocacao de novo aluno");
        exit(EXIT_FAILURE);
    }

    novo -> mat = mat;

    // strdup aloca memoria e depois copia a string pra essa memoria alocada dinamicamente
    novo -> nome = strdup(nome);

    // verifica se a alocacao de nome deu certo
    if (novo == NULL) {
        perror("Erro na alocacao de nome");
        exit(EXIT_FAILURE);
    }

    novo -> prox = NULL;

    return novo;
}

// incluir o elemento no final da lista
void incluirFinal(Aluno* n, Aluno** inicio, Aluno** fim) {
    Aluno* novo = n;

    if (*inicio == NULL) {
        *inicio = novo;
        *fim = novo;
    } else {
        (*fim) -> prox = novo;
        *fim = novo;
    }
}

// incluir o elemento no inicio da lista
void incluirInicio(Aluno* n, Aluno** inicio, Aluno** fim) {
    Aluno* novo = n;

    if (*inicio == NULL) {
        *inicio = novo;
        *fim = novo;
    } else {
        novo -> prox = *inicio;
        *inicio = novo;
    }
}

// retorna o elemento se encontrado, se nao retorna NULL
Aluno* procura(int mat, Aluno* inicio) {
    
    Aluno* busca = inicio;

    while (busca != NULL) {
        if (busca -> mat == mat)
            return busca;
        busca = busca -> prox;
    }

    return NULL;
}

// libera a memoria da lista
// recomedavel criar funcao para liberar lista inteira da memoria
void liberarLista(Aluno* inicio) {
    while (inicio != NULL) {
        Aluno* temp = inicio;
        inicio = inicio -> prox;
        free(temp -> nome); // libera memoria do nome
        free(temp); // libera memoria do no
    }
}

// mostra todos os elementos da lista
void mostra(Aluno* inicio) {
    
    Aluno* start = inicio;

    while (start != NULL) {
        printf("Mat: %d\n", start -> mat);
        printf("Nome: %s\n\n", start -> nome);
        start = start -> prox;
    }
}

int main(void) {

    // sendo recomendavel evitar variaveis globais, foram movidas pro main, inicio e fim
    Aluno* inicio = NULL;
    Aluno* fim = NULL;

    Aluno* novo = no(1, "Maria");
    incluirFinal(novo, &inicio, &fim);

    novo = no(2, "Katia");
    incluirFinal(novo, &inicio, &fim);

    mostra(inicio);

    // liberar memoria
    liberarLista(inicio);
}
