import { Banco } from "./q03-ate-q15/banco"
import { Conta } from "./q03-ate-q15/conta"

// QUESTAO 05
let banco: Banco = new Banco()
banco.inserir(new Conta("1", 200))
banco.inserir(new Conta("2", 300))
banco.transferir("1", "2", 500)

// - a excecao parece atingir todos os metodos que utilizam o metodo sacar de conta,
// baseando-se nisso, parece ser confiavel, ja que ate nas instancias mais altas o erro permanece