#include <stdio.h>
#include <stdlib.h>
#include <string.h>

typedef struct lista {
    char letra[1];
    struct lista *prox;
} Lista;

Lista *novo = NULL;
Lista *inicio = NULL;
Lista *fim;
Lista *atual;
Lista *anterior;

void inserirLetraInicio(Lista *n);
void mostrar();

int main(void) {
    int cont;
    char l[1];

    do {
        printf("\n\n1 - Inserir Letra no inicio da Lista");
        printf("\n2 - Mostrar Letras");
        printf("\n3 - Sair");

        printf("\n\nDigite a Opcao desejada: ");
        scanf("%d", &cont);
        getchar();

        switch (cont) {
            case 1:
                printf("\nDigite uma letra: ");
                scanf("%c", l);

                novo = (Lista*)malloc(sizeof(Lista));
                novo->prox = NULL;
                strcpy(novo->letra, l);

                inserirLetraInicio(novo);

                printf("\nLetra adicionada com sucesso!");

            break;

            case 2:
                mostrar();
            break;

            case 3:
            break;

            default:
                printf("Opcao Invalida! Tente de novo!");
        }
    } while (cont != 3);
    return 0;
}

void inserirLetraInicio(Lista *n) {
    Lista *novo = n;

    if (inicio == NULL) {
        inicio = novo;
        fim = novo;
    } else {
        novo->prox = inicio;
        inicio = novo;
    }
}

void mostrar() {
    atual = inicio;

    while (atual != NULL) {
        printf("Letra: %s\n", atual->letra);
        atual = atual->prox;
    }
}