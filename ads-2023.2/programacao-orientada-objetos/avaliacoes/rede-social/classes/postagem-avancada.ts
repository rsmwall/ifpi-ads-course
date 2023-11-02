import { Postagem } from "./postagem";

export class PostagemAvancada {
    private _hashtags: string[]
    private _visualizacoesRestantes: number

    constructor(hashtags: string[], visualizacoesRestantes: number) {
        this._hashtags = hashtags
        this._visualizacoesRestantes = visualizacoesRestantes
    }
    
    public get hashtags() : string[] {
        return this._hashtags
    }
    
    public get visualizacoesRestantes() : number {
        return this.visualizacoesRestantes
    }
    
}