/* Leia uma letra e verifique se letra é "F" e escreva “F – Feminino” ou “M” e escreva “M – Masculino”,
se não for nem F ou M, escreva “Sexo Inválido” */

#include <stdio.h>

int main(){
    char sexo;

    printf("Digite a letra referente ao sexo: ");
    scanf("%s", &sexo);

    if(sexo =='f' || sexo == 'F'){
        printf("F - Feminino\n\n");
    }else if(sexo == 'm' || sexo == 'M'){
        printf("M - Masculino\n\n");
    }else{
        printf("Sexo inválido\n\n");
    }
}
