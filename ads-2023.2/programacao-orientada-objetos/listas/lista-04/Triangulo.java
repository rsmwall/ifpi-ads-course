// teste resolucao de questao em Java

import java.lang.Math;

public class Triangulo {
    int ladoA;
    int ladoB;
    int ladoC;

    public Triangulo (int ladoA, int ladoB, int ladoC) {
        this.ladoA = ladoA;
        this.ladoB = ladoB;
        this.ladoC = ladoC;
    }

    public boolean ehTriangulo() {
        return (Math.abs(ladoB - ladoC) < ladoA && ladoA < ladoB + ladoC);
    }

    public boolean ehIsosceles() {
        if (this.ehTriangulo()) {
            return (this.ladoA == this.ladoB || this.ladoB == this.ladoC || this.ladoA == this.ladoC);
        }
        return false;
    }

    public boolean ehEscaleno() {
        if (this.ehTriangulo()) {
            return (this.ladoA != this.ladoB || this.ladoB != this.ladoC || this.ladoA != this.ladoC);
        }
        return false;
    }

    public boolean ehEquilatero() {
        if (this.ehTriangulo()) {
            return (this.ladoA == this.ladoB && this.ladoA == this.ladoC);
        }
        return false;
    }
}

class App {
    public static void main(String[] args) {
        Triangulo t1 = new Triangulo(2, 2, 2);
        Triangulo t2 = new Triangulo(3, 2, 2);
        Triangulo t3 = new Triangulo(3, 4, 6);
        Triangulo t4 = new Triangulo(1, 1, 10);
    }
}
