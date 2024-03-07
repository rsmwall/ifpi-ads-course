#include <stdio.h>
#include <stdlib.h>
#include "lista.h"

int main() {
    Lista L = no('a', no('b', no('c', no('d', NULL))));

    printf("Lista: ");
    exibe(L);
    printf("\n");

    int indice = 3;
    Item elemento = enesimo(indice, L);
    printf("O %d-esimo elemento da lista e: %c\n", indice, elemento);
    
    return 0;
}