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

    public logar(user: string, senha: string): Perfil | null {
        const perfilLogado = this._perfis.find((perfil) => {
            return (perfil.user == user) && (perfil.senha == senha)
        })

        return perfilLogado || null
    }
    
    public get perfis() : Perfil[] {
        return this._perfis
    }
    
    public set perfis(perfis: Perfil[]) {
        this._perfis = perfis
    }
}
