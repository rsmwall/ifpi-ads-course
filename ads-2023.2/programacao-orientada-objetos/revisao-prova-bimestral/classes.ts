class Alo {
    // nome: string

    // constructor(nome: string) {
    //     this.nome = nome
    // }

    constructor(public nome: string) {}

    dizerAlo(): void {
        console.log(`Alo ${this.nome}`)
    }
}

let alo: Alo = new Alo("Rafael")
alo.dizerAlo()
