import { Postagem } from "./postagem"
import { Perfil } from "./perfil"

export class PostagemAvancada extends Postagem{
    private _hashtags: string[] = []
    private _visualizacoesRestantes: number

    constructor(
        id: number, texto: string, curtidas: number, descurtidas: number, 
        data: Date, perfil: Perfil, visualizacoesRestantes: number
    ) {
        super(id, texto, curtidas, descurtidas, data, perfil)
        this._visualizacoesRestantes = visualizacoesRestantes
    }

    public adicionarHashtags(...hashtag: string[]): void {
        for (let hash of hashtag) {
            this._hashtags.push(hash)
        }
    }

    public existeHashtag(hashtag: string): boolean {
        return this._hashtags.includes(hashtag)
    }

    public decrementarVisualizacoes(): void {
        if (this._visualizacoesRestantes > 0) {
            this._visualizacoesRestantes--
        }
    }
    
    public get hashtags() : string[] {
        return this._hashtags
    }
    
    public get visualizacoesRestantes() : number {
        return this._visualizacoesRestantes
    }
    
}
