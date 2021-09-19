/*
Leia uma lista de números e que para cada número lido, escreva o próprio número e a relação
de seus divisores. (flag número = 0)
*/

#include <stdio.h>
#include <iostream>
#include <windows.h>

using namespace std;

int main(){
    SetConsoleOutputCP(CP_UTF8);

    int num;

    for( ; num != 0; ){
        cout << "Digite um número: ";
        cin >> num;

        cout << "Número: " << num << "\n";
    }
}
