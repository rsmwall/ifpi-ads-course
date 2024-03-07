using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace projeto_vendas.Models
{
    public class Transportadora
    {
        [Key]
        public int TransportadoraId {get; set;}
        public string? Nome {get; set;}

        public Transportadora()
        {
        }

        public Transportadora(string nome)
        {
            Nome = nome;
        }
    }
}