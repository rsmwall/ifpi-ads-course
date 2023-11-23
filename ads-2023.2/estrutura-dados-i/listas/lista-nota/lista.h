//#define fmt "%d" //q. 16, 18
#define fmt "%c" //q. 17, 19
#include <iostream>
#include <stdio.h>
#include <stdlib.h>

typedef int Item;
typedef struct no {
    Item item;
    struct no *prox;
}*Lista;

Lista no (Item x, Lista p) {
    Lista n = (Lista)malloc(sizeof(struct no));
    n->item = x;
    n->prox = p;
    return n;
}

void exibe(Lista L) {
    while (L != NULL) {
        printf(fmt, L->item);
        L = L->prox;
    }
}

void anexa(Lista *A, Lista B) {
    if (B == NULL) return;
    while (*A != NULL) A = &(*A)->prox;
    *A = B;
}

void destroi(Lista *L) {
    while(*L != NULL) {
        Lista n = *L;
        *L = n->prox;
        free(n);
    }
}

int tam(Lista L) {
    if (L == NULL) return 0;
    return 1 + tam(L->prox);
}

int pert(Item x, Lista L) { 
if( L== NULL) return 0; 
if ( x == L->item) return 1; 
return pert (x, L->prox); 
}

Lista clone (Lista L) { 
if( L == NULL) return NULL; 
return no (L->item, clone (L->prox)); 
}

void exibe_inv (Lista L) { 
if( L= NULL ) return; exibe_inv (L->prox); 
printf(fmt, L->item);
}

int soma(Lista L) {
    if (L == NULL) {
        return 0;
    } else {
        return L->item + soma(L->prox); 
    }
}

void substitui(Item x, Item y, Lista L) {
    if (L == NULL) {
        return;
    } else {
        if (L->item == x) {
            L->item = y;
        }
        substitui(x, y, L->prox);
    }
}

//Se L for nulo, retorna nada. Se o item em L for igual ao elemento a substituir (x), então ele é substituido por y. Depois, chama a função recursivamente.

int igual(Lista A, Lista B) {
    if (A == NULL && B == NULL) {
        return 1;
    }
    if (A == NULL || B == NULL) {
        return 0;
    }
    if (A->item != B->item) {
        return 0;
    }
    return igual(A->prox, B->prox);
}

/**
 * Se as duas listas forem nulas, retorna 1 pois são iguais. Se apenas UMA das listas for nula, retorna 0 pois são diferentes. 
 * Se o item atual em A for diferente do item atual em B, também retorna 0. Depois, chama a função recursivamente, e se
 * as duas condições para retornar 0 (não é igual) nunca forem acionadas, então a lista A é igual a lista B.
/**/

Item enesimo(int n, Lista L) {
    if (n < 1 || L == NULL) {
        printf("Erro fatal: Indice invalido!\n");
        exit(EXIT_FAILURE);
    }
    
    if (n == 1) {
        return L->item;
    } else {
        return enesimo(n - 1, L->prox);
    }
}

/**
 * Se n for menor que 1 ou a lista for nula, ocorre um erro fatal e o código é abortado, pois o índice é inválido. Caso n seja IGUAL a 1,
 * já retorna o primeiro item da lista, e caso seja maior que 1, diminui o índice por 1 e procura no próximo item até encontrar.
 * Assim, se for mandado o número 2, o resultado será o segundo item da lista.
/**/