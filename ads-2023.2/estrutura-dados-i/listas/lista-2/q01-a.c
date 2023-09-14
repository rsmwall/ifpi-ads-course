#include <stdio.h>

int main(void) {
    int i = 15, j, *p, *q;
    p = &i;
    *p = 20;
    j = 2 * *p;
    q = &i;
    *p = *q - 1;
    q = &j;
    *p = *q - 1;

    printf("%d", j);
}

// *p = 39
// p = 0x7fffffffdfb0
// *q = 40
// q = 0x7fffffffdfb4
// i = 39
// j = 40