import { log } from "console"
import { Perfil } from "./classes/perfil"
import { Postagem } from "./classes/postagem"
import { PostagemAvancada } from "./classes/postagem-avancada"
import { RedeSocial } from "./classes/rede-social"
import { RepositorioDePerfis } from "./classes/repositorio-perfis"
import { RepositorioDePostagens } from "./classes/repositorio-postagens"
import prompt from 'prompt-sync'

let input = prompt()
let idGlobal: number = 1

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
        do {
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

            if (opcao == 1) {
                this.feed()
            } else if (opcao == 2) {
                this.cadastrarPerfil()
            } else if (opcao == 3) {
                this.consultarPerfil()
            } else if (opcao == 4) {
                this.criarPostagem
            }
        } while (opcao != 0)
        console.log("Aplicação encerrada")
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
                                        ❖ CRIAR POSTAGEM ❖
                                            
        ──────────────────────────────────────────────────────────────────────────────────────\n`)
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
                                        ❖ CADASTRAR PERFIL ❖
                                            
        ──────────────────────────────────────────────────────────────────────────────────────\n`)

        let user: string = input("      User: ")
        let email: string = input("      E-mail: ")
        let id = idGlobal
        idGlobal++
        if (redeSocial.incluirPerfil(new Perfil(id, user, email))) {
            console.log("Perfil cadastrado com sucesso!")
        } else {
            console.log("ERRO! Perfil existente, ou falha no cadastro.")
        }

        input("\nPressione Enter para retornar ao menu...")
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
                                        ❖ CONSULTAR PERFIL ❖
                                            
        ──────────────────────────────────────────────────────────────────────────────────────\n`)

        console.log("       Preencha os que quiser.\n")
        let id: number = +input("      Id: ")
        let user: string = input("      User: ")
        let email: string = input("      E-mail: ")

        let perfil: Perfil | null = redeSocial.consultarPerfil(id, user, email)

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
                                            ❖ FEED ❖
                                            
        ──────────────────────────────────────────────────────────────────────────────────────`)

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
                console.log(`\n           \x1b[94m${hashtags}\x1b[0m`)
                this._redeSocial.decrementarVisualizacoes(post)
            }

            console.log(`
            ▲ ${post.curtidas}    ▼ ${post.descurtidas}\n
        ──────────────────────────────────────────────────────────────────────────────────────`)
        }       

        input("\nPressione Enter para retornar ao menu...")
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
let novoPerfil: Perfil = new Perfil(1, 'abc', 'amongus@gmail.com')
let novaPostagem: Postagem = new Postagem(1, 'Rafael feio', 69, 0, new Date(), novoPerfil)
let novaPostagem2: PostagemAvancada = new PostagemAvancada(2, "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.", 5, 10, new Date(), novoPerfil, 100)
redeSocial.incluirPostagem(novaPostagem)
redeSocial.incluirPostagem(novaPostagem2)
novaPostagem2.adicionarHashtags("lorem", "ipsum", "adveniat")
app.menu()