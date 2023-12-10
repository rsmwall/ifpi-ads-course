using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace projeto_vendas.Models
{
    public class PagamentoComCheque : TipoDePagamento
    {
        public int? Banco {get; set;}
        [Display(Name = "Nome do Banco")]
        public string? NomeDoBanco {get; set;}
        
        public PagamentoComCheque() : base()
        {
        }

        public PagamentoComCheque(int Banco, string NomeDoBanco, string nomeDoCobrado, string informacoesAdicionais) 
        : base(nomeDoCobrado, informacoesAdicionais)
        {
            this.Banco = Banco;
            this.NomeDoBanco = NomeDoBanco;
        }
    }
}