using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;

using System.Linq;
using System.Threading.Tasks;

namespace projeto_vendas.Models
{
    public class Pagamento
    {
        [Key]
        public int PagamentoId {get; set;}
        [Display(Name = "Data Limite")]
        public DateTime? DataLimite {get; set;}
        public double? Valor {get; set;}
        public Boolean? Pago {get; set;}

        public Pagamento()
        {
        }

        public Pagamento(DateTime dataLimite, double valor, Boolean pago)
        {
            DataLimite = dataLimite;
            Valor = valor;
            Pago = pago;
        }
    }
}