#include <stdio.h>
#include "lista.h"

int main() {
    Lista L = no('b', no('o', no('b', no('o', NULL))));

    printf("Lista original: ");
    exibe(L);
    printf("\n");

    substitui('o', 'a', L);

    printf("Lista apos substituicao: ");
    exibe(L);
    printf("\n");

    return 0;
}