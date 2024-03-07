/*
8. Uma classe Equipamento com:
    a. um atributo ligado (tipo boolean)
    b. dois métodos liga() e desliga(). O método liga torna o atributo ligado true e
    o método desliga torna o atributo ligado false.

    c. Crie um método chamado inverte(), que muda o status atual (se ligado,
    desliga...se desligado, liga)
    d. Crie um método que estaLigado() que retorna o valor do atributo ligado
    e. Altere o comportamento dos métodos liga para caso o equipamento já
    esteja ligado, não ligue novamente. Faça o mesmo com o método desligar.
    f. Instancie uma classe Equipamento e teste todos os seus métodos.
*/

class Equipamento {
    ligado: boolean;
  
    constructor() {
      this.ligado = false;
    }
  
    liga(): void {
      if (!this.ligado) {
        this.ligado = true;
        console.log("Equipamento ligado.");
      } else {
        console.log("O equipamento já está ligado.");
      }
    }
  
    desliga(): void {
      if (this.ligado) {
        this.ligado = false;
        console.log("Equipamento desligado.");
      } else {
        console.log("O equipamento já está desligado.");
      }
    }
  
    inverte(): void {
      this.ligado = !this.ligado;
      console.log(this.ligado ? "Equipamento ligado." : "Equipamento desligado.");
    }
  
    estaLigado(): boolean {
      return this.ligado;
    }
  }
  
  let equipamento: Equipamento = new Equipamento();
  equipamento.liga();           // Equipamento ligado.
  equipamento.desliga();        // Equipamento desligado.
  equipamento.liga();           // Equipamento ligado.
  equipamento.inverte();        // Equipamento desligado.
  console.log(equipamento.estaLigado()); // false