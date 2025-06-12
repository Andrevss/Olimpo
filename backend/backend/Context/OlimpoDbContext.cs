using System.Security.Cryptography.X509Certificates;
using backend.Models;
using Microsoft.EntityFrameworkCore;

namespace backend.Context
{
    public class OlimpoDbContext : DbContext
    {
        public OlimpoDbContext(DbContextOptions<OlimpoDbContext> options) : base(options)
        {
        }

        public DbSet<User> Users { get; set; }
        public DbSet<Order> Orders { get; set; }
        public DbSet<OrderItem> OrderItems { get; set; }
        public DbSet<Payment> Payments { get; set; }
        public DbSet<Product> Products { get; set; }
        public DbSet<Category> Categories { get; set; }
        public DbSet<Address> Addresses { get; set; }


    }
}