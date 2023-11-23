#include "filaIncompleta.h"
#include <stdio.h> 

int main () {

Fila F = fila (5); 
enfileira (1, F); 
enfileira (2, F); 
enfileira (3, F); 
enfileira (desenfileira (F), F); //2, 3, 1.
enfileira (desenfileira (F), F); //3, 1, 2.
printf("%d\n", desenfileira (F)); //3.
}

//A saída é 3, já que 3 está na frente da fila.