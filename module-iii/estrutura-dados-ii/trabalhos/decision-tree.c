#include <stdio.h>
#include <stdlib.h>
#include <string.h>

typedef struct No {
    char questao[100];
    struct No* sim;
    struct No* nao;
} No;

No* criarNo(const char* questao) {
    No* novo = (No*)malloc(sizeof(No));
    strcpy(novo->questao, questao);

    novo->sim = NULL;
    novo->nao = NULL;

    return novo;
}

void travessia(No* raiz) {
    if (raiz->sim == NULL && raiz->nao == NULL) {
        printf("Diagnostico: %s\n", raiz->questao);
        return;
    }

    char resposta;
    printf("%s (s/n): ", raiz->questao);
    scanf(" %c", &resposta);

    switch (resposta)
    {
    case 's':
        travessia(raiz->sim);
        break;
    
    case 'n':
        travessia(raiz->nao);
        break;

    default:
        travessia(raiz);
        break;
    }
}

void liberar(No* raiz) {
    if (raiz == NULL) return;
    liberar(raiz->sim);
    liberar(raiz->nao);
    free(raiz);
}

int main() {
    No* raiz = criarNo("Voce esta com febre?");

    raiz->sim = criarNo("Voce sente dores no corpo?");
    raiz->sim->sim = criarNo("Dengue");
    raiz->sim->nao = criarNo("Gripe Comum");

    raiz->nao = criarNo("Voce esta com tosse?");
    raiz->nao->sim = criarNo("Covid-19");
    raiz->nao->nao = criarNo("Nenhuma doenca identificada");

    travessia(raiz);
    liberar(raiz);

    return 0;
}

/*
    -------- ARVORE --------

                     Febre?
                    /      \
                 Sim       Não
                /            \
          Dor no corpo?     Tosse?
            /   \          /     \
         Sim    Não     Sim       Não
        /        \       /          \
    Dengue      Gripe  Covid-19   Nenhuma
*/
