/*
2. No exemplo, percorra a “frase” e imprima os valores caractere a caractere na tela do computador. O laço
   de repetição deve percorrer “frase” até que ele encontre o final da string. (caractere especial para fim da
   string igual a ‘\0’.
*/

#include <stdio.h>
#include <string.h>

int main () {
    char frase[20] = {"uma frase"};
    int count = strlen(frase);

    for (int i = 0; i < count; i++) {
        printf("\n%c", frase[i]);
    }
    
}
