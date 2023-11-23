#include <iostream>

using namespace std;

class Aluno {
    private:
        int mat;
        string nome;
    
    public:
        Aluno (int m, string n) {
            mat = m;
            nome = n;
        }
        
        int getMat();
        string getNome();
};

int Aluno::getMat() {
    return mat;
}

string Aluno::getNome() {
    return nome;
}

int main() {
    Aluno a1(1, "Rafael");

    cout << "Matricula: " << a1.getMat() << endl;
    cout << "Nome: " << a1.getNome() << endl;

    return 0;
}