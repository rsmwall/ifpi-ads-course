using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace projeto_vendas.Models
{
    public class Item
    {
        [Key]
        public int ItemId {get; set;}
        public double? Preco {get; set;}
        public int? Percentual {get; set;}
        public int? Quantidade {get; set;}

        public Item()
        {
        }

        public Item(double preco, int percentual, int quantidade)
        {
            Preco = preco;
            Percentual = percentual;
            Quantidade = quantidade;
        }
    }
}