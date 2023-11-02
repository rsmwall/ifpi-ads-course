import { Postagem } from "./postagem";

export class Perfil {
    private _id: number
    private _user: string // alterado nome para user (usuario)
    private _email: string
    private _postagens: Postagem[]

    constructor(id: number, user: string, email: string, postagens: Postagem[]) {
        this._id = id
        this._user = user
        this._email = email
        this._postagens = postagens
    }
    
    public get id() : number {
        return this._id
    }
    
    public get user() : string {
        return this._user
    }
    
    public get email() : string {
        return this._email
    }
    
    public get postagens() : Postagem[] {
        return this._postagens
    }
    
}
