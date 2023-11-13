import { Perfil } from "./perfil"

export class RepositorioDePerfis {
    private _perfis: Perfil[] = []

    public incluir(perfil: Perfil): void {
        this._perfis.push(perfil)
    }

    public consultar(id?: number, user?: string, email?: string, senha?: string): Perfil | null {
        const perfilEncontrado = this._perfis.find((perfil) => {
            return (id != undefined && perfil.id == id) ||
                   (user != undefined && perfil.user == user) ||
                   (email != undefined && perfil.email == email) ||
                   (senha != undefined && perfil.senha == senha)
        })

        return perfilEncontrado || null
    }
    
    public get perfis() : Perfil[] {
        return this._perfis
    }
    
}
