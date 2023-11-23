#include <stdio.h> 
#include "pilhaIncompleta.h" 

int main(void) { 
    Pilha P = pilha (100);

    empilha (8,P); 
    
    while( topo(P)>0) empilha(topo (P)/2, P); 
    while( !vaziap (P)) printf("%f\n", desempilha (P)); 
    return 0;
}

/**
 * Este código retorna a mensagem "pilha cheia!". Como o primeiro while da linha 6 sempre
 * divide o elemento por 2, ele nunca alcançará sua condição de parada, o 0, logo essa linha 
 * rodará infinitamente até a pilha atingir seu valor máximo, assim, a função empilha() aborta a execução e
 * o programa não chega a sua saída.
*/