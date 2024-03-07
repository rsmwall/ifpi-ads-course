using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace projeto_vendas.Models
{
    public class PagamentoComCartao : TipoDePagamento
    {
        [Display(Name = "Numero do Cartao")]
        public string? NumeroDoCartao {get; set;}
        public string? Bandeira {get; set;}

        public PagamentoComCartao() : base()
        {
        }

        public PagamentoComCartao(string numeroDoCartao, string bandeira, string nomeDoCobrado, string informacoesAdicionais) 
        : base(nomeDoCobrado, informacoesAdicionais)
        {
            NumeroDoCartao = numeroDoCartao;
            Bandeira = bandeira;
        }
    }
}