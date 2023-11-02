import { Postagem } from "./postagem"
import { Perfil } from "./perfil"

export class PostagemAvancada extends Postagem{
    private _hashtags: string[]
    private _visualizacoesRestantes: number

    constructor(
        id: number, texto: string, curtidas: number, descurtidas: number, 
        data: Date, perfil: Perfil, hashtags: string[], visualizacoesRestantes: number
    ) {
        super(id, texto, curtidas, descurtidas, data, perfil)
        this._hashtags = hashtags
        this._visualizacoesRestantes = visualizacoesRestantes
    }

    public adicionarHashtags(hashtag: string): void {
        this._hashtags.push(hashtag)
    }

    public existeHashtag(hashtag: string): boolean {
        return this._hashtags.includes(hashtag)
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