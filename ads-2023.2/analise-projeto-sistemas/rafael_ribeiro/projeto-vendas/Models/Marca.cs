using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace projeto_vendas.Models
{
    public class Marca
    {
        [Key]
        public int MarcaId {get; set;}
        public string? Nome {get; set;}
        public string? Descricao {get; set;}

        public Marca()
        {
        }

        public Marca(string nome, string descricao)
        {
            Nome = nome;
            Descricao = descricao;
        }
    }
}