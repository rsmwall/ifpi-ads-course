import { AplicacaoError, BloquearError } from "./error"
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

    // alterado
    public bloquear(perfilBloqueado: Perfil) {
        const perfilAchado = this._bloqueados.find((perfil) => {
            return (perfil == perfilBloqueado)
        })

        if (!perfilAchado) {
            this._bloqueados.push(perfilBloqueado)
        } else {
            throw new BloquearError("Peril ja bloqueado");
            
        }
    }
   
    // alterado
    public seguir(perfilSeguido: Perfil) {
        const perfilAchado = this._seguidos.find((perfil) => {
            return (perfil == perfilSeguido)
        })

        if (!perfilAchado) {
            perfilSeguido.seguidores.push(this)
            this._seguidos.push(perfilSeguido)
        } else {
            throw new BloquearError("Peril ja seguido");
            
        }
    }

    //alterado
     public removerSeguidor(seguidorRemovido: Perfil) {
        let indiceRemovido: number = -1
        
        for (let seguidor of this._seguidores) {
            if (seguidorRemovido.id == seguidor._id) {
                indiceRemovido = this._seguidores.indexOf(seguidor)
            }
        }

        if (indiceRemovido != -1) {
        this._seguidores.splice(indiceRemovido, 1)
        } else {
            throw new AplicacaoError("Voce nao segue essa pessoa!")
        }    
    }

    public desseguir(desseguindo: Perfil): void {
        let verificacao: boolean = false
        let seguidoEncontrado: Perfil = new Perfil(0, '', '', '')
        for (let seguido of this._seguidos) {
            if (desseguindo.id == seguido._id) {
                verificacao = true
                seguidoEncontrado = seguido
                break
            }
        }

        if (verificacao) {
            let indiceRemovido: number = this._seguidores.indexOf(seguidoEncontrado)
            this._seguidos.splice(indiceRemovido, 1)
        } else {
            throw new Error("Voce nao esta seguindo esse perfil")
        }
    }

    public desbloquear(desbloqueado: Perfil): void {
        let verificacao: boolean = false
        let bloqueadoEncontrado: Perfil = new Perfil(0, '', '', '')
        for (let bloqueado of this._bloqueados) {
            if (desbloqueado.id == bloqueado._id) {
                verificacao = true
                bloqueadoEncontrado = bloqueado
                break
            }
        }

        if (verificacao) {
            let indiceRemovido: number = this._bloqueados.indexOf(bloqueadoEncontrado)
            this._bloqueados.splice(indiceRemovido, 1)
        } else {
            throw new Error("Este perfil nao esta bloqueado")   
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