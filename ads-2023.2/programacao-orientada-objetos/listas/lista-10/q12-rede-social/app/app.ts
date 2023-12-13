import { clear, log } from "console"
import { Perfil } from "./classes/perfil"
import { Postagem } from "./classes/postagem"
import { PostagemAvancada } from "./classes/postagem-avancada"
import { RedeSocial } from "./classes/rede-social"
import { RepositorioDePerfis } from "./classes/repositorio-perfis"
import { RepositorioDePostagens } from "./classes/repositorio-postagens"
import prompt from 'prompt-sync'

//import * as fs from 'fs-extra'

let input = prompt()
let idGlobal: number = 1
let idPostGlobal = 1
let perfilLogado: Perfil
let isLogado: boolean = false

const opcoesDeFormato = {
    hour12: true
}

class App {
    private _redeSocial: RedeSocial

    constructor(redeSocial: RedeSocial) {
        this._redeSocial = redeSocial
    }

    public titulo(): void {
        clear()
        console.log(`
            ███████████                ██████            ███████████                    █████     
            ░░███░░░░░███              ███░░███          ░░███░░░░░███                  ░░███      
             ░███    ░███   ██████    ░███ ░░░   ██████   ░███    ░███  ██████   ██████  ░███ █████
             ░██████████   ░░░░░███  ███████    ░░░░░███  ░██████████  ███░░███ ███░░███ ░███░░███ 
             ░███░░░░░███   ███████ ░░░███░      ███████  ░███░░░░░███░███ ░███░███ ░███ ░██████░  
             ░███    ░███  ███░░███   ░███      ███░░███  ░███    ░███░███ ░███░███ ░███ ░███░░███ 
             █████   █████░░████████  █████    ░░████████ ███████████ ░░██████ ░░██████  ████ █████
             ░░░░░   ░░░░░  ░░░░░░░░  ░░░░░      ░░░░░░░░ ░░░░░░░░░░░   ░░░░░░   ░░░░░░  ░░░░ ░░░░░
            \n`)
    }

    public acessarApp(): void {
        //carregar()
        let opcao: number = 0
        this.titulo()
        console.log(`
            ❖ MENU DE OPCOES ❖\n
            1. Login
            2. Cadastrar-se
            
            0. Sair\n`)

            opcao = +input("            Opcao: ")
        
            switch (opcao) {
            case 1:
                this.login()
                break
            case 2:
                this.cadastrarPerfil()
                break
            case 0:
                //salvar()
                break
            default:
                this.acessarApp()
                break
            }  
    }

    public login(): void {
        this.titulo()
        console.log(`
        ❖ LOGIN ❖\n`)
        let user: string = input("          User: ")
        let senha: string = input("          Senha: ")

        let perfil: Perfil | null = this._redeSocial.logar(user, senha)

        if (perfil) {
            perfilLogado = perfil
            isLogado = true

            console.log(`\n          Agora você está logado como o user ${perfilLogado.user}.`)

            input("\n          Pressione Enter para retornar ao menu...")
            this.menu()
        } else {
            console.log("\n          Usuario ou senha incorretos!")

            input("\n          Pressione Enter para retornar ao menu...")
            this.acessarApp()
        }
    }

    public consultar(): void {
        this.titulo()
        console.log(`
        ❖ CONSULTA ❖\n
        
        Use os atalhos para busca:
        
        - Para pesquisar perfis, utilize (@) antes do usuario
        - Para pesquisar postagens por hahstags, utilize (#) antes da hahstag\n`)

        let busca: string = input("          | ")
        do {
            if (/^@/.test(busca)) {
                let user: string = busca.substring(1)
                let perfil: Perfil | null = this._redeSocial.consultarPerfil(undefined, user)
    
                if (perfil) {
                    console.log(`
                Perfil Encontrado:
    
                Id: ${perfil.id}
                User: ${perfil.user}
                E-mail: ${perfil.email}
                    `)
                } else {
                    console.log("\n     Perfil nao encontrado!")
                }
    
                input("\n          Pressione Enter para retornar ao menu...")
                this.menu()
            } else if (/^#/.test(busca)) {
                let hashtag: string = busca.substring(1)
                this.consultarHashtag(hashtag)
                input("\n          Pressione Enter para retornar ao menu...")
                this.menu()
            }
        } while (!busca)
    }

