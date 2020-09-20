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
    //public DbSet<AccountData> AccountDatas { get; set; }
  }
}