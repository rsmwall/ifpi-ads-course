/*
7. Crie uma classe chamada Triangulo que:
    • Possua 3 atributos inteiros representando os lados;
    • Crie um método que retorna true se os lados formarem um triângulo de
    acordo com a regra: |b-c| < a < b+c;
    • Crie 3 métodos: ehIsoceles(), ehEquilatero() e ehEscaleto() que retorne
    verdadeiro caso o triângulo seja um dos tipos relacionados ao nome do
    método. Eles devem chamar antes de tudo, o método da questão b. e
    retornar false se esse método já retornar false também;
    • Instancie classes Triangulo de diferentes lados e seus métodos.
*/

class Triangulo {
    ladoA: number;
    ladoB: number;
    ladoC: number;
  
    constructor(ladoA: number, ladoB: number, ladoC: number) {
      this.ladoA = ladoA;
      this.ladoB = ladoB;
      this.ladoC = ladoC;
    }
  
    formaTriangulo(): boolean {
      return Math.abs(this.ladoB - this.ladoC) < this.ladoA && this.ladoA < this.ladoB + this.ladoC;
    }
  
    ehIsoceles(): boolean {
      if (!this.formaTriangulo()) {
        return false;
      }
      return this.ladoA === this.ladoB || this.ladoA === this.ladoC || this.ladoB === this.ladoC;
    }
  
    ehEquilatero(): boolean {
      if (!this.formaTriangulo()) {
        return false;
      }
      return this.ladoA === this.ladoB && this.ladoA === this.ladoC;
    }
  
    ehEscaleno(): boolean {
      if (!this.formaTriangulo()) {
        return false;
      }
      return this.ladoA !== this.ladoB && this.ladoA !== this.ladoC && this.ladoB !== this.ladoC;
    }
  }
  
  let triangulo1: Triangulo = new Triangulo(3, 3, 3);
  console.log(triangulo1.ehIsoceles());   // false
  console.log(triangulo1.ehEquilatero()); // true
  console.log(triangulo1.ehEscaleno());   // false
  
  let triangulo2: Triangulo = new Triangulo(3, 4, 5);
  console.log(triangulo2.ehIsoceles());   // false
  console.log(triangulo2.ehEquilatero()); // false
  console.log(triangulo2.ehEscaleno());   // true