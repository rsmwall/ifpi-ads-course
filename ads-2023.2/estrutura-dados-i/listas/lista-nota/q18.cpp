#include <stdio.h>
#include "lista.h"

int main() {
    Lista I = no(1, no(2, no(3, NULL)));
    Lista J = no(1, no(2, no(3, NULL)));
    Lista K = no(1, no(3, no(2, NULL)));

    printf("Lista I: ");
    exibe(I);
    printf("\n");

    printf("Lista J: ");
    exibe(J);
    printf("\n");

    printf("Lista K: ");
    exibe(K);
    printf("\n");

    printf("Igual (I, J): %d\n", igual(I, J)); 
    printf("Igual (I, K): %d\n", igual(I, K));

    return 0;
}