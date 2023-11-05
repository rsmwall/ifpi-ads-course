import { Perfil } from "./classes/perfil"
import { Postagem } from "./classes/postagem"
import { PostagemAvancada } from "./classes/postagem-avancada"
import { RedeSocial } from "./classes/rede-social"
import { RepositorioDePerfis } from "./classes/repositorio-perfis"
import { RepositorioDePostagens } from "./classes/repositorio-postagens"
import prompt from 'prompt-sync'

let input = prompt()

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
            2. Login
            3. Cadastrar-se
            0. Sair\n`)

            opcao = +input("Opcao: ")

            switch (opcao) {
                case 1:
                    this.feed()
                    break
                case 0:
                    break
            }
            input("Operacao finalizada. Digite <enter>")
        } while (opcao != 0)
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
let novoPerfil: Perfil = new Perfil(1, 'JoãozinGameplays', 'olamundo123', 'amongus@gmail.com')
let novaPostagem: Postagem = new Postagem(1, 'Rafael feio', 69, 0, new Date(), novoPerfil)
let novaPostagem2: PostagemAvancada = new PostagemAvancada(2, "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.", 5, 10, new Date(), novoPerfil, 100)
redeSocial.incluirPostagem(novaPostagem)
redeSocial.incluirPostagem(novaPostagem2)
novaPostagem2.adicionarHashtags("lorem", "ipsum", "adveniat")
app.menu()