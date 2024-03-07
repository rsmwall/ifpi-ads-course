using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace app_dotnet.Models
{
    public class Professor : Pessoa
    {
        public string Formacao {get; set;}
        public double Salario {get; set;}
    }
}