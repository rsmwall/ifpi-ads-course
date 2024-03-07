// Escreva o método remover, aonde será retirado um elemento da lista.

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

    No *atual = lista.inicio;

    int matBusc;
    std::cout << "Digite a matricula a ser buscada: " << std::endl;
    std::cin >> matBusc;
    int achou;

    while (atual != NULL) {
        if (atual->mat == matBusc) {
            achou = 1;
            break;
        } else achou = 0;

        atual = atual->prox;
    }

    if (achou) {
        std::cout << "Mat: " << atual->mat << std::endl;
        std::cout << "Nome: " << atual->nome << std::endl;
    } else {
        std::cout << "Matricula nao encontrada" << std::endl;
    }
    
    return 0;
}