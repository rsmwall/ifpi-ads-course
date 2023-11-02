import { Perfil } from "./perfil";

export class RepositorioDePerfis {
    private _perfis: Perfil[]

    constructor(perfis: Perfil[]) {
        this._perfis = perfis
    }

    public incluir(perfil: Perfil): void {
        this._perfis.push(perfil)
    }

    public consultar(id: number = 0, user: string = "", email: string = ""): Perfil | null {
        const perfilEncontrado = this._perfis.find((perfil) => {
            return (id != 0 && perfil.id == id) ||
                   (user != "" && perfil.user == user) ||
                   (email != "" && perfil.email == email)
        })

        return perfilEncontrado || null
    }
    
    public get perfis() : Perfil[] {
        return this._perfis
    }
    
}