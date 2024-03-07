using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace projeto_vendas.Models
{
    public class TipoDePagamento
    {
        [Key]
        public int TipoDePagamentoId {get; set;}
        [Display(Name = "Pagador")]
        public string? NomeDoCobrado {get; set;}
        [Display(Name = "Informacoes Adicionais")]
        public string? InformacoesAdicionais {get; set;}

        public TipoDePagamento()
        {
        }

        public TipoDePagamento(string nomeDoCobrado, string informacoesAdicionais)
        {
            NomeDoCobrado = nomeDoCobrado;
            InformacoesAdicionais = informacoesAdicionais;
        }
    }
}