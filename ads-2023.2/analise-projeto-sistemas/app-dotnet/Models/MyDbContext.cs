using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;

namespace app_dotnet.Models
{
    public class MyDbContext : DbContext
    {
        public MyDbContext(DbContextOptions<MyDbContext> options) : base(options)
        {
        }

        public DbSet<Usuario> Usuario {get; set;}
        public DbSet<Pessoa> Pessoa {get; set;}    
        public DbSet<Professor> Professor {get; set;}    
        public DbSet<Turma> Turma {get; set;}    
    }
}