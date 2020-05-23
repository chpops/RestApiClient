using Microsoft.AspNetCore.Hosting;
using Microsoft.Extensions.Hosting;

namespace SmallApp
{
  public class Program
    {
        public static void Main(string[] args)
        {
            // Добавляем RabbitMQ
            //var factory = new ConnectionFactory
            //{
            //    HostName = "localhost",
            //    Port = 5672,
            //    UserName = "root",
            //    Password = "root"
            //};

            //using (var connection = factory.CreateConnection())
            //using (var model = connection.CreateModel())
            //{
            //    model.QueueDeclare("test-queue", durable: true, exclusive: false, autoDelete: false);

            //    var consumer = new EventingBasicConsumer(model);

            //    consumer.Received += (eventModel, args) =>
            //    {
            //        var message = Encoding.UTF8.GetString(args.Body);
            //        Console.WriteLine(message);
            //    };

            //    model.BasicConsume(queue: "test-queue", autoAck: true, consumer);

            //    Console.Read();
            //}

            CreateHostBuilder(args).Build().Run();
        }

        public static IHostBuilder CreateHostBuilder(string[] args) =>
            Host.CreateDefaultBuilder(args)
                .ConfigureWebHostDefaults(webBuilder =>
                {
                    webBuilder.UseStartup<Startup>();
                });
    }
}