    public menu(): void {
        let opcao: number = 0
        this.titulo()
        console.log(`
            ❖ MENU DE OPCOES ❖\n
            01. Feed
            02. Consultar
            03. Criar Postagem
            04. Exibir Perfis Populares
            05. Exibir Posts Populares

            ❖ PERFIL ❖\n
            06. Bloquear um Perfil
            07. Exibir Perfis Bloqueados
            08. Desbloquear um Perfil
            09. Exibir os Perfis Mais Ativos
            10. Seguir um Perfil
            11. Exibir Seguidores
            12. Exibir Perfis que você Segue
            13: Deixar de Seguir um Perfil

            ❖ RECURSOS SOLICITADOS ❖\n
            14. Consultar Perfil
            15. Consultar Postagem (ID)
            16. Consultar Postagens (Perfil)
            17. Curtir
            18. Descurtir
            19. Exibir Hashtags Populares

            ❖ AVANCADO ❖\n
            0. Sair\n`)

            opcao = +input("Opcao: ")

            switch (opcao) {
                case 1:
                    this.feed()
                    break
                case 2:
                    this.consultar()
                    break
                case 3:
                    this.criarPostagem()
                    break
                case 4:
                    this.exibirPerfisPopulares()
                    break
                case 5:
                    this.exibirPostsPopulares()
                    break
                case 6:
                    this.bloquearPerfil()
                    break
                case 7:
                    this.exibirBloqueados()
                    break
                case 8:
                    this.desbloquearPerfil()
                    break
                case 9:
                    this.exibirPerfisAtivos()
                    break
                case 10:
                    this.seguirPerfil()
                    break
                case 11:
                    this.exibirSeguidores()
                    break
                case 12:
                    this.exibirSeguindo()
                    break
                case 13:
                    this.desseguirPerfil()
                    break
                case 14:
                    this.consultarPerfil()
                    break
                case 15:
                    this.consultarPostId()
                    break
                case 16:
                    this.consultarPorPerfil()
                    break
                case 17:
                    this.curtir()
                    break
                case 18:
                    this.descurtir()
                    break
                case 19:
                    this.exibirHashtagsPopulares()
                    break
                case 0:
                    this.acessarApp()
                    break
                default:
                    this.menu()
                    break
            }
    }

    public exibirPostsPopulares(): void {
        this.titulo()
        console.log(`
        ❖ POSTS POPULARES ❖\n`)

        let postsPopulares: Postagem[] = redeSocial.exibirPostsPopulares(redeSocial.repoPostagens)

        for (let post of postsPopulares) {
            console.log(`
            \x1b[1m@${post.perfil.user}\x1b[0m\n
            ${post.data.toLocaleString('pt-BR', opcoesDeFormato)}\n
            ${this.quebrarTextoEmLinhas(post.texto, 50)}`)
            
            let hashtags: string = ""
            if (post instanceof PostagemAvancada) {
                for (let hash of post.hashtags) {
                    hashtags += "#" + hash + " "
                }
                console.log(`\n            \x1b[94m${hashtags}\x1b[0m`)
                this._redeSocial.decrementarVisualizacoes(post)
            }

            console.log(`
            ▲ ${post.curtidas}    ▼ ${post.descurtidas}\n`)
        }

        input("\nPressione Enter para retornar ao menu...")
        this.menu()

    }

