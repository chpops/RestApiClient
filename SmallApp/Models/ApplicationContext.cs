using Microsoft.EntityFrameworkCore;

namespace SmallApp.Models
{
  public class ApplicationContext : DbContext
  {
      public ApplicationContext(DbContextOptions<ApplicationContext> options)
          : base(options)
      {
      Database.EnsureCreated();
    }

    public DbSet<Car> Cars { get; set; }
    public DbSet<CarCategory> Categories { get; set; }
    public DbSet<Country> Countries { get; set; }

    //protected override void OnModelCreating(ModelBuilder modelBuilder)
    //{
    //  modelBuilder.Entity<Car>()
    //  .Map(m =>
    //  {
    //    m.MapInheritedProperties();
    //    m.ToTable("Cars");
    //  });
    //  modelBuilder.Entity<CarCategory>().Map(m =>
    //  {
    //    m.MapInheritedProperties();
    //    m.ToTable("Categories");
    //  });
    //  modelBuilder.Entity<Country>().Map(m =>
    //  {
    //    m.MapInheritedProperties();
    //    m.ToTable("CountrySupplier");
    //  });
    //}
  }
}