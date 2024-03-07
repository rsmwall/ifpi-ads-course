// iostream eh a biblioteca padrao de in-out do c++
// precisa incluir: using namespace std
#include <iostream>

using namespace std;

int main(){
    // int valor;
    
    // cout << "Exemplo de saida na tela" << endl;

    // cout << "Digite o valor: ";
    // cin >> valor;

    // usando iostream podemos usar o tipo string

    string mat;
    float nota;
    string nome;

    cout << "Digite sua matricula: ";
    cin >> mat;

    cout << "Digite sua nota: ";
    cin >> nota;

    cout << "Digite seu nome: ";
    cin >> nome;

    cout << mat << "--" << nota << "--" << nome;
}