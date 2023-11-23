#include <iostream>

using namespace std;

class Carro {
    public:
        string modelo;
        string marca;

        Carro(){}
        Carro(string x, string y) {
            modelo = x;
            marca = y;
        }
};

int main() {
    return 0;
}