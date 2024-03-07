import { Postagem } from "./postagem"

export class Perfil {
    private _id: number
    private _user: string
    private _email: string
    private _postagens: Postagem[] = []
    private _bloqueados: Perfil[] = []
    private _seguidores: Perfil[] = []
    private _senha: string = ''
    private _seguidos: Perfil[] = []

    constructor(id: number, user: string, email: string, senha: string) { //adicionei os bloqueados
        this._id = id
        this._user = user
        this._email = email
        this._senha = senha
    }

    public bloquear(perfilBloqueado: Perfil) {
        this._bloqueados.push(perfilBloqueado)
    }
   
    public seguir(perfilSeguido: Perfil) {
        perfilSeguido.seguidores.push(this)
        this._seguidos.push(perfilSeguido)
    }

     public removerSeguidor(seguidorRemovido: Perfil) {
         for (let seguidor of this._seguidores) {
             if (seguidorRemovido.id == seguidor._id) {
                 let indiceRemovido: number = this._seguidores.indexOf(seguidor)
                 this._seguidores.splice(indiceRemovido, 1)
             }
         }
     }

    public desseguir(desseguindo: Perfil): void {
        for (let seguidor of this._seguidores) {
            if (desseguindo.id == seguidor._id) {
                let indiceRemovido: number = this._seguidores.indexOf(seguidor)
                this._seguidores.splice(indiceRemovido, 1)
            }
        }
    }

    public desbloquear(desbloqueado: Perfil): void {
        for (let bloqueado of this._bloqueados) {
            if (desbloqueado.id == bloqueado._id) {
                let indiceRemovido: number = this._bloqueados.indexOf(bloqueado)
                this._bloqueados.splice(indiceRemovido, 1)
            }
        }
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

    public get bloqueados() : Perfil[] {
        return this._bloqueados
    }

    public get seguidores() : Perfil[] {
        return this._seguidores
    }

     public get seguidos() : Perfil[] {
         return this._seguidos
    }

    public get senha() : string {
        return this._senha
    }
}
