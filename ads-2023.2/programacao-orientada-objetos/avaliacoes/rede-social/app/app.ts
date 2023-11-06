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

const opcoesDeFormato = {
    hour12: true
}

class App {
    private _redeSocial: RedeSocial

    constructor(redeSocial: RedeSocial) {
        this._redeSocial = redeSocial
    }

    public menu(): void {
        let opcao: number = 0
        console.clear()
        console.log(`
            ███████████                ██████            ███████████                    █████     
            ░░███░░░░░███              ███░░███          ░░███░░░░░███                  ░░███      
             ░███    ░███   ██████    ░███ ░░░   ██████   ░███    ░███  ██████   ██████  ░███ █████
             ░██████████   ░░░░░███  ███████    ░░░░░███  ░██████████  ███░░███ ███░░███ ░███░░███ 
             ░███░░░░░███   ███████ ░░░███░      ███████  ░███░░░░░███░███ ░███░███ ░███ ░██████░  
             ░███    ░███  ███░░███   ░███      ███░░███  ░███    ░███░███ ░███░███ ░███ ░███░░███ 
             █████   █████░░████████  █████    ░░████████ ███████████ ░░██████ ░░██████  ████ █████
             ░░░░░   ░░░░░  ░░░░░░░░  ░░░░░      ░░░░░░░░ ░░░░░░░░░░░   ░░░░░░   ░░░░░░  ░░░░ ░░░░░
            \n
            ❖ MENU DE OPCOES ❖\n
            1. Feed
            2. Cadastrar Perfil
            3. Consultar Perfil
            4. Criar Postagem
            5. Consultar Postagem (ID)
            6. Consultar Postagens (Perfil)
            7. Consultar Postagens (Hashtags)
            8. Curtir
            9. Descurtir
            0. Sair\n`)

            opcao = +input("Opcao: ")

            switch (opcao) {
                case 1:
                    this.feed()
                    break
                case 2:
                    this.cadastrarPerfil()
                    break
                case 3:
                    this.consultarPerfil()
                    break
                case 4:
                    this.criarPostagem()
                    break
                case 5:
                    this.consultarPostId()
                case 6:
                    this.consultarPorPerfil()
                case 7:
                    this.consultarHashtag()
                default:
                    break
            }  
        console.log("Aplicação encerrada")
    }