    public consultarHashtag(hash: string): void {
        this.titulo()
        console.log(`
        ❖ CONSULTAR POST POR HASHTAG ❖\n`)
                            
        const postComHashtags = this._redeSocial.repoPostagens.postagens.filter((postagem) => {
            return (postagem instanceof PostagemAvancada) && (postagem.existeHashtag(hash))
        })

        let postagens: Postagem[] = postComHashtags
        for (let i: number = 0; i < postagens.length; i++) {
            let post: Postagem = postagens[i]
            console.log(`
            \x1b[1m@${post.perfil.user}\x1b[0m\n
            ${post.data.toLocaleString('pt-BR', opcoesDeFormato)}\n
            ${this.quebrarTextoEmLinhas(post.texto, 50)}`)
            
            let hashtags: string = ""
            if (post instanceof PostagemAvancada) {
                for (let hash of post.hashtags) {
                    hashtags += "#" + hash + " "
                }
                console.log(`\n            \x1b[94m${hashtags}\x1b[0m`)
                this._redeSocial.decrementarVisualizacoes(post)
            }

            console.log(`
            ▲ ${post.curtidas}    ▼ ${post.descurtidas}\n`)
        }  

        input("\nPressione Enter para retornar ao menu...")
        this.menu()
    }

    public consultarPorPerfil(): void {
        this.titulo()
        console.log(`
        ❖ CONSULTAR POST POR PERFIL ❖\n`)

        let user: string = input("      User: ")
                            
        let perfil: Perfil | null = this._redeSocial.consultarPerfil(undefined, user)

        let postagem: Postagem[] = this._redeSocial.consultarPostagem(undefined, undefined, undefined, perfil)

        let postagens: Postagem[] = postagem
        for (let i: number = 0; i < postagens.length; i++) {
            let post: Postagem = postagens[i]
            console.log(`
            \x1b[1m@${post.perfil.user}\x1b[0m\n
            ${post.data.toLocaleString('pt-BR', opcoesDeFormato)}\n
            ${this.quebrarTextoEmLinhas(post.texto, 50)}`)
            
            let hashtags: string = ""
            if (post instanceof PostagemAvancada) {
                for (let hash of post.hashtags) {
                    hashtags += "#" + hash + " "
                }
                console.log(`\n            \x1b[94m${hashtags}\x1b[0m`)
                this._redeSocial.decrementarVisualizacoes(post)
            }

            console.log(`
            ▲ ${post.curtidas}    ▼ ${post.descurtidas}\n`)
        }  

        input("\nPressione Enter para retornar ao menu...")
        this.menu()
    }
    
    public consultarPostId(): void {
        this.titulo()
        console.log(`
        ❖ CONSULTAR POST POR ID ❖\n`)

        let id: number = +input("      Id: ")

        let postagem: Postagem[] = this._redeSocial.consultarPostagem(id)

        if (postagem[0] != undefined) {
            let post: Postagem = postagem[0]
            console.log(`
            \x1b[1m@${post.perfil.user}\x1b[0m\n
            ${post.data.toLocaleString('pt-BR', opcoesDeFormato)}\n
            ${this.quebrarTextoEmLinhas(post.texto, 50)}`)
            
            let hashtags: string = ""
            if (post instanceof PostagemAvancada) {
                for (let hash of post.hashtags) {
                    hashtags += "#" + hash + " "
                }
                console.log(`\n            \x1b[94m${hashtags}\x1b[0m`)
                this._redeSocial.decrementarVisualizacoes(post)
            }

            console.log(`
            ▲ ${post.curtidas}    ▼ ${post.descurtidas}\n`)
        } else {
            console.log("Postagem inexistente.")
        }

        input("\nPressione Enter para retornar ao menu...")
        this.menu()
    }

    public criarPostagem(): void {
        this.titulo()
        console.log(`
        ❖ CRIAR POSTAGEM ❖\n`)

        let texto: string = input("Conteudo: ")

        let escolha: string = input("Adicionar hashtags (s/n): ")
        let id = idPostGlobal
        idPostGlobal++
        
        if (perfilLogado) {
            if (escolha == 's' || escolha == 'S') {
                let postAvan: PostagemAvancada = new PostagemAvancada(id, texto, 0, 0, new Date(), perfilLogado, 100)
                this._redeSocial.incluirPostagem(postAvan)
                let hashtags: string = input("Digite a(s) hahstags que deseja adicionar (separadas por espaco: ")
                let arrayHashtags: string[] = hashtags.split(" ")
                for (let hash of arrayHashtags) {
                    postAvan.adicionarHashtags(hash)
                }
            } else {
                let post: Postagem = new Postagem(id, texto, 0, 0, new Date(), perfilLogado)
                this._redeSocial.incluirPostagem(post)
            }

            if (this._redeSocial.consultarPostagem(id)) {
                console.log("\nPostagem criada com sucesso!")
            } else {
                console.log("\nERRO! Falha na criacao.")
            }
        } else {
            console.log("\nERRO! Perfil inexistente, ou falha na criacao.")
        }

        input("\nPressione Enter para retornar ao menu...")
        this.menu()
    }

