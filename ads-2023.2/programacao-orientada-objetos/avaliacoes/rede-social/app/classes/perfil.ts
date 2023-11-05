import { Postagem } from "./postagem"

export class Perfil {
    private _id: number
    private _user: string // alterado nome para user (usuario)
    private _senha: string
    private _email: string
    private _postagens: Postagem[] = []

    constructor(id: number, user: string, senha: string, email: string) {
        this._id = id
        this._user = user
        this._senha = senha
        this._email = email
    }
    
    public get id() : number {
        return this._id
    }
    
    public get user() : string {
        return this._user
    }
    
    public get senha() : string {
        return this._senha
    }
    
    public get email() : string {
        return this._email
    }
    
    public get postagens() : Postagem[] {
        return this._postagens
    }
    
}
