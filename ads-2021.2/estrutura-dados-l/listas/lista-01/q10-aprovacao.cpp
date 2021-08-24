/* Leia duas notas de um aluno e escreva na tela a palavra “Aprovado” se a média das duas notas for maior
ou igual a 7,0. Caso a média seja inferior a 7,0, escreva “O Aluno deve fazer a prova final!” e o
programa deve ler a nota da prova final e calcule a média final. Se a média final for maior ou igual a
6,0, o programa deve escrever “Aprovado!”, caso contrário deve escrever “Reprovado!”. */

#include <stdio.h>

int main(){

    float nota1, nota2, media, prova_final, media_final;

    printf("Digite a primeira nota: ");
    scanf("%f", &nota1);

    printf("Digite a segunda nota: ");
    scanf("%f", &nota2);

    media = (nota1 + nota2) / 2;

    if(media >= 7){
        printf("Aprovado com média %0.1f\n\n", media);
    }else{
        printf("\nO aluno deve fazer a prova final!\nDigite a nota da Prova Final: ");
        scanf("%f", &prova_final);

        media_final = (media + prova_final) / 2;

        if(media_final >= 6){
            printf("Aprovado!\n\n");
        }else{
            printf("Reprovado!\n\n");
        }
    }

}