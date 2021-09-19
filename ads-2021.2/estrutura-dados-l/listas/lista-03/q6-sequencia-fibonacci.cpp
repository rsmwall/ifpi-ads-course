/*
Leia um vetor A com N elementos e escreva um vetor B, com os mesmos elementos de A,
sendo que estes deverão estar invertidos, ou seja, o 1o elemento de A deve ser o último
elemento de B; o 2o elemento de A deve ser o penúltimo elemento de B e assim por diante
*/

#include <stdio.h>
#define n 10

int main(){

    int i, a[n];
    a[0] = 0;
    a[1] = 1;

    for(i = 2; i < n; i++){
      a[i] = a[i-1] + a[i-2];
    }

    for(i = 0; i < n; i++){
      printf("%d, ", a[i]);
    }
    
  }