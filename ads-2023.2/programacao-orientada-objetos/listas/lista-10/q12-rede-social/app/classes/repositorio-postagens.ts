import { Postagem } from "./postagem"
import { Perfil } from "./perfil"
import { PostagemAvancada } from "./postagem-avancada"

export class RepositorioDePostagens {
    private _postagens: Postagem[] = []
    private _hashtags: string[] = []

    public incluir(postagem: Postagem): void {
        this._postagens.push(postagem)
        if (postagem.perfil) {
            postagem.perfil.postagens.push(postagem)
        }
    }

    public consultar(id?: number, texto?: string, hashtag?: string, perfil: Perfil | null = null): Postagem[] {
        const postagensFiltradas = this._postagens.filter((postagem) => {
            return (id != undefined && postagem.id == id) ||
                   (texto != undefined && postagem.texto.includes(texto)) ||
                   (perfil != null && postagem.perfil == perfil)
        })

        if (hashtag != undefined) {
            const postagensComHashtag = postagensFiltradas.filter((postagem) => {
                return postagem instanceof PostagemAvancada && postagem.hashtags.includes(hashtag)
            })

            return postagensComHashtag
        }

        return postagensFiltradas
    }
    
    public get postagens() : Postagem[] {
        return this._postagens
    }

    public set postagens(postagens: Postagem[]) {
        this._postagens = postagens
    }

    public get hashtags() : string[] {
        return this._hashtags
    }

    public set hashtags(hashtags: string[]) {
        this._hashtags = hashtags
    }
    
}
