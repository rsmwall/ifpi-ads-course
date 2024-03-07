#include <iostream>

using namespace std;

int main(){
    int variavel;

    cout << "escreva um numero: ";
    cin >> variavel;

    if (variavel == 5) {
        cout << "a variavel eh igual a 5";
    }

    // usando valores booleanos
    if (variavel) {
        cout << "\na variavel e verdadeira";
    }
}