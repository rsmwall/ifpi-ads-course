/**
 * 4. Imagine que você deve modelar várias figuras geométricas em TypeScript e que
 * cada uma tem sua forma específica de calcular área e perímetro. Proponha e
 * implemente uma hierarquia de classes usando uma classe abstrata chamada
 * FiguraGeometrica e outras concretas: Quadrado, Triangulo, etc.
 */

export abstract class FiguraGeometrica {
    abstract calcularArea(): number
    abstract calcularPerimetro(): number
}

export class Quadrado extends FiguraGeometrica {
    constructor(private _lado: number) { super() }

    public calcularArea(): number {
        return this._lado * this._lado   
    }

    public calcularPerimetro(): number {
        return 4 * this._lado
    }
}

// considerando um triangulo equilatero
export class Triangulo extends FiguraGeometrica {
    constructor(private _lado: number) { super() }

    public calcularArea(): number {
        let altura = (Math.sqrt(3) / 2) * this._lado   
        return (this._lado * altura) / 2 
    }

    public calcularPerimetro(): number {
        return 3 * this._lado    
    }
}

export class Circulo extends FiguraGeometrica {
    constructor(private _raio: number) { super() }

    public calcularArea(): number {
        return Math.PI * this._raio ** 2
    }

    public calcularPerimetro(): number {
        return 2 * Math.PI * this._raio
    }
}