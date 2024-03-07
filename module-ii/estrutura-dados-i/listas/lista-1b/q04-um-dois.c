#include <stdio.h>

typedef struct { char valor[10]; } Str; 

int main(void) {
    Str x = {"um"};
    Str y = {"dois"};
    
    puts (x.valor);

    x = y;

    puts(x.valor);
    return 0;
}

// primeiro eh impresso o valor em x, que seria "um", logo depois eh atribuido a x, y
// ou seja, tudo que contem x, agora recebeu o que continha em y, incluindo valor