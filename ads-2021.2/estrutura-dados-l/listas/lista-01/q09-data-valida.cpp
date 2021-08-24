// Leia uma data (dia, mês e ano), verifique e escreva se a data é ou não válida

#include <stdio.h>

int main(){
    
    int dia, mes, ano, data_val;
    bool bissexto, mes_val, dia_val;

    printf("Digite o dia: ");
    scanf("%d", &dia);

    printf("Digite o mes: ");
    scanf("%d", &mes);

    printf("Digite o ano: ");
    scanf("%d", &ano);

    // Descobrir se o ano é bissexto

    if(ano % 4 == 0){
        if(ano % 100 == 0){
            if(ano % 400 == 0){
                bissexto = true;
            }else{
                bissexto = false;
            }
        }else{
            bissexto = true;
        }
    }else{
        bissexto = false;
    }

    // Verificar mês

    if(mes <= 12){
        mes_val = true;
    }else{
        mes_val = false;
    }

    // Verificar dia

    if(bissexto == true && mes == 2){
        if(dia <= 29){
            dia_val = true;
        }else{
            dia_val = false;
        }
    }else if (bissexto == false && mes == 2){
        if(dia <= 28){
            dia_val = true;
        }else{
            dia_val = false;
        }
    }else if(mes == 4 || mes == 6 || mes == 9 || mes == 11){
        if(dia <= 30){
            dia_val = true;
        }else{
            dia_val = false;
        }
    }else if(dia <= 31){
        dia_val = true;
    }else{
        dia_val = false;
    }

    if(mes_val == true && dia_val == true){
        printf("A data é válida!\n\n");
    }else{
        printf("A data não é válida!\n\n");
    }

}