using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.DependencyInjection;
using SmallApp.Models;

namespace SmallApp
{
    public class Startup
    {
        private const string SPA_STATIC_FILES_ROOT_PATH = "ClientApp/dist";
        private const string ENDPOINTS_NAME = "default";
        private const string ENDPOINTS_PATTERN = "{controller}/{action=Index}/{id?}";
        private const string CACHE_HEADER_KEY = "Cache-Control";
        private const string CACHE_HEADER_VALUE = "no-cache";
        private const string CONNECTION_STRING = "Server=(localdb)\\mssqllocaldb;Database=productsdb;Trusted_Connection=True;";
        //private const string test = "Data Source=(localdb)\\MSSQLLocalDB;Integrated Security=True;Connect Timeout=30;Encrypt=False;TrustServerCertificate=False;ApplicationIntent=ReadWrite;MultiSubnetFailover=False";

        public void ConfigureServices(IServiceCollection services)
        {
            services.AddDbContext<ApplicationContext>(options => options.UseSqlServer(CONNECTION_STRING));
            services.AddControllers();
            services.AddSpaStaticFiles(configuration => configuration.RootPath = SPA_STATIC_FILES_ROOT_PATH);
        }

        public void Configure(IApplicationBuilder app, IWebHostEnvironment _)
        {
            app.UseSpaStaticFiles();
            app.UseStaticFiles()
                .UseRouting()
                .UseEndpoints(endpoints => endpoints.MapControllerRoute(name: ENDPOINTS_NAME, pattern: ENDPOINTS_PATTERN))
                .Use(async (context, next) =>
                {
                    context.Response.Headers.Add(CACHE_HEADER_KEY, CACHE_HEADER_VALUE);
                    await next();
                })
                .UseSpa(_ => { });
        }
    }
}