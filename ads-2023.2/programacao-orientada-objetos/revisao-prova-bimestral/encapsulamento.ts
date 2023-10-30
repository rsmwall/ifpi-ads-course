class Alo1 {
    constructor(private nome:string) {}
    
    dizerAlo(): void {
        console.log("Alo " + this.nome)
    }
}

class Post {
    constructor(private _text: string) {}
    get text(): string {
        return this._text
    }

    set text(text: string) {
        this._text = text
    }
}

let p: Post = new Post("post text")
p.text = "reviwed text"
console.log(p.text)

