/*
8. Crie uma classe Circulo que possua um atributo raio. Crie dois métodos que
   calculam a área e o perímetro. Instancie um objeto dessa classe, atribua um valor
   ao raio e exiba a área e o perímetro chamando os dois métodos definidos.
*/

class Circulo {
    raio : number = 0

    calcularArea(): number {
        return Math.PI * (this.raio * this.raio)
    }

    calcularPerimetro(): number {
        return 2 * Math.PI * this.raio
    }
}

let circulo = new Circulo
circulo.raio = 3
console.log(circulo.calcularArea())
console.log(circulo.calcularPerimetro())