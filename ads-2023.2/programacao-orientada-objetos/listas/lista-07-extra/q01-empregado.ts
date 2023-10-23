/*
1. Dadas as três classes abaixo:

    class Empregado {
    salario: number = 500;
    calcularSalario(): number { ...}
    }

    class Diarista extends Empregado {
    calcularSalario(): number { ...}
    }

    class Horista extends Diarista {
    calcularSalario(): number { ...}
    }

    Implemente os métodos calcularSalario() de cada classe da seguinte forma:
        a. Empregado: apenas retorna o valor do atributo salário;
        b. Diarista: sobrescreve calcularSalario, chamando o método homônimo de
        Empregado e dividindo o resultado por 30;
        c. Horista: sobrescreve calcularSalario, chamando o método homônimo de
        Diarista e dividindo o resultado por 24.
*/

class Empregado {
    private _salario: number = 500

    public calcularSalario(): number {
        return this._salario
    }

    get salario() {
        return this._salario
    }
}

class Diarista extends Empregado {
    public calcularSalario(): number {
        return this.salario / 30
    }
}

class Horista extends Diarista {
    public calcularSalario(): number {
        return this.salario / 24
    }
}

let emp: Empregado = new Empregado
let dia: Diarista = new Diarista
let hor: Horista = new Horista

console.log(emp.calcularSalario())
console.log(dia.calcularSalario())
console.log(hor.calcularSalario())
