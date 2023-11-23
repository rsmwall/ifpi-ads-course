#include <stdio.h> 
#include "filaIncompleta.h" // fila de char
 
int main (void) {
    Fila F = fila(5); 
    for (int i=0; i<=3; i++) enfileira ('A'+i, F); 
    while( !vaziaf (F)) printf("%c\n", desenfileira (F)); destroif (&F); 
    return 0; 
}

//Enfileira A, B, C, D, e depois faz o print de cada os desenfileirando. O caractere é incrementado a cada volta, tornando-se o próximo caractere da tabela ASCII.