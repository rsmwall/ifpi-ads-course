// Leia uma letra e verifique se a letra digitada é vogal ou consoante

#include <stdio.h>

int main(){
    char letra;

    printf("Digite uma letra: ");
    scanf("%s", &letra);

    if(letra == 'a' || letra == 'e' || letra == 'i' || letra == 'o' || letra == 'u' || letra == 'A' || letra == 'E' || letra == 'I' || letra == 'O' || letra == 'U'){
        printf("É vogal\n\n");
    }else{
        printf("É consoante\n\n");
    }
}