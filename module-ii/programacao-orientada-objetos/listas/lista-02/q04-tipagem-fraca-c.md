4. Pesquise e exemplifique com um exemplo porque dizemos que a linguagem C,
   mesmo tendo tipagem estática, possui tipagem fraca.

   ```c
        #include <stdio.h>

        int main() {
            int a = 1;
            float b = 2.5;

            int c = a + b;

            printf("%d", c); // 3
        }
   ```