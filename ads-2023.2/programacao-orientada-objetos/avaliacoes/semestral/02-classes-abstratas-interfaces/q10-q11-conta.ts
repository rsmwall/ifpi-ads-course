/**
 * 10. Implemente o diagrama de classes abaixo:
 */

/**
 * 11. Crie uma classe chamada AuditoriaInterna que tenha dois métodos que tenha um
* array de Tributaveis e os métodos:
*
* a. adicionar(Tributável);
*
* b. calcularTributos(): retorna um double que representa a soma de todos os
* cálculos dos tributos de todos os tributáveis;
*
* c. Crie uma classe de testes que instancie várias classes ContaCorrente e
* SeguroDeVida, adicione-as na classe AuditoriaInterna e exiba o resultado
* do método calculaTributos. Perceba que a classe de auditoria não se
* preocupa que tipo de classe está sendo passada.
 */

export interface Tributavel {
    calculaTributos(): number
}

export class Conta {
	private _nome: string;
	private _saldo: number;

	constructor(nome: string, saldoInicial: number) {
		this._nome = nome;
		this._saldo = saldoInicial;
	}

    get saldo(): number {
        return this._saldo
    }

    set saldo(saldo: number) {
        this._saldo = saldo 
    }

    get nome(): string {
        return this._nome
    }

    set nome(nome: string) {
        this._nome = nome
    }
}

export class ContaCorrente extends Conta implements Tributavel {

	constructor(nome: string, saldo: number) {
		super(nome, saldo);
	}

	public calculaTributos(): number {
        return (this.saldo * 10/100) 
    }
}

export class SeguroDeVida implements Tributavel {
    public calculaTributos(): number {
        return 50
    }
}

export class AuditoriaInterna {
    private _tributaveis: Tributavel[] = []

    public calcularTributos(): number {
        let somaTributos: number = 0 

        for (let tributavel of this._tributaveis) {
            somaTributos += tributavel.calculaTributos()
        }

        return somaTributos
    }

    get tributaveis(): Tributavel[] {
        return this._tributaveis
    }
}

export class Teste {
    private _contaCorrente1: ContaCorrente = new ContaCorrente("João", 100)
    private _contaCorrente2: ContaCorrente = new ContaCorrente("Maria", 150)
    private _contaCorrente3: ContaCorrente = new ContaCorrente("Pedro", 250)

    private _seguroDeVida1: SeguroDeVida = new SeguroDeVida()
    private _seguroDeVida2: SeguroDeVida = new SeguroDeVida()
    private _seguroDeVida3: SeguroDeVida = new SeguroDeVida()

    private _auditoriaInterna: AuditoriaInterna = new AuditoriaInterna()

    public adicionarTributaveis(): void {
        this._auditoriaInterna.tributaveis.push(this._contaCorrente1, this._contaCorrente2, this._contaCorrente3,
                                                this._seguroDeVida1, this._seguroDeVida2, this._seguroDeVida3)
    }

   public exibirResultadoTributos(): void {
    console.log(`Tributos:`)
    for (let tributavel of this._auditoriaInterna.tributaveis) {
        console.log(`Tributo: ${tributavel.calculaTributos()}`)
    }
    console.log(`Resultado da Soma dos Tributos: ${this._auditoriaInterna.calcularTributos()}`)
    }
}

let novoTeste: Teste = new Teste()

novoTeste.adicionarTributaveis()
novoTeste.exibirResultadoTributos()