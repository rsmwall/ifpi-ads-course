import { Perfil } from "./perfil";
import { RepositorioDePerfis } from "./repositorio-perfis";
import { RepositorioDePostagens } from "./repositorio-postagens";

export class RedeSocial {
    private _repoPerfis: RepositorioDePerfis
    private _repoPostagens: RepositorioDePostagens

    constructor(repoPerfis: RepositorioDePerfis, repoPostagens: RepositorioDePostagens) {
        this._repoPerfis = repoPerfis
        this._repoPostagens = repoPostagens
    }

    public incluirPerfil(perfil: Perfil): void {
        if (perfil.id != undefined && perfil.user != undefined && perfil.email != undefined && !this._repoPerfis.consultar(perfil.id, perfil.user, perfil.email)) {
            this._repoPerfis.incluir(perfil)
        }
    }   

    public consultarPerfil(perfil: Perfil): Perfil {
        return perfil
    }

    public get repoPerfis() : RepositorioDePerfis {
        return this._repoPerfis
    }
    
    public get repoPostagens() : RepositorioDePostagens {
        return this._repoPostagens
    }
    
}