    public cadastrarPerfil(): void {
        this.titulo()
        console.log(`
        ❖ CADASTRAR PERFIL ❖\n`)

        let user: string = input("          User: ")
        let email: string = input("          E-mail: ")
        let senha: string = input("          Senha: ")
        let id = idGlobal

        idGlobal++

        if (this._redeSocial.incluirPerfil(new Perfil(id, user, email, senha))) {
            console.log("\n     Perfil cadastrado com sucesso!")
        } else {
            console.log("\n     ERRO! Perfil existente, ou falha no cadastro.")
        }

        input("\n     Pressione Enter para retornar ao menu...")
        this.acessarApp()
    }

    public consultarPerfil(): void {
        this.titulo()
        console.log(`
        ❖ CONSULTAR PERFIL ❖\n`)

        console.log("       Preencha os que quiser.\n")
        let id: number = +input("      Id: ")
        let user: string = input("      User: ")
        let email: string = input("      E-mail: ")

        let perfil: Perfil | null = this._redeSocial.consultarPerfil(id, user, email)

        if (perfil) {
            console.log(`
        Perfil Encontrado:

        Id: ${perfil.id}
        User: ${perfil.user}
        E-mail: ${perfil.email}
            `)
        } else {
            console.log("\n     Perfil nao encontrado!")
        }

        input("\nPressione Enter para retornar ao menu...")
        this.menu()
    }

    public feed(): void {
        this.titulo()
        console.log(`
        ❖ FEED ❖\n`)

        let postagens: Postagem[] = this._redeSocial.repoPostagens.postagens
        for (let i: number = 0; i < postagens.length; i++) {
            let post: Postagem = postagens[i]
            console.log(`
            \x1b[1m@${post.perfil.user}\x1b[0m\n
            ${post.data.toLocaleString('pt-BR', opcoesDeFormato)}\n
            ${this.quebrarTextoEmLinhas(post.texto, 50)}`)
            
            let hashtags: string = ""
            if (post instanceof PostagemAvancada) {
                for (let hash of post.hashtags) {
                    hashtags += "#" + hash + " "
                }
                console.log(`\n            \x1b[94m${hashtags}\x1b[0m`)
                this._redeSocial.decrementarVisualizacoes(post)
            }

            console.log(`
            ▲ ${post.curtidas}    ▼ ${post.descurtidas}\n`)
        }       

        input("\n       Pressione Enter para retornar ao menu...")
        this.menu()
    }

    public curtir(): void {
        this.titulo()
        console.log(`
        ❖ CURTIR POST ❖\n`)

        let id: number = +input("      Id: ")

        let postagem: Postagem[] = this._redeSocial.consultarPostagem(id)

        if (postagem[0] != null) {
            let post: Postagem = postagem[0]
            this._redeSocial.curtir(post.id)
            console.log('Você curtiu o seguinte post:')
                console.log(`
                \x1b[1m@${post.perfil.user}\x1b[0m\n
                ${post.data.toLocaleString('pt-BR', opcoesDeFormato)}\n
                ${this.quebrarTextoEmLinhas(post.texto, 50)}`)
                
                let hashtags: string = ""
                if (post instanceof PostagemAvancada) {
                    for (let hash of post.hashtags) {
                        hashtags += "#" + hash + " "
                    }
                    console.log(`\n            \x1b[94m${hashtags}\x1b[0m`)
                    this._redeSocial.decrementarVisualizacoes(post)
                }

                console.log(`
                ▲ ${post.curtidas}    ▼ ${post.descurtidas}\n`)
        }  else {
            console.log("Postagem inexistente.")
        }

        input("\nPressione Enter para retornar ao menu...")
        this.menu()
    }

