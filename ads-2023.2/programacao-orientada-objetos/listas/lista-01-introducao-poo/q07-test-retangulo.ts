/*
7. Considerando o exemplo da classe Retangulo dos slides, implemente um método
   adicional chamado que calcule o perímetro do retângulo e altere a classe
   TestaRetangulo para exibir o cálculo do perímetro.
*/

class Retangulo {
    calcularPerimetro(base : number, altura: number): void {
        console.log(2 * (base + altura))
    }
}

let retangulo = new Retangulo
retangulo.calcularPerimetro(2, 4)