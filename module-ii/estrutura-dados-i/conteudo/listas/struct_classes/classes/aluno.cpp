#include <iostream>

class Aluno {
    private:
        int mat;
        std::string nome;
    
    public:
        Aluno (int m, std::string n) {
            mat = m;
            nome = n;
        }
        
        int getMat();
        std::string getNome();
};

int Aluno::getMat() {
    return mat;
}

std::string Aluno::getNome() {
    return nome;
}

int main() {
    Aluno a1(1, "Rafael");

    std::cout << "Matricula: " << a1.getMat() << std::endl;
    std::cout << "Nome: " << a1.getNome() << std::endl;

    return 0;
}