import { Postagem } from "./postagem";

export class PostagemAvancada {
    private _hashtags: string[]
    private _visualizacoesRestantes: number

    constructor(hashtags: string[], visualizacoesRestantes: number) {
        this._hashtags = hashtags
        this._visualizacoesRestantes = visualizacoesRestantes
    }

    public adicionarHashtags(hashtag: string): void {
        this._hashtags.push(hashtag)
    }

    public existeHashtag(hashtag: string): boolean {
        for (const hTag of this._hashtags) {
            if (hTag == hashtag) {
                return true
            }
        }

        return false
    }

    public decrementarVisualizacoes(): void {
        this._visualizacoesRestantes--
    }
    
    public get hashtags() : string[] {
        return this._hashtags
    }
    
    public get visualizacoesRestantes() : number {
        return this.visualizacoesRestantes
    }
    
}