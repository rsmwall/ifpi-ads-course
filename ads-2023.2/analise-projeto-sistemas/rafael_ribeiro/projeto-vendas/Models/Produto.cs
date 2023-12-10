using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace projeto_vendas.Models
{
    public class Produto
    {
        [Key]
        public int ProdutoId {get; set;}
        public string? Nome {get; set;}
        public string? Descricao {get; set;}
        public int? Quantidade {get; set;}
        public double? Preco {get; set;}

        public Produto()
        {
        }

        public Produto(string nome, string descricao, int quantidade, double preco)
        {
            Nome = nome;
            Descricao = descricao;
            Quantidade = quantidade;
            Preco = preco;
        }
    }
}