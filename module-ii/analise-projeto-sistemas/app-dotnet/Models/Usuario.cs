using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using System.ComponentModel.DataAnnotations;


namespace app_dotnet.Models
{
    public class Usuario
    {
        [Display(Name = "Código")]
		public int Id { get; set; }
		[Display(Name = "Nome")]
		public string Nome { get; set; }
		[RegularExpression(@"^([\w\.\-]+)@([\w\-]+)((\.(\w){2,3})+)$")]
		public string Login { get; set; }
		[Display(Name = "Senha")]
		public string Password { get; set; }
    }
}