    public descurtir(): void {
        this.titulo()
        console.log(`
        ❖ DESCURTIR POST ❖\n`)
        let id: number = +input("      Id: ")

        let postagem: Postagem[] = this._redeSocial.consultarPostagem(id)

        if (postagem[0] != undefined) {
            let post: Postagem = postagem[0]
            this._redeSocial.descurtir(post.id)
            console.log('Você descurtiu o seguinte post:')
                console.log(`
                \x1b[1m@${post.perfil.user}\x1b[0m\n
                ${post.data.toLocaleString('pt-BR', opcoesDeFormato)}\n
                ${this.quebrarTextoEmLinhas(post.texto, 50)}`)
                
                let hashtags: string = ""
                if (post instanceof PostagemAvancada) {
                    for (let hash of post.hashtags) {
                        hashtags += "#" + hash + " "
                    }
                    console.log(`\n            \x1b[94m${hashtags}\x1b[0m`)
                    this._redeSocial.decrementarVisualizacoes(post)
                }

                console.log(`
                ▲ ${post.curtidas}    ▼ ${post.descurtidas}\n`)
        } else {
            console.log("Postagem inexistente.")
        }

        input("\nPressione Enter para retornar ao menu...")
        this.menu()
    }

    public exibirPerfisPopulares(): void {
        this.titulo()
        console.log(`
        ❖ PERFIS POPULARES ❖\n`)

        let perfisPopulares: Perfil[] = redeSocial.exibirPerfisPopulares(redeSocial.repoPerfis)

        for (let perfil of perfisPopulares) {
            console.log(`ID: ${perfil.id}`)
            console.log(`User: ${perfil.user}`)
        }

        input("\nPressione Enter para retornar ao menu...")
        this.menu()

    }

    public bloquearPerfil(): void {
        this.titulo()
        console.log(`
        ❖ BLOQUEAR PERFIL ❖\n`)

        console.log("       Preencha o usuario do perfil que deseja bloquear.\n")
        let user: string = input("      User: ")

        let perfilBloquear: Perfil | null = this._redeSocial.consultarPerfil(undefined, user)

        if (perfilBloquear) {
            console.log(`
        Perfil Encontrado:

        Id: ${perfilBloquear.id}
        User: ${perfilBloquear.user}
        E-mail: ${perfilBloquear.email}
            `)

        perfilBloquear = <Perfil>perfilBloquear     
        redeSocial.bloquearPerfil(perfilLogado, perfilBloquear.id)

        } else {
            console.log("\n     Perfil nao encontrado!")
        }
        input("\nPressione Enter para retornar ao menu...")
        this.menu()
    }

    public desbloquearPerfil(): void {
        this.titulo()
        console.log(`
        ❖ DESBLOQUEAR PERFIL ❖\n`)
        console.log("       Preencha o usuario do perfil que deseja desbloquear.\n")
        let user: string = input("      User: ")

        let perfilDesbloquear: Perfil | null = this._redeSocial.consultarPerfil(undefined, user)

        if (perfilDesbloquear) {
            console.log(`
        Perfil Encontrado:

        Id: ${perfilDesbloquear.id}
        User: ${perfilDesbloquear.user}
        E-mail: ${perfilDesbloquear.email}
            `)

        perfilDesbloquear = <Perfil>perfilDesbloquear     
        redeSocial.desbloquearPerfil(perfilLogado, perfilDesbloquear.id)

        } else {
            console.log("\n     Perfil nao encontrado!")
        }
        input("\nPressione Enter para retornar ao menu...")
        this.menu()
    }

    public exibirBloqueados(): void {
        this.titulo()
        console.log(`
        ❖ PERFIS BLOQUEADOS ❖\n`)
        for (let bloqueado of perfilLogado.bloqueados) {
            console.log(`
            User Bloqueado: ${bloqueado.user}
                `)
        }

        input("\nPressione Enter para retornar ao menu...")
        this.menu()
    }

