class Perfil {
    constructor(private _id: number, private _nome: string, private _email: string){}

    get id() {
        return this._id
    }
    get nome() {
        return this._nome
    }
    get email() {
        return this._email
    }

}

class Postagem {
    constructor(private _id: number, private _texto: string, private _curtidas: number, private _descurtidas: number,
                private _data: Date, private _perfil: Perfil){}

    get id() {
        return this._id
    }
    get texto() {
        return this._texto
    }
    get curtidas() {
        return this._curtidas
    }
    get descurtidas() {
        return this._descurtidas
    }
    get data() {
        return this._data
    }
    get perfil() {
        return this._perfil
    }

    public curtir(): void {
        this._curtidas++
    }

    public descurtir(): void {
        this._descurtidas++
    }

    public ehPopular(): boolean {
        if ((this._curtidas / 3) == (this._descurtidas / 2)){
            return true
        }
        return false
    }
}

class PostagemAvancada extends Postagem {
    constructor(_id: number, _texto: string, _curtidas: number, _descurtidas: number,
                _data: Date, perfil: Perfil, private _hashtags: string[], private _visualizacoesRestantes: number){
    super(_id, _texto, _curtidas, _descurtidas, _data, perfil)}
                
    get hashtags() {
        return this._hashtags
    }
    get visualizacoesRestantes() {
        return this._visualizacoesRestantes
    }

    public adicionarHashtag(hashtag: string): void {
        this._hashtags.push(hashtag)
    }

    public existeHashtag(hashtag: string): boolean {
        for (let i = 0; i < this._hashtags.length; i++) {
            if (hashtag == this._hashtags[i]){
                return true
            }
            
        }
        return false
    }

    public decrementarVisualizacoes(): void {
       this._visualizacoesRestantes--
    }
}

class RepositorioDePerfis {
    constructor(private _perfis: Perfil[]){}

    get perfis(){
        return this._perfis
    }

    public incluir(perfil: Perfil): void {
        this._perfis.push(perfil)
    }

    public consultar(nome: string, email?: string, id?: number): Perfil{
        let perfil!: Perfil;
        for (let i = 0; i < this._perfis.length; i++) {
            if (this._perfis[i].nome == nome || this._perfis[i].id == id || this._perfis[i].email == email){
                perfil = this._perfis[i]
            }
        }
        return perfil
    }
}

class RepositorioDePostagens {
    constructor(private _postagens: Postagem[]){}

    get postagens() {
        return this._postagens
    }

    public incluir(postagem: Postagem): void {
        this._postagens.push(postagem)
    }
    public consultar(texto: string, hashtag?: string, perfil?: Perfil, id?: number): Postagem[]{
        let perfis!: Perfil[];
        let postagens!: Postagem[];
        for (let i = 0; i < this._postagens.length; i++) {
            if (this._postagens[i].texto == texto || this._postagens[i].id == id || this._postagens[i].perfil == perfil){
                if (this._postagens[i] instanceof PostagemAvancada){
                    if ((<PostagemAvancada> this._postagens[i]).hashtags[i] == hashtag){
                        postagens.push(this._postagens[i])
                    }
                }
            }
        }
        return postagens
    }
}

class RedeSocial {
    constructor(private _repositorioPerfis: RepositorioDePerfis, private _repositorioPostagens: RepositorioDePostagens){}

    public incluirPerfil(perfil: Perfil): void {
        if (perfil.nome != null && perfil.id != null && perfil.email != null){
            for (let i = 0; i < this._repositorioPerfis.perfis.length; i++) {
                if (this._repositorioPerfis[i].nome != perfil.nome && this._repositorioPerfis[i].id != perfil.id && this._repositorioPerfis[i].email != perfil.email){
                    this._repositorioPerfis.incluir(perfil)
                }
            }
        }
    }

    public consultarPerfil(nome: string, email?: string, id?: number): void {
        this._repositorioPerfis.consultar(nome, email, id)
    }

    public incluirPostagem(postagem: Postagem){
        if (postagem.texto != null && postagem.id != null && postagem.perfil != null){
            for (let i = 0; i < this._repositorioPostagens.postagens.length; i++) {
                if (this._repositorioPostagens.postagens[i].id != postagem.id){
                    this._repositorioPostagens.incluir(postagem)
                }
                
            }
        }
    }
}