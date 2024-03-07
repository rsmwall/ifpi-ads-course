/* Leia 2 datas (cada data é composta por 3 variáveis inteiras: dia, mês e ano) e escreva qual delas é a mais
recente */

#include <stdio.h>

int main(){

    int dia1, dia2, mes1, mes2, ano1, ano2;

    printf("Digite o primeiro dia: ");
    scanf("%d", &dia1);

    printf("Digite o primeiro mes: ");
    scanf("%d", &mes1);

    printf("Digite o primeiro ano: ");
    scanf("%d", &ano1);

    printf("Digite o segundo dia: ");
    scanf("%d", &dia2);

    printf("Digite o segundo mes: ");
    scanf("%d", &mes2);

    printf("Digite o segundo ano: ");
    scanf("%d", &ano2);

    if(ano1 > ano2){
        printf("%d/%d/%d é a data mais recente\n\n", dia1, mes1, ano1);
    }else if(ano2 > ano1){
        printf("%d/%d/%d é a data mais recente\n\n", dia2, mes2, ano2);
    }else if(ano1 == ano2){
        if(mes1 > mes2){
            printf("%d/%d/%d é a data mais recente\n\n", dia1, mes1, ano1);
        }else if(mes2 > mes1){
            printf("%d/%d/%d é a data mais recente\n\n", dia2, mes2, ano2);
        }else if(mes1 == mes2){
            if(dia1 > dia2){
                printf("%d/%d/%d é a data mais recente\n\n", dia1, mes1, ano1);
            }else if(dia2 > dia1){
                printf("%d/%d/%d é a data mais recente\n\n", dia2, mes2, ano2);
            }else{
                printf("As datas são as mesmas!\n\n");
            }
        }
    }

}