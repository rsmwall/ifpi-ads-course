/*
9. Crie uma classe chamada SituacaoFinanceira com os atributos valorCreditos e
   valorDebitos. Crie um método chamado saldo() que retorna/calcula a diferença
   entre crédito e débito. Instancie uma classe SituacaoFinanceira, inicialize os dois
   atributos e exiba o resultado do método saldo().
*/

class SituacaoFinanceira {
    valorCreditos : number = 0
    valorDebitos : number = 0

    saldo(): number {
        return this.valorCreditos - this.valorDebitos
    }
}

let situacao = new SituacaoFinanceira
situacao.valorCreditos = 3000
situacao.valorDebitos = 4500.35
console.log(situacao.saldo())