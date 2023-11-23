#include <stdio.h>
#include <stdlib.h>

int binarySearch (int x, int v[], int n) { 
    int p = 0; 
    int u = n-1; 
    while ( p <= u ) { 
        int m = (p+u)/2; 
        if(x = v[m]) return 1; 
        if(x < v[m] ) u = m-1; 
        else p = m+1; 
        return 0; 
    } 
}

int main() {
    int vetor[10] = {1, 3, 5, 7, 9, 11, 13, 15, 17, 19};
    int tamanho = 10;
    int elemento = 10;

    if (binarySearch(elemento, vetor, tamanho)) {
        printf("O valor %d foi encontrado no array.\n", elemento);
    } else {
        printf("O valor %d nao foi encontrado no array.\n", elemento);
    }

    return 0;
}

/**
 * x é o elemento que queremos buscar
 * v é o vetor, precisa estar ordenado
 * n é o tamanho do vetor
 * p e u representam respectivamente o indíce do início e final do vetor
 * enquanto o índice p for menor que o índice u, a busca continua
 * m é atualizado para sempre ser o índice do MEIO do vetor
 * se o elemento em [m] for igual ao elemento x que queremos, a função retorna 1 significando que encontramos o elemento.
 * se não, verifica se o elemento x é MENOR que o elemento em [m]. Caso seja, significa que ele está no lado esquerdo do vetor, então "puxamos" o vetor para trás com u = m - 1
 * Caso não seja, então significa que está do lado direito do vetor, então "puxamos" o vetor para frente com p = m+1
 * se o loop termina sem encontrar a igualdade entre x e [m], o loop retorna 0, ou seja, elemento não encontrado.
/**/ 