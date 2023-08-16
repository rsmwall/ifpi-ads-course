/*
3. Leia duas strings e compare, se elas forem iguais, imprima “São iguais”, senão imprima “São
   diferentes!!”:
    B) As duas strings devem ser definidas como string, para isso use a blioteca iostream do C++. conforme
       abaixo:
*/

#include <stdio.h>
#include <iostream>

using namespace std;

int main() {
    string f1;
    string f2;
    bool diferentes = false;

    cout << "Digite a primeira frase: ";
    cin >> f1;

    cout << "Digite a segunda frase: ";
    cin >> f2;

    if (f1.length() != f2.length()) {
        cout << "Sao diferentes!\n";
    }

    int length_f1 = f1.length();

    for (int i = 0; i < length_f1; i++) {
        if (f1[i] != f2[i]) {
            diferentes = true;
            break;
        } else {
            diferentes = false;
        }
    }

    if (!diferentes) {
        cout << "Sao iguais!\n";
    } else {
        cout << "Sao diferentes!\n";
    }
}