    public exibirPerfisAtivos(): void {
        this.titulo()
        console.log(`
        ❖ PERFIS ATIVOS ❖\n`)
        let perfisAtivos: Perfil[] = redeSocial.exibirPerfisAtivos(redeSocial.repoPerfis, redeSocial.repoPostagens)

        for (let perfil of perfisAtivos) {
            console.log(`
            User Ativo: ${perfil.user}
                `)
        }

        input("\nPressione Enter para retornar ao menu...")
        this.menu()
    }

    public seguirPerfil(): void {
        this.titulo()
        console.log(`
        ❖ SEGUIR PERFIL ❖\n`)
        console.log("       Preencha o usuario do perfil que deseja seguir.\n")
        let user: string = input("      User: ")

        let perfilSeguir: Perfil | null = this._redeSocial.consultarPerfil(undefined, user)

        if (perfilSeguir) {
            console.log(`
        Perfil Encontrado:

        Id: ${perfilSeguir.id}
        User: ${perfilSeguir.user}
        E-mail: ${perfilSeguir.email}
            `)

        perfilSeguir = <Perfil>perfilSeguir     
        redeSocial.seguirPerfil(perfilLogado, perfilSeguir.id)

        } else {
            console.log("\n     Perfil nao encontrado!")
        }
        input("\nPressione Enter para retornar ao menu...")
        this.menu()
    }

    public exibirSeguidores(): void {
        this.titulo()
        console.log(`
        ❖ SEGUIDORES ❖\n`)
        for (let seguido of perfilLogado.seguidores) {
            console.log(`
            Seguidor: ${seguido.user}
                `)
        }

        console.log("       Preencha os que quiser para acessar o seguidor.\n")
        let user: string = input("      User: ")

        let perfil: Perfil | null = <Perfil>(this._redeSocial.consultarPerfil(undefined, user))
        let ehSeguidor: boolean = false

        for (let seguidor of perfilLogado.seguidores) {
            if (seguidor.id == perfil.id) {
                ehSeguidor = true
            }
        }

        if (perfil != null && ehSeguidor == true) {
            console.log(`
        Seguidor Encontrado:

        Id: ${perfil.id}
        User: ${perfil.user}
        E-mail: ${perfil.email}
            `)

        let postagensSeguidor = redeSocial.exibirPostagensDoSeguidor(perfil)

        console.log('\nPostagens do Seguidor:')
        for (let postagem of postagensSeguidor) {
            console.log(`
            Postagem: ${postagem.texto}
            User: ${postagem.perfil.user}
            Data: ${postagem.data}`)
            if (postagem instanceof PostagemAvancada) {
                let postagemAvancada = <PostagemAvancada>postagem
                for (let hashtag of postagemAvancada.hashtags) {
                    console.log(`Hashtag: #${hashtag}`)
                }
            }
        }

        } else {
            console.log("\n     Perfil nao encontrado ou nao é um dos seus seguidores!")
        }
        input("\nPressione Enter para retornar ao menu...")
        this.menu()
    }

    public desseguirPerfil(): void {
        this.titulo()
        console.log(`
        ❖ DEIXAR DE SEGUIR PERFIL ❖\n`)
        for (let seguido of perfilLogado.seguidos) {
            console.log(`
            Seguidor: ${seguido.user}
                `)
        }

        console.log("       Preencha o usario do perfil que deseja deixar de seguir.\n")
        let user: string = input("      User: ")

        let perfilDesseguir: Perfil | null = this._redeSocial.consultarPerfil(undefined, user)

        if (perfilDesseguir) {
            console.log(`
        Perfil Encontrado:

        Id: ${perfilDesseguir.id}
        User: ${perfilDesseguir.user}
        E-mail: ${perfilDesseguir.email}
            `)

        perfilDesseguir = <Perfil>perfilDesseguir     
        redeSocial.desseguirPerfil(perfilLogado, perfilDesseguir.id)

        } else {
            console.log("\n     Perfil nao encontrado!")
        }
        input("\nPressione Enter para retornar ao menu...")
        this.menu()
    }

