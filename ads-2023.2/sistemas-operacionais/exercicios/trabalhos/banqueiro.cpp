#include <iostream>
#include <vector>
#include <array>

// verificar se um processo pode ser executado
bool podeExecutar(std::vector<int>& disponiveis, std::vector<std::array<int, 4>>& alocados, std::vector<std::array<int, 4>>& requisicoes, int processo) {
    for (int i = 0; i < 4; ++i) {
        if (requisicoes[processo][i] > disponiveis[i]) {
            return false;
        }
    }
    return true;
}

// executar um processo e liberar recursos
void executar(std::vector<int>& disponiveis, std::vector<std::array<int, 4>>& alocados, std::vector<std::array<int, 4>>& requisicoes, int processo) {
    for (int i = 0; i < 4; ++i) {
        disponiveis[i] += alocados[processo][i];
        alocados[processo][i] = 0;
    }
}

// algoritmo do banqueiro
void algoritmoBanqueiro() {
    std::vector<int> recursosExistentes = {4, 2, 3, 1};
    std::vector<int> recursosDisponiveis = {2, 1, 0, 0};

    std::vector<std::array<int, 4>> matrizAlocacaoConcorrente = {
        {0, 0, 1, 0},
        {2, 0, 0, 1},
        {0, 1, 2, 0}
    };

    std::vector<std::array<int, 4>> matrizRequisicoes = {
        {2, 0, 0, 1},
        {1, 0, 1, 0},
        {2, 1, 0, 0}
    };

    std::vector<bool> executado(3, false);

    std::cout << "Recursos existentes: ";
    for (int i = 0; i < 4; ++i) {
        std::cout << "[" << recursosExistentes[i] << "] ";
    }
    std::cout << std::endl;

    std::cout << "Recursos disponíveis: ";
    for (int i = 0; i < 4; ++i) {
        std::cout << "[" << recursosDisponiveis[i] << "] ";
    }
    std::cout << std::endl;

    std::cout << "Matriz de alocacao concorrente:" << std::endl;
    std::vector<std::string> nomesProcessos = {"p1", "p2", "p3"};
    for (int i = 0; i < 3; ++i) {
        std::cout << nomesProcessos[i] << " ";
        for (int j = 0; j < 4; ++j) {
            std::cout << "[" << matrizAlocacaoConcorrente[i][j] << "] ";
        }
        std::cout << std::endl;
    }

    std::cout << "Matriz de requisicoes:" << std::endl;
    for (int i = 0; i < 3; ++i) {
        std::cout << nomesProcessos[i] << " ";
        for (int j = 0; j < 4; ++j) {
            std::cout << "[" << matrizRequisicoes[i][j] << "] ";
        }
        std::cout << std::endl;
    }

    while (true) {
        bool executou = false;

        for (int i = 0; i < 3; ++i) {
            if (!executado[i] && podeExecutar(recursosDisponiveis, matrizAlocacaoConcorrente, matrizRequisicoes, i)) {
                executar(recursosDisponiveis, matrizAlocacaoConcorrente, matrizRequisicoes, i);
                std::cout << "Processo " << nomesProcessos[i] << " executado." << std::endl;
                std::cout << "Recursos disponíveis: ";
                for (int j = 0; j < 4; ++j) {
                    std::cout << "[" << recursosDisponiveis[j] << "] ";
                }
                std::cout << std::endl;
                executado[i] = true;
                executou = true;
            }
        }

        if (!executou) {
            break;
        }

        bool todosExecutados = true;
        for (bool e : executado) {
            if (!e) {
                todosExecutados = false;
                break;
            }
        }

        if (todosExecutados) {
            break;
        }
    }

    bool algumNaoExecutado = false;
    for (bool e : executado) {
        if (!e) {
            algumNaoExecutado = true;
            break;
        }
    }

    if (algumNaoExecutado) {
        std::cout << "Há deadlock." << std::endl;
    } else {
        std::cout << "Não há deadlock." << std::endl;
    }
}

int main() {
    algoritmoBanqueiro();
    return 0;
}