    public consultarHashtag(): void {
        console.clear()
        console.log(`
        ███████████                ██████            ███████████                    █████     
        ░░███░░░░░███              ███░░███          ░░███░░░░░███                  ░░███      
         ░███    ░███   ██████    ░███ ░░░   ██████   ░███    ░███  ██████   ██████  ░███ █████
         ░██████████   ░░░░░███  ███████    ░░░░░███  ░██████████  ███░░███ ███░░███ ░███░░███ 
         ░███░░░░░███   ███████ ░░░███░      ███████  ░███░░░░░███░███ ░███░███ ░███ ░██████░  
         ░███    ░███  ███░░███   ░███      ███░░███  ░███    ░███░███ ░███░███ ░███ ░███░░███ 
         █████   █████░░████████  █████    ░░████████ ███████████ ░░██████ ░░██████  ████ █████
         ░░░░░   ░░░░░  ░░░░░░░░  ░░░░░      ░░░░░░░░ ░░░░░░░░░░░   ░░░░░░   ░░░░░░  ░░░░ ░░░░░
        \n
                                    ❖ CONSULTAR POST POR HASHTAG ❖\n`)

        let hash: string = input("      Hashtag: ")
                            
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
        console.clear()
        console.log(`
        ███████████                ██████            ███████████                    █████     
        ░░███░░░░░███              ███░░███          ░░███░░░░░███                  ░░███      
         ░███    ░███   ██████    ░███ ░░░   ██████   ░███    ░███  ██████   ██████  ░███ █████
         ░██████████   ░░░░░███  ███████    ░░░░░███  ░██████████  ███░░███ ███░░███ ░███░░███ 
         ░███░░░░░███   ███████ ░░░███░      ███████  ░███░░░░░███░███ ░███░███ ░███ ░██████░  
         ░███    ░███  ███░░███   ░███      ███░░███  ░███    ░███░███ ░███░███ ░███ ░███░░███ 
         █████   █████░░████████  █████    ░░████████ ███████████ ░░██████ ░░██████  ████ █████
         ░░░░░   ░░░░░  ░░░░░░░░  ░░░░░      ░░░░░░░░ ░░░░░░░░░░░   ░░░░░░   ░░░░░░  ░░░░ ░░░░░
        \n
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
        console.clear()
        console.log(`
        ███████████                ██████            ███████████                    █████     
        ░░███░░░░░███              ███░░███          ░░███░░░░░███                  ░░███      
         ░███    ░███   ██████    ░███ ░░░   ██████   ░███    ░███  ██████   ██████  ░███ █████
         ░██████████   ░░░░░███  ███████    ░░░░░███  ░██████████  ███░░███ ███░░███ ░███░░███ 
         ░███░░░░░███   ███████ ░░░███░      ███████  ░███░░░░░███░███ ░███░███ ░███ ░██████░  
         ░███    ░███  ███░░███   ░███      ███░░███  ░███    ░███░███ ░███░███ ░███ ░███░░███ 
         █████   █████░░████████  █████    ░░████████ ███████████ ░░██████ ░░██████  ████ █████
         ░░░░░   ░░░░░  ░░░░░░░░  ░░░░░      ░░░░░░░░ ░░░░░░░░░░░   ░░░░░░   ░░░░░░  ░░░░ ░░░░░
        \n
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
        console.clear()
        console.log(`
        ███████████                ██████            ███████████                    █████     
        ░░███░░░░░███              ███░░███          ░░███░░░░░███                  ░░███      
         ░███    ░███   ██████    ░███ ░░░   ██████   ░███    ░███  ██████   ██████  ░███ █████
         ░██████████   ░░░░░███  ███████    ░░░░░███  ░██████████  ███░░███ ███░░███ ░███░░███ 
         ░███░░░░░███   ███████ ░░░███░      ███████  ░███░░░░░███░███ ░███░███ ░███ ░██████░  
         ░███    ░███  ███░░███   ░███      ███░░███  ░███    ░███░███ ░███░███ ░███ ░███░░███ 
         █████   █████░░████████  █████    ░░████████ ███████████ ░░██████ ░░██████  ████ █████
         ░░░░░   ░░░░░  ░░░░░░░░  ░░░░░      ░░░░░░░░ ░░░░░░░░░░░   ░░░░░░   ░░░░░░  ░░░░ ░░░░░
        \n
                                        ❖ CRIAR POSTAGEM ❖\n`)

        let userPerfil: string = input("User: ")
        let perfil: Perfil | null = this._redeSocial.consultarPerfil(undefined, userPerfil)
        let texto: string = input("Conteudo: ")

        let escolha: string = input("Adicionar hashtags (s/n): ")
        let id = idPostGlobal
        idPostGlobal++
        
        if (perfil) {
            if (escolha == 's' || escolha == 'S') {
                let postAvan: PostagemAvancada = new PostagemAvancada(id, texto, 0, 0, new Date(), perfil, 100)
                this._redeSocial.incluirPostagem(postAvan)
                let hashtags: string = input("Digite a(s) hahstags que deseja adicionar (separadas por espaco: ")
                let arrayHashtags: string[] = hashtags.split(" ")
                for (let hash of arrayHashtags) {
                    postAvan.adicionarHashtags(hash)
                }
            } else {
                let post: Postagem = new Postagem(id, texto, 0, 0, new Date(), perfil)
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
        console.clear()
        console.log(`
        ███████████                ██████            ███████████                    █████     
        ░░███░░░░░███              ███░░███          ░░███░░░░░███                  ░░███      
         ░███    ░███   ██████    ░███ ░░░   ██████   ░███    ░███  ██████   ██████  ░███ █████
         ░██████████   ░░░░░███  ███████    ░░░░░███  ░██████████  ███░░███ ███░░███ ░███░░███ 
         ░███░░░░░███   ███████ ░░░███░      ███████  ░███░░░░░███░███ ░███░███ ░███ ░██████░  
         ░███    ░███  ███░░███   ░███      ███░░███  ░███    ░███░███ ░███░███ ░███ ░███░░███ 
         █████   █████░░████████  █████    ░░████████ ███████████ ░░██████ ░░██████  ████ █████
         ░░░░░   ░░░░░  ░░░░░░░░  ░░░░░      ░░░░░░░░ ░░░░░░░░░░░   ░░░░░░   ░░░░░░  ░░░░ ░░░░░
        \n
                                        ❖ CADASTRAR PERFIL ❖\n`)

        let user: string = input("      User: ")
        let email: string = input("      E-mail: ")
        let id = idGlobal
        idGlobal++
        if (this._redeSocial.incluirPerfil(new Perfil(id, user, email))) {
            console.log("\nPerfil cadastrado com sucesso!")
        } else {
            console.log("\nERRO! Perfil existente, ou falha no cadastro.")
        }

        input("\nPressione Enter para retornar ao menu...")
        this.menu()
    }

    public consultarPerfil(): void {
        console.clear()
        console.log(`
        ███████████                ██████            ███████████                    █████     
        ░░███░░░░░███              ███░░███          ░░███░░░░░███                  ░░███      
         ░███    ░███   ██████    ░███ ░░░   ██████   ░███    ░███  ██████   ██████  ░███ █████
         ░██████████   ░░░░░███  ███████    ░░░░░███  ░██████████  ███░░███ ███░░███ ░███░░███ 
         ░███░░░░░███   ███████ ░░░███░      ███████  ░███░░░░░███░███ ░███░███ ░███ ░██████░  
         ░███    ░███  ███░░███   ░███      ███░░███  ░███    ░███░███ ░███░███ ░███ ░███░░███ 
         █████   █████░░████████  █████    ░░████████ ███████████ ░░██████ ░░██████  ████ █████
         ░░░░░   ░░░░░  ░░░░░░░░  ░░░░░      ░░░░░░░░ ░░░░░░░░░░░   ░░░░░░   ░░░░░░  ░░░░ ░░░░░
        \n
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
        console.clear()
        console.log(`
        ███████████                ██████            ███████████                    █████     
        ░░███░░░░░███              ███░░███          ░░███░░░░░███                  ░░███      
         ░███    ░███   ██████    ░███ ░░░   ██████   ░███    ░███  ██████   ██████  ░███ █████
         ░██████████   ░░░░░███  ███████    ░░░░░███  ░██████████  ███░░███ ███░░███ ░███░░███ 
         ░███░░░░░███   ███████ ░░░███░      ███████  ░███░░░░░███░███ ░███░███ ░███ ░██████░  
         ░███    ░███  ███░░███   ░███      ███░░███  ░███    ░███░███ ░███░███ ░███ ░███░░███ 
         █████   █████░░████████  █████    ░░████████ ███████████ ░░██████ ░░██████  ████ █████
         ░░░░░   ░░░░░  ░░░░░░░░  ░░░░░      ░░░░░░░░ ░░░░░░░░░░░   ░░░░░░   ░░░░░░  ░░░░ ░░░░░
        \n
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
app.menu()