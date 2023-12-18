using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace projeto_vendas.Models
{
    public class NotaDeVenda
    {
        [Key]
        public int NotaDeVendaId {get; set;}
        public DateTime? Data {get; set;}
        public Boolean? Tipo {get; set;}

        public NotaDeVenda()
        {
        }

        public NotaDeVenda(DateTime data, Boolean tipo)
        {
            Data = data;
            Tipo = tipo;
        }

        public Boolean Cancelar()
        {
            return true;
        }

        public Boolean Devolver()
        {
            return true;
        }
    }
}