    public exibirSeguindo(): void {
        this.titulo()
        console.log(`
        ❖ PERFIS QUE VOCE SEGUE ❖\n`)
        for (let seguido of perfilLogado.seguidos) {
            console.log(`
            Seguidor: ${seguido.user}
                `)
        }

        console.log("       Preencha o usuario do seu seguido para acessar as postagens.\n")
        let user: string = input("      User: ")

        let perfil: Perfil | null = <Perfil>(this._redeSocial.consultarPerfil(undefined, user))
        let ehSeguido: boolean = false

        for (let seguido of perfilLogado.seguidos) {
            if (seguido.id == perfil.id) {
                ehSeguido = true
            }
        }

        if (perfil != null && ehSeguido == true) {
            console.log(`
        Seguido Encontrado:

        Id: ${perfil.id}
        User: ${perfil.user}
        E-mail: ${perfil.email}
            `)

        let postagensSeguido = redeSocial.exibirPostagensDoSeguidor(perfil)

        console.log('Postagens do Seguido:')
        for (let postagem of postagensSeguido) {
            console.log(`
            Postagem: ${postagem.texto}
            User: ${postagem.perfil.user}
            Data: ${postagem.data}`)
            if (postagem instanceof PostagemAvancada) {
                let postagemAvancada = <PostagemAvancada>postagem
                for (let hashtag of postagemAvancada.hashtags) {
                    console.log(`Hashtag: #${hashtag}`)
                }
            }
        }

        } else {
            console.log("\n     Perfil nao encontrado ou voce nao o segue!")
        }
        input("\nPressione Enter para retornar ao menu...")
        this.menu()
    }

    public quebrarTextoEmLinhas(texto: string, maxCaracteresPorLinha: number): string {
        const palavras = texto.split(' ')
        let linhaAtual = ''
        const linhas = []
      
        for (const palavra of palavras) {
          if (linhaAtual.length + palavra.length + 1 <= maxCaracteresPorLinha) {
            linhaAtual += (linhaAtual.length > 0 ? ' ' : '') + palavra;
          } else {
            linhas.push(linhaAtual);
            linhaAtual = palavra;
          }
        }

        linhas.push(linhaAtual);

        return linhas.join('\n            ');
    }

    public retornarHashtags(): string[] {
        let postagens: Postagem[] = this._redeSocial.repoPostagens.postagens
        let hashtags: string = ""
        for (let i: number = 0; i < postagens.length; i++) {
            let post: Postagem = postagens[i]
            if (post instanceof PostagemAvancada) {
                for (let hash of post.hashtags) {
                    hashtags += hash + " "
                }
            }
        }
        let hashtagsArray: string[] = hashtags.split(" ")
        return hashtagsArray
    }

    get redeSocial(): RedeSocial {
        return this._redeSocial
    }

    public exibirHashtagsPopulares(): void {
        this.titulo()
        console.log(`
        ❖ HASHTAGS POPULARES ❖\n`)
        let hashtags: string[] = this.retornarHashtags()
        let hashtagPopular: string = ""
        let hashtagsPopulares: string[] = []
        let contador: number = 0

        console.log(hashtags)
        

        for (let hash of hashtags) {
            hashtagPopular = hash
            for (let hashtag of hashtags) {
                if (hashtag == hashtagPopular && hashtag != " ") {
                    contador++
                }
            } 

            if (contador >= 5) {
                if (!hashtagsPopulares.includes(hashtagPopular)) {
                    hashtagsPopulares.push(hashtagPopular)
                }
                contador = 0
            }
        }

        for (let hash of hashtagsPopulares) {
            console.log(`#${hash}`)
        }

        input("\nPressione Enter para retornar ao menu...")
        this.menu()
    }
}
let redeSocial: RedeSocial = new RedeSocial(new RepositorioDePerfis, new RepositorioDePostagens)
let app: App = new App(redeSocial)

if (isLogado) {
    app.menu()
} else {
    app.acessarApp()
}

