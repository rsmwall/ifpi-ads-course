import { Conta } from "./q03-07-08-09-10-11-12-13-14/conta"

// QUESTAO 04
let conta: Conta = new Conta("111", 200)
let conta2: Conta = new Conta("222", 300)
conta.transferir(conta2, 300)

// - como transferir primeiro saca da conta de origem, o throw impede que a operacao ocorra