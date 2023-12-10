using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace projeto_vendas.Models
{
    public class Cliente
    {
        [Key]
        public int ClienteId {get; set;}
        public string? Nome {get; set;}

        public Cliente()
        {
        }

        public Cliente(string nome)
        {
            Nome = nome;
        }
    }
}