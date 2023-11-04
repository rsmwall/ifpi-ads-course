import { Postagem } from "./postagem"
import { Perfil } from "./perfil"
import { PostagemAvancada } from "./postagem-avancada"

export class RepositorioDePostagens {
    private _postagens: Postagem[]

    constructor(postagens: Postagem[]) {
        this._postagens = postagens
    }

    public incluir(postagem: Postagem): void {
        this._postagens.push(postagem)
        if (postagem.perfil) {
            postagem.perfil.postagens.push(postagem)
        }
    }

    public consultar(id: number = 0, texto: string = "", hashtag: string = "", perfil: Perfil | null = null): Postagem[] {
        const postagensFiltradas = this._postagens.filter((postagem) => {
            return (id != 0 && postagem.id == id) ||
                   (texto != "" && postagem.texto.includes(texto)) ||
                   (perfil != null && postagem.perfil == perfil)
        })

        if (hashtag != "") {
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
    
}
