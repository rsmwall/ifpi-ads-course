#include <stdio.h>

int main(void) {
    int a = 5, b = 3;
    int *p = &a, *q = &b;
    *p = *p + *q;
    *q = *p - *q;
    *p = *p - *q;

    printf("%d, %d\n", a, b);
    return 0;
}

// *p = 5 e *q = 3
// *p = 5 + 3 = 8
// *q = 8 - 3 = 5
// *p = 8 - 5