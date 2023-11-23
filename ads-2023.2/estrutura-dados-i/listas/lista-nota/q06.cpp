#include <iostream>
#include "pilhaIncompleta.h"

using namespace std;

int main() {
    Pilha P = pilha(100); 

    char frase[100]; 
    cout << "Digite uma frase: ";
    cin.getline(frase, 100);

    for (int i = 0; i < 100; i++) {
        if (frase[i] != '\0') { 
            empilha(frase[i], P);
        } else {
            break;
        }
    }

    while (!vaziap(P)) {
        char caractere = desempilha(P);
        cout << caractere;
    }

    return 0;
}

/**
 * getline() para receber input do usuário e atribuir a frase, depois um loop for em que caso a frase
 * não tenha atingido seu final (caractere '\0'), empilha o caractere no topo da pilha, e caso tenha atingido, sai do loop
 * com o break. Depois, faz o print dos caracteres de maneira inversa, desempilhando-os.
/**/