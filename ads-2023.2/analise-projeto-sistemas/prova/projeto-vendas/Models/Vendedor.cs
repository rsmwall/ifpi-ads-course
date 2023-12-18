using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace projeto_vendas.Models
{
    public class Vendedor
    {
        [Key]
        public int VendedorId {get; set;}
        public string? Nome {get; set;}

        public Vendedor()
        {
        }

        public Vendedor(string nome)
        {
            Nome = nome;
        }
    }
}