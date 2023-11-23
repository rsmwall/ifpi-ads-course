#include <stdio.h> 
#include "pilhaIncompleta.h"

int main(void) { 
Pilha P = pilha (3); 
empilha (1, P); 
empilha (2, P); 
printf("%d\n", desempilha (P)); 
printf("%d\n", desempilha (P)); 
printf("%d\n", desempilha (P)); 
return 0; 
} 

/**
 * Retorna 2, 1, e a mensagem "pilha vazia!". Isso acontece pois novos elementos
 * são sempre colocados no topo da pilha, e ao desempilhar, os últimos elementos
 * adicionados são os primeiros a serem retornados pela função.
/**/