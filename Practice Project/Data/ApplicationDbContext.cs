using Microsoft.EntityFrameworkCore;
using Practice_Project.Models;

namespace Practice_Project.Data
{
    public class ApplicationDbContext : DbContext
    {
        public ApplicationDbContext(DbContextOptions<ApplicationDbContext> options) : base(options)
        {
        }

        public DbSet<Car> Car { get; set; }
        public DbSet<Manufactor> Manufactor { get; set; }
    }
}
