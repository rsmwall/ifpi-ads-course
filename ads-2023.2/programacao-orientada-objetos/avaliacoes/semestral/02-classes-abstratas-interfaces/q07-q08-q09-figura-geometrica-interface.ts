/**
 * 7. Refaça a questão 04 do exercício usando interfaces com os métodos propostos
 * em vez de herança. Crie também um script que instancie e teste diferentes formas
 * geométricas.
 *
 * 8. Crie uma interface chamada IComparavel com um método chamado comparar que
 * receba uma forma geométrica como parâmetro e retorna um inteiro como
 * resultado. Implemente em cada uma das classes do exemplo anterior a interface
 * retornando -1, 0 e 1 caso a área da forma seja menor, igual ou maior que a
 * passada via parâmetro.
 *
 * 9. Crie uma classe para testar os exemplos anteriores. Instancie várias formas
 * diferentes. Pegue duas formas chame em uma delas o método comparar
 * passando a outra como parâmetro e exiba o resultado. Repita para outras formas.
 */

export interface FiguraGeometrica {
    calcularArea(): number
    calcularPerimetro(): number
}

export interface IComparavel {
    comparar(figura: FiguraGeometrica & IComparavel): number
}

export class Quadrado implements FiguraGeometrica, IComparavel {
    constructor(private _lado: number) { }

    public calcularArea(): number {
        return this._lado * this._lado
    }

    public calcularPerimetro(): number {
        return 4 * this._lado
    }

    get lado() {
        return this._lado
    }

    public comparar(figura: FiguraGeometrica & IComparavel): number {
        if (this.calcularArea() == figura.calcularArea()) {
            return 0
        } else if (this.calcularArea() > figura.calcularArea()) {
            return 1
        } else {
            return -1
        }
    }
}

// considerando um triangulo equilatero
export class Triangulo implements FiguraGeometrica, IComparavel {
    constructor(private _lado: number) { }

    public calcularArea(): number {
        let altura = (Math.sqrt(3) / 2) * this._lado
        return (this._lado * altura) / 2
    }

    public calcularPerimetro(): number {
        return 3 * this._lado
    }

    get lado() {
        return this._lado
    }

    public comparar(figura: FiguraGeometrica & IComparavel): number {
        if (this.calcularArea() == figura.calcularArea()) {
            return 0
        } else if (this.calcularArea() > figura.calcularArea()) {
            return 1
        } else {
            return -1
        }
    }
}

export class Circulo implements FiguraGeometrica, IComparavel {
    constructor(private _raio: number) { }

    public calcularArea(): number {
        return Math.PI * this._raio ** 2
    }

    public calcularPerimetro(): number {
        return 2 * Math.PI * this._raio
    }

    get raio() {
        return this._raio
    }

    public comparar(figura: FiguraGeometrica & IComparavel): number {
        if (this.calcularArea() == figura.calcularArea()) {
            return 0
        } else if (this.calcularArea() > figura.calcularArea()) {
            return 1
        } else {
            return -1
        }
    }
}

// Questão 9 - Classe de Testes
export class TesteFiguras {
    constructor(private figura1: FiguraGeometrica & IComparavel, private figura2: FiguraGeometrica & IComparavel) {}

    compara() {
        return this.figura1.comparar(this.figura2)
    }
}

// Questão 7 - Teste

let quadrado: Quadrado = new Quadrado(5)
let triangulo: Triangulo = new Triangulo(3)
let circulo: Circulo = new Circulo(7)

console.log("Teste - Questão 7:")

console.log("Quadrado:")
console.log(`Lado: ${quadrado.lado}`)
console.log(`Área: ${quadrado.calcularArea()}`)
console.log(`Perímetro: ${quadrado.calcularPerimetro()}`)
console.log(`\n`)

console.log("Triângulo:")
console.log(`Lado: ${triangulo.lado}`)
console.log(`Área: ${triangulo.calcularArea()}`)
console.log(`Perímetro: ${triangulo.calcularPerimetro()}`)
console.log(`\n`)

console.log("Círculo:")
console.log(`Raio: ${circulo.raio}`)
console.log(`Área: ${circulo.calcularArea()}`)
console.log(`Perímetro: ${circulo.calcularPerimetro()}`)

/////////////////////////////////////////////////////////////////////////


// Questão 8 e 9 - Teste

console.log(`\n`)
console.log("Teste - Questão 8:")

let quadrado2: Quadrado = new Quadrado(6.1)
let quadrado3: Quadrado = new Quadrado(6.1)

let triangulo2: Triangulo = new Triangulo(4.5)
let circulo2: Circulo = new Circulo(8.7)


let teste1: TesteFiguras = new TesteFiguras(quadrado2, quadrado3)
console.log(teste1.compara())

let teste2: TesteFiguras = new TesteFiguras(circulo2, triangulo2)
console.log(teste2.compara())

let teste3: TesteFiguras = new TesteFiguras(quadrado2, triangulo2)
console.log(teste3.compara())

let teste4: TesteFiguras = new TesteFiguras(triangulo2, circulo2)
console.log(teste4.compara())