#include <stdio.h>

int main() {
    int numero;
    numero = 10;

    printf("O %d elevado ao quadrado resulta em %d\n", numero, numero * numero);

    //  Exemplo: ler e mostrar a idade

    // quando recebendo do usuario, usa-se & exceto para strings

    int idade;
    char nome[30];

    printf("Digite sua idade: ");
    scanf("%d", &idade);

    printf("Digite seu nome: ");
    scanf("%s", nome);

    printf("%s, sua idade eh %d anos\n", nome, idade);

}