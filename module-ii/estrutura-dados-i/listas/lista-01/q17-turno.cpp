/* Leia o turno em que um aluno estuda, sendo M para matutino, V para Vespertino ou N para Noturno e
escreva a mensagem "Bom Dia!", "Boa Tarde!" ou "Boa Noite!" ou "Valor Inválido!", conforme o caso */

#include <stdio.h>

int main(){
    char turno;

    printf("Digite aletra referente ao turno: ");
    scanf("%s", &turno);

    if(turno =='m' || turno == 'M'){
        printf("Bom dia!\n\n");
    }else if(turno == 'v' || turno == 'V'){
        printf("Boa Tarde!\n\n");
    }else if(turno == 'n' || turno == 'N'){
        printf("Boa Noite!\n\n");
    }else{
        printf("Valor Inválido\n\n");
    }
}