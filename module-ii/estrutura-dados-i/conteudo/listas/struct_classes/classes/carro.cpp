#include <iostream>

class Carro {
    public:
        std::string modelo;
        std::string marca;

        Carro(){}
        Carro(std::string x, std::string y) {
            modelo = x;
            marca = y;
        }
};

int main() {
    return 0;
}