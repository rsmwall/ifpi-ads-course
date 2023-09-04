/*
10. Crie uma classe chamada Jogador e nela:
    • Crie 3 atributos inteiros representando força, nível e pontos atuais;
    • Crie um construtor no qual os 3 parâmetros são passados e inicialize os
    respectivos atributos;
    • Crie um método chamado calcularAtaque. Nele, calcule e retorne o valor da
    multiplicação de força pelo nível. Esse resultado é o dano de ataque do
    jogador;
    • Crie um método chamado atacar em que é passado um outro jogador
    (atacado) como parâmetro. Nele e é feita a subtração do dano (método
    calcularAtaque) dos pontos do atacado;
    • Crie um método chamado estaVivo que retorna true caso o atributo pontos
    do jogador seja maior que zero e falso caso contrário.
    • Altere o método atacar para usar o método está vivo e desconsiderar a
    operação, ou seja, não atacar, caso o jogador passado por parâmetro não
    esteja vivo.
    • Crie um método chamado toString() que retorna a representação textual do
    produto concatenando todos os seus atributos.
    • Avalie em com testes dois jogadores instanciados e inicializados através do
    construtor. Utilize o método de ataque de cada jogador e ao final, verifique
    qual jogador tem mais pontos.
*/

class Jogador {
    forca: number;
    nivel: number;
    pontos: number;
  
    constructor(forca: number, nivel: number, pontos: number) {
      this.forca = forca;
      this.nivel = nivel;
      this.pontos = pontos;
    }
  
    calcularAtaque(): number {
      return this.forca * this.nivel;
    }
  
    atacar(atacado: Jogador): void {
      if (!atacado.estaVivo()) {
        console.log("O jogador atacado está morto. Não é possível atacar.");
        return;
      }
      const dano: number = this.calcularAtaque();
      atacado.pontos -= dano;
      console.log(`O jogador atacou com um dano de ${dano} pontos.`);
    }
  
    estaVivo(): boolean {
      return this.pontos > 0;
    }
  
    toString(): string {
      return `Força: ${this.forca}, Nível: ${this.nivel}, Pontos: ${this.pontos}`;
    }
  }
  
  let jogador1: Jogador = new Jogador(10, 5, 100);
  let jogador2: Jogador = new Jogador(8, 4, 120);
  
  jogador1.atacar(jogador2);
  jogador2.atacar(jogador1);
  
  console.log(jogador1.toString()); // Força: 10, Nível: 5, Pontos: 80
  console.log(jogador2.toString()); // Força: 8, Nível: 4, Pontos: 70
  
  console.log(`O jogador com mais pontos é: ${jogador1.pontos > jogador2.pontos ? 'Jogador 1' : 'Jogador 2'}`);