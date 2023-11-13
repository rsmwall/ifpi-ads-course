import { clear } from "console"
import { Perfil } from "./classes/perfil"
import { Postagem } from "./classes/postagem"
import { PostagemAvancada } from "./classes/postagem-avancada"
import { RedeSocial } from "./classes/rede-social"
import { RepositorioDePerfis } from "./classes/repositorio-perfis"
import { RepositorioDePostagens } from "./classes/repositorio-postagens"
import prompt from 'prompt-sync'

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
                console.log("            Aplicação encerrada")
                break
            default:
                this.acessarApp()
            }  
    }

    public login(): void {
        this.titulo()
        console.log(`
        ❖ LOGIN ❖\n`)
        let user: string = input("          User: ")
        let senha: string = input("          Senha: ")

        let perfil: Perfil | null = this._redeSocial.consultarPerfil(undefined, user, undefined, senha)

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
        - Para pesquisar postagens por hahstags, utilize (#) antes da hahstag
        - Para pesquisar postagens por conteudo, apenas digite o texto`)

        let busca: string = input("/n          | ")
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
        } else {

        }

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

            ❖ PERFIL ❖\n
            05. Bloquear um Perfil
            06. Exibir Perfis Bloqueados
            07. Desbloquear um Perfil
            08. Exibir os Perfis Mais Ativos
            09. Seguir um Perfil
            10. Exibir Seguidores
            11. Exibir Perfis que você Segue
            12: Deixar de Seguir um Perfil

            ❖ RECURSOS SOLICITADOS ❖\n
            13. Consultar Perfil
            14. Consultar Postagem (ID)
            15. Consultar Postagens (Perfil)
            16. Curtir
            17. Descurtir

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
                    this.bloquearPerfil()
                    break
                case 6:
                    this.exibirBloqueados()
                    break
                case 7:
                    this.desbloquearPerfil()
                    break
                case 8:
                    this.exibirPerfisAtivos()
                    break
                case 9:
                    this.seguirPerfil()
                    break
                case 10:
                    this.exibirSeguidores()
                    break
                case 11:
                    this.exibirSeguindo()
                    break
                case 12:
                    this.desseguirPerfil()
                    break
                case 13:
                    this.consultarPerfil()
                case 14:
                    this.consultarPostId()
                    break
                case 15:
                    this.consultarPorPerfil()
                    break
                case 16:
                    this.curtir()
                    break
                case 17:
                    this.descurtir()
                    break
                case 0:
                    this.acessarApp()
                    break
                default:
                    this.menu()
            }
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

        input("\nPressione Enter para retornar ao menu...")
        this.menu()
    }

    public descurtir(): void {
        this.titulo()
        console.log(`
        ❖ DESCURTIR POST ❖\n`)
        let id: number = +input("      Id: ")

        let postagem: Postagem[] = this._redeSocial.consultarPostagem(id)

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
        for (let seguido of perfilLogado.seguidos) {
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
}
let redeSocial: RedeSocial = new RedeSocial(new RepositorioDePerfis, new RepositorioDePostagens)
let app: App = new App(redeSocial)

if (isLogado) {
    app.menu()
} else {
    app.acessarApp()
}