// // Armazenamento
function salvarPerfisTxt(caminhoArquivo: string, perfis: Perfil[]): void {
    const dadosPerfisTxt = perfis.map(perfil => {
        return `${perfil['_id']},${perfil['_user']},${perfil['_email']},${perfil['_senha']}`
    }).join('\n')

    salvarDadosTxt(caminhoArquivo, dadosPerfisTxt)
}

function salvarPostagensTxt(caminhoArquivo: string, postagens: (Postagem | PostagemAvancada)[]): void {
    const dadosPostagensTxt = postagens.map(postagem => {
        if ('_hashtags' in postagem) {
            return `${postagem['_id']},${postagem['_texto']},${postagem['_curtidas']},${postagem['_descurtidas']},${postagem['_data']},${postagem['_perfil']['_user']},${(postagem as PostagemAvancada)['_hashtags'].join(',')},${(postagem as PostagemAvancada)['_visualizacoesRestantes']},PostagemAvancada`;
        } else {
            return `${postagem['_id']},${postagem['_texto']},${postagem['_curtidas']},${postagem['_descurtidas']},${postagem['_data']},${postagem['_perfil']['_user']},Postagem`;
        }
    }).join('\n');

    salvarDadosTxt(caminhoArquivo, dadosPostagensTxt);
}

function salvarDadosTxt(caminhoArquivo: string, dados: string): void {
    try {
        fs.writeFileSync(caminhoArquivo, dados, 'utf-8')
    } catch (erro) {
    }
}

function salvar(): void {
    salvarPerfisTxt('/home/rsmwall/Github/ifpi-ads-course/ads-2023.2/programacao-orientada-objetos/avaliacoes/rede-social/app/docs/perfis.txt', app.redeSocial.repoPerfis.perfis)
    salvarPostagensTxt('/home/rsmwall/Github/ifpi-ads-course/ads-2023.2/programacao-orientada-objetos/avaliacoes/rede-social/app/docs/postagens.txt', app.redeSocial.repoPostagens.postagens)
}

function lerDadosTxt(caminhoArquivo: string): string[] {
    try {
        const dados = fs.readFileSync(caminhoArquivo, 'utf-8')
        return dados.split('\n').map(line => line.trim()).filter(Boolean)
    } catch (erro) {
        return []
    }
}

function carregarPerfis(caminhoArquivo: string): Perfil[] {
    const dadosPerfis = lerDadosTxt(caminhoArquivo)
    const perfis: Perfil[] = []

    for (const linha of dadosPerfis) {
        const [id, user, email, senha] = linha.split(',')
        const perfil = new Perfil(parseInt(id), user, email, senha)
        app.redeSocial.incluirPerfil(perfil)
    }

    return perfis
}

function carregarPostagens(caminhoArquivo: string): (Postagem | PostagemAvancada)[] {
    const dadosPostagens = lerDadosTxt(caminhoArquivo)
    const postagens: (Postagem | PostagemAvancada)[] = []

    for (const linha of dadosPostagens) {
        const [id, texto, curtidas, descurtidas, data, perfilUser, ...resto] = linha.split(',')
        const perfil = new Perfil(0, perfilUser, '', '')
        const postagem = new Postagem(parseInt(id), texto, parseInt(curtidas), parseInt(descurtidas), new Date(data), perfil)

        if (resto.length > 0) {
            const hashtags = resto.slice(0, -1)
            const visualizacoesRestantes = parseInt(resto[resto.length - 1])
            const postagemAvancada = new PostagemAvancada(postagem.id, postagem.texto, postagem.curtidas, postagem.descurtidas, postagem.data, postagem.perfil, visualizacoesRestantes)
            postagemAvancada.hashtags = hashtags
            app.redeSocial.incluirPostagem(postagemAvancada)
        } else {
            app.redeSocial.incluirPostagem(postagem)
        }
    }

    return postagens
}

function carregar(): void {
    carregarPerfis('/home/rsmwall/Github/ifpi-ads-course/ads-2023.2/programacao-orientada-objetos/avaliacoes/rede-social/app/docs/perfis.txt')
    carregarPostagens('/home/rsmwall/Github/ifpi-ads-course/ads-2023.2/programacao-orientada-objetos/avaliacoes/rede-social/app/docs/postagens.txt')
}
