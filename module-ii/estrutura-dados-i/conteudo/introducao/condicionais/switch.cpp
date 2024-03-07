#include <iostream>

using namespace std;

int main() {
    char grade;

    cout << "digite um valor (entre A e D): ";
    cin >> grade;

    switch (grade) {
    case 'A':
        cout << "voce escolheu a opcao A" << endl;
        break;
    case 'B':
        cout << "voce escolheu a opcao B" << endl;
        break;
    case 'C':
        cout << "voce escolheu a opcao C" << endl;
        break;
    case 'D':
        cout << "voce escolheu a opcao D" << endl;
        break;
    default:
        cout << "opcao invalida" << endl;
        break;
    }
}