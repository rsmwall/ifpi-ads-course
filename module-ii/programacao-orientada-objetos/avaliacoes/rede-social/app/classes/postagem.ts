import { Perfil } from "./perfil"

export class Postagem {
    private _id: number
    private _texto: string
    private _curtidas: number
    private _descurtidas: number
    private _data: Date
    private _perfil: Perfil

    constructor(id: number, texto: string, curtidas: number, descurtidas: number, data: Date, perfil: Perfil) {
        this._id = id
        this._texto = texto
        this._curtidas = curtidas
        this._descurtidas = descurtidas
        this._data = data
        this._perfil = perfil
    }

    public ehPopular(): boolean {
        // verifica se o numero de curtidas eh 50% maior que o numero de descurtidas
        return this._curtidas >= (this._descurtidas * 1.5)
    }

    public get id() : number {
        return this._id
    }
    
    public get texto() : string {
        return this._texto
    }

    public get curtidas() : number {
        return this._curtidas
    }
    
    public get descurtidas() : number {
        return this._descurtidas
    }
    
    public get data() : Date {
        return this._data
    }
    
    public get perfil() : Perfil {
        return this._perfil
    }
    
    public curtir(): void {
        this._curtidas++
    }

    public descurtir(): void {
        this._descurtidas++
    }

}
