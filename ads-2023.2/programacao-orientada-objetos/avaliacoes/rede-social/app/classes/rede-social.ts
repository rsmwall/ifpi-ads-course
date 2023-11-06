import { Perfil } from "./perfil";
import { Postagem } from "./postagem";
import { PostagemAvancada } from "./postagem-avancada";
import { RepositorioDePerfis } from "./repositorio-perfis";
import { RepositorioDePostagens } from "./repositorio-postagens";

export class RedeSocial {
    private _repoPerfis: RepositorioDePerfis
    private _repoPostagens: RepositorioDePostagens

    constructor(repoPerfis: RepositorioDePerfis, repoPostagens: RepositorioDePostagens) {
        this._repoPerfis = repoPerfis
        this._repoPostagens = repoPostagens
    }

    public incluirPerfil(perfil: Perfil): boolean {
        let existe: boolean = false
        for (let i: number = 0; i < this._repoPerfis.perfis.length; i++) {
            if (this._repoPerfis.perfis[i].id == perfil.id) {
                existe = true
            }
        }

        if (!(existe) && perfil.user != undefined && perfil.email != undefined) {
            this._repoPerfis.incluir(perfil)
            return true
        }
        return false
    }   

    public consultarPerfil(id?: number, user?: string, email?: string): Perfil | null {
        return this._repoPerfis.consultar(id, user, email)
    }

    public incluirPostagem(postagem: Postagem): boolean {
        let existe: boolean = false
        for (let i: number = 0; i < this._repoPostagens.postagens.length; i++) {
            if (this.repoPostagens.postagens[i].id == postagem.id) {
                existe = true
            }
        }

        if (!(existe) && postagem.texto != undefined && postagem.perfil != undefined) {
            this._repoPostagens.incluir(postagem)
            return true
        }

        return false
    }

    public consultarPostagem(id?: number, texto?: string, hashtag?: string, perfil: Perfil | null = null): Postagem[] {
        return this._repoPostagens.consultar(id, texto, hashtag, perfil)
    }

    public curtir(idPost: number): void {
        const postagemEncontrada = this._repoPostagens.postagens.find((postagem) => {
            return (postagem.id == idPost)
        })

        if (postagemEncontrada) {
            postagemEncontrada.curtir()
        }
    }

    public descurtir(idPost: number): void {
        const postagemEncontrada = this._repoPostagens.postagens.find((postagem) => {
            return (postagem.id == idPost)
        })

        if (postagemEncontrada) {
            postagemEncontrada.descurtir()
        }
    }

    public decrementarVisualizacoes(post: PostagemAvancada): void {
        post.decrementarVisualizacoes()
    }

    public exibirPostPerfil(id: number): Postagem[] {
        const perfilEncontrado = this._repoPerfis.perfis.find((perfil) => {
            return (perfil.id == id)
        } ) 

        let posts: Postagem[] = []

        if (perfilEncontrado) {
            for (let post of perfilEncontrado.postagens) {
                if (post instanceof PostagemAvancada) {
                    if (post.visualizacoesRestantes > 0) {
                        posts.push(post)
                        post.decrementarVisualizacoes()
                    }
                } else {
                    posts.push(post)
                }
            }
        }

        return posts
    }

    public exibirPostsHashtag(hashtag: string): Postagem[] {
        const postsEncontrados = this._repoPostagens.postagens.filter((post) => {
            return (post instanceof PostagemAvancada) &&
                   (post.existeHashtag(hashtag))
        } ) 

        return postsEncontrados
    }

    public get repoPerfis() : RepositorioDePerfis {
        return this._repoPerfis
    }
    
    public get repoPostagens() : RepositorioDePostagens {
        return this._repoPostagens
    }
    
}
