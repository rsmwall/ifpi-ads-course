// Escreve o método para inserir no inicio da lista.

#include <string.h>
#include <iostream>

class No {
    public:
        int mat;
        std::string nome;
        No *prox;
        
        No (int m, std::string n) {
            mat = m;
            nome = n;
            prox = NULL;
        }
};

class Lista {
    public:
        No *inicio;
        No *fim;

        Lista() {
            inicio = NULL;
            fim = NULL;
        }

        void adicionarInicio(No *novo) {
            if (inicio == NULL) {
                inicio = novo;
                fim = novo;
            } else {
                novo->prox = inicio;
                inicio = novo;
            }
        }
};

int main(void) {
    Lista lista;
    int mat = 1;
    std::string nome = "Rafael";

    No novo(mat, nome);
    lista.adicionarInicio(&novo);

    mat = 2;
    nome = "Maria";

    No novo2(mat, nome);
    lista.adicionarInicio(&novo2);

    return 0;
}