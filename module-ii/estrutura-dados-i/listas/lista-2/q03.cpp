#include <stdio.h>
#include <iostream>

using namespace std;

typedef struct no{
    int item;
    struct no *prox;
}No;

int main(){
    No v[4] = {{3, v+2}, {4, NULL}, {10, v+1}};

    for (No *p = v; p != NULL; p = p -> prox){
        cout << p -> item << endl;
    }

    No *n1 = new No();
    n1 -> item = 10;
    n1->prox = NULL;

    No *n2 = new No();
    n2 -> item = 3;
    n2 -> prox = NULL;

    No *n3 = new No();
    n3 -> item = 4;
    n3 -> prox = NULL;

    n2 -> prox = n3;
    n3 -> prox = n1;

    No* atual = n2;

    while (atual != NULL) {
        cout << atual -> item << endl;
        atual = atual -> prox;
    }
    
}

// a) valores impressos: 3, 10, 4
// b.1) 
    // n1 -> prox = n2;

// b.2)
    // No* atual = n1;

    // while (atual != NULL) {
    //     cout << atual -> item << endl;
    //     atual = atual -> prox;
    // }

// c.1)
    // n2 -> prox = n3;
    // n3 -> prox = n1;

// c.2)
    // No* atual = n2;

    // while (atual != NULL) {
    //     cout << atual -> item << endl;
    //     atual = atual -> prox;
    // }