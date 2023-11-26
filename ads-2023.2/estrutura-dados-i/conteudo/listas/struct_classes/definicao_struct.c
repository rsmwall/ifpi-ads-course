// struct aluno {
//     int mat;
//     float nota;
//     char nome[30];
// };

// typedef struct aluno Aluno;

// =============================

typedef struct aluno {
    int mat;
    float nota;
    char nome[30];
} Aluno;

int main(void) {
    Aluno vet_aluno[20];

    int i = 0;

    while (i < 20) {
        printf("Digite a matricula: ");
        scanf("%d", &vet_aluno[i].mat);
        printf("Digite a nota: ");
        scanf("%d", &vet_aluno[i].nota);
        printf("Digite o nome: ");
        scanf("%d", &vet_aluno[i].nome);

        i++;
    }

    return 0;
}