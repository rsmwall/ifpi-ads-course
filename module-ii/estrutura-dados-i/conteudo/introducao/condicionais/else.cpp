#include <iostream>

using namespace std;

int main() {
    int temperatura = 23;
    int deposito = 75;

    if (temperatura < 20) {
        cout << "esta frio";
    } else {
        cout << "esta calor";
    }

    // else if

    if (deposito < 20) {
        cout << "deposito inferior a 20%";
    } else if (deposito < 50) {
        cout << "deposito inferior a 50%";
    } else {
        cout << "deposito acima da metade";
    }
}